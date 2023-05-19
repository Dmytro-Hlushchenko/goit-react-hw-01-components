import PropTypes, { number } from 'prop-types';

export default function Statistics({ title, stats }) {
    return (
            <li className="item">
                <span className="label">{stats.label}</span>
                <span className="percentage"> {stats.percentage}%</span>
            </li>
            )
};