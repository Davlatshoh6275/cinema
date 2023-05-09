import { Box } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectAllCinema, fetchCinemas } from '../../redux/card/NowInCinema';

export default function NowInCinema() {

  const dispatch = useDispatch()
  const cinemas = useSelector(selectAllCinema)

  useEffect(() => {
    dispatch(fetchCinemas());
  }, []);
  
  console.log(cinemas);


  return (
    <Box>

        salom
    </Box>
  )
}
