it ('fetch mock testing', () => {
  fetch = jest.fn(() =>
  Promise.resolve({
      json: () => Promise.resolve({ some: 1 }),
    })
  );
  fetch('').then(res => res.json()).then(result => {
    expect(result.some).toBe(1);
  });
  expect(fetch).toHaveBeenCalledTimes(1);
})

export {};