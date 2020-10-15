import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownDivider,
} from 'bootstrap-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardDropdown = () => (
  <Dropdown
    className="text-sans-serif btn-reveal-trigger"
    trigger={['focus', 'hover']}
    toggle={(p) => (
      <DropdownToggle
        {...p}
        color="link"
        size="sm"
        utilities="btn-reveal text-600"
      >
        <FontAwesomeIcon icon="ellipsis-h" className="fs--2" />
      </DropdownToggle>
    )}
  >
    <DropdownItem>View</DropdownItem>
    <DropdownItem>Export</DropdownItem>
    <DropdownDivider />
    <DropdownItem utilities="text-danger">Remove</DropdownItem>
  </Dropdown>
);

export default CardDropdown;
