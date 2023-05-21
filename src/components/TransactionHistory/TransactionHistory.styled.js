import styled from "@emotion/styled";

export const Table = styled.table`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: solid 1px;
    width: 80%;
`

export const Head = styled.thead`
background-color: aqua;
`

export const Transaction = styled.tr`
    background-color: ${(props) => { return props.color }};
`

export const Td = styled.td`
`