import styled from "@emotion/styled";

export const StatisticsContainer = styled.section`
width: 250px;
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: center;
`

export const StatList = styled.ul`
    padding: 0px;
    display: flex;
`

export const StatItem = styled.li`
width: 50px;
text-align: center;
background-color: ${(props) => { return props.color}};
`