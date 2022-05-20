import React from "react";
import "./styles.css";
import { Card, Box, CardContent, CardActions } from "@mui/material";
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default function App() {
  const [tasks, setTasks] = React.useState([
    { id: "1001", finished: true, title: "学习 Python Django 框架" },
    { id: "1002", finished: false, title: "使用 Django 框架进行项目实践" },
    { id: "1003", finished: true, title: "学习 React 基础知识" },
    { id: "1004", finished: false, title: "整理 React 笔记" },
    { id: "1005", finished: false, title: "学习虚拟机相关知识" }
  ]);
  const insertHandler = (item) => setTasks([item, ...tasks]);
  const updateHandler = (id) =>
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, finished: !item.finished } : item
      )
    );
  const removeHandler = (id) =>
    setTasks(tasks.filter((item) => item.id !== id));
  const removeFinishedHandler = () =>
    setTasks(tasks.filter((item) => !item.finished));
  const checkAllHandler = (flag) =>
    setTasks(
      tasks.map((item) => {
        return { ...item, finished: flag };
      })
    );
  return (
    <Card sx={{ maxWidth: 800, margin: "50px auto 0" }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <MyHeader insertHandler={insertHandler}></MyHeader>
        {tasks.length > 0 ? (
          <MyList
            tasks={tasks}
            updateHandler={updateHandler}
            removeHandler={removeHandler}
          ></MyList>
        ) : (
          <Box
            sx={{
              padding: "100px 50px",
              textAlign: "center",
              color: "lightgray"
            }}
          >
            您已经完成了所有任务
          </Box>
        )}
      </CardContent>
      <CardActions>
        <MyFooter
          tasks={tasks}
          checkAllHandler={checkAllHandler}
          removeFinishedHandler={removeFinishedHandler}
        ></MyFooter>
      </CardActions>
    </Card>
  );
}
