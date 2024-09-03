import {Box, Table, Text, TextField, NumberField, Button, Heading} from 'gestalt';
import { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [rows, setRows] = useState([
        { id: 'row1', assignment: 'Test 1', grade: 90, weight: 50 },
        { id: 'row2', assignment: 'Test 2', grade: 70, weight: 30 },
        { id: 'row3', assignment: 'Test 3', grade: 60, weight: 20 },
    ]);

    const handleChange = (id, field, value) => {
        if (field === 'weight' || field === 'grade' && !isNaN(value)) {
            value = Math.max(0, Math.min(100, Number(value)));
        }
        setRows(rows.map(row => (row.id === id ? { ...row, [field]: value } : row)));
    };


    function calculateResult() {
        let sum = 0;
        for (let i = 0; i < rows.length; i++) {
            if (!isNaN(rows[i].grade)){
                sum += rows[i].grade * (rows[i].weight / 100);
            }

        }
        return sum;
    }

    const resetTable = () => {
        setRows(rows.map((row) => ({ ...row, assignment: '', grade: NaN, weight: NaN, id: row.id })));
    };


    function addRow() {
        setRows(rows.concat([{
            id: `row${rows.length + 1}`, // Generate a new ID
            assignment: '',
            grade: NaN,
            weight: NaN
        }]));
    }

    return (
        <Box
            display="flex"
            direction="column"
            height="100%"
            justifyContent="center"
            width="100%"
        >
            <Heading id="CalcTitle" >Grade Calculator</Heading>
            <Table accessibilityLabel="Main example table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Text weight="bold">Assignment</Text>
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            <Text weight="bold">Grade</Text>
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            <Text weight="bold">Weight</Text>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {rows.map(({ id, assignment, grade, weight }) => (
                        <Table.Row key={id}>
                            <Table.Cell>
                                <TextField
                                    id={`assignment-${id}`}
                                    onChange={({ value }) => handleChange(id, 'assignment', value)}
                                    value={assignment}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <NumberField
                                    id={`grade-${id}`}
                                    type="number"
                                    min={0}
                                    max={120}
                                    onChange={({ value }) => handleChange(id, 'grade', value)}
                                    value={grade}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <NumberField
                                    id={`weight-${id}`}
                                    type="number"
                                    min={0}
                                    max={100}
                                    onChange={({ value }) => handleChange(id, 'weight', value)}
                                    value={weight}
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <Box id="bottomBar" marginTop={4} direction="row" justifyContent="space-between" >
                <NumberField id="result" color={"red"} readOnly={true} label={"Result"}
                             value={calculateResult()} onChange={() => {}} />
                <div id="bottomBarButtons">
                    <Button onClick={resetTable} text="Reset"></Button>
                    <Button onClick={addRow} text="Add Row"></Button>
                </div>


            </Box>

        </Box>
    );
};

export default Calculator;



// <ComboBox
//     id={`grade-${id}`}
//     onChange={({ value }) => handleChange(id, 'grade', value)}
//     options={[
//         { label: 'A+', value: 'A+' },
//         { label: 'A', value: 'A' },
//         { label: 'B+', value: 'B+' },
//         { label: 'B', value: 'B' },
//         { label: 'C+', value: 'C+' },
//         { label: 'C', value: 'C' },
//         { label: 'D+', value: 'D+' },
//         { label: 'D', value: 'D' },
//         { label: 'F', value: 'F' },
//     ]}
//     value={grade}
//     label={""}/>