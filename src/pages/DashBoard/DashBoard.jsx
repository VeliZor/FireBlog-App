import { useState } from "react";
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";
import { Cards, HomeCon } from "./DashBoard-styled";

function Dashboard() {
  const [modal, setModal] = useState(false);
  return (
    <HomeCon>
      {modal && <Modal />}
      <h3
        onClick={(e) => {
          setModal(true);
        }}
      >
        Dashboard
      </h3>
      <Cards>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Cards>
    </HomeCon>
  );
}

export default Dashboard;
