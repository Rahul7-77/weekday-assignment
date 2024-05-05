// import React, { useState, useEffect } from 'react';
// import Card from './card.jsx';
// import './card.css';

// function YourComponent() {
//   const [alldata, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({     
//     location: '',
//     jobRole: ''
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         const body = JSON.stringify({
//           "limit": 10,
//           "offset": 0
//         });

//         const requestOptions = {
//           method: "POST",
//           headers: myHeaders,
//           body
//         };

//         const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
//         const result = await response.json();
//         setData(result);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Log the fetched data to the console
//   //console.log(data);
//   console.log(alldata);
//   console.log(alldata['jdList']);
//   const helper=alldata['jdList'];
//   {helper && helper.map((item,index)=>{
//     console.log(item);
//   })}
//   const filteredData = alldata['jdList'] && alldata['jdList'].filter(item => {
//     return (
//       (!filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase())) &&
//       (!filters.jobRole || item.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()))
//     );
//   });
//   return (
//     <div className="cardContainer">
//       {loading && <div>Loading...</div>}
//       {error && <div>Error: {error.message}</div>}

//       {/* Render cards */}
//       {/* {Array.isArray(alldata['jdList']) ? (
//         alldata['jdList'].map(item => (
//           <Card key={item.id} data={item} />
//         ))
//       ) : (
//         <Card data={alldata} />
//       )} */}
//       <div>
//          <label>Location:</label>
//          <input
//            type="text"
//            value={filters.location}
//            //onChange={e => handleFilterChange('location', e.target.value)}
//          />
//        </div>
//        <div>
//          <label>Job Role:</label>
//          <input
//            type="text"
//            value={filters.jobRole}
//            //onChange={e => handleFilterChange('jobRole', e.target.value)}
//          />
//        </div>
//       {Array.isArray(filteredData) ? (
//         filteredData.map(item => (
//           <Card key={item.id} data={item} />
//         ))
//       ) : (
//         <Card data={alldata} />
//       )}
//     </div>
//   );
// }

// export default YourComponent;

// // import React, { useState, useEffect } from 'react';
// // import Card from './card.jsx';
// // import './card.css';

// // function YourComponent() {
// //   const [jobData, setJobData] = useState({});
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [filters, setFilters] = useState({
// //     location: '',
// //     jobRole: ''
// //   });

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const myHeaders = new Headers();
// //         myHeaders.append("Content-Type", "application/json");

// //         const body = JSON.stringify({
// //           "limit": 10,
// //           "offset": 0
// //         });

// //         const requestOptions = {
// //           method: "POST",
// //           headers: myHeaders,
// //           body
// //         };

// //         const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
// //         const result = await response.json();
// //         setJobData(result);
// //         setLoading(false);
// //       } catch (error) {
// //         setError(error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleFilterChange = (filterName, value) => {
// //     setFilters(prevFilters => ({
// //       ...prevFilters,
// //       [filterName]: value
// //     }));
// //   };

// //   // const filteredData = jobData['jdList'].filter(item => {
// //   //   return (
// //   //     (!filters.location || item.location === filters.location) &&
// //   //     (!filters.jobRole || item.jobRole === filters.jobRole)
// //   //   );
// //   // });
// //   // const filteredData=jobData;

// //   return (
// //     <div>
// //       {/* Filter UI */}
// //       <div>
// //         <label>Location:</label>
// //         <input
// //           type="text"
// //           value={filters.location}
// //           onChange={e => handleFilterChange('location', e.target.value)}
// //         />
// //       </div>
// //       <div>
// //         <label>Job Role:</label>
// //         <input
// //           type="text"
// //           value={filters.jobRole}
// //           onChange={e => handleFilterChange('jobRole', e.target.value)}
// //         />
// //       </div>

// //       {/* Display filtered data */}
// //       <div className="cardContainer">
// //         {loading && <div>Loading...</div>}
// //         {error && <div>Error: {error.message}</div>}
// //         {jobData['jdList'].map(item => (
// //           <Card key={item.id} data={item} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default YourComponent;


// import React, { useState, useEffect } from 'react';
// import Card from './card.jsx';
// import './card.css';
// import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material'; // Import Material-UI components

// function YourComponent() {
//   const [alldata, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     minExp: '',
//     location: '',
//     jobRole: '',
//     CompanyName: '',
//     RemoteOrOnSite: '',
//     MinBasePay: ''
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         const body = JSON.stringify({
//           "limit": 10,
//           "offset": 0
//         });

//         const requestOptions = {
//           method: "POST",
//           headers: myHeaders,
//           body
//         };

//         const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
//         const result = await response.json();
//         setData(result);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredData = alldata['jdList'] && alldata['jdList'].filter(item => {
//     return (
//       (!filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase())) &&
//       (!filters.jobRole || item.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()))
//     );
//   });

//   return (
//     <div className="container">
//       <div className="filter-container">
//         {/* <FormControl className="filter-select">
//           <InputLabel>Type</InputLabel>
//           <Select
//             value={filters.type}
//             onChange={(e) => setFilters({ ...filters, type: e.target.value })}
//           >
//             <MenuItem value="Type 1">Type 1</MenuItem>
//             <MenuItem value="Type 2">Type 2</MenuItem>
//             <MenuItem value="Type 3">Type 3</MenuItem>
//           </Select>
//         </FormControl> */}
//         <div className="filter-helper">
//             <TextField
//             className="filter-input"
//             label="minExp"
//             value={filters.minExp}
//             onChange={(e) => setFilters({ ...filters, minExp: e.target.value })}
//           />
//         </div>
//         <TextField
//           className="filter-input"
//           label="CompanyName"
//           value={filters.CompanyName}
//           onChange={(e) => setFilters({ ...filters, CompanyName: e.target.value })}
//         />
//         <TextField
//           className="filter-input"
//           label="Remote/On-site"
//           value={filters.RemoteOrOnSite}
//           onChange={(e) => setFilters({ ...filters, RemoteOrOnSite: e.target.value })}
//         />
//         <TextField
//           className="filter-input"
//           label="Job Role"
//           value={filters.jobRole}
//           onChange={(e) => setFilters({ ...filters, jobRole: e.target.value })}
//         />
//         <TextField
//           className="filter-input"
//           label="Location"
//           value={filters.location}
//           onChange={(e) => setFilters({ ...filters, location: e.target.value })}
//         />
//         <TextField
//           className="filter-input"
//           label="Min Base Pay"
//           value={filters.MinBasePay}
//           onChange={(e) => setFilters({ ...filters, MinBasePay: e.target.value })}
//         />

//         <Button variant="contained" onClick={() => console.log(filters)}>Apply</Button>
//       </div>

//       <div className="cardContainer">
//         {loading && <div>Loading...</div>}
//         {error && <div>Error: {error.message}</div>}
//         {filteredData && filteredData.map(item => (
//           <Card key={item.id} data={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default YourComponent;

import React, { useState, useEffect } from 'react';
import Card from './card.jsx';
import './card.css';
import { TextField, Button } from '@mui/material'; // Import Material-UI components

function YourComponent() {
  const [alldata, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
    jobRole: '',
    companyName: '',
    RemoteOrOnSite: '',
    MinBasePay: '',
    minexp:0
  });

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
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const filteredData = alldata['jdList'] && alldata['jdList'].filter(item => {
  //   return (
  //     (!filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase())) &&
  //     (!filters.jobRole || item.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()))
  //   );
  // });
  // const filteredData = alldata['jdList'] && alldata['jdList'].filter(item => {
  //   return (
  //     (!filters.minExp || item.minExp === filters.minExp) &&
  //     (!filters.CompanyName || (item.CompanyName && item.CompanyName.toLowerCase().includes(filters.CompanyName.toLowerCase()))) &&
  //     (!filters.RemoteOrOnSite || (item.RemoteOrOnSite && item.RemoteOrOnSite.toLowerCase().includes(filters.RemoteOrOnSite.toLowerCase()))) &&
  //     (!filters.jobRole || (item.jobRole && item.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()))) &&
  //     (!filters.location || (item.location && item.location.toLowerCase().includes(filters.location.toLowerCase()))) &&
  //     (!filters.MinBasePay || item.MinBasePay === filters.MinBasePay)
  //   );
  // });
  const filteredData = alldata['jdList'] && alldata['jdList'].filter(item => {
    return (
      (!filters.minexp || item.minexp === filters.minexp) &&
      (!filters.companyName || (item.companyName && item.companyName.toLowerCase().includes(filters.companyName.toLowerCase()))) &&
      (!filters.RemoteOrOnSite || (item.RemoteOrOnSite && item.RemoteOrOnSite.toLowerCase().includes(filters.RemoteOrOnSite.toLowerCase()))) &&
      (!filters.jobRole || (item.jobRole && item.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()))) &&
      (!filters.location || (item.location && item.location.toLowerCase().includes(filters.location.toLowerCase()))) &&
      (!filters.MinBasePay || item.MinBasePay === filters.MinBasePay)
    );
  });
  return (
    <div className="container">
      <div className="filter-container">
          <TextField
            className="filter-input"
            label="minExp"
            value={filters.minexp}
            onChange={(e) => setFilters({ ...filters, minexp: e.target.value })}
          />
        <TextField
          className="filter-input"
          label="companyName"
          value={filters.companyName}
          onChange={(e) => setFilters({ ...filters, companyName: e.target.value })}
        />
        <TextField
          className="filter-input"
          label="Remote/On-site"
          value={filters.RemoteOrOnSite}
          onChange={(e) => setFilters({ ...filters, RemoteOrOnSite: e.target.value })}
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
          label="Min Base Pay"
          value={filters.MinBasePay}
          onChange={(e) => setFilters({ ...filters, MinBasePay: e.target.value })}
        />

        {/* Uncomment below button if you want to apply filters manually */}
        {/* <Button variant="contained" onClick={() => console.log(filters)}>Apply</Button> */}
      </div>

      <div className="cardContainer">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {filteredData && filteredData.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default YourComponent;

