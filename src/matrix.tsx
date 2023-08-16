
import React, { useState } from 'react';
import { styled } from 'styled-components';

const Matrix: React.FC = () => {
    const [matrixData, setMatrixData] = useState<number[][]>([
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25, 26, 27],
        [28, 29, 30, 31, 32, 33, 34, 35, 36],
        [37, 38, 39, 40, 41, 42, 43, 44, 45],
        [46, 47, 48, 49, 50, 51, 52, 53, 54],
        [55, 56, 57, 58, 59, 60, 61, 62, 63],
        [64, 65, 66, 67, 68, 69, 70, 71, 72],
        [73, 74, 75, 76, 77, 78, 79, 80, 81],
    ]);


    const handleCellValueUpdate = (row: number, column: number, newValue: number): void => {
        const updatedMatrix = [...matrixData]; // Create a copy of the matrix data
        updatedMatrix[row][column] = newValue; // Update the value at the specified row and column
        setMatrixData(updatedMatrix); // Update the state with the new matrix data
    };

    return (
        <StyledTableWrapper>
            {matrixData.map((row, rowIndex) => {
                return <StyledRowWrapper key={rowIndex}>
                    {row.map((cellValue, columnIndex) => (
                        <StyledCell
                            key={columnIndex}
                            onClick={() => handleCellValueUpdate(rowIndex, columnIndex, cellValue + 1)}
                        >
                            {cellValue}
                        </StyledCell>
                    ))}
                </StyledRowWrapper>
            }
            )}
        </StyledTableWrapper>
    );
};

export default Matrix;

const StyledTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
`;

const StyledRowWrapper = styled.div`
    display: flex;
`

const StyledCell = styled.button`
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    width:  60px;
    height: 60px;
    flex-shrink: 0;
    font-size: 2rem;
    border: 1px solid white;
`