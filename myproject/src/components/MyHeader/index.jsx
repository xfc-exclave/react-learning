import React, { Component } from "react";
import {
  TextField,
  Typography,
  Alert,
  IconButton,
  Collapse
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { nanoid } from "nanoid";

export default class MyHeader extends Component {
  keyUpHandler = (e) => {
    const { keyCode, target } = e;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      this.setState({ alertOpen: true });
      setTimeout(() => this.setState({ alertOpen: false }), 2000);
      return;
    }
    const item = { id: nanoid(), finished: false, title: target.value };
    this.props.insertHandler(item);
    target.value = "";
  };

  state = { alertOpen: false };

  render() {
    return (
      <React.Fragment>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          我的任务清单
        </Typography>
        <TextField
          id="outlined-basic"
          fullWidth
          size="small"
          label="任务标题"
          placeholder="请输入任务标题，并按回车键确认"
          variant="outlined"
          autoComplete="off"
          sx={{ margin: "5px" }}
          onKeyUp={this.keyUpHandler}
        />
        <Collapse in={this.state.alertOpen}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => this.setState({ alertOpen: false })}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            任务标题不能为空
          </Alert>
        </Collapse>
      </React.Fragment>
    );
  }
}
