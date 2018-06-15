import React from 'react'

import StyledLink from '../../shared/styled/StyledLink'
import {
  StyledNotFound,
  StyledTitle,
  StyledSubtitle,
  StyledButtons,
  StyledButton
} from './StyledNotFound'

const NotFound = () => (
  <StyledNotFound>
    <StyledTitle>
      404
    </StyledTitle>
    <StyledSubtitle>
      Oops, the page you&apos;re looking for doesn&apos;t exist.
    </StyledSubtitle>
    <StyledButtons>
      <StyledLink to="/">
        <StyledButton>Go to homepage</StyledButton>
      </StyledLink>
    </StyledButtons>
  </StyledNotFound>
)

export default NotFound
