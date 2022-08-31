import { createContext, useState } from "react";

export const dataContext = createContext();
export const changedataContext = createContext();
export const renderSingleElement = createContext()
export const setRenderSingleElement = createContext()


export default function DataProvider({ children }) {
  const [items, setItems] = useState([]);
  const [renderItem ,setRenderItem] = useState({})
  function changeData(item) {
    setItems(item);
  }
  function setRendersingle(data){
    setRenderItem(data)
  }
  return (
    <>
      <dataContext.Provider value={items}>
        <changedataContext.Provider value={changeData}>
          <renderSingleElement.Provider value={renderItem}>
            <setRenderSingleElement.Provider value= {setRendersingle}>
                {children}
            </setRenderSingleElement.Provider>
          </renderSingleElement.Provider>
        </changedataContext.Provider>
      </dataContext.Provider>
    </>
  );
}
