import React, { useState } from 'react';
import SideBar from './SideBar';
import Cookie from './tabs/Cookie';
import Account from './tabs/data/Account';
import Data from './tabs/data/Data';
import Personalization from './tabs/Personalization';
 
const Settings = () => {
    const [mode, setMode] = useState(null);
    return (
        <div className='flex flex-row'>
            <SideBar setMode={setMode} mode={mode}/>
            <div className='w-[60%] pt-[20px]'>
                { mode === 'personalization'
                    ? <Personalization/>
                : mode === 'data'
                    ? <Data setMode={setMode}/>
                : mode === 'cookie'
                    ? <Cookie/>
                : mode === 'account'
                    ? <Account setMode={setMode}/>
                : null }
            </div>
        </div>
    );
};

export default Settings;