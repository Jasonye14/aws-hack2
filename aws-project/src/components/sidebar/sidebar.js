import React from "react";

// Components
import { Sidebar } from "./sidebarStyles";

function MainSideBar(props) {
  return (
    <Sidebar>
      {props.children}
    </Sidebar>
  );
}

export default MainSideBar;