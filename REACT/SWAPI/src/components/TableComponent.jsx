import {
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(255,255,255,0.75)',
    },
    '&:nth-of-type(even)': {
        backgroundColor: 'rgba(255,0,0,0.75)',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const TableComponent = ({people = []}) => {
    return (
        <TableContainer sx={{
            borderRadius: '20px',
        }}>
            <Table sx={{ minWidth: 650, backgroundColor: 'rgba(0, 0, 0, 0.05)' }} aria-label="customized table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Height</StyledTableCell>
                        <StyledTableCell align="right">Hair Color</StyledTableCell>
                        <StyledTableCell align="right">Gender</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {people.map((person) => (
                        <StyledTableRow
                            key={person.name}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                        >
                            <StyledTableCell component="th" scope="row">
                                {person.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{Math.round(person.height * 0.39370079)} In</StyledTableCell>
                            <StyledTableCell align="right">{person.hair_color}</StyledTableCell>
                            <StyledTableCell align="right">{person.gender}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
