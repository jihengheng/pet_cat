"use client";

import { FormEvent, useState } from "react";

const serviceOptions = ["基础洗护", "精致美容", "猫咪专护", "皮毛养护"];

type FormState = {
  petName: string;
  service: string;
  phone: string;
  preferredTime: string;
};

const initialForm: FormState = {
  petName: "",
  service: "",
  phone: "",
  preferredTime: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "预约提交失败，请稍后再试。");
      }

      setForm(initialForm);
      setStatus("success");
      setMessage("预约已提交，护理顾问会尽快联系你确认档期。");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "预约提交失败，请稍后再试。");
    }
  }

  return (
    <form className="bookingForm" onSubmit={handleSubmit}>
      <label>
        宠物昵称
        <input
          name="petName"
          placeholder="例如：糯米"
          required
          value={form.petName}
          onChange={(event) => setForm({ ...form, petName: event.target.value })}
        />
      </label>
      <label>
        服务类型
        <select
          name="service"
          required
          value={form.service}
          onChange={(event) => setForm({ ...form, service: event.target.value })}
        >
          <option value="" disabled>
            请选择
          </option>
          {serviceOptions.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label>
        联系方式
        <input
          name="phone"
          placeholder="手机号或微信"
          required
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
        />
      </label>
      <label>
        希望到店时间
        <input
          name="preferredTime"
          type="datetime-local"
          value={form.preferredTime}
          onChange={(event) => setForm({ ...form, preferredTime: event.target.value })}
        />
      </label>
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "提交中..." : "提交预约"}
      </button>
      {message ? (
        <p className={`formMessage ${status === "success" ? "success" : "error"}`} aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
