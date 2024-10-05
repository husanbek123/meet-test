"use client";
import { Button, Form, Input } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Nimadir() {
  const searchParams = useSearchParams();

  const paramsArr: any[] = [];
  searchParams.forEach((i) => paramsArr.push(i));

  return <h1>{JSON.stringify(paramsArr)}</h1>;
}

export default function Home() {
  const params = useParams();

  return (
    <div className="p-7">
      <Suspense>
        <Nimadir />
      </Suspense>
    </div>
  );
}
