// @ts-ignore
import { Navigate } from "@shoppe/util-ui"
// @ts-ignore
import { useStore } from "@shoppe/state-ui"

export default function Root(props) {
  const store = useStore
  return (
    <section>
      <h1>{props.name} is mounted!</h1>
      <h3>{store.counter}</h3>
      <nav>
        <Navigate path='/account'>Account</Navigate>
        <Navigate path='/cart'>Cart</Navigate>
        <Navigate path='/product'>Product</Navigate>
        <Navigate path='/shop'>Shop</Navigate>
      </nav>
    </section>
  )
}
