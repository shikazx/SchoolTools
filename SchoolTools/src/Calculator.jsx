import {Box, Table, Text, TextField, NumberField, Button} from 'gestalt';
import { useState } from 'react';

const Calculator = () => {
    const [rows, setRows] = useState([
        { id: 'row1', assignment: 'Test 1', grade: '90', weight: 50 },
        { id: 'row2', assignment: 'Test 2', grade: '70', weight: 30 },
        { id: 'row3', assignment: 'Test 3', grade: '60', weight: 20 },
    ]);

    const handleChange = (id, field, value) => {
        if (field === 'weight' || field === 'grade') {
            value = Math.max(0, Math.min(100, Number(value)));
        }
        setRows(rows.map(row => (row.id === id ? { ...row, [field]: value } : row)));
    };

    function calculateResult() {
        let sum = 0;
        for (let i = 0; i < rows.length; i++) {
            sum += rows[i].grade * rows[i].weight;
        }
        return sum;
    }

    return (
        <Box
            display="flex"
            direction="column"
            height="100%"
            justifyContent="center"
            padding={4}
            width="100%"
        >
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
            <Box marginTop={4}>
                <Button color={"red"} onClick={calculateResult} text={"Calculate"}/>
                <Button onClick={calculateResult} text={"Reset"}></Button>
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