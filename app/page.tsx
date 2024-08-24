"use client";

import { List, Title } from "@mantine/core";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Title>Home page</Title>
      <List>
        <List.Item>
          Charts
          <List>
            <List.Item>
              <Link href="/charts/area-charts">Area Charts</Link>
            </List.Item>
          </List>
        </List.Item>
      </List>
    </div>
  );
}
