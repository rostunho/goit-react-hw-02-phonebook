import PropTypes from 'prop-types';
import { Title, Wrapper } from './AppTitle.styled';

function AppTitle({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

AppTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppTitle;
