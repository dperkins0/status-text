import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";
import { Auth } from "~/services/auth.server";

export async function loader() {
    return redirect("/auth/login")
}

export async function action({ request, params, context }: ActionFunctionArgs) {
    const provider = params.provider as string;
    const auth = new Auth(context)
    return await auth.authenticate(provider, request, {
        successRedirect: `/auth/${provider}/callback`,
        failureRedirect: '/auth/login'
    })
}