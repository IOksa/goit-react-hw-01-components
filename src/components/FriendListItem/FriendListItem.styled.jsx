import styled from '@emotion/styled';

export const FriendCard = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;

    padding: ${props => `${props.theme.spacing(4)} ${props.theme.spacing(8)}`};
    margin-bottom: ${props => props.theme.spacing(6)};

    border: ${props => `1px solid ${props.theme.colors.lightGrey}`};
    border-radius: 8px;

    background-color: ${props => props.theme.colors.white};
     
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Status=styled.span`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    
    background-color: ${({ statusType, theme }) => {
        return  statusType ? theme.colors.green:theme.colors.red;
    
    }};
`;

export const Avatar=styled.img`
    padding: ${props => props.theme.spacing(6)};
    border: ${props => `1px solid ${props.theme.colors.lightGrey}`};
    border-radius: 24px;
`;

export const FriendName=styled.p`
    font-weight: 700;
    font-size: 34px;
`;