import React from 'react'
import { Link } from 'gatsby'
import s from 'styled-components'
import PropTypes from 'prop-types'

import { maxWidth, TABLET, minWidth } from '../../constants/widths'

import {
  HOME_ROUTE,
  // ASSIGNMENTS_ROUTE,
  LECTURES_ROUTE
  // STAFF_ROUTE,
  // STYLE_ROUTE,
  // DEVELOPMENT_ROUTE,
  // CAMPUS_WIRE_ROUTE
} from '../../constants/routes'
// import { NAVY, DARK_NAVY } from '../../constants/colors'

const styles = `
  width: 100%;
  color: var(--heading);
  text-decoration: none !important;
  width: 100%;
  display: block;
  padding: 0.5rem 0;

  :visited {
    color: var(--heading);
  }

  :active,
  :focus,
  :hover {
    color: var(--heading);

    ${minWidth(TABLET)} {
      ::after {
        content: "→";
        float: right;
      }
    }
  }
`

const LinksDiv = s.div`
  ${minWidth(TABLET)} {
    // position: absolute;
    // top: 50%;
    margin-top: 5rem; // poucos itens
    font-size: 1.2rem;
    transform: translateY(-50%);
    padding-right: 0.5rem;

    a {
      display: inline-block;
    }
  }

  ${maxWidth(TABLET)} {
    max-height: ${({ active }) => (active ? '100vh' : '0')};

    a {
      display: block;
      margin: 0.5rem 0;
      font-size: 1.2rem;
    }
  }
`

const InternalLink = s(Link)`${styles}`
// const ExternalLink = s.a`${styles}`

export const Links = ({ active }) => (
  <LinksDiv active={active}>
    <InternalLink to={HOME_ROUTE}>Home</InternalLink>
    <InternalLink to={LECTURES_ROUTE}>Aulas</InternalLink>
    {/* <InternalLink to={ASSIGNMENTS_ROUTE}>Assignments</InternalLink> */}
    {/* <InternalLink to={STAFF_ROUTE}>Staff</InternalLink>
    <InternalLink to={STYLE_ROUTE}>Style</InternalLink>
    <InternalLink to={DEVELOPMENT_ROUTE}>Getting Started</InternalLink>
    <ExternalLink href={CAMPUS_WIRE_ROUTE} target='_BLANK'>
      Campuswire
    </ExternalLink> */}
  </LinksDiv>
)

Links.propTypes = {
  active: PropTypes.bool.isRequired
}
