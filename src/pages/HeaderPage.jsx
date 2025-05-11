import Header from "../components/Header";
// import { Outlet } from "react-router-dom";

const HeaderPage = ({ searchValue, setSearchValue }) => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </div>
  );
};

export default HeaderPage;
