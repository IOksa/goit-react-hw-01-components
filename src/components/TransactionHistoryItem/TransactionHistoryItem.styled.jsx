import styled from '@emotion/styled';

export const TableDataRow = styled.td`
    width: 200px;
    border: ${props => `1px solid ${props.theme.colors.lightGrey}`};

    padding-top: ${props => props.theme.spacing(5)};
    padding-bottom: ${props => props.theme.spacing(5)};
       
    text-align: center;
    text-transform: capitalize;

   
`;

export const TableRow = styled.tr`
    padding: 0; 

    &:nth-of-type(even){
        background-color:  ${props => props.theme.colors.evenRow};
    }

    &:hover {
        background-color: ${props => props.theme.colors.hoverRow};
    }
`;