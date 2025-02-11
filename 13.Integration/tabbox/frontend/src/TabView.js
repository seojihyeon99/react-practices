import React from 'react';
import styled from 'styled-components';

const StyledTabView = styled.div`
	width: calc(100% - 4px);
	height: 200px;
	margin-top: -1px;
	border: 1px solid #999;
	text-align: center;
	line-height: 200px;
`;

function TabView(props) {
    return (
        <StyledTabView>
            탭뷰입니다.
        </StyledTabView>
    );
}

export default TabView;