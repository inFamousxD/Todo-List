import React from 'react'

function Form({input,setinput,todo,settodo}) {
    const handleChange=e=>{
        setinput(e.target.value)

    }
    const onformsubmit=(e)=>{
        e.preventDefault()
      if(input!=""){
    const inputsval={
   id:Math.floor(Math.random()*1000),
    title:input,
    completed:false
    }
      settodo([...todo].concat(inputsval))
      setinput("")
    }}  
    // const addtasks=()=>{
    //     if(input!=""){
    //         const inputs=()=>{
    //            let id=Math.floor(Math.random()*1000)
    //            let title=input
    //            let completed="false"
    //         }
    //         }
    //         }
    //         const inputsval=()=>{
    //             let id=Math.floor(Math.random()*1000)
    //             let title=input
    //             let completed="false"
    //          }
        
    
    return (
        <div>
            <form onSubmit={onformsubmit} className="forms"> 
                <input type="text" autoComplete="off" onChange={handleChange} placeholder="Add a todo item" className="todo-input" value={input}></input>
                 <button className="buttons" type="submit"  onSubmit={onformsubmit}>ADD</button>
          
            </form>
        </div>
    )
}

export default Form
