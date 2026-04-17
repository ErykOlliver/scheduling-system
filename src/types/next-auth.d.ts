import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      admin_level: "USER" | "ADMIN"
    }
  }

  interface User {
    id: string
    name: string
    email: string
    admin_level: "USER" | "ADMIN"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    admin_level: "USER" | "ADMIN"
  }
}