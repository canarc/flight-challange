import { Box, CheckBox, Heading, Main, Paragraph } from "grommet";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import Header from "../../components/Header";
import { useState } from "react";
import FoundFlightsList from "../../components/ FoundFlightsList";
import { Subcategory } from "../../types/Flight.type";

const FoundFlights = () => {
  const [searchParams] = useSearchParams();
  const [isPromotion, setIsPromotion] = useState(false);
  const navigate = useNavigate();

  const onFlightSelect = (subcategory: Subcategory) => {
    if (subcategory.status === "AVAILABLE") {
      navigate({
        pathname: "/reservationSuccess",
        search: createSearchParams({
          price:
            subcategory.price.amount * Number(searchParams.get("count")) +
            " " +
            subcategory.price.currency,
        }).toString(),
      });
    } else {
      navigate("/reservationFail");
    }
  };

  return (
    <Main
      pad={{ top: "xlarge", left: "large", right: "large" }}
      align="start"
      justify="center"
    >
      <Header color="#000" />
      <Box
        pad={{ horizontal: "large", vertical: "xsmall" }}
        height="xsmall"
        justify="center"
        background="brand"
      >
        <Heading level={4}>Uçuş</Heading>
      </Box>
      <Heading level={2}>
        {searchParams.get("origin")} - {searchParams.get("destination")},{" "}
        {searchParams.get("count")} Yolcu
      </Heading>
      <Box
        width="100%"
        margin={{ top: "medium" }}
        direction="column"
        gap="small"
      >
        <CheckBox
          checked={isPromotion}
          label={<Paragraph>Promosyon kodum var</Paragraph>}
          onChange={(event) => setIsPromotion(event.target.checked)}
        />
        <Paragraph fill>
          Promosyon Kodu seçenegi le tüm Economy kabini Eco Fly paketlerini %50
          indirimle satın alabilirsiniz!
        </Paragraph>
        <Paragraph fill>
          Promosyon Kodu seçenegi aktifken Eco Fly paketi haricinde seçim
          yapılamamaktadır.
        </Paragraph>
      </Box>
      <FoundFlightsList isPromotion={isPromotion} onSelect={onFlightSelect} />
    </Main>
  );
};

export default FoundFlights;
