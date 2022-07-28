import { NextPage } from 'next';
import { IoIosMailUnread, IoMdCart } from 'react-icons/io';
import { FaMoneyCheckAlt, FaChartLine } from 'react-icons/fa';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import { Card, StyledBody } from 'baseui/card';
import Container from '../components/UiElements/Container/Container';
import WidgetCard from '../components/UiElements/WidgetCard/WidgetCard';
import Views from '../containers/Widgets/Views';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title> INST.</title>
      </Head>
      <Block
        marginLeft={'-8px'}
        marginRight={'-8px'}
        paddingTop={['15px', '20px', '30px', '40px']}
      >
        <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
          <Cell span={[12, 12, 6]}>
            <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
              <Cell span={[12, 6]}>
                <WidgetCard
                  style={{ marginBottom: '20px' }}
                  title="210"
                  icon={<IoIosMailUnread color="#ffffff" size="1.7em" />}
                  description="Unread Order Email"
                  btntext="View report"
                  label="Total mail"
                  onClick={() => console.log('View report of unread email.')}
                />
              </Cell>
              <Cell span={[12, 6]}>
                <WidgetCard
                  style={{ marginBottom: '20px' }}
                  color="#0070F3"
                  title="198"
                  icon={<IoMdCart color="#ffffff" size="1.7em" />}
                  description="Pending Orders"
                  btntext="View report"
                  label="Total orders"
                  onClick={() => console.log('View report of pending orders.')}
                />
              </Cell>
              <Cell span={[12, 6]}>
                <WidgetCard
                  style={{ marginBottom: '20px' }}
                  color="#3AA76D"
                  title="$210M"
                  icon={<FaChartLine color="#ffffff" size="1.6em" />}
                  description="Yearly Income"
                  btntext="View report"
                  label="Yearly income"
                  onClick={() => console.log('View report of yearly income.')}
                />
              </Cell>
              <Cell span={[12, 6]}>
                <WidgetCard
                  style={{ marginBottom: '20px' }}
                  color="#7928CA"
                  title="$210M"
                  icon={<FaMoneyCheckAlt color="#ffffff" size="1.6em" />}
                  description="Total Spent"
                  btntext="View report"
                  label="Previous month"
                  onClick={() => console.log('View report of previous month.')}
                />
              </Cell>
            </Grid>
          </Cell>
        </Grid>

        <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
          <Cell span={[12, 12, 4]}>
            <Card
              title="Average View"
              overrides={{
                Root: {
                  style: ({ $theme }) => {
                    return {
                      borderTopColor: 'transparent',
                      borderRightColor: 'transparent',
                      borderBottomColor: 'transparent',
                      borderLeftColor: 'transparent',
                      boxShadow: $theme.lighting.shadow400,
                      marginBottom: $theme.sizing.scale700,
                    };
                  },
                },
                Title: {
                  style: ({ $theme }) => {
                    return {
                      ...$theme.typography.font250,
                      position: 'absolute',
                    };
                  },
                },
                Contents: {
                  style: () => {
                    return {
                      minHeight: '372px',
                    };
                  },
                },
              }}
            >
              <StyledBody>
                <Views className="padding-control" totalView={75} />
              </StyledBody>
            </Card>
          </Cell>
        </Grid>
      </Block>
    </Container>
  );
};

export default Home;
