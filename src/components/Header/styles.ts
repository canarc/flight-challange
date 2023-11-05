import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: none;
    border-bottom: ${props => `1px solid ${props.color}`};
    position: fixed;
    top: 10px;
    left: 30px;
    right: 30px;
    display: flex;
    justify-content: space-between;
    color: ${props => props.color};

    & > p {
        margin-bottom: -4px;
    }
`