import type { INodeProperties } from 'n8n-workflow';

export const consumerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Consumer"
					]
				}
			},
			"options": [
				{
					"name": "Get A Batch Of Consumer Transaction Classification Results",
					"value": "Get A Batch Of Consumer Transaction Classification Results",
					"action": "Get a batch of consumer transaction classification results.",
					"description": "Get a batch of consumer transaction classification results.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifier/consumer/batch/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifier/consumer/batch/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumer"
					],
					"operation": [
						"Get A Batch Of Consumer Transaction Classification Results"
					]
				}
			}
		},
];
