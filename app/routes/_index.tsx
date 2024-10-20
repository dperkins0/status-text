import {
  redirect,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/cloudflare"
import "../styles.css?url"
import { SessionStorage } from "~/services/session.server"

export const meta: MetaFunction = () => {
  return [
    { title: "Status Message" },
    { name: "description", content: "Set a status message!" },
  ]
}

export const loader: LoaderFunction = async ({ request, context }) => {
  const user = await SessionStorage.readUser(context, request)
  if (!user) {
    return redirect("/auth/login")
  }
  return redirect(`/friends/${user.id}`)
}

export default function Index() {
  return <div>helo</div>
}
