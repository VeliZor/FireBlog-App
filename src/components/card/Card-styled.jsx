import styled from "styled-components";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

export const CardCon = styled.div`
  /* background-color: red; */
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px #000000a0;
  border-radius: 5px;
`;
export const CardImage = styled.div`
  background-color: green;
  overflow: hidden;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25rem;
  }
`;
export const CardData = styled.div`
  background-color: #cbffff;
  height: 30%;
  padding: 0.4rem;
  width: 25rem;
  h4 {
    font-size: 2rem;
    margin: 0.5rem 0;
    color: #65bfa1;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardLike = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const EmailDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  gap: 0.5rem;
  p {
    font-size: 1.2rem;
  }
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 1.3rem;
`;

export const MessageDiv = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem;
`;

export const LikeIcon = styled(FaHeart)`
  font-size: 1.8rem;
  color: #ff0000;
`;

export const MessageIcon = styled(FiMessageSquare)`
  font-size: 1.8rem;
  color: #6e6e6e;
`;
