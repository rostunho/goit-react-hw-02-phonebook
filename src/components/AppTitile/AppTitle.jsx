import PropTypes from 'prop-types';
import { Title } from './AppTitle.styled';

function AppTitle({ title }) {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
}

AppTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppTitle;
