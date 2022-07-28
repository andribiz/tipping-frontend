import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { ButtonGroup } from 'baseui/button-group';
import { Card, StyledAction, StyledBody } from 'baseui/card';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .max(32, 'Name length should not be more than 32 characters'),
  username: yup
    .string()
    .required('Username is required')
    .max(16, 'Username length should not be more than 16 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email'),
});

const FormSignup = () => {
  const handleSubmit = () => {
    console.log('Halo');
  };
  return (
    <Formik
      initialValues={{
        imageRate: '',
        videoRate: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values, touched, errors, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Card
            title="Register your account"
            overrides={{ Body: { style: { width: '500px' } } }}
          >
            <StyledBody>
              <Block marginBottom="30px">
                <FormControl
                  label="Your Name"
                  caption="Please use 32 characters at maximum"
                  error={errors?.name?.message}
                  overrides={{
                    Label: {
                      style: ({ $theme }) => {
                        return { ...$theme.typography.font350 };
                      },
                    },
                  }}
                >
                  <Input
                    name="name"
                    autoComplete="off"
                    placeholder="Please enter your full name or a display name you comfortable with"
                    overrides={{
                      InputContainer: {
                        style: () => {
                          return { backgroundColor: 'transparent' };
                        },
                      },
                    }}
                  />
                </FormControl>
              </Block>

              <Block marginBottom="30px">
                <FormControl
                  label="Your User Name"
                  caption="Please use 16 characters at maximum"
                  error={errors?.username?.message}
                  overrides={{
                    Label: {
                      style: ({ $theme }) => {
                        return { ...$theme.typography.font350 };
                      },
                    },
                  }}
                >
                  <Input
                    name="username"
                    autoComplete="off"
                    placeholder="Please enter your user name or a display name you comfortable with"
                    overrides={{
                      InputContainer: {
                        style: () => {
                          return { backgroundColor: 'transparent' };
                        },
                      },
                    }
                  />
                </FormControl>
              </Block>

              <Block marginBottom="30px">
                <FormControl
                  label="Your Email"
                  caption="jennydoe@example.io"
                  error={errors?.email?.message}
                  overrides={{
                    Label: {
                      style: ({ $theme }) => {
                        return { ...$theme.typography.font350 };
                      },
                    },
                  }}
                >
                  <Input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Please enter your email address"
                    overrides={{
                      InputContainer: {
                        style: () => {
                          return { backgroundColor: 'transparent' };
                        },
                      },
                    }}
                  />
                </FormControl>
              </Block>
            </StyledBody>
            <StyledAction>
              <ButtonGroup>
                <Button
                  type="submit"
                  size="large"
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => {
                        return {
                          width: '131px',
                          ...$theme.typography.font250,
                        };
                      },
                    },
                  }}
                >
                  Save
                </Button>
                <Button
                  type="reset"
                  onClick={() => reset()}
                  kind="tertiary"
                  size="large"
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => {
                        return {
                          width: '131px',
                          ...$theme.typography.font250,
                        };
                      },
                    },
                  }}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </StyledAction>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default FormSignup;
