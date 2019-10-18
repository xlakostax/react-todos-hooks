import React, { useState } from 'react';
import 'bulma/css/bulma.css'

const App = () => {

  const [list, setList] = useState([]);

  const addItem = (event) => {
    event.preventDefault();
    const newItem = document.getElementById('addInput');
    const form = document.getElementById('addItemForm');
    console.log(newItem.value)
    if (newItem.value !== ''){
      setList([...list, newItem.value]);
      form.reset();
    } else {
      newItem.classList.add('is-danger');
    }
  }

  const removeItem = (item) => {
    // Put our list into an array
    const newlist = list.slice();
    console.log(newlist);
    // Check to see if item passed in matches item in array
    list.some((element, i) => {
      if (element === item) {
        // If item matches, remove it from array
        newlist.splice(i, 1);
        console.log(newlist);
        return true;
      }
    });
    // Set newList to list
    setList([...newlist]);
  }

  return(
    <div className='content'>
      <div className='container'>
        <section className='section'>
          <div>
            <ul>
              {list.map((item,key) => (
                <li key={key}><span className="delete" onClick={() => removeItem(item)}/> {item}</li>
              ))}
            </ul>
          </div>
        </section>
        <hr />
        <form id='addItemForm' className='form'>
          <input id='addInput' className='input' type='text' placeholder='Text input' />
          <br />
          <br />
          <button className='button is-info' onClick={(event) => addItem(event)}>
            Add...
          </button>
        </form>
      </div>
    </div>
  )
}
export default App;
