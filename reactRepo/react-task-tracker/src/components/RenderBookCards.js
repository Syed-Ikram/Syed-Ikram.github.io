import React, { useEffect, useState } from "react";
import BookCard from './BookCard';
import {Grid} from '@mui/material';

export default function RenderBookCards(props){
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/books')
        .then(res =>res.json())
        .then(data => setBooks(data))
    },[])
    console.log(books);
    return(
        <Grid container spacing={2} wrap="wrap">
        {books.map(book =>{
            if(props.state == book.state){
                return (
                    <Grid item xs={12} sm={8} md={4} >
                    <BookCard key={book.id} author={book.author} title={book.title} pic={book.image} state={book.state}/>
                    </Grid>
                )
            }
            if(props.state == 'All'){
                return (
                    <Grid item xs={12} sm={8} md={4} >
                    <BookCard key={book.id} author={book.author} title={book.title} pic={book.image} state={book.state}/>
                    </Grid>
                )
            }
        })
        }
        </Grid>
    )
}
