import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries() {
//   // 1. set useState
//   const [countries, setCountries] = useState([]);
//   // 2. set useEffect
//   useEffect(() => {
//     // 3. use fetch
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())

//       // 3.5 set useState returning function here
//       .then(data => setCountries(data))

//   }, [])

//   return (
//     <div>
//       <h1>Visiting Every Country of the World.....</h1>
//       <h3>Total Country Loaded: {countries.length}</h3>

//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }

//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h4>Name: {props.name}</h4>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }


export default App;
