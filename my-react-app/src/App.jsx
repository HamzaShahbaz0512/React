import { useState } from 'react'

/*Buttons updated separately*/
export default function myApp(){

  return(
    <div>
      <h1>Buttons that update separately</h1>
      <MyButton/>
      <br/>
      <MyButton/>
    </div>
  )
}
function MyButton() {
  const [count, setCount] = useState(0);
    function handleClick()
    {
      setCount(count+1);
    }
    return(<button onClick={handleClick}>
      "I have been clicked {count} times"
    </button>)
}


/*It update both buttons at once
export default function myApp()
{

    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Buttons that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <br />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}

*/

