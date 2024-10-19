import type { MetaFunction } from "@remix-run/cloudflare"
import { Menu } from "../components/MainMenu"
import "../styles.css"

export const meta: MetaFunction = () => {
  return [
    { title: "Status Message" },
    { name: "description", content: "Set a status message!" },
  ]
}

export default function Index() {
  return (
    <div className="RootContainer">
      <Menu />
      <div className="StatusBar">Hello</div>
    </div>
  )
}
