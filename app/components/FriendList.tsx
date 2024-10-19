import "./FriendList.css"

interface Friend {
  id: string
  displayName: string
  status: string
}

const imgUrl = `/guys/green.webp`

const FriendList = ({
  friends,
  listTitle,
}: {
  friends: Friend[]
  listTitle: string
}) => {
  return (
    <div className="ListContainer">
      {listTitle}
      <ul className="FriendList">
        {friends.map((friend) => (
          <li className="Friend" key={friend.id}>
            <img src={imgUrl} alt="messenger guy" className="GuyIcon" />
            {friend.displayName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { FriendList }
export type { Friend }
