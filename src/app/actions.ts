"use server";

const BASE_URL = process.env.NEXT_PUBLIC_API_ROUTE!;

export async function requestService({
  email,
  name,
  message,
  requestedService,
}: {
  email: string;
  name: string;
  message: string;
  requestedService: string;
}) {
  const res = await fetch(`${BASE_URL}/mail`, {
    method: "POST",
    body: JSON.stringify({ email, name, message, requestedService }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

  if (!res.ok) throw result.message;

  return result;
}
