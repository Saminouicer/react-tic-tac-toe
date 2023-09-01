import { useEffect, useState } from 'react';
import './App.css';
import Items from'./componants/items.jsx'

function App() {


  const [turn,setTurn]=useState('x')
  const [winer,setWinner]=useState('')
  const [items,setItems]=useState(['','','','','','','','','',])
  const winnerCases=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

    const checkWinner=()=> {
      winnerCases.forEach((cas)=> {
        const [a,b,c]=cas;
          
        if(items[a]==='x' && items[a]===items[b] && items[b]===items[c] ) {
          setWinner('the winner is x')
        }else {
          if(items[a]==='o' && items[a]===items[b] && items[b]===items[c] ){
            setWinner('the winner is o')
          }
          else {
            if(items.every((item)=> item!=='' ) && !winer) {
              setWinner('draw')
            }
          }
        }
      })
    }

    const restart=()=> {
          setItems(items.map((item)=> {
            return ''
          }))
          setWinner('')
          setTurn('x')
    }

    useEffect(
      ()=> {checkWinner()}
    ,[items,checkWinner])
 


       




  return (
     <div className="App mt-[100px]">
      <span>{winer?winer:`turn :` + turn}</span>
      <div className='max-w-[350px] h-[350px] mx-auto bg-blue-600  flex justify-between content-between flex-wrap p-4 '>
          {
            items.map((item,index)=> {
              return <Items 
               key={index}
               id={index}
                item={item}
                 turn={turn} 
                 winer={winer}
                 items={items}
                 setItems={setItems}
                 setWinner={setWinner}
                 setTurn={setTurn}
                 />
            })
          }
      </div>
      <button onClick={()=> {restart()}} className='bg-green-600 text-white text-lg p-2 rounded-lg mt-4 hover:bg-green-700 duration-300'>restart</button>
    </div>
    
  );
}

export default App;
