import { Button } from 'baseui/button';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Cell, Grid } from 'baseui/layout-grid';
import { useState } from 'react';
import AlertBox, { AlertBoxProps } from 'src/components/AlertBox';
import Container from 'src/components/UiElements/Container/Container';

const AlertSetting = () => {
  const [url, setURL] = useState<string>('');
  const [data, setData] = useState<AlertBoxProps>({
    template: 'baru saja memberikan',
    backgroundColor: '#faae2b',
    fontColor: '#FFFFFF',
    color: '#744fc9',
    fontWeight: 500,
    person: 'Mumu',
    message: 'Semangat ya kamu',
    nominal: 10000,
  });

  return (
    <Container>
      <AlertBox {...data} />
      <Grid overrides={{ Grid: { style: { marginTop: '15px' } } }}>
        <Cell span={4}>
          <FormControl label="Background color">
            <Input
              id="background-color"
              value={data.backgroundColor}
              onChange={(e) =>
                setData({ ...data, backgroundColor: e.target.value })
              }
            />
          </FormControl>
        </Cell>
        <Cell span={4}>
          <FormControl label="Font Weight">
            <Input
              id="font-weight"
              value={data.fontWeight}
              onChange={(e) =>
                setData({ ...data, fontWeight: Number(e.target.value) })
              }
            />
          </FormControl>
        </Cell>
        <Cell span={4}>
          <FormControl label="Font Color">
            <Input
              id="font-color"
              value={data.fontColor}
              onChange={(e) => setData({ ...data, fontColor: e.target.value })}
            />
          </FormControl>
        </Cell>
        <Cell span={12}>
          <FormControl label="Template">
            <Input
              id="template"
              value={data.template}
              onChange={(e) => setData({ ...data, template: e.target.value })}
            />
          </FormControl>
        </Cell>
        <Cell span={12}>
          <FormControl label="test Url">
            <Input id="url" value={url} />
          </FormControl>
        </Cell>
        <Cell span={4}>
          <Button onClick={() => console.log('Click')}>Test Alert</Button>
        </Cell>
      </Grid>
    </Container>
  );
};

export default AlertSetting;
