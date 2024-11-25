import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "../sendMail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, message, name, requestedService } = { ...body };

    if (!email || !message || !name)
      return NextResponse.json(
        {
          status: "fail",
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );

    const customMessage = `
        <h2>Hello, you just got a new request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Needed:</strong> ${requestedService}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    await sendMail({
      address: email,
      name,
      subject: "New Service Request",
      html: customMessage,
    });

    return NextResponse.json({
      status: "success",
    });
  } catch (err: unknown) {
    console.log(err);
    return NextResponse.json(
      {
        status: "error",
        message: "Unable to process your request. Pls try again",
      },
      {
        status: 500,
      }
    );
  }
}
