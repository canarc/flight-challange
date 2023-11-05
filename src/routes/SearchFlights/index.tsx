import { Main, Paragraph } from "grommet";
import FlightSelector from "../../components/FlightSelector";
import colors from "../../assets/colors";
import Header from "../../components/Header";

const SearchFlights = () => {
  return (
    <Main
      pad="large"
      align="center"
      justify="center"
      background={colors.SearchFlightsBackground}
    >
      <Header />
      <Paragraph size="xxlarge">Merhaba</Paragraph>
      <Paragraph margin={{ bottom: "3rem" }} size="xlarge">
        Nereyi keşfetmek istersiniz?
      </Paragraph>
      <FlightSelector />
    </Main>
  );
};

export default SearchFlights;
