import { ShoppingList } from './practice';

describe('リストの操作', () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe('addItem', () => {
    it('アイテムをリストに追加できる', () => {
      shoppingList.addItem('apple');
      expect(shoppingList.list).toEqual(['apple']);
    });
  });

  describe('removeItem', () => {
    it('アイテムをリストから削除できる', () => {
      shoppingList.addItem('apple');
      shoppingList.removeItem('apple');
      expect(shoppingList.list).not.toContain('apple');
      // expect(shoppingList.list).toEqual([]);
    });

    it('存在しないアイテムの削除を試みたときにエラーをスローする', () => {
      expect(() => shoppingList.removeItem('banana')).toThrow(
        'アイテム: banana は存在しません'
      );
    });
  });
});
