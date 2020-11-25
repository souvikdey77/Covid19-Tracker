import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //India, United States, United Kingdom
            value: country.countryInfo.iso2, // IN, USA, UK
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);
  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* loop through all the countries and put them in the dropdown */}
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select dropdown list */}
      {/* Info box */}
      {/* Info Box */}
      {/* Info Box */}
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}

export default App;
