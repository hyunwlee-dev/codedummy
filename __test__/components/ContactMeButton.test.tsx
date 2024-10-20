import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactMeButton from '@components/ContactMeButton';

describe('ContactMeButton 컴포넌트 테스트 스위트', () => {
  beforeEach(() => {
    const contactSection = document.createElement('section');
    contactSection.id = 'contact-me';
    document.body.appendChild(contactSection);
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    const contactSection = document.getElementById('contact-me');
    if (contactSection) document.body.removeChild(contactSection);
    jest.restoreAllMocks();
  });

  test('버튼 클릭 시 .contact-me Section으로 스크롤된다.', () => {
    // given
    render(<ContactMeButton />);
    // when
    const button = screen.getByRole('button', { name: /contact me/i });
    fireEvent.click(button);
    // then
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: document.getElementById('contact-me')?.offsetTop,
      behavior: 'smooth',
    });
    /* In Jest,
     * .toHaveBeenCalledWith() is an assertion
     * that verifies if a mock function was called with specific arguments
     */
  });
});
