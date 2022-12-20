import { SectionWrapp } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <SectionWrapp>
    <h2>{title}</h2>
    {children}
  </SectionWrapp>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};