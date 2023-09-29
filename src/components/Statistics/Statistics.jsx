import PropTypes from 'prop-types';
import { StatisticsContainer, StatList, StatItem } from './Statistics.styled';
import  getRandomColor from "./getRandomColor";

export default function Statistics({ title, stats}) {
    return (
            <> 
            <StatisticsContainer>
                {title && (<h2 className="title">{title}</h2>)}
                <StatList>
                    {stats.map(item => { 
                        return (
                            <StatItem key={item.id} color={getRandomColor()}>
                            <span className="label">{item.label}</span>
                            <span className="percentage"> {item.percentage}%</span>
                            </StatItem>
                        )
                    })}
                </StatList>
            </StatisticsContainer>
            </>
            )
};

Statistics.propTypes = { 
    title: PropTypes.string,
    stats: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired
} 


