import CommonErrorPage from "@/components/Others/Error/common/CommonErrorPage";

const Error400 = () => {
  return (
    <CommonErrorPage
      tittle={400}
      tittleClassName="font-info"
      BtnClassName="btn-info-gradien"
    />
  );
};

export default Error400;
