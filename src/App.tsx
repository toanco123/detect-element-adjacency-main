import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Square from './components/Square';
import { detectElement, initDatasRandomNumber } from './utils/detect-element';

const initPosition = {
  row: -1,
  col: -1,
};

const App: React.VFC = () => {
  const [row, setRow] = useState(5);
  const [col, setCol] = useState(6);
  const [datas, setDatas] = useState<number[][]>([]);
  const [position, setPosition] = useState<{ row: number; col: number }>({
    ...initPosition,
  });

  const highlighted = useMemo(() => {
    return detectElement(datas, position.row, position.col);
  }, [position, datas]);

  const handleClick = useCallback((row: number, col: number) => {
    setPosition({ row, col });
  }, []);

  const handleReset = useCallback(() => {
    setPosition({
      ...initPosition,
    });
    setDatas(() => initDatasRandomNumber(row, col));
  }, [row, col]);

  useEffect(() => {
    handleReset();
  }, [row, col, handleReset]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-1 flex-row mb-4 justify-between">
          <div className="flex flex-1 flex-row justify-center items-center space-x-2">
            <div className="flex flex-1 space-x-2 select-none">
              <label>row:</label>
              <input
                value={row}
                type="number"
                min="5"
                max="20"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setRow(Number(event.target.value));
                }}
                className="w-20 px-4 py-1 leading-5 border rounded-md"
              />
            </div>
            <div className="flex flex-1 space-x-2 select-none">
              <label>col:</label>
              <input
                value={col}
                min="5"
                max="20"
                type="number"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCol(Number(event.target.value));
                }}
                className="w-20 px-4 py-1 leading-5 border rounded-md"
              />
            </div>
            <div className="flex">
              <button
                className="whitespace-nowrap inline-flex rounded-md bg-gray-100 py-2 px-3 text-xs font-semibold uppercase text-blue-500 hover:bg-gray-200 select-none"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1.5 p-6 bg-gray-100 rounded shadow">
          {datas.map((values, row) => {
            return (
              <div className="flex flex-1 space-x-1.5" key={row}>
                {values.map((value, col) => {
                  return (
                    <Square
                      key={col}
                      row={row}
                      col={col}
                      value={value}
                      isHighlighted={highlighted[row][col]}
                      onClick={handleClick}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
