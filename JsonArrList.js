import React, { Component } from 'react';

 class JsonArrList extends Component {
  render() {

	const mylist=[
	   
		{ city:"Chuadanga",
		zip:"2000"
		},
		
		{ city:"Magura",
         zip:"6000"
        },

        { city:"Rajshahi",
          zip:"3000"
        }


	]

     const dataItemsCity=mylist.map((dataCity)=>{
	 return <option>{dataCity.city}</option>
	 });
	  
	 const dataItemsZip=mylist.map((dataZip)=>{
		return <option>{dataZip.zip}</option>
		});

	return (

	  <div>
		  <select>
			  {dataItemsCity}
		  </select>
		  <select>
			  {dataItemsZip}
		  </select>
		
	  </div>
	);
  }
}

export default JsonArrList;
