"use client";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const AntdProvider = ({ children }: React.PropsWithChildren) => (
  <AntdRegistry>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F22225",
        },
      }}
    >
      {children}
    </ConfigProvider>
  </AntdRegistry>
);

export default AntdProvider;
