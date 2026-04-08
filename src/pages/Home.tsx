import { useNavigate } from 'react-router-dom';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Icon from '@cloudscape-design/components/icon';
import Grid from '@cloudscape-design/components/grid';

export default function Home() {
  const navigate = useNavigate();

  return (
    <ContentLayout
      header={
        <Box padding={{ top: 'xxxl', horizontal: 'l' }}>
          <SpaceBetween size="xl">
            <Box textAlign="center">
              <SpaceBetween size="m">
                <Box variant="h1" fontSize="display-l" fontWeight="heavy">
                  Welcome to GNZ Enterprises
                </Box>
                <Box variant="p" fontSize="heading-m" color="text-body-secondary">
                  Delivering innovative solutions for modern businesses
                </Box>
                <Box margin={{ top: 'l' }}>
                  <SpaceBetween size="xs" direction="horizontal">
                    <Button variant="primary" onClick={() => navigate('/services')}>
                      Explore Services
                    </Button>
                    <Button onClick={() => navigate('/contact')}>
                      Get in Touch
                    </Button>
                  </SpaceBetween>
                </Box>
              </SpaceBetween>
            </Box>
          </SpaceBetween>
        </Box>
      }
    >
      <SpaceBetween size="xl">
        <Container
          header={
            <Header
              variant="h2"
              description="Why choose GNZ Enterprises for your business needs"
            >
              Our Core Strengths
            </Header>
          }
        >
          <ColumnLayout columns={3} variant="text-grid">
            <Box>
              <SpaceBetween size="s">
                <Box>
                  <Icon name="status-positive" size="big" variant="success" />
                </Box>
                <Box variant="h3">Innovation First</Box>
                <Box variant="p" color="text-body-secondary">
                  We leverage cutting-edge technology to deliver solutions that keep you ahead of the competition
                </Box>
              </SpaceBetween>
            </Box>
            <Box>
              <SpaceBetween size="s">
                <Box>
                  <Icon name="settings" size="big" variant="normal" />
                </Box>
                <Box variant="h3">Custom Solutions</Box>
                <Box variant="p" color="text-body-secondary">
                  Tailored approaches designed specifically for your unique business requirements
                </Box>
              </SpaceBetween>
            </Box>
            <Box>
              <SpaceBetween size="s">
                <Box>
                  <Icon name="contact" size="big" variant="normal" />
                </Box>
                <Box variant="h3">24/7 Support</Box>
                <Box variant="p" color="text-body-secondary">
                  Round-the-clock assistance to ensure your business operations run smoothly
                </Box>
              </SpaceBetween>
            </Box>
          </ColumnLayout>
        </Container>

        <Grid
          gridDefinition={[
            { colspan: { default: 12, xs: 6 } },
            { colspan: { default: 12, xs: 6 } }
          ]}
        >
          <Container
            header={
              <Header variant="h3">
                Enterprise Solutions
              </Header>
            }
          >
            <SpaceBetween size="m">
              <Box variant="p">
                Scale your business with our comprehensive enterprise-grade solutions designed for growth and efficiency.
              </Box>
              <Button onClick={() => navigate('/services')}>
                Learn More
              </Button>
            </SpaceBetween>
          </Container>

          <Container
            header={
              <Header variant="h3">
                Cloud Infrastructure
              </Header>
            }
          >
            <SpaceBetween size="m">
              <Box variant="p">
                Modernize your infrastructure with secure, scalable cloud solutions built on industry-leading platforms.
              </Box>
              <Button onClick={() => navigate('/services')}>
                Learn More
              </Button>
            </SpaceBetween>
          </Container>
        </Grid>

        <Container
          header={
            <Header
              variant="h2"
              description="Join hundreds of satisfied clients"
            >
              Trusted by Industry Leaders
            </Header>
          }
        >
          <Box textAlign="center" padding="xxl">
            <SpaceBetween size="l">
              <Box variant="p" fontSize="heading-m">
                "GNZ Enterprises transformed our business operations with their innovative solutions."
              </Box>
              <Box variant="small" color="text-body-secondary">
                - Fortune 500 Client
              </Box>
            </SpaceBetween>
          </Box>
        </Container>
      </SpaceBetween>
    </ContentLayout>
  );
}
