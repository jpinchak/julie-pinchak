'use server'

import { sendMail } from "../../services/mailService";

export async function emailHandler ({subject, message}: {subject: string; message: string}) {
  try {
    await sendMail(
      subject,
      message
    );
    return 'success'
  } catch (err: any) {
    return err;
  }
};