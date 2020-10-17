import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownToggle,
} from "bootstrap-react";
import React from "react";

const CardDropdown = () => (
  <Dropdown
    utilities="text-sans-serif btn-reveal-trigger"
    // trigger={['focus', 'hover']}
    toggle={(p) => (
      <DropdownToggle
        {...p}
        color="link"
        size="sm"
        utilities="btn-reveal text-600">
        <FontAwesomeIcon icon="ellipsis-h" className="fs--2" />
      </DropdownToggle>
    )}>
    <DropdownItem>View</DropdownItem>
    <DropdownItem>Export</DropdownItem>
    <DropdownDivider />
    <DropdownItem utilities="bg-danger" href="#!">
      Remove
    </DropdownItem>
  </Dropdown>
);

export default CardDropdown;
