import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    width: 400px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding-top: ${props => props.theme.spacing(10)};
    border-radius: 12px;
    border: ${props => `1px solid ${props.theme.colors.lightGrey}`};
    margin: ${props => `0 auto ${props.theme.spacing(13)} auto`};
    
    background-color: ${props => props.theme.colors.white};
    
    overflow: hidden;
`;

export const Description = styled.div`
    margin-bottom: ${props => props.theme.spacing(8)};
  
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 100px;
    margin: 0 auto;
    display: block;
`;

export const Name = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 36px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    margin: 0;
    padding: ${props => props.theme.spacing(3)};
`;

export const Tag = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    margin: 0;
    padding: ${props => props.theme.spacing(3)};
`;

export const Location = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    margin: 0;
    padding: ${props => props.theme.spacing(2)};
`;

export const Stats = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    list-style: none;
    background-color: ${props => props.theme.colors.grey};
    padding: 0;
    margin:0;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    border:  ${props => `1px solid ${props.theme.colors.lightGrey}`};
    padding: ${props => `${props.theme.spacing(5)} 0`};
`;

export const Label = styled.span`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
`;

export const Quantity = styled.span`
    text-align: center;
    font-weight: 700;
    font-size: 20px;
`;
