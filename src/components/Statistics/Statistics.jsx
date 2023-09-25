import PropTypes from 'prop-types';
import { StatisticsContainer, StatList, StatItem } from './Statistics.styled';

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

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
