import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

await DataStore.save(
    new Todo({
		"name": "Lorem ipsum dolor sit amet",
		"description": "Lorem ipsum dolor sit amet",
		"isComplete": true
	})
);