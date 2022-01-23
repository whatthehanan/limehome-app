import React, { PropsWithChildren } from 'react'
import { Layout } from "antd"
import { default as SharedHeader } from "./header/header"
import { Outlet } from 'react-router-dom'

const { Header, Content } = Layout

interface SharedLayoutProps {

}

export default function SharedLayout({ }: PropsWithChildren<SharedLayoutProps>) {

    return (
        <Layout>
            <Header >
                <SharedHeader />
            </Header>
            <Layout>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
