
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Button, } from "reactstrap";
import { IoFastFoodOutline } from "react-icons/io5";
import React from 'react';

const ProjectTables = () => {

  const [tableData, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      fetch(
        "https://9293-2405-204-5220-8b46-203c-c6de-57a7-6e38.in.ngrok.io/getOrdersByRestaurant?restaurant_id=RESTAURANT_1")
                    .then((res) => res.json())
                    .then((json) => {
                      console.log(json)
                        setData(json)
                    })
    }
    fetchData();
  }, []);

  const markAsCompleted = (orderId, tableId) => {
    const data = {
      "restaurant_id":"RESTAURANT_1",
      "table_id":tableId,
      "order_id":orderId
    }

    fetch('https://c2d7-2405-204-5220-8b46-203c-c6de-57a7-6e38.in.ngrok.io/updateTableState', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: data
     }).then((response) => response.json())
     .then((responseJson) => {
       return responseJson.movies;
     })
     .catch((error) => {
       console.error(error);
     });
  }

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Order Details</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Orders received by the restaurant
          </CardSubtitle>

          <Table className="no-wrap mt-6 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Team Lead</th>
                <th>Time</th>
                <th>Items</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <IoFastFoodOutline/>
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.orderId}</h6>
                        <span className="text-muted">{"Table " + tdata.tableId}</span><br/>
                        <br/>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.orderCreatedAt}</td>
                  <td>{tdata.selectedDishes.map((order) => (
                      <h5>{order.name} - {Math.floor((Math.random() * 2)) + 1}</h5>
                  ))}</td>
                  <td>{tdata.totalAmount}</td>
                  <td>
                    {tdata.orderStatus === "PENDING" ? (
                      <Button color="warning" onClick={markAsCompleted(tdata.orderId, tdata.tableId)}>Mark as Completed</Button>
                    ) : tdata.status === "COMPLETED" ? (
                      <Button color="success" disabled>Completed</Button>
                    ) : (
                      <Button color="success" disabled>Completed</Button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
