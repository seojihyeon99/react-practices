import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import data from './assets/json/data';
import styled from 'styled-components';

const StyledTabBox = styled.div`
	width: fit-content;
	margin: 100px auto;    
`;

function TabBox(props) {
    return (
        <StyledTabBox>
            <Tabs tabs={data}/>
            <TabView/>
        </StyledTabBox>
    );
}

export default TabBox;