import {
  json,
  type MetaFunction,
  redirect,
  type LoaderFunctionArgs,
} from "@remix-run/cloudflare"
import { Form } from "@remix-run/react"
import { SessionStorage } from "~/services/session.server"

export const meta: MetaFunction = () => {
  return [
    { title: "Login" },
    {
      name: "description",
      content: "",
    },
  ]
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  const user = await SessionStorage.readUser(context, request)
  if (!user) return json(null)
  throw redirect(`/friends/${user}`)
}

export default function Login() {
  return (
    <Form action="/auth/github" method="POST">
      <button type="submit">Login with GitHub</button>
    </Form>
  )
}
