import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/cloudflare"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import "@radix-ui/themes/styles.css"
import "./styles.css"
import { Theme } from "@radix-ui/themes"
import { Menu } from "./components/MainMenu"

export const meta: MetaFunction = () => [
  {
    charSet: "utf-8",
    title: "status text",
    viewport: "width=device-width,initial-scale=1",
  },
]

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Theme>
          <div className="RootContainer">
            <Menu />
            {children}
          </div>
        </Theme>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

function App() {
  return <Outlet />
}

export default App
