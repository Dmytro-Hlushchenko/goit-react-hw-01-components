import PropTypes from 'prop-types';

export default function Statistics({ title="Upload stats", stats}) {
    return (
            <>
            <section className="statistics">
                <h2 className="title">{title}</h2>
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
    stats: PropTypes.PropTypes.arrayOf(PropTypes.object)
}  