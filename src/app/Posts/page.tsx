"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Accordion, AccordionItem} from "@nextui-org/react";

interface PhotoData {
    id: number;
    title: string;
    body: string;
  }

const Posts = () => {
    const [data, setData] = useState<PhotoData[]>([]);
    useEffect(() => {
        fetchData();
    }, []);
  
    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    return (
        <div className='container'>
            <h1 className='text-4xl'>Posts</h1>
                <Accordion>
                    {
                        data.map((i)=>(
                        <AccordionItem key={i.id} aria-label="Accordion 1" title={i.id + ' -> ' + i.title}>
                            {i.body}
                        </AccordionItem>
                        ))
                    }
                </Accordion>
        </div>
    )
}

export default Posts