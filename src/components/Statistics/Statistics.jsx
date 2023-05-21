import PropTypes from 'prop-types';

export default function Statistics({ title, stats}) {
    return (
            <>
            <section className="statistics">
                {{ title }.length > 0 && (<h2 className="title">{title}</h2>)}
                <ul className="stat-list">
                    {stats.map(item => { 
                        return (
                        <li className="item" key={item.id}>
                            <span className="label">{item.label}</span>
                            <span className="percentage"> {item.percentage}%</span>
                        </li>
                        )
                    })}
                </ul>
            </section>
            </>
            )
};

Statistics.propTypes = { 
    title: PropTypes.string,
    stats: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired
} 


// Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.