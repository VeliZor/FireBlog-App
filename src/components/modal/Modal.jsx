import Card from "../card/Card";
import Comment from "../comment/Comment";
import { ModalDiv, Modals, Comments } from "./Modal-styled";

function Modal() {
  return (
    <ModalDiv>
      <Modals>
        <Card></Card>
        <Comments>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </Comments>
      </Modals>
    </ModalDiv>
  );
}

export default Modal;
