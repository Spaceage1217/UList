export const ActionType = {
  test: 'TEST_ACTION',
};

export const testAction = ()=> (
    {
        type: ActionType.test,
        payload: {
            request: {
                url: `/users/${user}/repos`
            }
        }
    }
);