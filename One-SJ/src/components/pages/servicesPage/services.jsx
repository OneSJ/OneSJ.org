import { useState, useEffect } from "react";
import { getDataAndCategories } from "../../utilities/constants";
import NavigationBar from "../../reusable/navigationBar";
import InsuredSnack from "./insuredSnack";
import ServicesShown from "./servicesShown";
import SearchBar from "./searchBar";
import PageSizeHandler from "./pageSizeHandler";
import Filter from "./filter";
import DataDisplay from "./dataDisplay";
import PaginationHandler, { paginate } from "./paginationHandler";
import Footer from "../../reusable/footer";

import "../../../css/services.css";

// Component that renders all the data and filter components together
const Services = () => {
  const [state, setState] = useState({
    data: [],
    filteredData: [],
    searchedData: [],
    checkedCategories: [],
    categories: [],
    currentSearch: "",
    searchInProgress: false,
    currentPage: 1,
    pageSize: 12,
  });

  useEffect(() => {
    // Check if user has already accessed services page through session storage
    const sessionData = sessionStorage.getItem("data");
    const sessionCategories = sessionStorage.getItem("categories");

    if (sessionData === null || sessionCategories === null) {
      getDataAndCategories().then((response) => {
        // Storing data and categories in session storage
        sessionStorage.setItem("data", JSON.stringify(response[0]));
        sessionStorage.setItem("categories", JSON.stringify(response[1]));

        setState({
          ...state,
          data: response[0],
          categories: response[1],
        });
      });
    } else {
      // If user has already accessed services page, pull data from session storage
      setState({
        ...state,
        data: JSON.parse(sessionData),
        categories: JSON.parse(sessionCategories),
      });
    }
  }, []);

  // When there filtered data changes, check if there was a search in progress
  // If so, call handleSearch again to account for new filtered data
  useEffect(() => {
    if (state.searchInProgress) {
      handleSearch(state.currentSearch);
    }
  }, [state.filteredData]);

  const handlePageChange = (page) => {
    // Scroll to top when a page change occurs
    window.scrollTo(0, 0);
    setState({ ...state, currentPage: page });
  };

  const handlePageSizeChange = (pageSize) => {
    setState({ ...state, pageSize, currentPage: 1 });
  };

  const handleFilter = (value) => {
    // Prepare new array for new list of checked categories
    let newCheckedCategories = state.checkedCategories;

    // Grab category name from the event
    const categoryName = value;

    // Check whether to remove category from list or add to list
    if (newCheckedCategories.includes(categoryName)) {
      newCheckedCategories = newCheckedCategories.filter(
        (category) => category !== categoryName
      );
    } else {
      newCheckedCategories.push(categoryName);
    }

    // If user unchecks all categories, reset the state so no filtering occurs
    if (!newCheckedCategories.length) {
      setState({
        ...state,
        filteredData: [],
        checkedCategories: [],
        currentPage: 1,
      });
      return;
    }
    // Represents the new filtered data
    let newData = [];
    // Check each service to see if it matches all checked categories
    state.data.forEach((service) => {
      let match = true;
      newCheckedCategories.every((category) => {
        if (!service[category]) {
          match = false;
          return false;
        }
        return true;
      });
      // If the service matches all checked categories, add it to the newData array
      if (match) newData.push(service);
    });

    // Make sure to call search function again if there was a search in progress after filtering
    setState({
      ...state,
      filteredData: newData,
      checkedCategories: newCheckedCategories,
      currentPage: 1,
    });
  };

  const handleSearch = (value) => {
    // If search returns to empty, reset state
    if (value === "" && state.searchedData.length) {
      setState({
        ...state,
        searchedData: [],
        searchInProgress: false,
        currentSearch: value,
        currentPage: 1,
      });
      return;
    }

    // Use filtered data if there are checked categories, else use all data
    let data = state.checkedCategories.length ? state.filteredData : state.data;

    let newData = [];

    data.forEach((service) => {
      if (service.provider_name.toLowerCase().includes(value.toLowerCase()))
        newData.push(service);
    });

    setState({
      ...state,
      searchedData: newData,
      searchInProgress: true,
      currentSearch: value,
      currentPage: 1,
    });
  };

  let dataToRender = state.data;
  // Check whether there is filtered data
  if (state.checkedCategories.length) {
    dataToRender = state.filteredData;
  }
  // Check whether there is a search in progress
  if (state.searchInProgress) {
    dataToRender = state.searchedData;
  }
  // Get the correct page of data to show
  const services = paginate(dataToRender, state.currentPage, state.pageSize);

  return (
    <>
      <NavigationBar />
      <InsuredSnack />
      <div className="servicesLayout">
        <ServicesShown
          currentPage={state.currentPage}
          pageSize={state.pageSize}
          total={dataToRender.length}
        />
        <SearchBar onSearch={handleSearch} />
        <div className="filterBox boxShadow">
          <PageSizeHandler
            pageSize={state.pageSize}
            onPageSizeChange={handlePageSizeChange}
          />
          <Filter categories={state.categories} onFilter={handleFilter} />
        </div>
        <div className="center" style={{ width: "100%" }}>
          <DataDisplay data={services} />
        </div>
      </div>
      <div className="center" style={{ backgroundColor: "rgb(250, 250, 210)" }}>
        <PaginationHandler
          itemCount={dataToRender.length}
          pageSize={state.pageSize}
          currentPage={state.currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </>
  );
};

export default Services;
