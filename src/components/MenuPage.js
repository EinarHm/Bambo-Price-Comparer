import React from "react";
import MenuHeader from "./Headers/MenuHeader";
import PageContainer from "./PageContainer";

const Page = ({ children }) => (
  <div>
    <MenuHeader />
    <PageContainer>{children}</PageContainer>
  </div>
);

export default Page;
