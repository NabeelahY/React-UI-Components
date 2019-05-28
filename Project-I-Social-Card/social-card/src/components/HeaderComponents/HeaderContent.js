import React from 'react';
import moment from 'moment';
import './Header.css';
import HeaderTitle from './HeaderTitle';
const headerTitle = 'Lambda School';
const headerHandle = '@LambdaSchool';
const headerDate = moment().format("D MMM");


function HeaderContent ({ text }) {
    return (
        <div className= 'header-content'>
            <HeaderTitle text={headerTitle} handle={headerHandle} timestamp={headerDate} />
            <p>{text}</p>
        </div>
    )
}

export default HeaderContent;
