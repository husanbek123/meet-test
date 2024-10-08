"use client";
import { Button, Form, Input } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Nimadir() {
  const searchParams = useSearchParams();

  const paramsArr: any[] = [];
  searchParams.forEach((i) => paramsArr.push(i));

  const SplittedToken = searchParams.get("token")?.split(".") as any;

  if (!searchParams.get("token")) {
    return <h1>Token not found</h1>;
  }

  if (!SplittedToken) {
    return <h1>Token is not correct</h1>;
  }

  if (JSON.parse(Buffer.from(SplittedToken[0], "base64").toString())) {
    const tokenPayload1 = JSON.parse(
      Buffer.from(SplittedToken[0], "base64").toString()
    );
    const tokenPayload2 = JSON.parse(
      Buffer.from(SplittedToken[1], "base64").toString()
    );

    return (
      <div>
        <ul>
          <li>{JSON.stringify(tokenPayload1)}</li>
          <li>{JSON.stringify(tokenPayload2)}</li>
        </ul>
        <br />
        <br />
        <h1>Token: {searchParams.get("token")}</h1>
      </div>
    );
  }

  // const tokenPayload2 = JSON.parse(
  //   Buffer.from(SplittedToken[1], "base64").toString()
  // );

  // const tokenPayload3 = JSON.parse(
  //   Buffer.from(SplittedToken[2], "base64").toString()
  // );

  return (
    <div>
      <h1>{JSON.stringify(paramsArr)}</h1>
      {/* <div>{tokenPayload1}</div> */}
      {/* <div>{tokenPayload2}</div>
      <div>{tokenPayload3}</div> */}
    </div>
  );
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
