import { Box, Button, Heading } from "grommet";
import { StatusGood as SuccessIcon } from "grommet-icons";
import { useNavigate, useSearchParams } from "react-router-dom";

const ReservationSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onConfirm = () => {
    localStorage.removeItem("flights");
    navigate("/");
  };
  return (
    <Box fill align="center" justify="center">
      <Box align="end" gap="small">
        <Box
          width="xlarge"
          direction="row"
          gap="medium"
          align="center"
          border="bottom"
          pad={{ bottom: "medium" }}
        >
          <SuccessIcon color="green" size="large" />
          <Heading level="4">Kabin seciminiz tamamlandı.</Heading>
        </Box>
        <Box fill align="start" justify="start">
          <Heading level="4">Toplam Tutar: {searchParams.get("price")}</Heading>
        </Box>
        <Button
          onClick={onConfirm}
          style={{ borderRadius: 0 }}
          primary
          size="large"
          label="Başa Dön"
        />
      </Box>
    </Box>
  );
};

export default ReservationSuccess;
