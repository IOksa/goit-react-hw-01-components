import PropTypes from 'prop-types';
import {StatisticsItem} from '../StatisticsItem/StatisticsItem';
import {StatisticsSection, StatisticsTitle, StatisticsList} from './Statistics.styled';


export const Statistics=({title, stats})=>{
    return <StatisticsSection>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        <StatisticsList>
            {stats.map(({id, label, percentage}) => (
            <StatisticsItem key={id} label={label} percentage={percentage}/>
            ))}
        </StatisticsList>
    </StatisticsSection>
}

Statistics.propTypes={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        label:  PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
    ),
};