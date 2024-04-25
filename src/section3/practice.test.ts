import axios from 'axios';
import Users from './practice';

jest.mock('axios');
const mockAxios = jest.mocked(axios);

describe('Users', () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  it('get user', async () => {
    // dummy data from api
    const users = [
      { name: 'Joey', email: 'gamil.com' },
      { name: 'Ross', email: 'yahoo.com' },
    ];
    const resp = { data: users };
    // axios.get が呼び出された際に、respを返すように設定
    mockAxios.get.mockResolvedValue(resp);

    const res = await Users.all();
    expect(res).toEqual(users);
    // axios.get が正しいURL（'/users.json'）で呼び出されたかを検証
    expect(mockAxios.get).toHaveBeenCalledWith('/users.json');
  });
});
