import React from 'react';
import SideBar from './SideBar';
import Personalization from './tabs/Personalization';
 
const Settings = () => {
    return (
        <div className='flex flex-row'>
            <SideBar/>
            <Personalization/>
        </div>
    );
};

export default Settings;