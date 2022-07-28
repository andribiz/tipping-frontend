import { Block } from 'baseui/block';
import { NextPage } from 'next';
import Head from 'next/head';
import Container from 'src/components/UiElements/Container/Container';

import FormSignup from 'src/containers/FormSignup';

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign up | INST.</title>
        <meta name="Description" content="Inst login page" />
      </Head>

      <Container>
        <Block
          overrides={{
            Block: {
              style: {
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              },
            },
          }}
        >
          {/* <Block overrides={{ Block: { style: { width: '60%' } } }}> */}
          <FormSignup />
          {/* </Block> */}
        </Block>
      </Container>
    </>
  );
};

export default Signup;
