import type { MetaFunction } from "@remix-run/cloudflare"
import { Menu } from "../components/MainMenu"
import { FriendList } from "~/components/FriendList"
import type { Friend } from "~/components/FriendList"
import "../styles.css?url"

export const meta: MetaFunction = () => {
  return [
    { title: "Status Message" },
    { name: "description", content: "Set a status message!" },
  ]
}

const testFriends: Friend[] = [
  { id: "123", displayName: "John Doe", status: "Online" },
  { id: "456", displayName: "Jane Smith", status: "Away" },
  { id: "789", displayName: "Peter Jones", status: "Busy" },
];

export default function Index() {
  return (
    <div className="RootContainer">
      <Menu />
      <div className="StatusBar">Hello</div>
      <FriendList friends={testFriends} listTitle="Online" />
    </div>
  )
}
