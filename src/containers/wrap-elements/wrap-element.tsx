import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo/client";
import Layout from "containers/layout"

type Props = {
  element: React.ReactNode,
  props: any
}

export const wrapRootElement: React.FC<Props> = ({ element }) => (
 <ApolloProvider client={client}>{element}</ApolloProvider>
)

export const wrapPageElement: React.FC<Props> = ({ element, props }) => (
 <Layout {...props}>{element}</Layout>
)