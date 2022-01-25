import { Form, DatePicker, Row, Col, Input, Select } from "antd";
const { RangePicker } = DatePicker

interface ReservationFormProps {
    handleSubmit: (values: any) => void
    formRef: any
}

export default function ReservationForm(props: ReservationFormProps) {
    return <Form layout="vertical" form={props.formRef} onFinish={values => props.handleSubmit(values)} scrollToFirstError size="large">
        <Row>
            <Col span={11}>
                <Form.Item label="Check-in/out dates" name={"stay"} rules={[{ required: true, message: "Check-in/out dates are required" }]}>
                    <RangePicker />
                </Form.Item>
            </Col>
            <Col offset={2} span={11}>
                <Form.Item label="Number of Guests" name="numGuests" rules={[{ required: true, message: "Number of guests is required" }]}>
                    <Input min={1} type="number" placeholder="Number of Guests" />
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={11}>
                <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: "First name is required" }]}
                >
                    <Input type="text" placeholder="First Name" />
                </Form.Item>
            </Col>
            <Col offset={2} span={11}>
                <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: "Last name is required" }]}>
                    <Input type="text" placeholder="Last Name" />
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={11}>
                <Form.Item label="Billing Address" name="streetAddress" rules={[{ required: true, message: "Billing address is required" }]}>
                    <Input type="text" placeholder="Billing Address" />
                </Form.Item>
            </Col>
            <Col offset={2} span={11}>
                <Form.Item label="Billing Country" name="country" rules={[{ required: true, message: "Billing Country is required" }]}>
                    <Select placeholder="Billing Country">
                        <Select.Option value="germany">
                            Germany
                        </Select.Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={11}>
                <Form.Item label="Postal Code" name="postalCode" rules={[{ required: true, message: "Postal code is required" }]}>
                    <Input type="text" placeholder="Postal Code" />
                </Form.Item>
            </Col>
            <Col offset={2} span={11}>
                <Form.Item label="City" name="city" rules={[{ required: true, message: "Billing City is required" }]}>
                    <Input type="text" placeholder="City" />
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={11}>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: "email is required" }, { type: "email" }]}>
                    <Input type="text" placeholder="Email" />
                </Form.Item>
            </Col>
            <Col offset={2} span={11}>
                <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: "Phone number is required" }]}>
                    <Input type="text" placeholder="Phone Number" />
                </Form.Item>
            </Col>
        </Row>
    </Form >
}
