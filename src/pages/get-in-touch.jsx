import { Title } from "@/components/common/title";
import { Checkbox, Form, Input, Spin, notification } from "antd";
import { useContext, useState } from "react";
import { LocaleContext } from "../contexts/locale";
import { ImSpinner2 } from "react-icons/im";

export default function Home() {
  const { _t } = useContext(LocaleContext);
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  async function handleSubmit(values) {
    setLoading(true);
    const access_key = "8c0645bb-e8b2-4813-b58e-b1bbd5ee8609";
    const formData = new FormData();
    formData.append("access_key", access_key);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        api.success({
          message: _t("contact:success_message"),
          placement: "bottomRight",
        });
      } else {
        api.error({
          message: _t("contact:error_message"),
          placement: "bottomRight",
        });
      }
    });
  }

  return (
    <>
      {contextHolder}
      <Title>{_t("contact:title")}</Title>
      <div className="flex lg:flex-row flex-col items-center justify-center">
        <div className="w-full mb-4 xl:mb-0">
          <img src="contact_image.png" className="m-auto" />
        </div>
        <div className="w-full">
          <Form
            name="basic"
            layout="vertical"
            className="text-white"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
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
              <button type="primary" className="button self-center">
                {(loading && (
                  <Spin
                    indicator={
                      <ImSpinner2 className="animate-spin text-white" />
                    }
                  />
                )) ||
                  _t("contact:submit")}
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
