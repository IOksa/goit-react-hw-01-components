import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
    width: 750px;
    margin: 0 auto 36px auto;

    background-color: ${props => props.theme.colors.white};
    border:  ${props => `1px solid ${props.theme.colors.lightGrey}`};
    border-radius: 12px;
`;

export const StatisticsTitle = styled.h2`
    padding: ${props => props.theme.spacing(5)};
    text-align: center;
    font-weight: 500;
    font-size: 36px;
    line-height: 1.2;
    letter-spacing: 0.02em;

    text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    list-style: none;
    
    background-color: ${props => props.theme.colors.grey};
    padding: 0;
    margin:0;
`;