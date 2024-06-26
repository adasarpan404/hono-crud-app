import { Context } from "hono";

export async function signup(c: Context) {
    const body = await c.req.json()
    const email: string = body.email;
    const password: string = body.password;
}

export async function login(c: Context) {

}