import { Section } from '@outer_components/layout';

export default async function ContactMe() {
  const response = await fetch(`${process.env.HOST}/api/contact-me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return (
    <Section heading="Contact Me" id="contact-me">
      <>{data.response}</>
      <p>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </p>
    </Section>
  );
}
