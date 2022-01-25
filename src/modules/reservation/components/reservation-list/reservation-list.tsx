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
        render: (numGuests: number) => <span style={{ fontSize: "18px" }}>{numGuests}</span>,
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
        render: (row: any) => {
            return (
                <span>
                    From: {new Date(row.checkInDate).toLocaleDateString()} {new Date(row.checkInDate).toLocaleTimeString()}
                    <br />
                    To: {new Date(row.checkOutDate).toLocaleDateString()} {new Date(row.checkInDate).toLocaleTimeString()}
                </span>
            )
        }
    }
]

interface ReservationListProps {
    data?: any
    isLoading?: boolean
}

export default function ReservationList({ data = [], isLoading = false }: ReservationListProps) {

    return <Row>
        <Table dataSource={data} columns={columns} style={{ width: "100%" }} bordered pagination={false} />
    </Row>;
}
