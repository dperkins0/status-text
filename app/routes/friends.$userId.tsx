import { json, LoaderFunctionArgs } from "@remix-run/cloudflare"
import { FriendList } from "~/components/FriendList"
import { useLoaderData } from "@remix-run/react"

export async function loader({ params }: LoaderFunctionArgs) {
  return json([
    { id: "1", displayName: "~SoPhIa_RoCkS~", status: "Online" },
    { id: "2", displayName: "EthanG4m3r", status: "Away" },
    { id: "3", displayName: "Olivia_M", status: "Busy" },
    { id: "5", displayName: "x_Ava_x", status: "Offline" },
    { id: "9", displayName: "Mia_Th0mas", status: "Busy" },
    { id: "11", displayName: "Emily_M00re", status: "Offline" },
    { id: "13", displayName: "HarperW-", status: "Away" },
    { id: "8675309", displayName: "~xXx_DarkAngel_xXx~", status: "Online" },
    { id: "1488", displayName: "Sk8erBoi99", status: "Away" },
    { id: "42069", displayName: "MusicLuvr4Eva", status: "Busy" },
    { id: "1337", displayName: "NightOwl", status: "Online" },
    { id: "90210", displayName: "SparkleFairy*", status: "Offline" },
    { id: "1234567", displayName: "WolfmanJack", status: "Online" },
    { id: "888888", displayName: "GothicPrincess", status: "Away" },
    { id: "666", displayName: "DragonSlayer", status: "Online" },
    { id: "4321", displayName: "AngelEyes", status: "Busy" },
    { id: "111111", displayName: "LoneWolf", status: "Online" },
    { id: "987654321", displayName: "RainbowUnicorn", status: "Offline" },
    { id: "123", displayName: "Silver Surfer-", status: "Online" },
    { id: "777", displayName: "KittyCat", status: "Away" },
    { id: "55555", displayName: "TheJoker", status: "Online" },
    { id: "112358", displayName: "SweetPea", status: "Busy" },
    { id: "99999", displayName: "HockeyFanatic", status: "Online" },
    { id: "101010", displayName: "Bookworm", status: "Offline" },
    { id: "87654321", displayName: "Stargazer", status: "Online" },
    { id: "456789", displayName: "Dreamer", status: "Away" },
    { id: "2468", displayName: "GuitarHero", status: "Online" },
  ])
}

export default function Friends() {
  const data = useLoaderData<typeof loader>()
  const onlineFriends = data.filter(
    (friend) => friend.status === "Online" || friend.status === "Away"
  )
  const offlineFriends = data.filter((friend) => friend.status === "Offline")

  return (
    <>
      <div className="StatusBar"></div>
      <FriendList friends={onlineFriends} listTitle="Online" />
      <FriendList friends={offlineFriends} listTitle="Offline" />
    </>
  )
}
