import type { INodeProperties } from 'n8n-workflow';

export const businessDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Business"
					]
				}
			},
			"options": [
				{
					"name": "Get A Batch Of Business Transaction Classification Results",
					"value": "Get A Batch Of Business Transaction Classification Results",
					"action": "Get a batch of business transaction classification results.",
					"description": "Get a batch of business transaction classification results.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifier/business/batch/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifier/business/batch/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business"
					],
					"operation": [
						"Get A Batch Of Business Transaction Classification Results"
					]
				}
			}
		},
];
