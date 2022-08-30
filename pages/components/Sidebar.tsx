import React, { Component } from 'react'

import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    // CollectionIcon,
    QueueListIcon,
    // DotsCircleHorizontalIcon,
    // MailIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'


function Sidebar() {
  return (
    <div>  
        <img className='h-10 w-10' src='https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg' alt='logo'/>
        <SidebarRow Icon={HomeIcon} title='Home' />
        <SidebarRow Icon={HashtagIcon} title='Explore' />
        <SidebarRow Icon={BellIcon} title='Notifications' />
        <SidebarRow Icon={EnvelopeIcon} title='Messages' />
        <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
        <SidebarRow Icon={QueueListIcon} title='List' />
    </div>
  )
}

export default Sidebar