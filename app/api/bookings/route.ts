import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "../../../lib/supabase/server";

const allowedServices = new Set(["基础洗护", "精致美容", "猫咪专护", "皮毛养护"]);

type BookingPayload = {
  petName?: unknown;
  service?: unknown;
  phone?: unknown;
  preferredTime?: unknown;
};

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: BookingPayload;

  try {
    payload = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ error: "请求格式不正确。" }, { status: 400 });
  }

  const petName = cleanText(payload.petName);
  const service = cleanText(payload.service);
  const phone = cleanText(payload.phone);
  const preferredTime = cleanText(payload.preferredTime);
  let preferredTimeValue: string | null = null;

  if (!petName || !service || !phone) {
    return NextResponse.json({ error: "请填写宠物昵称、服务类型和联系方式。" }, { status: 400 });
  }

  if (!allowedServices.has(service)) {
    return NextResponse.json({ error: "请选择有效的服务类型。" }, { status: 400 });
  }

  if (petName.length > 80 || phone.length > 80) {
    return NextResponse.json({ error: "宠物昵称或联系方式过长。" }, { status: 400 });
  }

  if (preferredTime) {
    const preferredDate = new Date(preferredTime);

    if (Number.isNaN(preferredDate.getTime())) {
      return NextResponse.json({ error: "希望到店时间格式不正确。" }, { status: 400 });
    }

    preferredTimeValue = preferredDate.toISOString();
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { error } = await supabase
      .from("bookings")
      .insert({
        pet_name: petName,
        service,
        contact: phone,
        preferred_time: preferredTimeValue,
        source: "website",
      });

    if (error) {
      console.error("Supabase booking insert failed", error);
      return NextResponse.json({ error: "预约提交失败，请稍后再试。" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Booking API configuration error", error);
    return NextResponse.json({ error: "预约系统尚未完成配置。" }, { status: 500 });
  }
}
