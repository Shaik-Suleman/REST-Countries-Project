import React, { useEffect, useState } from 'react'
import "./Mytodolist.css"
function Mytodolist() {
    const [title,settitle]=useState("")
    const [desc,setdesc]=useState("")
    const [maintask,setmaintask]=useState([])
    // const[color,setcolor]=useState(false)
    const deletehandler=(i)=>{
        let copy=[...maintask]
        copy.splice(i,1)
        setmaintask(copy)
    }
    let render=<h2>No Task Available</h2>
            if(maintask.length>0){
                render=maintask.map((t,i)=>{
                    return (<li key={i}><div className='container'>
                        <h4>Title:{t.title}</h4>
                        <h5>Dscription:{t.desc}</h5>
                    </div>
                    <button className='delete'  onClick={()=>{
                        deletehandler(i)
                    }}>Delete</button>
                   </li>)
                })
            }
        // useEffect(()=>{
        //     localStorage.setItem("key","hi")
        // },[maintask])
            
  return (
    <>
    {/* <div style={{height:"300px",width:"300px", backgroundColor:color? "black":"red"}}></div> */}
    <h1 >My Todo List</h1>
    <form  onSubmit={(e)=>{
        e.preventDefault()
        // console.log(title,desc)
        setmaintask([...maintask,{title,desc}])
        settitle("")
        setdesc("")
        // // useEffect(()=>{
        //     localStorage.setItem("task",[...maintask])
        // // },[])
        
        
    }}>   
    <input type="text" className='title' placeholder='Enter the Title' required value={title} onChange={(e)=>{
        settitle(e.target.value.trim())
    }} />
    <input type="text" className='discription' placeholder='Enter the Discription' required value={desc} onChange={(e)=>{
        setdesc(e.target.value.trim())
    }} />
    <button type='submit'>Add Task</button>
    </form>
    <hr />
    <div className='render-container'>
        {render}
    </div>
    {/* <button onClick={()=>{
        setcolor(!color)
    }}>change color</button> */}
    </>
  )
}

export default Mytodolist