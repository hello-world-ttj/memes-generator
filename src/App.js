import './App.css'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import CastData from './CastData'

function App() {
  const Datas = CastData.map(data => {
    return (
      <Card
        key={data.id}
        {...data}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Content />
      <div className="TopCast">
        {Datas}
      </div>
      <Footer />
    </div>
  );
}

export default App;
