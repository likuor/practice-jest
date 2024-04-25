it('初めてのmock', () => {
  const mockFunc = jest.fn(() => 'Hello mock');
  mockFunc();
  expect(mockFunc()).toBe('Hello mock');
});

it('mockImplementation', () => {
  // const mockFunc = jest.fn();
  // mockFunc().mockImplementation(() => 'Hello mock2');
  // expect(mockFunc()).toBe('Hello mock2');
  const mockFunc = jest.fn().mockImplementation(() => 'Hello mock2');
  expect(mockFunc()).toBe('Hello mock2');
});
