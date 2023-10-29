import axios from "axios";
import { useEffect, useState } from "react";
const JsonPalceholder = () => {
  const [options] = useState([1, 2, 3, 4]);
  const [numberOfRecordsOptions] = useState([5, 10, 15, 20]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      )
      .then((res) => setData(res.data));
  }, [page, limit]);
  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (data.length > 0) {
      setPage(page + 1);
    }
  };

  function handleChange(e) {
    // console.log(e.target.value);
    setLimit(e.target.value);
  }

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <button onClick={handlePreviousClick}>Prev</button>
      {options.map((value) => (
        <button key={value}>{value}</button>
      ))}
      <button onClick={handleNextClick}>Next</button>
      <select onChange={handleChange}>
        {numberOfRecordsOptions.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
    </>
  );
};
export default JsonPalceholder;
