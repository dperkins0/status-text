import type { MetaFunction } from "@remix-run/cloudflare"

export const meta: MetaFunction = () => {
  return [
    { title: "Status Message" },
    { name: "description", content: "Set a status message!" },
  ]
}

export default function Index() {
  return <div>hello</div>
}
