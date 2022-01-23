import { Row, Col, Button, Modal, Form } from "antd";
import { Typography } from "antd";
const { Title } = Typography
import { PlusSquareOutlined } from "@ant-design/icons"
import styles from "./home.module.less"
import cn from "classnames"
import { ReservationList, ReservationForm } from "../../modules/reservation/components";
import { useState } from "react";



export default function HomePage() {
    const [form] = Form.useForm();
    const [showForm, setShowForm] = useState(false)

    const onSubmit = () => {
        form
            .validateFields()
            .then(_ => {
                form.submit();
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    const handleCancel = () => {
        setShowForm(false);
        form.resetFields();
    }

    const handleSubmit = (values: any) => {
        console.log("handleSubmit", values)
        form.resetFields();
    }

    const ModalFooter = () => {
        return (
            <Row justify="end">
                <Button onClick={handleCancel} ghost>
                    Cancel
                </Button>
                <Button onClick={onSubmit} ghost>
                    Create Reservation
                </Button>
            </Row>
        )
    }

    return <Row style={{ width: "100%" }}>
        <Col span={24}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={3} style={{ margin: 0 }}>
                        Reservations
                    </Title>
                </Col>
                <Col>
                    <Button onClick={() => setShowForm(true)} ghost>
                        <PlusSquareOutlined /> Create Reservation
                    </Button>
                </Col>
            </Row>
        </Col >
        <Col span={24} style={{ marginTop: "2rem" }}>
            <ReservationList />
        </Col>
        <Modal
            title={<span style={{ fontWeight: "bold", fontSize: "22px" }}>Book your suite at limehome</span>}
            visible={showForm}
            onCancel={handleCancel}
            footer={<ModalFooter />}
        >
            <ReservationForm handleSubmit={handleSubmit} formRef={form} />
        </Modal>
    </Row >
}
