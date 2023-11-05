import { Box, Button, Paragraph, RadioButtonGroup } from "grommet";
import { Add as AddIcon, Subtract as SubtractIcon } from "grommet-icons";
import { FC, useEffect, useReducer } from "react";
import {
  CABIN_CLASSES,
  PassangerAction,
  PassangerActionKind,
  PassangerState,
} from "../../types/PassangerSelector.type";

const passangerReducer = (state: PassangerState, action: PassangerAction) => {
  const { type, payload } = action;
  if (type === PassangerActionKind.DECREASE && state.count === 1) return state;
  if (type === PassangerActionKind.DECREASE)
    return { ...state, count: state.count - 1 };
  if (type === PassangerActionKind.INCREASE)
    return { ...state, count: state.count + 1 };
  if (type === PassangerActionKind.SELECT_CLASS && payload)
    return { ...state, class: payload };

  return state;
};

type PassangerSelectorProps = {
  initialState: PassangerState;
  onStateChange: (passangerState: PassangerState) => void;
};

const PassengerSelector: FC<PassangerSelectorProps> = ({
  initialState,
  onStateChange,
}) => {
  const [passangerState, dispatch] = useReducer(passangerReducer, initialState);

  useEffect(() => {
    onStateChange(passangerState);
  }, [onStateChange, passangerState]);

  return (
    <Box pad="small" gap="medium" width="medium" background="light-2">
      <Paragraph size="xsmall">Kabin ve Yolcu Seçimi</Paragraph>
      <RadioButtonGroup
        name="cabin"
        width="medium"
        direction="row"
        options={CABIN_CLASSES}
        value={passangerState.class}
        onChange={(event) =>
          dispatch({
            payload: event.target.value,
            type: PassangerActionKind.SELECT_CLASS,
          })
        }
      />
      <Box direction="row" align="center" justify="between">
        <Paragraph size="medium">
          <b>Yolcu</b>
        </Paragraph>
        <Box direction="row" align="center" gap="small">
          <Button
            onClick={() => dispatch({ type: PassangerActionKind.DECREASE })}
            primary
            icon={<SubtractIcon />}
          ></Button>
          <Paragraph size="medium">{passangerState.count}</Paragraph>
          <Button
            onClick={() => dispatch({ type: PassangerActionKind.INCREASE })}
            primary
            icon={<AddIcon />}
          ></Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PassengerSelector;
