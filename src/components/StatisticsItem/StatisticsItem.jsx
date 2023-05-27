import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';
import {getRandomHexColor} from '../../utils/getRandomColor';

export const StatisticsItem = ({label, percentage})=>{
    const color=getRandomHexColor();
    console.log('color=', color);

    return <li className={css.item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
}

StatisticsItem.propTypes={
    label:  PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

};