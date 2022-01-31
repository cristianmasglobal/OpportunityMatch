import React, {useState, useEffect} from 'react';

export function FetchData() {
  const [todos, setTodos] = useState();
  const apiConsuming = `https://pokeapi.co/api/v2/pokemon/`

  const fetcApi = async () => {
    const res = await fetch(apiConsuming)
    const responseJSON = await res.json()
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
        {! todos ? "Cargando ...":
        todos.results.map((todo, index)=>{
          return (<>
            <li>{todos.results[index].name}</li>
          </>)
        })}
      </ul>
    </div>
    </>
  )
}
