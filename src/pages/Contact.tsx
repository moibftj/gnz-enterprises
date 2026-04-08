import { useState } from 'react';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Box from '@cloudscape-design/components/box';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Input from '@cloudscape-design/components/input';
import Textarea from '@cloudscape-design/components/textarea';
import Select, { SelectProps } from '@cloudscape-design/components/select';
import Button from '@cloudscape-design/components/button';
import Grid from '@cloudscape-design/components/grid';
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs';
import Flashbar from '@cloudscape-design/components/flashbar';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState<SelectProps.Option | null>(null);
  const [message, setMessage] = useState('');
  const [flashbarItems, setFlashbarItems] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFlashbarItems([
      {
        type: 'success',
        content: 'Thank you for your message! We will get back to you within 24 hours.',
        dismissible: true,
        dismissLabel: 'Dismiss message',
        onDismiss: () => setFlashbarItems([]),
        id: 'success-message'
      }
    ]);

    setName('');
    setEmail('');
    setCompany('');
    setSubject(null);
    setMessage('');
  };

  return (
    <ContentLayout
      header={
        <Box padding={{ top: 'xl', horizontal: 'l' }}>
          <Header
            variant="h1"
            description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          >
            Contact Us
          </Header>
        </Box>
      }
    >
      <SpaceBetween size="l">
        <Flashbar items={flashbarItems} />

        <Grid
          gridDefinition={[
            { colspan: { default: 12, xs: 8 } },
            { colspan: { default: 12, xs: 4 } }
          ]}
        >
          <Container>
            <form onSubmit={handleSubmit}>
              <Form
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button
                      formAction="none"
                      variant="link"
                      onClick={() => {
                        setName('');
                        setEmail('');
                        setCompany('');
                        setSubject(null);
                        setMessage('');
                      }}
                    >
                      Clear
                    </Button>
                    <Button variant="primary">
                      Send Message
                    </Button>
                  </SpaceBetween>
                }
              >
                <SpaceBetween size="l">
                  <FormField
                    label="Name"
                    description="Your full name"
                  >
                    <Input
                      value={name}
                      onChange={({ detail }) => setName(detail.value)}
                      placeholder="John Doe"
                    />
                  </FormField>

                  <FormField
                    label="Email"
                    description="Your email address"
                  >
                    <Input
                      value={email}
                      onChange={({ detail }) => setEmail(detail.value)}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormField>

                  <FormField
                    label="Company"
                    description="Your company or organization (optional)"
                  >
                    <Input
                      value={company}
                      onChange={({ detail }) => setCompany(detail.value)}
                      placeholder="Acme Corporation"
                    />
                  </FormField>

                  <FormField
                    label="Subject"
                    description="What is your inquiry about?"
                  >
                    <Select
                      selectedOption={subject}
                      onChange={({ detail }) => setSubject(detail.selectedOption)}
                      options={[
                        { label: 'General Inquiry', value: 'general' },
                        { label: 'Sales', value: 'sales' },
                        { label: 'Technical Support', value: 'support' },
                        { label: 'Partnership Opportunities', value: 'partnership' },
                        { label: 'Career Opportunities', value: 'career' }
                      ]}
                      placeholder="Choose a subject"
                    />
                  </FormField>

                  <FormField
                    label="Message"
                    description="Tell us more about your inquiry"
                  >
                    <Textarea
                      value={message}
                      onChange={({ detail }) => setMessage(detail.value)}
                      placeholder="Enter your message here..."
                      rows={6}
                    />
                  </FormField>
                </SpaceBetween>
              </Form>
            </form>
          </Container>

          <SpaceBetween size="l">
            <Container
              header={
                <Header variant="h3">
                  Contact Information
                </Header>
              }
            >
              <KeyValuePairs
                columns={1}
                items={[
                  {
                    label: 'Email',
                    value: 'info@gnzenterprises.com'
                  },
                  {
                    label: 'Phone',
                    value: '+1 (555) 123-4567'
                  },
                  {
                    label: 'Address',
                    value: '123 Innovation Drive, San Francisco, CA 94105'
                  }
                ]}
              />
            </Container>

            <Container
              header={
                <Header variant="h3">
                  Business Hours
                </Header>
              }
            >
              <KeyValuePairs
                columns={1}
                items={[
                  {
                    label: 'Monday - Friday',
                    value: '9:00 AM - 6:00 PM PST'
                  },
                  {
                    label: 'Saturday',
                    value: '10:00 AM - 2:00 PM PST'
                  },
                  {
                    label: 'Sunday',
                    value: 'Closed'
                  }
                ]}
              />
            </Container>
          </SpaceBetween>
        </Grid>
      </SpaceBetween>
    </ContentLayout>
  );
}
