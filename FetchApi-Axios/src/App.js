import axios from "axios"
import { useState, useEffect } from 'react'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getCountry()
  }, [])

  console.log("countries", countries)

  return (
    <div className="App">
      {
        countries.map((data, i) => (
          <div style={{ color: "red" }} key={i}>{data.name.common}</div>
        ))
      }
    </div>
  );
}

export default App;
