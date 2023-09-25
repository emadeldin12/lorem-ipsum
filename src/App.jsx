import { useState } from "react";
import data from "./data";
const App = () => {
  const [count,setCount] = useState(1);
  const [text,setText] = useState([]);

  const handleSubmit = (e) =>{
e.preventDefault();
let amount = parseInt(count)
setText(data.slice(0,amount))
//console.log( typeof count);
//console.log(1);
  };
  return(
    <section className="secthion-center">
<h4>tired of boring Lorem ipsum?</h4>
<form className="lorem-form" onSubmit={handleSubmit}>
<label htmlFor="amount">paragraph:</label>  
<input type="number" name="amount" id="amount" min='1'
 step='1' max='8' value={count} onChange={(e) => setCount(e.target.value)} />
  <button className="btn" tupe="submit">
    generate
  </button>
  </form>
  <article className="lorem-text">
{text.map((item,index)=>{
  return <p key={index}>{item}</p>
})}
  </article>
  </section>
  );
};
export default App;
