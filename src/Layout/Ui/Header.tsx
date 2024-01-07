import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  MenuOutlined } from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { NavigationLinks } from './NavigationLinks';
import useScrollEffects from './useScrollEffects';

const Header = () => {
  const [t] = useTranslation();
  useScrollEffects()
    return (
      <header className='Header'>
        <Link to='/'>
          <div className='Logo'/>
        </Link>
        <nav className='Nav'>
           <NavigationLinks />
          <div className='MenuNav'>
            <WithDrawer
              title='Nav Links'
              button={<Button icon={<MenuOutlined />} type='primary' />}
            >
               <NavigationLinks />
              <ul className='DrawerLinks'>
                <li>
                  <div>
                    {t('Hire Us')} <FaArrowAltCircleRight />
                  </div>
                </li>
              </ul>
            </WithDrawer>
          </div>
        </nav>
      </header>
    );
};

export default Header;
