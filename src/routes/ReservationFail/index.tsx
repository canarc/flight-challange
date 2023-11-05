import { Box, Button, Heading } from "grommet";
import { Alert as AlertIcon } from "grommet-icons";
import { useNavigate } from "react-router-dom";

const ReservationFail = () => {
  const navigate = useNavigate();

  const onConfirm = () => {
    localStorage.removeItem("flights");
    navigate("/");
  };
  return (
    <Box fill justify="center" align="center" gap="large">
      <Box direction="row" gap="medium" align="center">
        <AlertIcon color="brand" size="large" />
        <Heading level="4">Kabin seciminiz tamamlanamadı.</Heading>
      </Box>
      <Button
        onClick={onConfirm}
        style={{ borderRadius: 0 }}
        primary
        size="large"
        label="Başa Dön"
      />
    </Box>
  );
};

export default ReservationFail;
