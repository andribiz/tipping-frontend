import { Block } from 'baseui/block';
import { Cell, Grid } from 'baseui/layout-grid';
import { NextPage } from 'next';
import Head from 'next/head';
import SponsorMenu from 'src/components/SideMenu/SponsorMenu';
import Container from 'src/components/UiElements/Container/Container';
import SponsorSettingPage from 'src/containers/SponsorSetting';

const SponsorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sponsor | INST.</title>
        <meta name="Description" content="Inst calendar app" />
      </Head>

      <Container>
        <Block paddingTop={['0', '0', '0', '40px']}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            <Cell span={[12, 12, 3]}>
              <SponsorMenu />
            </Cell>
            <Cell span={[12, 12, 9]}>
              <Block
                paddingTop={['10px', '20px', '30px', '0']}
                minHeight="500px"
                height="100%"
                maxHeight="700px"
              >
                <SponsorSettingPage />
              </Block>
            </Cell>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default SponsorPage;
