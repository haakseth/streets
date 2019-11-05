import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

export default function Street(props) {
  const { street, hovered, setHoveredStreet, onStreetClick } = props;
  const ref = useRef(null);
  useEffect(() => {
    if (hovered) {
      setTimeout(() => {
        scrollIntoView(ref.current, {
          scrollMode: 'if-needed',
          behavior: 'auto',
          block: 'nearest'
        });
      }, 100);
    }
  }, [hovered]);
  return (
    <Wrapper
      ref={ref}
      hovered={hovered}
      onMouseEnter={() => setHoveredStreet(street)}
      key={street}
      onClick={() => onStreetClick(street)}
      street={street}
    >
      {street}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 3px;
  font-weight: 600;
  background-color: hsl(210, 36%, 96%);
  color: #000;
  transition: 0.3s;
  margin: 2px 0;
  box-shadow: 4px 0 12px 0 #ed649800;
  ${props =>
    props.hovered &&
    css`
      background-color: #ed6498;
      color: white;
      box-shadow: 0 2px 6px 0 #ed649880;
    `}
`;
