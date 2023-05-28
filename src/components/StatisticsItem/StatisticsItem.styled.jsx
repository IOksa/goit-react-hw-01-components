import styled from '@emotion/styled';

export const StatisticsListItem = styled.li`
    display: flex;
    flex-direction: column;
    
    background-color: ${props=>props.bgcolor};
    border: ${props => `1px solid ${props.theme.colors.lightGrey}`};
    
    padding: ${props => `${props.theme.spacing(6)} 0`};
    
    text-align: center;
    font-weight: 500;

   
`;

export const Label = styled.span`
    color: ${props => props.theme.colors.white};
  
    font-size: 20px;
    margin-bottom:  ${props => props.theme.spacing(3)};
`;


export const Percentage = styled.span`
    color: ${props => props.theme.colors.white};
  
    font-size: 40px;
`;