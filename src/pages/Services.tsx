import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Cards from '@cloudscape-design/components/cards';
import Box from '@cloudscape-design/components/box';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Badge from '@cloudscape-design/components/badge';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
}

const services: Service[] = [
  {
    id: '1',
    name: 'Cloud Migration Services',
    description: 'Seamlessly transition your infrastructure to the cloud with our expert migration services.',
    category: 'Cloud',
    features: ['Assessment & Planning', 'Data Migration', 'Zero Downtime', 'Post-Migration Support']
  },
  {
    id: '2',
    name: 'Custom Software Development',
    description: 'Build scalable, secure applications tailored to your business requirements.',
    category: 'Development',
    features: ['Agile Methodology', 'Full-Stack Development', 'API Integration', 'Quality Assurance']
  },
  {
    id: '3',
    name: 'Cybersecurity Solutions',
    description: 'Protect your business with comprehensive security services and threat monitoring.',
    category: 'Security',
    features: ['Threat Detection', 'Compliance Management', 'Incident Response', '24/7 Monitoring']
  },
  {
    id: '4',
    name: 'Data Analytics & BI',
    description: 'Transform your data into actionable insights with advanced analytics platforms.',
    category: 'Analytics',
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Data Warehousing', 'Reporting Tools']
  },
  {
    id: '5',
    name: 'DevOps & Automation',
    description: 'Streamline your development pipeline with modern DevOps practices and tools.',
    category: 'Operations',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring']
  },
  {
    id: '6',
    name: 'IT Consulting',
    description: 'Strategic technology guidance to align IT initiatives with business goals.',
    category: 'Consulting',
    features: ['Technology Assessment', 'Roadmap Planning', 'Cost Optimization', 'Best Practices']
  }
];

export default function Services() {
  return (
    <ContentLayout
      header={
        <Box padding={{ top: 'xl', horizontal: 'l' }}>
          <SpaceBetween size="m">
            <Header
              variant="h1"
              description="Comprehensive solutions designed to drive your business forward"
            >
              Our Services
            </Header>
          </SpaceBetween>
        </Box>
      }
    >
      <Container>
        <Cards
          cardDefinition={{
            header: item => (
              <SpaceBetween size="xs" direction="horizontal">
                <Box variant="h3">{item.name}</Box>
                <Badge color="blue">{item.category}</Badge>
              </SpaceBetween>
            ),
            sections: [
              {
                id: 'description',
                content: item => (
                  <Box variant="p" color="text-body-secondary">
                    {item.description}
                  </Box>
                )
              },
              {
                id: 'features',
                header: 'Key Features',
                content: item => (
                  <SpaceBetween size="xxs">
                    {item.features.map((feature, index) => (
                      <Box key={index} variant="small">
                        • {feature}
                      </Box>
                    ))}
                  </SpaceBetween>
                )
              },
              {
                id: 'action',
                content: () => (
                  <Button variant="primary">Learn More</Button>
                )
              }
            ]
          }}
          items={services}
          cardsPerRow={[
            { cards: 1 },
            { minWidth: 500, cards: 2 },
            { minWidth: 900, cards: 3 }
          ]}
        />
      </Container>
    </ContentLayout>
  );
}
