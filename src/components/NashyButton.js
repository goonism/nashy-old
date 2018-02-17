import React, {Component} from 'react';
import styled from 'styled-components';

export default styled.button `
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

    background-color: black;
    border-color: white;

    color: black;

    width: 18%;

    font-size: 14.4px;

    transition: 0.5s;

    :hover {
    	opacity: 0.6;
    }

    :active, :focus {
    	outline:none;
    }
`;
