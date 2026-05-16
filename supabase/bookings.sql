create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  pet_name text not null,
  service text not null check (service in ('基础洗护', '精致美容', '猫咪专护', '皮毛养护')),
  contact text not null,
  preferred_time timestamptz,
  source text not null default 'website',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.bookings enable row level security;

create policy "Allow website booking inserts"
on public.bookings
for insert
to anon
with check (
  source = 'website'
  and status = 'new'
  and service in ('基础洗护', '精致美容', '猫咪专护', '皮毛养护')
);

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
