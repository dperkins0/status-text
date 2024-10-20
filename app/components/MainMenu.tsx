import * as MenuBar from "@radix-ui/react-menubar"
import "./Menu.css"

const Menu = () => {
  return (
    <MenuBar.Root className="MenuRoot">
      <MenuBar.Menu>
        <MenuBar.Trigger className="MenuTrigger">File</MenuBar.Trigger>
        <MenuBar.Portal>
          <MenuBar.Content>
            <MenuBar.Item>
              <button>Sign out</button>
            </MenuBar.Item>
          </MenuBar.Content>
        </MenuBar.Portal>
      </MenuBar.Menu>
    </MenuBar.Root>
  )
}

export { Menu }
