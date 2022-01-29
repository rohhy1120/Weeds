import Grass from "./Grass";
import react, { useState } from "react";

const Weeds = (props) => {
  const [weed, setWeed] = useState([]);
  let i;
  for(i=0;i<84;i++){
    const now = new Date();
    weed.unshift({
      count : 0,
      date : new Date(now.setDate(now.getDate() - i)),
    });
  }
  console.log(weed);
  const calDate = (day, today) => {
    return today - day;
  };
  const context = props.data.map((grass)=>{
    weed.filter((data)=>{
      // return data.date ===
    });
  });
  console.log(props.datas);
  return <div>
    asd
  </div>
};
export default Weeds;