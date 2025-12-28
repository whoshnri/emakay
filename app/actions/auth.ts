"use server"

import { cookies } from "next/headers"

const ADMIN_USER = "admin"
const ADMIN_PASS = "admin123"

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  console.log(username, password)

  if (username.toLowerCase() === ADMIN_USER && password.toLowerCase() === ADMIN_PASS) {
    const cookieStore = await cookies()
    cookieStore.set("auth_token", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })
    return { success: true }
  }

  return { success: false, error: "Invalid credentials" }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete("auth_token")
}
