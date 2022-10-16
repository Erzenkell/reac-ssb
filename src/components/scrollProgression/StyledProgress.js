import styled from 'styled-components'

const StyledProgress = styled.div`
    position: fixed;
    background: linear-gradient(to bottom, white ${props => props.scroll}, transparent 0);
    width: 3px;
    height: 100%;
    z-index: 1000;
`;

export default StyledProgress;