import { Box } from "@mui/system";
import React from "react";
import HomePage from "./components/homePage/HomePage";
import bgImg from "./img/homePage/bg.png";
import logo from "./img/homePage/logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

export default function App() {
  return (
    <Box width={"100%"} height={"100%"} bgcolor={"#1E2538"}>
      <Box
        width={"100%"}
        height={"100vh"}
        boxSizing={"border-box"}
        sx={{
          margin: "0px",
          padding: "0px",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "100%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "80px",
              padding: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box width={"5%"} height={"100%"}>
              <img src={logo} alt="" width={"110px"} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <WhatsAppIcon sx={{ color: "#686868" }} fontSize={"small"} />
                <InstagramIcon sx={{ color: "#fff" }} fontSize={"small"} />
                <YouTubeIcon sx={{ color: "#686868" }} fontSize={"small"} />
                <TwitterIcon sx={{ color: "#686868" }} fontSize={"small"} />
              </Box>
            </Box>

            <List
              sx={{
                width: "50%",
                height: "100%",
                padding: "0",
                paddingBottom: "30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ListItem sx={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "16px" }}
                >
                  Афиша
                </Typography>
              </ListItem>
              <ListItem sx={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "16px" }}
                >
                  Медиа
                </Typography>
              </ListItem>
              <ListItem sx={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "16px" }}
                >
                  Фильмы
                </Typography>
              </ListItem>
              <ListItem sx={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "16px" }}
                >
                  Актёры
                </Typography>
              </ListItem>
              <ListItem sx={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "16px" }}
                >
                  Новости
                </Typography>
              </ListItem>
              <ListItem sx={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "16px" }}
                >
                  Подборки
                </Typography>
              </ListItem>
              <ListItem sx={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "16px" }}
                >
                  Категории
                </Typography>
              </ListItem>
            </List>
            <Box
              sx={{
                height: "100%",
              }}
            >
              <Button
                size="small"
                sx={{
                  width: "40px",
                  height: "40px",
                  bgcolor: "#fff",
                  marginRight: "12px",
                }}
              >
                <SearchIcon />
              </Button>
              <Button
                size="large"
                variant="contained"
                sx={{
                  background: "#3657CB",
                  boxShadow: " 0px 0px 15px rgba(72, 113, 255, 0.8)",
                  height: "40px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  Войти
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <HomePage />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
