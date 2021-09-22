import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../data/reduxStore'
import { IStoreState } from '../data/rootReducer'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useShallowEqualSelector = <TReturn,>(
    selector: (state: IStoreState) => TReturn
) => useSelector<IStoreState, TReturn>(selector, shallowEqual)
