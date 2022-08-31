import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";

export function useSetDataRender() {
  const alldata = useContext(dataContext);
  const [data, setData] = useState([]);
  const setRenderData = (searchkey, searchorcategory = "category") => {
    if (searchorcategory === "search") {
      const filterdata = alldata.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchkey) ||
          item.bodyPart.toLowerCase().includes(searchkey) ||
          item.equipment.toLowerCase().includes(searchkey) ||
          item.target.toLowerCase().includes(searchkey)
        );
      });
      setData(filterdata);
    }
  };
  const filterRenderData = (val) => {
    const filterdata = alldata.filter((item) => {
      return item.bodyPart.toLowerCase().includes(val);
    });
    setData(filterdata);
  };
  return [data, setRenderData, filterRenderData, alldata];
}
