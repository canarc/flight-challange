import {
  DateInput,
  DropButton,
  Select,
  Layer,
  Button,
  Paragraph,
  Card,
  CardBody,
} from "grommet";
import { FlightSelectorContainer } from "./styles";
import { Search } from "grommet-icons";
import PassengerSelector from "../PassengerSelector";
import { useState } from "react";
import {
  CABIN_CLASSES,
  PassangerState,
} from "../../types/PassangerSelector.type";
import { Cities } from "../../types/SearchFlights.type";
import { getAvailableFlights } from "../../services/flights";
import { createSearchParams, useNavigate } from "react-router-dom";

const FlightSelector = () => {
  const [hasError, setHasError] = useState(false);
  const [passangerState, setPassangerState] = useState<PassangerState>({
    count: 1,
    class: CABIN_CLASSES[0].value,
  });
  const [origin, setOrigin] = useState<string>();
  const [destination, setDestination] = useState<string>();
  const navigate = useNavigate();

  const SearchFlights = () => {
    if (!origin || !destination) {
      setHasError(true);
      return;
    }

    getAvailableFlights({ origin, destination }).then((flights) => {
      if (!flights.length) setHasError(true);
      else {
        localStorage.setItem("flights", JSON.stringify(flights));

        navigate({
          pathname: "/foundFlights",
          search: createSearchParams({
            origin,
            destination,
            count: String(passangerState.count),
            class: passangerState.class,
          }).toString(),
        });
      }
    });
  };

  return (
    <FlightSelectorContainer>
      <Select
        placeholder="Nereden"
        onChange={({ option }) => setOrigin(option)}
        value={origin}
        options={Cities}
      />
      <Select
        placeholder="Nereye"
        onChange={({ option }) => setDestination(option)}
        value={destination}
        options={Cities}
      />
      <DateInput placeholder="Tarih" format="mm/dd/yy" />
      <DropButton
        primary
        style={{ height: "100%" }}
        label={`${passangerState?.count} Yolcu, ${
          CABIN_CLASSES.find(
            (cabinClass) => cabinClass.value === passangerState?.class
          )?.label
        }`}
        dropContent={
          <PassengerSelector
            initialState={passangerState}
            onStateChange={(newState) => setPassangerState(newState)}
          />
        }
      />
      <Search onClick={SearchFlights} />

      {hasError && (
        <Layer
          onEsc={() => setHasError(false)}
          onClickOutside={() => setHasError(false)}
        >
          <Card pad="medium" background="light-1">
            <CardBody align="center">
              <Paragraph size="medium">
                Arama kriterlerinize uygun uçuş bulunamadı.
              </Paragraph>
              <Button
                margin={{ top: "large" }}
                primary
                label="Tamam"
                onClick={() => setHasError(false)}
              />
            </CardBody>
          </Card>
        </Layer>
      )}
    </FlightSelectorContainer>
  );
};

export default FlightSelector;
