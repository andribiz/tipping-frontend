import { Button } from 'baseui/button';
import { Card, StyledAction } from 'baseui/card';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Cell, Grid } from 'baseui/layout-grid';
import { StyledBody } from 'baseui/table';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  imageRate: yup.number().required('image rate is required'),
  videoRate: yup.number().required('video rate is required'),
});

const SponsorSettingPage = () => {
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
          <Card title="Settings Your Sponsor Rate">
            <StyledBody>
              <Grid>
                <Cell span={8}>
                  <FormControl label="Your rate for image sponsor">
                    <Input
                      id="imageRate"
                      value={values.imageRate}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Cell>
                <Cell span={8}>
                  <FormControl label="Your rate for video sponsor">
                    <Input
                      id="imageRate"
                      value={values.videoRate}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Cell>
              </Grid>
            </StyledBody>
            <StyledAction>
              <Button type="submit">Hslo </Button>
            </StyledAction>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default SponsorSettingPage;
