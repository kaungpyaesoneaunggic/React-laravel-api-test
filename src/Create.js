import { Button, Form, Input } from "antd";
import React, { useState } from "react";
export default function Create() {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      await fetch("http://127.0.0.1:8000/api/category/store", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });
      console.log("success");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <div>
      <Form onSubmitCapture={handleSubmit}>
        <div
          style={{ height: "100vh" }}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <Input
            style={{
              width: "500px",
              fontSize: "30px",
              textAlign: "center",
              margin: "20px",
            }}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter name"
          />
          <Button style={{ width: "500px", margin: "20px" }} htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
