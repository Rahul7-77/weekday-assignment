import React, { useState, useEffect } from 'react';
import Card from './card.jsx';
import './card.css';
import { TextField, Button } from '@mui/material'; // Importing Material-UI components

function MyComponent() {
  /*
    1) In order to preserve states (data) in our site, we will be using react hooks
    2) using 'useState' hook to store all the data we get from our API Call. alldata stores data and setData function updates it
    3) We handle error using another 'useState' hook
    4) Inorder to apply filters we use use another 'useState' hook to understand which all filters are triggered and what are their values
    5) filters 'useState' hook has an object data with attributes location,jobRole,companyName,minexp,minBase salary.
  */
  const [alldata, setData] = useState({});
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
    jobRole: '',
    companyName: '',
    minexp: '',
    minJdSalary: ''
  });
  
  // Fetching the data from API Call.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
          "limit": 10,
          "offset": 0
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const result = await response.json();
        setData(result);
      } catch (error) {
        // If error setError so that we can display the error to user
        setError(error);
      }
    };

    fetchData();
  }, []);

  /*
    1) The below code is main heart of filtering feature
    2) Each filter is a 'Textfield' tag and whenever there is a change in it (when we write in it) then it will trigger setFilters function of useState hook
    3) In that setFilters functions we update the values of filters
    4) Now when coming to filtering we use .filter function in javascript to filter out all data which matches according to filters in our useState hook
    5) As per given instruction, if there is a null we will be excluding it from filtering process by keeping a ternary operator 
    6) All the data which got filtered will be stored in filteredData
    7) We now take this filteredData and map every item in it to the custom Card we had created
    8) Initially by default all our filters dont have any values so all the data from our api call will be rendered in cards.
  */
  const filteredData = alldata['jdList'] && alldata['jdList'].filter(item => {
    return (
      (!filters.minExp || (item.minExp && item.minExp <= filters.minExp)) &&
      (!filters.companyName || (item.companyName && item.companyName.toLowerCase().includes(filters.companyName.toLowerCase()))) &&
      (!filters.RemoteOrOnSite || (item.RemoteOrOnSite && item.RemoteOrOnSite.toLowerCase().includes(filters.RemoteOrOnSite.toLowerCase()))) &&
      (!filters.jobRole || (item.jobRole && item.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()))) &&
      (!filters.location || (item.location && item.location.toLowerCase().includes(filters.location.toLowerCase()))) &&
      (!filters.minJdSalary || (item.minJdSalary && item.minJdSalary >= filters.minJdSalary))
    );
  });
  return (
    <div className="container">
      <div className="filter-container">
          <TextField
            className="filter-input"
            label="minExp"
            value={filters.minExp}
            // whenever there is a onChange, setFilters function will be triggered and values will get updated
            onChange={(e) => setFilters({ ...filters, minExp: e.target.value })}
          />
        <TextField
          className="filter-input"
          label="companyName"
          value={filters.companyName}
          onChange={(e) => setFilters({ ...filters, companyName: e.target.value })}
        />
        <TextField
          className="filter-input"
          label="Job Role"
          value={filters.jobRole}
          onChange={(e) => setFilters({ ...filters, jobRole: e.target.value })}
        />
        <TextField
          className="filter-input"
          label="Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <TextField
          className="filter-input"
          label="minJdSalary"
          value={filters.minJdSalary}
          onChange={(e) => setFilters({ ...filters, minJdSalary: e.target.value })}
        />
      </div>

      <div className="cardContainer">
        {error && <div>Error: {error.message}</div>}
        {filteredData && filteredData.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default MyComponent;

