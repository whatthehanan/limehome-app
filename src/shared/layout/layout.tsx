import React, { PropsWithChildren } from 'react'
import { Layout } from "antd"
import { default as SharedHeader } from "./header/header"
import { Outlet } from 'react-router-dom'
import cn from "classnames"
import styles from "./layout.module.less"

const { Header, Content } = Layout

interface SharedLayoutProps {

}

export default function SharedLayout({ }: PropsWithChildren<SharedLayoutProps>) {

    return (
        <Layout >
            <Header className={cn(styles.header)}>
                <SharedHeader />
            </Header>
            <Layout style={{ backgroundColor: "#f7f1e9" }}>
                <Content style={{ padding: "1rem 3rem" }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
