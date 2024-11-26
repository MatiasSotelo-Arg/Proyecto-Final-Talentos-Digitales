import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList/ItemList'
import items from './data/data.json'
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {
  
  const item = items[0];
  console.log(items)
  return (
    <>
     <ItemList items={items}/>
     <ItemDetail item={item}/>
    </>
  )
}

export default App
