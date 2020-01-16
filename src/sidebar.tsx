import { styled } from './bulma/themes';

interface Props {
    isOpen: boolean;
}

const Sidebar = styled.div<Props>`
    background-color: ${props => props.theme.color.black};
    display: flex;
    transition: min-width 300ms;
    flex: 0 0 0px;
    min-width: ${props => (props.isOpen ? 250 : 10)}px;
`;