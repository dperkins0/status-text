import { redirect, type LoaderFunctionArgs } from "@remix-run/cloudflare"
import { Auth } from "~/services/auth.server"
import { SessionStorage } from "~/services/session.server"

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  const provider = params.provider as string
  const auth = new Auth(context)
  const user = await auth.authenticate(provider, request, {
    failureRedirect: "/auth/login",
  })

  const sessionStorage = new SessionStorage(context)

  const session = await sessionStorage.read(request.headers.get("cookie"))

  session.set("user", user)

  const headers = new Headers()

  headers.append("Set-Cookie", await sessionStorage.commit(session))
  headers.append("Set-Cookie", await auth.clear(request))

  throw redirect("/friends", { headers })
}
