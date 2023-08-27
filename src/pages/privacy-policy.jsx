import { Title } from "@/components/common/title";
import TextContainer from "../components/common/textContainer";
import { useContext } from "react";
import { LocaleContext } from "../contexts/locale";

export default function TermsAndConditions() {
  const { _t } = useContext(LocaleContext);
  return (
    <>
      <Title>{_t("privacy_policy:title")}</Title>
      <TextContainer>{_t("privacy_policy:body")}</TextContainer>
    </>
  );
}
