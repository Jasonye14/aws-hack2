import React from "react";

// Components
import { Sidebar } from "./sidebarStyles";

function MainSideBar(props) {
  return (
    <Sidebar>This is the sidebar...
      {props.children}
    </Sidebar>
  );
}

export default MainSideBar;