import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Section } from '@outer_components/layout';

describe('Section layout 컴포넌트 테스트 스위트', () => {
  test('heading 없이 자식 요소만 렌더링된다.', () => {
    // given
    render(<Section>{'these are children'}</Section>);
    // when
    const children = screen.getByText(/these are children/i);
    // then
    expect(children).toBeInTheDocument();
  });

  test('heading이 있을 때 정상적으로 렌더링된다.', () => {
    // given
    render(<Section heading="Test Heading">{'these are children'}</Section>);
    // when
    const heading = screen.getByRole('heading', { name: /test heading/i });
    const children = screen.getByText(/these are children/i);
    // then
    expect(heading).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
