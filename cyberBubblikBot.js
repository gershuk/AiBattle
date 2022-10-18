/*
 * Copyright (c) 2021 KappaTych (https://github.com/KappaTych). All rights reserved.
 * Maintainers:
 *  Vladimir Glushkov
 *  Zabortseva Daria
 *  Palchevskii Vitalii
 */
const Directions = Object.freeze({
	Up: 0, Right: 1, Down: 2, Left: 3, Idle: 4
});

function GetController() {
	return {
		x: 0,
		y: 0,
		turn: 0,
		idx: -1,
		mapInfo: {},
		strategy: {},
		Init: function({ mapInfo, index }) {
			this.x = mapInfo.spawns[index].x;
			this.y = mapInfo.spawns[index].y;
			this.idx = index;
			this.mapInfo = mapInfo;
			this.mapSize = [mapInfo.height, mapInfo.width];

			this.stategy = new Map();
			this.strategy[41] = [ /* short_maze */
				{
					moves: [
						Directions.Idle
					]
				}
			];
			this.strategy[9] = [ /* simple_map */
				{
					moves: [
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
					]
				},
				{
					moves: [
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
					]
				},
				{
					moves: [
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
					]
				},
				{
					moves: [
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
					]
				},
			];
			this.strategy[27] = [ /* king_of_the_hill */
				{
					moves: [
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
					]
				},
				{
					moves: [
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Up,
						Directions.Left,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
					]
				},
				{
					moves: [
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
					]
				},
				{
					moves: [
						Directions.Idle
					]
				},
				{
					moves: [
						Directions.Idle
					]
				},
				{
					moves: [
						Directions.Idle
					]
				},
				{
					moves: [
						Directions.Idle
					]
				},
				{
					moves: [
						Directions.Idle
					]
				},
			];
			this.strategy[23] = [ /* pvp */
				{
					moves: [
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
					]
				},
				{
					moves: [
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
					]
				},
				{
					moves: [
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
					]
				},
				{
					moves: [
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
					]
				},
				{
					moves: [
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
					]
				},
				{
					moves: [
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
					]
				},
				{
					moves: [
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Down,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Down,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
					]
				},
				{
					moves: [
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Right,
						Directions.Down,
						Directions.Left,
						Directions.Left,
						Directions.Up,
						Directions.Left,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Up,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Right,
						Directions.Up,
						Directions.Right,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Down,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Up,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
						Directions.Left,
					]
				},
			];
			console.log(this.strategy);
		},
		//0 - up, 1 - right, 2 - bottom, 3 - left, 4 - idle 
		GetDirection: function({ playerPos, enemies, snowball, snowLevelMap }) {
			let dir = 4;
			let move = this.strategy[this.mapInfo.height][this.idx].moves[this.turn];
			this.turn += 1;
			// console.log(this.turn, " # ", move);
			return move;
		},
	};
}

GetController();