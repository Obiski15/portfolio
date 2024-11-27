"use server";

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
  const customMessage = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Service Needed:</strong> ${requestedService}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    body: JSON.stringify({
      service_id: process.env.MAIL_SERVICE_ID,
      user_id: process.env.MAIL_USER_ID,
      template_id: process.env.MAIL_TEMPLATE_ID,
      accessToken: process.env.MAIL_PRIVATE_TOKEN,
      template_params: { name, email, message: customMessage },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.text();

  if (!res.ok) throw new Error("something went wrong");

  return result;
}
