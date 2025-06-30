import React, { use } from 'react'

const App = () => {
  const apps = useSelector((state) => state.apps)
  return (
    <div>App</div>
  )
}

export default App