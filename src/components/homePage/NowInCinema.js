import { Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCinema, fetchCinemas } from "../../redux/card/NowInCinema";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import img from "../../img/homePage/img3.png";

export default function NowInCinema() {
  const dispatch = useDispatch();
  const cinemas = useSelector(selectAllCinema);

  useEffect(() => {
    dispatch(fetchCinemas());
  }, []);

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: "900" }}>
          Сейчас в кино
        </Typography>
        <Box
          style={{ width: "50px", height: "1px", backgroundColor: "#fff" }}
        ></Box>
        <List
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ListItem sx={{ cursor: "pointer" }}>
            <Typography
              variant="h6"
              sx={{ color: "#fff", fontSize: "16px", fontWeight: "400" }}
            >
              Все
            </Typography>
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }}>
            <Typography
              variant="h6"
              sx={{ color: "#6F717B", fontSize: "16px", fontWeight: "400" }}
            >
              Боевики
            </Typography>
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }}>
            <Typography
              variant="h6"
              sx={{ color: "#6F717B", fontSize: "16px", fontWeight: "400" }}
            >
              Приключения
            </Typography>
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }}>
            <Typography
              variant="h6"
              sx={{ color: "#6F717B", fontSize: "16px", fontWeight: "400" }}
            >
              Комедии
            </Typography>
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }}>
            <Typography
              variant="h6"
              sx={{ color: "#6F717B", fontSize: "16px", fontWeight: "400" }}
            >
              Фантастика
            </Typography>
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }}>
            <Typography
              variant="h6"
              sx={{ color: "#6F717B", fontSize: "16px", fontWeight: "400" }}
            >
              Триллеры
            </Typography>
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }}>
            <Typography
              variant="h6"
              sx={{ color: "#6F717B", fontSize: "16px", fontWeight: "400" }}
            >
              Драма
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        {cinemas.map((item, index) => (
          <>
            <img src={item.img} alt="poter" />
            <Typography variant="h4">{item.name}</Typography>
            {console.log(item)}
          </>
        ))}
      </Box>
    </Box>
  );
}
