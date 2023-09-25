import styled from "@emotion/styled";

export const FriendItem = styled.li`
    width: 140px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 5px;
    border-style: solid;
    border-color: black;
`

export const Status = styled.span`
    background-color: ${(props) => (props.isOnline && "green")};
    width: 15px;
    height: 15px;
    border-radius: 100%;
    
`