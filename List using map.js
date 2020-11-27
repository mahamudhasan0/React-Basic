import React, { Component } from 'react';

class List extends Component {
	myDataChild=(data)=>{
	return <option>{data}</option>
	}
  render() {
	  const country=['Bangladesh','India','China','Srilanka']
	  const dataItems=country.map(this.myDataChild)
	return (
	  <div>
		  <select>
			 
				  {dataItems}
			  
		  </select>
		
	  </div>
	);
  }
}

export default List;
