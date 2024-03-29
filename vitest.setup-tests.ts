import '@testing-library/jest-dom';

import { vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
const fetchMock = createFetchMock(vi);
// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMock.enableMocks();

vi.mock('localforage');

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
});

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: vi.fn(),
});
