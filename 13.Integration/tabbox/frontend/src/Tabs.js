import React from 'react';
import TabItem from './TabItem';
import styled from 'styled-components';

const StyledTabs = styled.ul`
	height: 24px;    
`;

function Tabs({tabs}) {
    return (
        <StyledTabs>
            {
                tabs.map(tab => <TabItem 
                                    key={tab.no}
                                    name={tab.name}
                                    active={tab.active}/>)
            }
        </StyledTabs>
    );
}

export default Tabs;