define( [], function () {
	'use strict';

	var newsQuery = {
		ref: "props.queryfield",
		label: "News Query",
		type: "string",
		expression: "optional",
		show: true
	};

	var newsFeed = {
		ref: "props.newsFeed",
		label: "Which feed to take",
		type: "string",
		show: true,
		component: 'dropdown',
		defaultValue: 'it',
		options: [
			{
				value: "it",
				label: "Italy"
			}, 
			{
				value: "us",
				label: "United States"
			}, 
			{
				value: "fr",
				label: "France"
			}, 
			{
				value: "de",
				label: "Germany"
			},
			{
				value: "uk",
				label: "United Kingdom"
			}
		]
	};

	var newsLink = {
		ref: "props.newsLink",
		label: "Links on titles",
		type: "boolean",
		defaultValue: true
	};
	var newsOpen = {
		ref: "props.newsOpen",
		label: "Open link in new window",
		type: "boolean",
		defaultValue: true
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var newsPanel = {
		items: {
			settings: {
				type: "items",
				label: "Settings",
				items: {
					newsQuery: newsQuery,
					newsFeed: newsFeed,
					newsLink: newsLink,
					newsOpen:newsOpen
				}
			}
		}
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			newsPanel: newsPanel
		}
	};

} );
