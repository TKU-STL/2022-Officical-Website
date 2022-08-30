import { Image, Navbar, Text } from "@nextui-org/react";
import { Layout } from "./Layout";

export default function SiteNavbar() {
  return (
    <Layout>
      <Navbar isCompact isBordered variant="sticky">
        <Navbar.Brand>
          <Image width={50}
            height={50}
            src="https://avatars.githubusercontent.com/u/92886417?s=200&v=4"
            alt="STL Icon" />
            <Text>Space Technology Laboratory</Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="#about">About</Navbar.Link>
          <Navbar.Link href="#teams">Teams</Navbar.Link>
          <Navbar.Link href="#history">History</Navbar.Link>
          <Navbar.Link href="#trajectory">Trajectory</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}
