import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";

const MyDropdown = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <Dropdown>
          <DropdownToggle variant="success" id="dropdown-basic">
            Select an Option
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
            <DropdownItem>Option 4</DropdownItem>
            <DropdownItem>Option 5</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default MyDropdown;
