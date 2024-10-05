"use client";
import { Button, Form, Input } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Nimadir() {
  const searchParams = useSearchParams();

  return <h1>{JSON.stringify(searchParams)}</h1>;
}

export default function Home() {
  const params = useParams();

  return (
    <div className="p-7">
      <h1>Hello {params.name}</h1>
      Params:
      <h1>{JSON.stringify(params)}</h1>
      <Suspense>
        <Nimadir />
      </Suspense>
    </div>
  );
}
