import "./App.css";
import TableComponent from "./components/TableComponent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleSubmit = () => {
    axios({
      method: "get",
      url: "https://swapi.dev/api/people",
    })
      .then((response) => {
        let tableArray = response.data.results;
        setTableData(tableArray);
        setIsVisible(true);
      })
      .catch((err) => console.log(err));
  };

  const handleReset = () => {
    setTableData([]);
    setIsVisible(false);
  };

  return (
    <div>
      <h1>SWAPI APP</h1>
      <Stack justifyContent="center" spacing={2} direction="row" padding={2}>
        <Button id="showButton" variant="contained" onClick={handleSubmit}>
          SHOW
        </Button>
        <Button id="resetButton" variant="contained" onClick={handleReset}>
          RESET
        </Button>
      </Stack>
      {isVisible && <TableComponent people={tableData} />}
    </div>
  );
};

export default App;
