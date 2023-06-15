import {useEffect, useState} from "react"
import ReqGet from "./reqGet";
import ReqPost from "./reqPost";
import ConvertUnix from "./utils"
import "./chat/chat.css"
import "./chat/reset.css"

function App() {

  const SvgLogo = <svg className="svgIcons" width="50" height="50" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M52.1544 14.798C46.3423 9.07439 38.2936 5.53125 29.3999 5.53125C20.5586 5.53125 12.5523 9.03284 6.74805 14.6973" stroke="#700EFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.19434 36.2289C8.19434 24.462 17.7331 14.8524 29.5 14.8524" stroke="#700EFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M38.3125 16.7546C45.6819 20.107 50.8057 27.5341 50.8057 36.1581" stroke="#700EFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.5156 45.4792V36.1581C17.5156 29.5392 22.8811 24.1736 29.5 24.1736C36.1189 24.1736 41.4844 29.5392 41.4844 36.1581V45.4792" stroke="#700EFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.542 53.4687C23.9548 52.8731 25.5048 50.329 25.5048 48.1785C25.5048 45.8915 25.5048 42.3284 25.5048 37.4895C25.5048 35.2833 27.2933 33.4948 29.4996 33.4948C31.706 33.4948 33.4943 35.2833 33.4943 37.4895V48.1785" stroke="#700EFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 

  const [data, setData] = useState([])
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    reqGet()
  }, [count])
  
  let reqPost = async(e) => {
    e.preventDefault()
    await ReqPost(message)
    setCount(count + 1)
  }

  let reqGet = async() => {
    await ReqGet(setData)
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      reqPost(e);
    }
  };



  return (
    <div className="App">
      <div className="Header">
      <h1 className="Header-text">{SvgLogo} UNIVERSITY.Inc</h1>
      </div>
      {data.map((item,idx) => {
          return(
          <div className="container__mes">
            <div className="txt" key={idx}>
              <p className="text__msg">{item.author} : {item.content} <p className="time__msg">{ConvertUnix(item.created)}</p> </p>
            </div>
          </div> 
          )
        })}
      <div className="IntMess">
        <input className="ent" placeholder="Написать сообщение..." type="text" value={message} onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}/>
      <button className="btn" onClick={(e) => reqPost(e)}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
