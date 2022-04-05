import React, { useEffect, useState } from "react";
import BookCard from "../BookCard";
import {Grid} from '@mui/material';
interface BookDetails{
    id:number;
    title:string;
    image:string;
    author:string;
    state:string;
}
interface Props{
    state:string;
}

const RenderBooks=(props:Props)=>{
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/books')
        .then(res =>res.json())
        .then(data => setBooks(data))
    },[])
    console.log(books);
    return(
        <Grid container spacing={2} wrap="wrap">
        {/* eslint-disable-next-line array-callback-return*/}
        {books.map((book:BookDetails) =>{
            // eslint-disable-next-line eqeqeq
            if(props.state == book.state){
                return (
                    <Grid item xs={12} sm={8} md={4} >
                    <BookCard key={book.id} id={book.id} author={book.author} title={book.title} pic={book.image} state={book.state}/>
                    </Grid>
                )
            }
            // eslint-disable-next-line eqeqeq
            if(props.state == 'All'){
                return (
                    <Grid item xs={12} sm={8} md={4} >
                    <BookCard key={book.id} id={book.id} author={book.author} title={book.title} pic={book.image} state={book.state}/>
                    </Grid>
                )
            }
        })
        }
        </Grid>
    )
}

export default RenderBooks;
