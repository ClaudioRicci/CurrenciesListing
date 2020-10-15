import React, { useState, useEffect, useRef, memo } from "react";
import shortid from "shortid";
import "./App.scss";
import LoadingCircle from "./components/LoadingCircle";
import TableHeader from "./components/TableHeader";
import axios from "axios";
import {
  twoDecimalPlaces,
  percentageIncrease,
  sortPercentages
} from "./helpers";

function App() {
  const firstUpdate = useRef<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<any | null>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      axios
        .get(
          `${process.env.REACT_APP_ENDPOINT_URL}&api_key=${process.env.REACT_APP_KEY}`
        )
        .then(response => {
          if (response.status === 200) {
            setLoaded(true);
            let data = Object.values(response.data.RAW);
            setItems(data);
          } else {
            setLoaded(true);
            setError(true);
          }
        });
    }
  }, [error, items]);

  if (loaded) {
    return (
      <main data-testid="loadedContent" className="loadedContent">
        <table key={shortid.generate()}>
          <TableHeader />
          <tbody key={shortid.generate()}>
            {items.map((item: any) => (
              <tr key={shortid.generate()}>
                <td key={item.USD.FROMSYMBOL}>{item.USD.FROMSYMBOL}</td>
                <td key={item.USD.FROMSYMBOL + item.USD.PRICE}>
                  ${item.USD.PRICE}
                </td>
                <td key={item.USD.FROMSYMBOL + item.USD.OPENDAY}>
                  ${item.USD.OPENDAY}
                </td>
                <td key={item.USD.FROMSYMBOL + shortid.generate()}>
                  {percentageIncrease(item.USD.OPENDAY, item.USD.PRICE)} &nbsp;
                  (${twoDecimalPlaces(item.USD.OPENDAY - item.USD.PRICE)})
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  } else {
    return (
      <main data-testid="contentStillLoading">
        <LoadingCircle />
      </main>
    );
  }
}

export default memo(App);
