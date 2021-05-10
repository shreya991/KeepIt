import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { CreateNote } from './CreateNote';
import Note from './Note';

const App = () => {

  const [addItem, setaddItem] = useState([]);

  const addNote = (note) => {
    // alert('I am clicked');
    setaddItem((prev) => {
      return [...prev, note];
    });
  }

  const onDelete=(id)=>{
      setaddItem((olddata)=>{
        return olddata.filter((currdata,indx)=>{
          return indx!==id;
        })
      })
  }
  return (
    <>
      < Header />

      <CreateNote passNote={addNote} />

     
    {addItem.map((val, index) => {

          return <Note
             key={index}
             id={index}
             title={val.title}
           content={val.content}
           deleteItem={onDelete}/>
         
      })}
      
      <Footer />
    </>
  )
}

export default App;
