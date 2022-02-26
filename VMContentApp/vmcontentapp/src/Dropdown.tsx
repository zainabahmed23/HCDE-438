import type { ReactElement } from "react";
import { HomeSVGIcon, InfoOutlineSVGIcon } from "@react-md/material-icons";
import {
  DropdownMenu,
  DropdownMenuProps,
  MenuItem,
  MenuItemLink,
  MenuItemSeparator,
} from "@react-md/menu";

export default function Demo(props: Partial<DropdownMenuProps>): ReactElement {
  return (
    <DropdownMenu id="dropdown-menu-1" buttonChildren="Options..." {...props}>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem leftAddon={<HomeSVGIcon />}>Item 3 </MenuItem>
      <MenuItem rightAddon={<InfoOutlineSVGIcon />}>
        <span>Custom content</span>
      </MenuItem>
      <MenuItemSeparator />
      {/* You can provide a custom link component by using `component={Link}` */}
      <MenuItemLink href="#">Link 1</MenuItemLink>
      <MenuItemSeparator inset />
      <MenuItemLink href="#">Link 2</MenuItemLink>
    </DropdownMenu>
  );
}
