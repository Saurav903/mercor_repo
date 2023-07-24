import { Divider, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const Tablez = ({p}) => {

  return (
    <>
        <Heading textAlign={"center"}>Test Run</Heading>
        <Divider/>
        <TableContainer boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"10px"}>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th textAlign={"center"}>No.</Th>
                    <Th textAlign={"center"}>Inputs</Th>
                    <Th textAlign={"center"}>Output</Th>
                    <Th textAlign={"center"}>Pass/Fail</Th>
                    <Th textAlign={"center"}>Time</Th>
                </Tr>
                </Thead>
                <Tbody>
                {p=="" ? <Text textAlign={"center"}>No Test Cases</Text> : p.values.map((el,i)=>(
                    <Tr key={i}>
                        <Td textAlign={"center"}>{i+1}</Td>
                        <Td textAlign={"center"}>{el.inp.input[0]},{el.inp.input[1]}</Td>
                        <Td textAlign={"center"}>{el.inp.output}</Td>
                        <Td textAlign={"center"}>{el.isPassed}</Td>
                        <Td textAlign={"center"}>{el.time}ms</Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </TableContainer>
    </>
  )
}

export default Tablez