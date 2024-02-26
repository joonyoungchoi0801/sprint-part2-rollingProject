import React from 'react';
import styled from 'styled-components';

const badgeColors = {
  지인: { background: '#FFF0D6', color: '#FF8832' },
  동료: { background: '#F8F0FF', color: '#9935FF' },
  가족: { background: '#E4FBDC', color: '#2BA600' },
  친구: { background: '#E2F5FF', color: '#00A2FE' },
};

const Styled = {
  Badge: styled.div`
    font-family: pretendard;
    display: flex;
    border-radius: 0.4rem;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.01rem;
    padding: 0 0.8rem;
    gap: 1rem;
    width: 2.5rem;
    height: 2rem;
    background-color: ${({ children }) =>
      badgeColors[children]?.background || '#fff'};
    color: ${({ children }) => badgeColors[children]?.color || '#fff'};
  `,
};

function StyledBadge({ children = '지인' }) {
  return <Styled.Badge>{children}</Styled.Badge>;
}

export default StyledBadge;
