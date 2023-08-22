import React, { useState } from "react";
import data from "./data.json"; // Adjust the path as needed
import { useEffect } from "react";

function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  useEffect(()=>
  {
    console.log("hi")
    if(Object.keys(formData.moduleSelected).length===0)
    {
      setFormData({...formData,moduleSelected:data})
    }
  },[]);

  
  return (
    
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );
}

function MyComponent({ formData, setFormData }) {
  const [values, setValues] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page
  const scrollRefs = {};
  const toggleValue = (key) => {
    
      setFormData({ ...formData, moduleSelected: {...formData.moduleSelected,[key]:!formData.moduleSelected[key]} });
    
    setValues((prevValues) => ({
      ...prevValues,
      [key]: !prevValues[key],
    }));
  };

  console.log(formData);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page when search term changes
  };

  const filteredValues = Object.keys(values).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedValues = filteredValues.slice(startIndex, endIndex);

  const renderedValues = paginatedValues.map((key) => (
    <div key={key} ref={(ref) => (scrollRefs[key] = ref)}>
      {key}: {formData.moduleSelected[key]?"true":"false"}
      <button onClick={() => toggleValue(key)}>Toggle</button>
    </div>
  ));

  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border-2 border-black w-96 ml-10 p-3 mb-5"
      />
      <div className="h-[25rem] flex flex-col flex-wrap text-5xl gap-1 w-[90%] m-auto overflow-x-scroll [column-gap:1rem]">
        {renderedValues}
      </div>

      {/* <div className="h-[100%] ml-[38%] ">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredValues.length}
          onPageChange={setCurrentPage}
        />
      </div> */}
    </div>
  );
}

export default MyComponent;
