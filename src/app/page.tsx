"use client";
import { Button, Form, Input } from "antd";
import { useParams, useSearchParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  const searchParams = useSearchParams();

  return (
    <div className="p-7">
      <h1>Hello {params.name}</h1>
      Params:
      <h1>{JSON.stringify(params)}</h1>
      Search/QueryParams:
      <h1>{JSON.stringify(searchParams.entries())}</h1>
    </div>
  );
}
