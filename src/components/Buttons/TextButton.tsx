/* eslint-disable no-nested-ternary */
import { Button } from '@mui/material';
import React from 'react';

interface TextButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isPrimary?: boolean;
}
const TextButton: React.FC<TextButtonProps> = ({
  children,
  onClick,
  isPrimary = true,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = {
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: isPrimary
      ? isHovered
        ? '#ee1d36 !important'
        : '#fff !important'
      : '#ee1d36 !important',
    transition: 'all 0.5s',
    fontSize: '14px',
    boxShadow: 'none !important',
  };

  return (
    <Button
      variant="text"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={buttonStyles}
    >
      {children}
    </Button>
  );
};

export default TextButton;
