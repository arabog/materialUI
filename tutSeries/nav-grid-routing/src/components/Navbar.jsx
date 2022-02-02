import React from 'react';

import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

// import {
//           InboxIcon,
//           MailIcon
// } from '@mui/icons-material';

import { mainNavItem } from './const/navListItem';

import { navStyles } from './styles';

import { useParams, useNavigate } from 'react-router-dom';

// https://mui.com/components/drawers/

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" sx={navStyles.drawer} anchor="left">
      <Toolbar />

      <Box sx={{ overflow: 'auto' }}>
        <List>
          {mainNavItem.map((item, index) => (
            <ListItem button key={item.id} onClick={() => navigate(item.route)}>
              <ListItemIcon sx={navStyles.icons}>{item.icon}</ListItemIcon>

              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Navbar;
