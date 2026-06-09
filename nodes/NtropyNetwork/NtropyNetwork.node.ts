import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { classifierDescription } from './resources/classifier';
import { consumerDescription } from './resources/consumer';
import { batchDescription } from './resources/batch';
import { businessDescription } from './resources/business';
import { batch1Description } from './resources/batch-1';

export class NtropyNetwork implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ntropy-network',
		name: 'N8nDevNtropyNetwork',
		icon: { light: 'file:./ntropy-network.png', dark: 'file:./ntropy-network.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Ntropy Transaction API for transaction classification & management',
		defaults: { name: 'ntropy-network' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNtropyNetworkApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Classifier",
					"value": "Classifier",
					"description": ""
				},
				{
					"name": "Consumer",
					"value": "Consumer",
					"description": ""
				},
				{
					"name": "Batch",
					"value": "Batch",
					"description": ""
				},
				{
					"name": "Business",
					"value": "Business",
					"description": ""
				},
				{
					"name": "Batch 1",
					"value": "Batch 1",
					"description": ""
				}
			],
			"default": ""
		},
		...classifierDescription,
		...consumerDescription,
		...batchDescription,
		...businessDescription,
		...batch1Description
		],
	};
}
