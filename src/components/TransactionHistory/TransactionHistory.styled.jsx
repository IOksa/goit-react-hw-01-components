import styled from '@emotion/styled';

export const TableTransactionHistory = styled.table`
    background-color:  ${props => props.theme.colors.white};
    padding: 0; 
    border-collapse: collapse;


    font-family: 'Times New Roman';
    font-weight: 700;
    font-size: 20px;
    line-height: 1.15;  

    margin: 0 auto;
    box-shadow: 2px 2px 60px 2px rgba(0, 0, 0, 0.25);
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


export const TableHeadRow = styled.th`
    width: 200px;
    border: ${props => `1px solid ${props.theme.colors.lightGrey}`};


    padding-top: ${props => props.theme.spacing(5)};
    padding-bottom: ${props => props.theme.spacing(5)};
       
    text-align: center;
    text-transform: uppercase;

    background-color: ${props => props.theme.colors.tableHeadRow};
    color: ${props => props.theme.colors.white};
   
`;


