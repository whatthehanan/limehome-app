import { Row, Col, Table } from "antd";
import CustomerInfo from "./customer-info";

const columns = [
    {
        title: "Customer",
        key: 'customer',
        render: (row: any) => <CustomerInfo {...row} />,
        width: 250
    },
    {
        title: "Guests",
        key: 'numGuests',
        dataIndex: "numGuests",
        render: (numGuests: number) => <span style={{ textAlign: "center", display: "flex", justifyContent: "center", fontSize: "18px" }}>{numGuests}</span>,
        width: 250

    },
    {
        title: "Address",
        key: 'address',
        render: (row: any) =>
            <Row >
                <Col span={24}>
                    {row.streetAddress}
                </Col>
                <Col span={24}>
                    {row.postalCode} , {row.city}
                </Col>
                <Col span={24}>
                    {row.country}
                </Col>
            </Row>
        ,
        width: 250
    },
    {
        title: "Stay",
        key: 'stay',
        width: 250,
        render: (row: any) => `${row.checkInDate}-${row.checkOutDate}`
    }
]

const data = [
    {
        firstName: "John",
        lastName: "Smith",
        email: "john@smith.com",
        phoneNumber: "4445557777",
        numGuests: 2,
        country: "Germany",
        city: "Berlin",
        postalCode: "56123",
        streetAddress: "222333 peachtree street",
        checkInDate: new Date().toLocaleDateString(),
        checkOutDate: new Date().toLocaleDateString()
    }
]

export default function ReservationList() {
    return <Row>
        <Table dataSource={data} columns={columns} style={{ width: "100%" }} bordered pagination={false} />
    </Row>;
}
