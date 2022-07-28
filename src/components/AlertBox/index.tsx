import { Block } from 'baseui/block';
import { DisplayMedium, DisplaySmall } from 'baseui/typography';

export interface AlertBoxProps {
  template: string;
  backgroundColor: string;
  color: string;
  fontWeight: number;
  fontColor: string;
  person: string;
  message: string;
  nominal: number;
}

const AlertBox: React.FC<AlertBoxProps> = ({
  template,
  backgroundColor,
  color,
  fontWeight,
  fontColor,
  person,
  message,
  nominal,
}) => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            backgroundColor: `${backgroundColor}`,
            padding: '15px',
            boxShadow: '10px 10px 16px #000000',
            textAlign: 'center',
          },
        },
      }}
    >
      <DisplaySmall
        overrides={{
          Block: {
            style: { color: `${fontColor}`, fontWeight: `${fontWeight}` },
          },
        }}
      >{`${person} ${template} ${nominal} USDC`}</DisplaySmall>

      <DisplayMedium
        overrides={{
          Block: {
            style: { color: `${fontColor}`, fontWeight: `${fontWeight}` },
          },
        }}
      >{`${message}`}</DisplayMedium>
    </Block>
  );
};

export default AlertBox;
