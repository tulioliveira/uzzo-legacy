import React from 'react'
import Button from 'src/components/Button'
import Layout from 'src/Layout'

export default function Home() {
  return <Layout>
    <Button width="100px">Normal</Button>
    <Button width="100px" variant="primary">Primary</Button>
    <Button width="100px" variant="accent">Accent</Button>
    <Button width="100px" variant="success">Success</Button>
    <Button width="100px" variant="error">Error</Button>
    <Button width="100px" variant="warning">Warning</Button>
    <Button width="100px" variant="info">Info</Button>
  </Layout>
}
