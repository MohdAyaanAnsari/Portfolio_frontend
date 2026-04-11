/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./base";

/* =========================
   Types
========================= */

export interface Message {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt?: string;
}


export interface MessageResponse {
  success: boolean;
  message?: string;
}

/* =========================
   Send Message (POST)
========================= */

export const sendMessage = async (
  data: MessagePayload
): Promise<MessageResponse> => {
  try {
    const response = await api.post("/messages", data);

    return response.data;
  } catch (error: any) {
    console.error("Error sending message:", error?.response?.data || error);
    throw error;
  }
};

/* =========================
   Get Messages (Admin)
========================= */

export interface MessagePayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const getMessages = async (): Promise<Message[]> => {
  try {
    const response = await api.get("/messages");

    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};
