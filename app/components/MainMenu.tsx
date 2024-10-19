import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import "./Menu.css"

const Menu = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            File
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Contacts
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Actions
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Tools
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Help
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export { Menu }
