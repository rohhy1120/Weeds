import style from "./Grass.module.css";

const Grass = (props) => {
  let color;
  if(props.count===0){
    color = style.zero;
  }
  else if(props.count>=1 && props.count<=3){
    color = style.one;
  }
  else if(props.count<=6){
    color = style.two;
  }
  else if(props.count<=10){
    color = style.three;
  }
  else {
    color = style.four;
  }
  return <p className={`${style.grass} ${color}`}>{props.count}</p>;
};
export default Grass;
