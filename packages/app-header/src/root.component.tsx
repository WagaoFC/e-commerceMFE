// @ts-ignore
import { Navigate } from "@shoppe/util-ui"

export default function Root(props) {
  return (
    <section>
      <h1>{props.name} is mounted!</h1>
      <nav>
        <Navigate path='/account'>Account</Navigate>
        <Navigate path='/cart'>Cart</Navigate>
        <Navigate path='/product'>Product</Navigate>
        <Navigate path='/shop'>Shop</Navigate>
      </nav>
    </section>
  )
}
