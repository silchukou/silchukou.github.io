import { Title } from "@/components/common/title";
import { Button, Checkbox, Form, Input } from "antd";
import { useContext } from "react";
import { LocaleContext } from "../contexts/locale";

export default function Home() {
  const { _t } = useContext(LocaleContext);

  return (
    <>
      <Title>{_t("contact:title")}</Title>
      <div className="flex lg:flex-row flex-col items-center justify-center">
        <div className="w-full">
          <img src="contact_image.png" />
        </div>
        <div className="w-full">
          <Form
            name="basic"
            layout="vertical"
            className="text-white"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label={_t("contact:name")}
              name="name"
              rules={[
                { required: true, message: _t("contact:name_missing_error") },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={_t("contact:email")}
              name="email"
              rules={[
                { required: true, message: _t("contact:email_missing_error") },
                { type: "email", message: _t("contact:email_invalid_error") },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={_t("contact:subject")}
              name="message"
              rules={[
                {
                  required: true,
                  message: _t("contact:subject_missing_error"),
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(_t("contact:terms_missing_error"))
                        ),
                },
              ]}
            >
              <Checkbox>
                {_t("contact:i_aggree_to_the")}{" "}
                <a
                  href="terms-and-conditions"
                  target="_blank"
                  className="underline hover:underline text-blue-200"
                >
                  {_t("contact:terms_and_conditions")}
                </a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-grey m-auto"
              >
                {_t("contact:submit")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
