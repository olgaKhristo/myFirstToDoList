import Title from "./components/title"
import "./style.css"

export default function App() {
  return <form className = "new-item-form">
<div className="form-row">
<Title myTitle = "New Title"/>
<label htmlFor = "item">New Item</label>
<input type = "text" id = "item"/>  
</div>
  </form>
}
