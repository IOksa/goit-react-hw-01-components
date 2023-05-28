import PropTypes from 'prop-types';
import {getRandomHexColor} from '../../utils/getRandomColor';
import {StatisticsListItem, Label, Percentage} from './StatisticsItem.styled';

export const StatisticsItem = ({label, percentage})=>{
    const color=getRandomHexColor();

    return <StatisticsListItem bgcolor={color}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
    </StatisticsListItem>
}

StatisticsItem.propTypes={
    label:  PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

};


//style={{backgroundColor: `${color}`}}
// bgcolor={`${color}`}