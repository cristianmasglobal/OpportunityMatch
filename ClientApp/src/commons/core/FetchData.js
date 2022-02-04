import React, {useState, useEffect} from 'react';

export function FetchData() {
  const [todos, setTodos] = useState([]);
    const apiConsuming = `https://localhost:44324/customers`

  const fetcApi = async () => {
    const res = await fetch(apiConsuming)
    const responseJSON = await res.json()
      console.log(responseJSON)
      console.log(responseJSON[0])
      setTodos(responseJSON)
      console.log(todos)
  }

  useEffect(()=>{
    fetcApi()
  },[])

  return (
    <>
    <div>
      <ul>
        {!todos ? "Cargando ..." :
        todos.map((todo, index)=>{
            return (<>
                <li>client ID: {todos[index]["id"]}</li>
                <li>Client name: {todos[index]["clientName"]}</li>
                <li>Approve name: {todos[index]["approveName"]}</li>
                <li>Approve email: {todos[index]["approveEmail"]}</li>
                <li>MSA response: {todos[index]["isMSArequired"] ? "True" : "False"}</li>
                <br></br>
                _________________________________________________________________
          </>)
        })}
                  
      </ul>
    </div>
    </>
  )
}
