import React from 'react';
import { useSpring, animated } from 'react-spring';
import Street from './Street';
import { useMedia } from '../hooks/useMedia';

export default function Panel(props) {
  const {
    streets,
    hoveredStreet,
    setHoveredStreet,
    onStreetClick,
    toggled
  } = props;
  const isSmallScreen = useMedia([`(max-width: 600px)`], [true], false);
  const style = {
    boxSizing: 'border-box',
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: isSmallScreen ? 'unset' : 0,
    height: isSmallScreen ? '40vh' : 'unset',
    left: isSmallScreen ? 0 : 'unset',
    backgroundColor: 'hsl(210, 36%, 96%)',
    zIndex: 3,
    width: isSmallScreen ? '100vw' : 230,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 12px 0 rgba(16, 42, 67, 0.2)',
    overflowY: 'auto',
    padding: '1em 0.5em',
    opacity: 0.9
  };
  const animation = useSpring({
    transform: toggled
      ? 'translate3d(0%, 0%, 0)'
      : isSmallScreen
      ? 'translate3d(0%, 100%, 0)'
      : 'translate3d(100%, 0%, 0)'
  });
  return (
    <animated.div style={{ ...style, ...animation }} toggled={toggled}>
      {streets.map(street => {
        return (
          <Street
            hovered={hoveredStreet === street}
            setHoveredStreet={() => setHoveredStreet(street)}
            key={street}
            onStreetClick={() => onStreetClick(street)}
            street={street}
          />
        );
      })}
    </animated.div>
  );
}
