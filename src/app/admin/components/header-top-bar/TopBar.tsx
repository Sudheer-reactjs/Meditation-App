import React from 'react';
import SearchBar from './searchBar';
import PageTitle from './PageTitle';
import NotificationsPanel from './NotificationCard';
import UserProfile from './UserProfile';

const TopBar = () => {
    return (
        <div className="flex items-center justify-between gap-2">
             <PageTitle />
            <div className="card-bg rounded-lg p-[10px] flex items-center justify-between gap-5"> 
            <SearchBar />  
            <NotificationsPanel />
             <UserProfile />
          </div>

        </div>
    );
}

export default TopBar;
