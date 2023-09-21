import PropTypes from 'prop-types';
import { List, Section, Title, StatList } from './Statistics.styled';
export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <List key={id} color={label}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </List>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
