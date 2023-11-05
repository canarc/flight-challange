import {
  Accordion,
  AccordionPanel,
  Box,
  Button,
  CheckBox,
  Heading,
  List,
  Paragraph,
  Text,
} from "grommet";
import { FC, useEffect, useState } from "react";
import { FareCategories, Flight, Subcategory } from "../../types/Flight.type";
import colors from "../../assets/colors";
import { useSearchParams } from "react-router-dom";

type FoundFlightsListProps = {
  isPromotion: boolean;
  onSelect: (subCategory: Subcategory) => void;
};

const FoundFlightsList: FC<FoundFlightsListProps> = ({
  isPromotion,
  onSelect,
}) => {
  const [searchParams] = useSearchParams();

  const [selectedFlight, setSelectedFlight] = useState<number | undefined>(0);
  const [sortCriteria, setSortCriteria] = useState("departureTime");
  const [selectedFareCategory, setSelectedFareCategory] = useState<
    keyof FareCategories
  >(searchParams.get("class") as keyof FareCategories);

  const [flights] = useState<Flight[]>(
    JSON.parse(localStorage.getItem("flights") || "[]")
  );
  const sortedFlights = flights.sort((a, b) => {
    if (sortCriteria === "departureTime") {
      return (
        Number(a.departureDateTimeDisplay.replace(":", "")) -
        Number(b.departureDateTimeDisplay.replace(":", ""))
      );
    } else {
      return (
        a.fareCategories.ECONOMY.subcategories.find(
          (category) => category.brandCode === "ecoFly"
        )!.price.amount -
        b.fareCategories.ECONOMY.subcategories.find(
          (category) => category.brandCode === "ecoFly"
        )!.price.amount
      );
    }
  });

  useEffect(() => {
    isPromotion && setSelectedFareCategory("ECONOMY");
  }, [isPromotion]);

  return (
    <Box margin={{ top: "xlarge" }}>
      <Box
        background={colors.ListFlightsHeaderContainer}
        direction="row-reverse"
        gap="small"
        pad="small"
        height="xsmall"
        align="center"
      >
        <Button
          primary={sortCriteria === "departureTime"}
          onClick={() => {
            setSortCriteria("departureTime");
            setSelectedFlight(undefined);
          }}
          color="white"
          label="Kalkış Saati"
        />
        <Button
          primary={sortCriteria === "economyPrice"}
          onClick={() => {
            setSortCriteria("economyPrice");
            setSelectedFlight(undefined);
          }}
          color="white"
          label="Ekonomi Ücreti"
        />
        <Paragraph>Sıralama Kriteri</Paragraph>
      </Box>

      <Box pad="xsmall" background="light-1" height="xlarge" overflow="auto">
        <Accordion
          activeIndex={selectedFlight}
          onActive={([index]) => {
            setSelectedFlight(index);
            !selectedFareCategory && setSelectedFareCategory("ECONOMY");
          }}
          gap="small"
        >
          {sortedFlights.map((flight, index) => (
            <AccordionPanel
              label={
                <Box width="xxlarge" height="small" direction="row" gap="small">
                  <Box
                    width="large"
                    height="small"
                    direction="row"
                    align="center"
                    gap="large"
                    pad="medium"
                    background="white"
                  >
                    <Box direction="column">
                      <Text>
                        <b>{flight.departureDateTimeDisplay}</b>
                      </Text>
                      <Text> {flight.originAirport.city.code}</Text>
                      <Text size="small">
                        {" "}
                        {flight.originAirport.city.name}
                      </Text>
                    </Box>
                    <Box border height="1px" width="100%"></Box>
                    <Box direction="column" align="end">
                      <Text>
                        <b>{flight.arrivalDateTimeDisplay}</b>
                      </Text>
                      <Text> {flight.destinationAirport.city.code}</Text>
                      <Text size="small">
                        {flight.destinationAirport.city.name}
                      </Text>
                    </Box>
                    <Box width="small" direction="column" align="center">
                      <Paragraph>Uçuş Süresi</Paragraph>
                      <Paragraph>
                        <b>{flight.flightDuration}</b>
                      </Paragraph>
                    </Box>
                  </Box>
                  <Box
                    width="medium"
                    height="small"
                    background="white"
                    direction="row"
                    align="center"
                    justify="center"
                    gap="large"
                  >
                    <CheckBox
                      checked={
                        selectedFareCategory === "ECONOMY" &&
                        selectedFlight === index
                      }
                      onClick={() => {
                        setSelectedFareCategory("ECONOMY");
                        setSelectedFlight(index);
                      }}
                      label="Economy"
                    />
                    <Box>
                      <Paragraph>Yolcu Başına</Paragraph>
                      <Paragraph>
                        <b>
                          {
                            flight.fareCategories.ECONOMY.subcategories[0].price
                              .amount
                          }{" "}
                          {
                            flight.fareCategories.ECONOMY.subcategories[0].price
                              .currency
                          }
                        </b>
                      </Paragraph>
                    </Box>
                  </Box>
                  <Box
                    width="medium"
                    height="small"
                    background="white"
                    direction="row"
                    align="center"
                    justify="center"
                    gap="large"
                  >
                    <CheckBox
                      disabled={isPromotion}
                      checked={
                        selectedFareCategory === "BUSINESS" &&
                        selectedFlight === index
                      }
                      onClick={() => {
                        setSelectedFareCategory("BUSINESS");
                        setSelectedFlight(index);
                      }}
                      label="Business"
                    />
                    <Box>
                      <Paragraph>Yolcu Başına</Paragraph>
                      <Paragraph>
                        <b>
                          {
                            flight.fareCategories.BUSINESS.subcategories[0]
                              .price.amount
                          }{" "}
                          {
                            flight.fareCategories.BUSINESS.subcategories[0]
                              .price.currency
                          }
                        </b>
                      </Paragraph>
                    </Box>
                  </Box>
                </Box>
              }
            >
              <Box pad={{ top: "small" }} direction="row" gap="small">
                {selectedFareCategory &&
                  flight.fareCategories[selectedFareCategory].subcategories.map(
                    (subCategory) => (
                      <Box
                        width="large"
                        height="medium"
                        background={colors.SearchFlightsContainerBackground}
                        direction="column"
                      >
                        <Box
                          direction="row"
                          pad="small"
                          align="center"
                          justify="between"
                        >
                          <Heading level={4}>{subCategory.brandCode}</Heading>
                          <Box direction="row" align="start" gap="xsmall">
                            <Heading level={6}>
                              {subCategory.price.currency}
                            </Heading>
                            <Heading level={3}>
                              {subCategory.price.amount}
                            </Heading>
                          </Box>
                        </Box>
                        <Box background="white" fill>
                          <List data={subCategory.rights} />
                          <Button
                            margin={{ top: "auto" }}
                            style={{ borderRadius: 0 }}
                            primary
                            size="large"
                            label="Uçuşu Seç"
                            onClick={() => onSelect(subCategory)}
                          />
                        </Box>
                      </Box>
                    )
                  )}
              </Box>
            </AccordionPanel>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default FoundFlightsList;
