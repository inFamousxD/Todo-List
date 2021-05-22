import React ,{useState} from 'react'

function TodoList({todo,settodo}) {
    function deletetodo(id){
        const updatetodo=[...todo].filter((todol)=>(todol.id!==id))
        settodo(updatetodo)
    }
    function toggleit(id){
        const updatetodo=[...todo].map((todol)=>{
            if(todol.id===id){
                todol.completed=!todol.completed

            }
            return todol
        })
        settodo(updatetodo)
    }
    const [line, setline] = useState(false)
    const cutline=()=>{
         setline(true);
         
    }

    return (
        <div>
            
            {todo.map((todol)=>(
               <div key={todol.id} className="div-items">
                   <span >
                    <input type="checkbox" onChange={()=>toggleit(todol.id)} onClick={cutline} checked={todol.completed} className="check-box"></input> 
                   
                   </span>
                   <div className="itemslists" style={{textDecoration:line?"line-through":"none"}}>{todol.title}</div>
                   <i className="fa fa-trash-o" onClick={()=>deletetodo(todol.id)}></i>
                </div>)

    
            )}
        </div>
    ) }

   


export default TodoList
