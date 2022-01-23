import { Row, Col, Avatar, Image } from 'antd';
import cn from 'classnames';
import { Logo } from '../../../assets/icons';
import styles from "./header.module.less"
import { UserOutlined } from '@ant-design/icons';


export default function Header() {
    return <Row justify='space-between' className={cn(styles.header)}>
        <Col className={cn(styles["header__logoContainer"])} >
            <Image width={200} className={cn(styles["header__logo"])} src={"./logo.svg"} preview={false} />
        </Col>
        <Col>
            <Avatar style={{ backgroundColor: "var(--primary-300)" }} size={"large"} icon={<UserOutlined />} />
        </Col>
    </Row>
}
