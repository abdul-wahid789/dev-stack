import { useState } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technology from "./components/Technologies/Technology"
import type { Istack } from "./components/types/Stack"
import Footer from "./components/Footer"

const stackFetch = async (): Promise<Istack[]> => {
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
}


function App() {
  const [stacksPromise] = useState<Promise<Istack[]>>(stackFetch())
  return (
    <>
      <header className="h-screen">
        <Nav />
        <Banner />
      </header>
      <main>
        <Technology stacksPromise={stacksPromise}></Technology>
      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </>
  )
}

export default App
