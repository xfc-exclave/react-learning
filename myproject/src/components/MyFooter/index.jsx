import React from "react";
import {
  Button,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText
} from "@mui/material";

export default function MyHeader(props) {
  const total = props.tasks.length;
  const finishedCount = props.tasks.reduce(
    (counter, item) => counter + (item.finished ? 1 : 0),
    0
  );

  const removeFinishedHandler = () => props.removeFinishedHandler();
  const checkAllHandler = (e) => props.checkAllHandler(e.target.checked);
  return (
    <React.Fragment>
      <ListItem sx={{ paddingLeft: "26px", borderTop: "1px solid lightgray" }}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            checked={finishedCount === total && total !== 0 ? true : false}
            disableRipple
            onChange={checkAllHandler}
          />
        </ListItemIcon>
        <ListItemText>
          已完成：{finishedCount} / {total}
        </ListItemText>
        <Button
          edge="end"
          variant="outlined"
          color="error"
          onClick={removeFinishedHandler}
        >
          清除已完成
        </Button>
      </ListItem>
    </React.Fragment>
  );
}
