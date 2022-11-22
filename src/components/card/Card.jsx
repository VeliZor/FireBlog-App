import {
  CardCon,
  CardLike,
  CardData,
  CardImage,
  EmailDiv,
  UserIcon,
  MessageDiv,
  LikeIcon,
  MessageIcon,
} from "./Card-styled";

function Card() {
  return (
    <CardCon>
      <CardImage>
        <img
          src="https://lh3.googleusercontent.com/-v5LSZJbYI7E/YFdIchHdrnI/AAAAAAAAml0/hAwPRbMOpmEtd-0VA27zB4GS9O0a2kUzQCLcBGAsYHQ/image.png"
          alt=""
        />
      </CardImage>
      <CardData>
        <h4>PostgreSQL</h4>
        <span>18.11.2022</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolorum
          assumenda mollitia, voluptatum corrupti ducimus.
        </p>
      </CardData>
      <CardLike>
        <EmailDiv>
          <UserIcon />
          <p>meral@gmail.com</p>
        </EmailDiv>
        <MessageDiv>
          <LikeIcon />
          <p>
            {" "}
            <sup>5</sup>{" "}
          </p>
          <MessageIcon />
          <p>6</p>
        </MessageDiv>
      </CardLike>
    </CardCon>
  );
}
export default Card;
