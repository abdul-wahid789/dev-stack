import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technology from "./components/Technology"

function App() {

  return (
    <>
      <header className="h-screen">
        <Nav/>
        <Banner/>
      </header>
      <main>
        <Technology></Technology>
      </main>

    </>
  )
}

export default App
