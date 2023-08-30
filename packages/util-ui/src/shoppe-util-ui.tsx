import { ReactNode } from "react"
import { navigateToUrl } from "single-spa"

interface IPropsNavigate {
  path: string
  children?: ReactNode
}

export function Navigate({path, children}: IPropsNavigate) {
  function redirect(e: React.MouseEvent<HTMLButtonElement>) {
    navigateToUrl(e.currentTarget.name)
  }

  return (<button name={path} onClick={redirect}>{children}</button>)
}