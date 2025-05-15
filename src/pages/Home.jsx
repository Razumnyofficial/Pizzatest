import { useState, useEffect, useContext } from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { MyContext } from "../App";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

const Home = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  // const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const dispatch = useDispatch();

  console.log(categoryId);

  const { searchValue } = useContext(MyContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  // const [sortType, setSortType] = useState({
  //   name: "популярности",
  //   sortProperty: "rating",
  // });

  function onChangeCategoryId(id) {
    dispatch(setCategoryId(id));
  }

  useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://674b6e5671933a4e88554df7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => setPizzas(res.data));
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  console.log(sort.sortProperty, categoryId);

  const items = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const sceletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              categoryId={categoryId}
              onClickCategory={(id) => onChangeCategoryId(id)}
            />
            <Sort />
            {/* <Sort sortType={sortType} setSortType={setSortType} /> */}
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">{isLoading ? sceletons : items}</div>
        </div>
        <Pagination onChangePage={(number) => setcurrentPage(number)} />
      </div>
    </>
  );
};

export default Home;
