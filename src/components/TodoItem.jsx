import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux"; // ванильный - чистый, без библиотек, ванильный реакт
import { changeTodoStatus } from "../store/todoSlice";
import styles from "../index.module.css";


export default function MediaCard({ todo }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 20}} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <input
            type="checkbox"
            onChange={() => dispatch(changeTodoStatus(todo.id))}
          />
          <p className={todo.status ? styles.completed : styles.undone}>
            {todo.body}
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">DELETE</Button>
        <Button variant="contained">EDIT</Button>
      </CardActions>
    </Card>
  );
}
