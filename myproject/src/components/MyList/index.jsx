import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Button
} from "@mui/material";

export default function MyList(props) {
  const [hoverItem, setHoverItem] = React.useState(null);

  const tasks = props.tasks;

  const updateHandler = (id) => () => props.updateHandler(id);

  const removeHandler = (id) => () => props.removeHandler(id);

  const handleMouseOver = (e) =>
    setHoverItem(e.currentTarget.getAttribute("myid"));

  return (
    <div>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          minHeight: "200px",
          maxHeight: "320px",
          overflowX: "hidden"
        }}
        onMouseLeave={() => setHoverItem(null)}
      >
        {tasks.map((item) => {
          const labelId = `checkbox-list-label-${item.id}`;

          return (
            <ListItem
              key={item.id}
              secondaryAction={
                hoverItem === item.id ? (
                  <Button
                    edge="end"
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={removeHandler(item.id)}
                  >
                    移除
                  </Button>
                ) : null
              }
              disablePadding
              myid={item.id}
              onMouseEnter={(e) => handleMouseOver(e)}
            >
              <ListItemButton onClick={updateHandler(item.id)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={item.finished}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
