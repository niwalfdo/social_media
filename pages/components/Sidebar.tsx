import React, { Component } from 'react'

import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    // CollectionIcon,
    QueueListIcon,
    EllipsisHorizontalCircleIcon,
    // DotsCircleHorizontalIcon,
    // MailIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col'>  
        {/* <img className='h-10 w-10' src={'images/logo.webp'} alt='logo' /> */}
        <img className='h-10 w-10' src={'images/tw_logo.png'} alt='logo' />
        <SidebarRow Icon={HomeIcon} title='Home' />
        <SidebarRow Icon={HashtagIcon} title='Explore' />
        <SidebarRow Icon={BellIcon} title='Notifications' />
        <SidebarRow Icon={EnvelopeIcon} title='Messages' />
        <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
        <SidebarRow Icon={QueueListIcon} title='List' />
        <SidebarRow Icon={UserIcon} title='Sign In' />
        <SidebarRow Icon={EllipsisHorizontalCircleIcon} title='More' />
    </div>
  )
}

export default Sidebar