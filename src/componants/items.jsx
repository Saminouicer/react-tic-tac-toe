import React from 'react'

const Items = ({id,turn,winer,setTurn,setWinner,items,item,setItems}) => {
   

    const handleValue=()=> {
        if(winer) return
        if(item==='') {
            if(turn==='x') {
                changeValue('x')
                setTurn('o')
            }else {
                changeValue('o')
                setTurn('x')
            }
        }
    }


    const changeValue=(value)=> {
        let copyItems=[...items]
        copyItems[id]=value
        setItems(copyItems)
    }



  return (
    <button onClick={()=> {handleValue()}} 
    className=
    {item==='x'?'bg-white w-[90px] h-[90px] flex items-center justify-center text-3xl font-bold text-[60px] text-red-700':
    'bg-white w-[90px] h-[90px] flex items-center justify-center text-3xl font-bold text-[60px] text-blue-700'}>
        {item}
    </button>
  )
}

export default Items