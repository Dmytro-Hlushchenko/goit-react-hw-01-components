import styled from "@emotion/styled";

export const FriendItem = styled.li`
    background-color: ${(props) => (props.isOnline && "green")};
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 5px;
    border-style: solid;
    border-color: black;
`