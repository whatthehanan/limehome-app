import { Row, Col, Button, Modal, Form, notification } from "antd";
import { Typography } from "antd";
const { Title } = Typography
import { PlusSquareOutlined } from "@ant-design/icons"
import styles from "./home.module.less"
import cn from "classnames"
import { ReservationList, ReservationForm } from "../../modules/reservation/components";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { createReservation, fetchReservations } from "../../modules/reservation/services/reservation-service";



export default function HomePage() {
    const [form] = Form.useForm();
    const [showForm, setShowForm] = useState(false)
    const { data, isLoading, refetch } = useQuery(["reservations"], fetchReservations(1, 10), {
        refetchOnWindowFocus: true
    })
    const { mutate } = useMutation(createReservation, {
        onSuccess: () => {
            setShowForm(false)
            refetch();
            form.resetFields();
        },
        onError: () => {
            notification.error({
                message: "Something went wrong!"
            })
        }
    })

    const onSubmit = () => {
        form
            .validateFields()
            .then(_ => {
                form.submit();
            })
            .catch(info => {
            });
    }

    const handleCancel = () => {
        setShowForm(false);
        form.resetFields();
    }

    const handleSubmit = async (values: any) => {
        values.checkInDate = values.stay[0];
        values.checkOutDate = values.stay[1];
        await mutate(values)
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
            <ReservationList isLoading={isLoading} data={data} />
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
