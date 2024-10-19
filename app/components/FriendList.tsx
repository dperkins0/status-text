import "./FriendList.css"
import { CaretUpIcon } from "@radix-ui/react-icons"

interface Friend {
  id: string
  displayName: string
  status: string
}

const greenGuyUrl = `/guys/green.webp`
const redGuyUrl = `/guys/red.webp`
const yellowGuyUrl = `/guys/yellow.webp`

const getUrl = (status: string) => {
  switch (status) {
    case "Online":
      return greenGuyUrl
    case "Offline":
      return redGuyUrl
    case "Away":
      return yellowGuyUrl
    default:
      return greenGuyUrl
  }
}

const FriendList = ({
  friends,
  listTitle,
}: {
  friends: Friend[]
  listTitle: string
}) => {
  return (
    <div className="ListContainer">
      <div className="Title"><CaretUpIcon /> {listTitle} ({friends.length})</div>
      <ul className="FriendList">
        {friends.map((friend) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          <li className="Friend" key={friend.id} tabIndex={0}>
            <img
              src={getUrl(friend.status)}
              alt="messenger guy"
              className="GuyIcon"
            />
            {friend.displayName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { FriendList }
export type { Friend }
