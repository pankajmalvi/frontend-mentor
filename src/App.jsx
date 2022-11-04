import './App.scss'
import FooterFrontendMentor from './components/FooterFrontendMentor'
import ProductPreviewCard from './components/ProductPreviewCard'

function App() {

  return (
    <div className="App">
      <main>
        <ProductPreviewCard />
      </main>
      <FooterFrontendMentor name={"Pankaj Malviya"} />
    </div>
  )
}

export default App
