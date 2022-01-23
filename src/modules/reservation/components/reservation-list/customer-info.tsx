import { Row, Col, Avatar } from 'antd';
import React from 'react';


interface CustomerInfoProps {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string
}

export default function CustomerInfo(props: CustomerInfoProps) {
    return (
        <Row justify='start'>
            <Col >
                <Avatar style={{ textTransform: "capitalize", backgroundColor: "var(--secondary-900)" }} size={64}>{props.firstName.charAt(0)}{props.lastName.charAt(0)}</Avatar>
            </Col>
            <Col offset={2}>
                <Row style={{ fontWeight: "bold" }}>
                    {props.firstName}{' '}{props.lastName}
                </Row>
                <Row style={{ fontSize: "12px" }}>
                    <a href={`mailto:${props.email}`}>
                        {props.email}
                    </a>
                </Row>
                <Row style={{ fontSize: "12px" }}>
                    {props.phoneNumber}
                </Row>
            </Col>
        </Row>
    )
}

