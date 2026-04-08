import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Box from '@cloudscape-design/components/box';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs';

export default function About() {
  return (
    <ContentLayout
      header={
        <Box padding={{ top: 'xl', horizontal: 'l' }}>
          <Header
            variant="h1"
            description="Building the future of enterprise technology solutions"
          >
            About GNZ Enterprises
          </Header>
        </Box>
      }
    >
      <SpaceBetween size="l">
        <Container
          header={
            <Header variant="h2">
              Our Story
            </Header>
          }
        >
          <SpaceBetween size="m">
            <Box variant="p">
              Founded with a vision to transform how businesses leverage technology, GNZ Enterprises has grown
              to become a trusted partner for organizations seeking innovative solutions. Our journey began with
              a simple belief: that technology should empower businesses, not complicate them.
            </Box>
            <Box variant="p">
              Today, we serve clients across multiple industries, delivering cutting-edge solutions that drive
              growth, efficiency, and digital transformation. Our team of experienced professionals brings together
              expertise in cloud computing, software development, cybersecurity, and strategic consulting.
            </Box>
          </SpaceBetween>
        </Container>

        <Container
          header={
            <Header
              variant="h2"
              description="The principles that guide everything we do"
            >
              Our Values
            </Header>
          }
        >
          <ColumnLayout columns={3} variant="text-grid">
            <Box>
              <SpaceBetween size="s">
                <Box variant="h3">Innovation</Box>
                <Box variant="p" color="text-body-secondary">
                  We constantly explore new technologies and methodologies to deliver solutions
                  that keep our clients ahead of the curve.
                </Box>
              </SpaceBetween>
            </Box>
            <Box>
              <SpaceBetween size="s">
                <Box variant="h3">Integrity</Box>
                <Box variant="p" color="text-body-secondary">
                  We build lasting relationships through transparency, honesty, and ethical
                  business practices in everything we do.
                </Box>
              </SpaceBetween>
            </Box>
            <Box>
              <SpaceBetween size="s">
                <Box variant="h3">Excellence</Box>
                <Box variant="p" color="text-body-secondary">
                  We maintain the highest standards of quality and professionalism in every
                  project we undertake.
                </Box>
              </SpaceBetween>
            </Box>
          </ColumnLayout>
        </Container>

        <Container
          header={
            <Header variant="h2">
              Company Information
            </Header>
          }
        >
          <ColumnLayout columns={2}>
            <KeyValuePairs
              columns={1}
              items={[
                {
                  label: 'Founded',
                  value: '2015'
                },
                {
                  label: 'Headquarters',
                  value: 'San Francisco, CA'
                },
                {
                  label: 'Team Size',
                  value: '200+ Professionals'
                }
              ]}
            />
            <KeyValuePairs
              columns={1}
              items={[
                {
                  label: 'Industries Served',
                  value: 'Healthcare, Finance, Retail, Technology'
                },
                {
                  label: 'Global Presence',
                  value: 'North America, Europe, Asia'
                },
                {
                  label: 'Client Satisfaction',
                  value: '98%'
                }
              ]}
            />
          </ColumnLayout>
        </Container>

        <Container
          header={
            <Header variant="h2">
              Leadership Team
            </Header>
          }
        >
          <SpaceBetween size="m">
            <ExpandableSection headerText="Executive Leadership" defaultExpanded>
              <ColumnLayout columns={3} variant="text-grid">
                <Box>
                  <SpaceBetween size="xs">
                    <Box variant="h4">Sarah Johnson</Box>
                    <Box variant="small" color="text-body-secondary">Chief Executive Officer</Box>
                    <Box variant="p" fontSize="body-s">
                      20+ years of experience in enterprise technology and strategic leadership
                    </Box>
                  </SpaceBetween>
                </Box>
                <Box>
                  <SpaceBetween size="xs">
                    <Box variant="h4">Michael Chen</Box>
                    <Box variant="small" color="text-body-secondary">Chief Technology Officer</Box>
                    <Box variant="p" fontSize="body-s">
                      Expert in cloud architecture and scalable system design
                    </Box>
                  </SpaceBetween>
                </Box>
                <Box>
                  <SpaceBetween size="xs">
                    <Box variant="h4">Emily Rodriguez</Box>
                    <Box variant="small" color="text-body-secondary">Chief Operating Officer</Box>
                    <Box variant="p" fontSize="body-s">
                      Specializes in operational excellence and process optimization
                    </Box>
                  </SpaceBetween>
                </Box>
              </ColumnLayout>
            </ExpandableSection>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
    </ContentLayout>
  );
}
