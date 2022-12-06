import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

export const Logo = styled((props) => {
  const { variant, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (
    <div style={{display: 'flex', textDecoration: 'none', alignItems: 'center'}}>
      <img src='/static/logo.svg' style={{height: 50, marginRight: 10}}></img>
      <p style={{color: '#fff', textDecoration: 'none'}}>Аутсорсинг бухгалтерских услуг</p>
    </div>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
