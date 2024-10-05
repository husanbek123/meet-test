"use client";
import { Button, Form, Input } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const params = useParams();
  const searchParams = useSearchParams();
  console.log(searchParams);

  return (
    <div className="p-7">
      <h1>Hello {params.name}</h1>
      Params:
      <h1>{JSON.stringify(params)}</h1>
      <h1>{JSON.stringify(searchParams)}</h1>
    </div>
  );
}
