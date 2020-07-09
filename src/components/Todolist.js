import React ,{useState} from "react"
import Todoitem from "./Todoitem"

const Todolist = () => {
    const [state,setState] = useState({
        todo:'',
        todolist: []
    })
    const [edit,setEdit] = useState({
        editTodo : '',
        editIndex: ''
    })
    const [isUpdate,setIsUpdate] = useState(false)
    const {editTodo,editIndex} = edit
    const handleOnChangeEdit = (e) => {
        const { name, value } = e.target
    
        setEdit({ ...edit, [name]: value })
      }

    
    const {todo, todolist } = state

    const handleOnChange = (e) =>{
        const {name, value}  = e.target
        setState({...state,[name]:value})
    }
    const handleOnClickEdit = (index, value) => {
        setIsUpdate(true)
        setEdit({editTodo:value,editIndex:index})
    }
    const handleOnClickCancel = () => {
        setIsUpdate(false)
    }

    //Create 
    const createTodo = () =>{
        const list = todolist
        list .push(todo) // add todo data 

        setState({todo:'',todolist:list})
    }
    // delete
    const deleteTodo = (index) =>{
        const list = todolist// curent data
        list.splice(index,1) // minus 1 data

        setState({todo:'',todolist:list})
    }

    //update 

    const updateTodo = (editIndex) => {
        const list = todolist
        list[editIndex] = editTodo

        setState({...state, todolist:list})
        setIsUpdate(false)
        setEdit({ editTodo : '',editIndex: ''})
    }
    return(
        <div className="todolist-main">

            <div className="form-wrapper">
                <input type="text"
                         placeholder="Create todolist" 
                         name="todo"
                         value={todo}
                        onChange={handleOnChange}
                />
                <button onClick={createTodo}>add</button>
            </div>
            <div className="table-main">
                <div className="header-wrapper">
                    <span>
                        To Do
                    </span>
                    <span>
                        Action
                    </span>
                </div>
                {
                    todolist.length ? 
                        todolist.map((value, index)=>(
                            <Todoitem
                                key={index}
                                index={index}
                                value={value}
                                deleteTodo={deleteTodo}
                                handleOnClickEdit={handleOnClickEdit}
                            />
                            )):<span>No record found</span>
                        
                }
                {
                    isUpdate ?
                    <div className="form-wrapper2">
                        <span>Index: {editIndex}</span>
                        <input
                        type="text"
                        name="editTodo"
                        placeholder="Update todo"
                        value={editTodo}
                        onChange={handleOnChangeEdit}
                        />
                        <button onClick={() => updateTodo(editIndex)}>Update</button>
                        <button onClick={handleOnClickCancel}>Cancel</button>
                    </div> : ''
                }
            </div>
            
        </div>
    )
}

export default Todolist