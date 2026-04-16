import { UserIcon, SettingsIcon, BellIcon, LogOutIcon, ShoppingBagIcon, ListOrdered } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useDispatch } from 'react-redux'
import { removeUser } from '../features/user/userSlice.js'
import { useNavigate } from 'react-router'

const adminItems = [
  {
    icon: UserIcon,
    property: 'Profile'
  },
  {
    icon: SettingsIcon,
    property: 'Admin Panel'
  },
  {
    icon: ListOrdered,
    property: 'Orders'
  },
  {
    icon: BellIcon,
    property: 'Notifications'
  },
  {
    icon: LogOutIcon,
    property: 'Sign Out'
  }
]


const userItems = [
  {
    icon: UserIcon,
    property: 'Profile'
  },
  {
    icon: ShoppingBagIcon,
    property: 'Cart'
  },
  {
    icon: ListOrdered,
    property: 'Orders'
  },
  {
    icon: BellIcon,
    property: 'Notifications'
  },
  {
    icon: LogOutIcon,
    property: 'Sign Out'
  }
];




export default function DropdownMenuUser({ user }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const listItems = user.role === 'admin' ? adminItems : userItems;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon' className='overflow-hidden rounded-full'>
          <img src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem
              onClick={() => {
                switch (item.property) {
                  case 'Sign Out':
                    dispatch(removeUser());
                    break;

                  case 'Profile':
                    nav(`/profile`);

                    break;

                  case 'Admin Panel':
                    nav(`/admin`);
                    break;

                  case 'Orders':
                    nav(`/orders`);
                    break;

                  case 'Cart':
                    nav(`/cart`);
                    break;



                  default:
                    break;
                }
              }}

              key={index}>
              <item.icon />
              <span className='text-popover-foreground'>{item.property}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


