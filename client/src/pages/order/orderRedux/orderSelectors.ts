import { STATES } from 'mongoose';
import {createSelector} from 'reselect';

export const ordersSelector = state => state.orders.orders

export const loadStateSelector = state => state.orders.loading