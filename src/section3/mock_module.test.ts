import { readFile } from './mock_module';
import fs from 'fs';

jest.mock('fs');
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue('dummy data');

it('readFileがデータを返却する', () => {
  const res = readFile('path/dummy');
  expect(res).toBe('dummy data');
  expect(fs.readFileSync).toHaveBeenCalledWith('path/dummy', {
    encoding: 'utf-8',
  });
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
