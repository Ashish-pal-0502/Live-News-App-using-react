import { useEffect, useState} from "react";
import News from "./News";

import './App.css';
function App() {
  let [articles, setArticles]= useState([]);
  let [category, setCategory] = useState("america")

  useEffect(()=>{

    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-13&apiKey=470a5193d650431bae26544e4d2eea3f`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      // console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[category])
  return (


    <div className="App">

      <header className="header">

      <h2 >News-App</h2>

      <input type="text" onChange={(event)=>{
        if(event.target.value!=="")
        {
          setCategory(event.target.value);

        }
        else
        {
          setCategory("india");
        }
      }} placeholder="Search News"/>
      </header>

      <section className= "news-articles">


        {

          articles.length!==0?
          articles.map((article)=>{
          return(
            <News article = {article}/>
          )
          })
          :
          <h3>No News Found!</h3>
        }
      
     
      </section>
    </div>
  );
}

export default App;
