import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

function App() {
  const [name, setName]= useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ 
    show: false, 
    msg: '', 
    type: '',
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // if user try to submit item without a name
    if (!name) {
      // display alert
      showAlert(true, 'danger', 'please write a value');
    } else if (name && isEditing) {
      // edit
      setList(
        // we iterate through our list
        list.map((item) => {
          // if the item id matches our editID state value
          if (item.id === editID) {
            // we bring all the object properties but modify the title with our name state value
            return { ...item, title: name}
          }
          return item;
        })
      )
      // and set free the rest of our state values
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'grocery item updated');
    } else {
      // show alert
      showAlert(true, 'success', 'item added to the grocery list')
      // use the time to create id because idon't want to deploy any additional library
      const newItem = {id: new Date().getTime().toString(), title: name};
      // default list value is an empty array, use the spread operator
      // to bring all the previous elements of list then add newItem as an aditional value in the list
      setList([...list, newItem]);
      // setName as an empty string for the new item adition
      setName('');
    }
  }

  const showAlert = (show='', type='', msg='') => {
    // here we use that ES6 feature if the property name matches to te variable name that holds the value
    // just type it
    setAlert({show, type, msg});
  }

  const clearList = () => {
    showAlert(true, 'danger', 'You just empty the list')
    setList([]);
  }
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed from the grocery list');
    // will filter the list returning the items that don't match with the id passed as parameter
    setList(list.filter((item) => item.id !== id ));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    // Here we pass the title to show it on the input in order to modify it
    setName(specificItem.title);

  }

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {/* remember, use && for check only one condition */}
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input 
          type='text' 
          className='grocery' 
          placeholder='e. g. eggs' 
          value={name}
          onChange={(e) => setName(e.target.value)} />
          <button type='submit' className='submit-btn'>
            {/* but if you are checking if-else conditions use ? and :*/}
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {/* if the list has more values than default, render the items within and our clear list button */}
      {list.length > 0 && (
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className='clear-btn' onClick={clearList}>clear list</button>
      </div>
      )}
    </section>
  )
}

export default App
