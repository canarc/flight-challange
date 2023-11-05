import styled from "styled-components";
import colors from "../../assets/colors";

export const FlightSelectorContainer = styled.div`
    background-color: ${colors.SearchFlightsContainerBackground};
    max-width: 800px;
    display: grid;
    grid-template-columns: 2fr 2fr 1.5fr 3fr 0.5fr;
    justify-items: center;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
    
    & > * {
        border-radius: 0;
    }

    & > svg {
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        grid-template-columns: 1fr;

        & > * {
            width: 300px;
        }
    }
  
`