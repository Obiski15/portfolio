import { MailtrapTransport } from "mailtrap";
import nodemailer from "nodemailer";

export async function sendMail({
  subject,
  address,
  name,
  html,
}: {
  subject: string;
  address: string;
  name: string;
  html: string;
}) {
  const transport = nodemailer.createTransport(
    MailtrapTransport({
      token: process.env.MAIL_TRAP_TOKEN!,
    })
  );

  await transport.sendMail({
    from: { address, name },
    to: [process.env.EMAIL_ADDRESS!],
    subject,
    html,
  });
}
