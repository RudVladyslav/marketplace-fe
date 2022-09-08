import { types } from './types'

export const alertsActions = {
  accountUpdated(message, type = 'success') {
    return {
      type: types.ACCOUNT_UPDATED,
      payload: { message, type },
    }
  },

  clearAlerts() {
    return {
      type: types.CLEAR_ALERTS,
    }
  },

  newProject(message, type = 'success') {
    return {
      type: types.CREATE_NEW_PROJECT_SUCCESS,
      payload: { message, type },
    }
  },

  projectDeleted(message, type = 'success') {
    return {
      type: types.CREATE_NEW_PROJECT_SUCCESS,
      payload: { message, type },
    }
  },

}
