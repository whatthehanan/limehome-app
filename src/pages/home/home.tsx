import { Row, Col, Button } from "antd";
import { Typography } from "antd";
const { Title } = Typography
import { PlusSquareOutlined } from "@ant-design/icons"
import styles from "./home.module.less"
import cn from "classnames"

export default function HomePage() {
    return <Row style={{ width: "100%" }}>
        <Col span={24}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={3} style={{ margin: 0 }}>
                        Reservations
                    </Title>
                </Col>
                <Col>
                    <Button ghost className={styles.createReservationBtn}>
                        <PlusSquareOutlined /> Create Reservation
                    </Button>
                </Col>
            </Row>
        </Col >
        <Col span={24}>
            Reservations List
        </Col>
    </Row >
}
