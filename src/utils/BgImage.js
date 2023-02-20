import {useState, useEffect} from 'react';
export const useBgImage=()=>{
    const [img, setImage]=useState('');
    const generateBgImage=()=>{
        const newImg=`https://source.unsplash.com/random/1920x1280/?img=${Math.floor(Math.random() * 100)}`
        setImage(newImg);
    };
    useEffect(()=>{
        generateBgImage();
    },[]);
    return {img}
}
