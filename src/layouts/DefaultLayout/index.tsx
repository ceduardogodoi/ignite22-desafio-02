import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <h1>Layout here</h1>
      <Outlet />
    </>
  )
}
