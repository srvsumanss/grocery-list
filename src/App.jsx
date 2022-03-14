import './App.css';
import { useState } from 'react';


import Grocery from "./components/Grocery";

function App(){
    const [inputList,setInputList]=useState("")
    const [item,setItem]=useState([])

    const inputItem =(ele) =>{
        setInputList(ele.target.value)
    }
    const AddItem =()=>{
        setItem((GroceryItem)=>{
            return [...GroceryItem,inputList]
        })
        setInputList("")
    }
    const DeleteItem = (id)=>{
        setItem((GroceryItem)=>{
            return GroceryItem.filter((cur,index)=>{
                return index!==id
            })
        })
    }
    return(
        <div className='App'>
            <h1>Grocery List</h1>
            <div>
                <input type="text" placeholder='Enter grocery list' value={inputList}onChange={inputItem}/>
                <button onClick={AddItem}>Add Item</button>
            </div>
            <div>
                {item.map((list,index)=>{
                    return(
                        <h3>
                            <Grocery key={index} id={index} list={list} onSelect={DeleteItem}/>
                            </h3>
                    )
                })}
            </div>
        </div>
    );
}
export default App ;