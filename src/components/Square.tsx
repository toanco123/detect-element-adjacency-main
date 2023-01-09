import React, { useCallback, useMemo } from 'react';

type SquareProps = {
  row: number;
  col: number;
  value: number;
  isHighlighted: boolean;
  onClick: (row: number, col: number) => void;
};

const Square: React.VFC<SquareProps> = ({
  row,
  col,
  value,
  isHighlighted,
  onClick,
}) => {
  const bg = useMemo(() => {
    switch (value) {
      case 0:
        return 'bg-yellow-500';
      case 1:
        return 'bg-green-500';
      case 2:
        return 'bg-blue-500';
      case 3:
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  }, [value]);

  const border = useMemo(() => {
    return isHighlighted ? 'border-4 border-gray-900' : '';
  }, [isHighlighted]);

  const handleClick = useCallback(() => {
    onClick(row, col);
  }, [row, col, onClick]);

  return (
    <span
      onClick={handleClick}
      className={`w-10 h-10 flex rounded shadow-sm select-none cursor-pointer ${bg} ${border}`}
    ></span>
  );
};

export default React.memo(Square);
