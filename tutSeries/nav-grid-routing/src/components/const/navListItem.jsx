import { PeopleAltIcon } from '@mui/icons-material/PeopleAlt';
import StorageIcon from '@mui/icons-material/Storage';
import AddCardIcon from '@mui/icons-material/AddCard';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import FunctionsIcon from '@mui/icons-material/Functions';
import PsychologyIcon from '@mui/icons-material/Psychology';

export const mainNavItem = [
  {
    id: 0,
    icon: <PeopleAltIcon />,
    label: 'Authentication',
    route: 'authentication',
  },

  {
    id: 1,
    icon: <StorageIcon />,
    label: 'Database',
    route: 'database',
  },

  {
    id: 2,
    icon: <AddCardIcon />,
    label: 'Storage',
    route: 'storage',
  },

  {
    id: 3,
    icon: <AllInboxIcon />,
    label: 'Hosting',
    route: 'hosting',
  },

  {
    id: 4,
    icon: <FunctionsIcon />,
    label: 'Functions',
    route: 'functions',
  },

  {
    id: 5,
    icon: <PsychologyIcon />,
    label: 'Machine Learning',
    route: 'machine-learning',
  },
];
