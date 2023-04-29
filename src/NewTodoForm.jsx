export function NewTodoForm({onSubmit}){
    props.onSubmit
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
   
    e.preventDefault()
  //prevent from refreshing e.preventDefault
  if(newItem === "") return
onSubmit(newItem)
  setNewItem("")
  }
    return(
<form onSubmit={handleSubmit} className = "new-item-form">  
<div className="form-row">

<label htmlFor = "item">New Item</label>
<input value = {newItem} 
onChange={e => setNewItem(e.target.value)} 
//liestening for chage and change it to a new value
type = "text" id = "item"/>  
</div>
<button className="btn">Add</button>
  </form>
    )
}