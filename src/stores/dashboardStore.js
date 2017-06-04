import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class DashboardStore extends ReduceStore {
	getInitialState() {
		return { notes: [] };
	}

	reduce(store, action) {
		switch (action.type) {
			case 'note/fetch/my':
				return Object.assign({}, state, {
					notes: action.notes,
				});
			case 'note/create':
				return Object.assign({}, state, {
					notes: [action.note, ...state.notes],
				});
			case 'note/update':
				return Object.assgin({}, state, {
					notes: state.notes.map(note => {
						return action.id === note.id ? Object.assgin({}, note, action.note) : note;
					}),
				});
			case 'note/delete':
				return Object.assgin({}, state, {
					notes: state.notes.filter(note => note.id !== action.id),
				});
			default:
				return state;
		}
	}
}

export default new DashboardStore(dispatcher);
