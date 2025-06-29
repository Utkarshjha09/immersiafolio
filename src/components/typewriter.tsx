'use client';

import { useState, useEffect } from 'react';

type TypewriterProps = {
  strings: string[];
  wrapperClassName?: string;
  cursorClassName?: string;
  stringClassName?: string;
};

export function Typewriter({ strings, wrapperClassName, stringClassName, cursorClassName }: TypewriterProps) {
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const type = () => {
      const currentString = strings[stringIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(currentString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      } else {
        if (charIndex < currentString.length) {
          setCurrentText(currentString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timeout = setTimeout(type, isDeleting ? 75 : 150);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex, strings]);

  return (
    <span className={wrapperClassName}>
      I'm a <span className={stringClassName}>{currentText}</span>
      <span className={`animate-blink ${cursorClassName}`}>|</span>
    </span>
  );
}
