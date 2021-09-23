import React, { useState } from 'react'
import { useAppDispatch, useShallowEqualSelector } from '../common/hooks'
import { serversListDataThunk } from '../data/slices/serversList'
import { ServersListDataModel } from '../models/ServersListDataModel'

import '../styles/ServersList.scss'

type Props = {
    userToken?: string
}

const ServersList: React.FC<Props> = ({ userToken }) => {
    const { serversList } = useShallowEqualSelector<ServersListDataModel.State>(
        (state) => state.serversList
    )

    const [sortedServersList, setSortedServersList] = useState<
        ServersListDataModel.ServersListDataItem[]
    >([])

    const [sortBy, setSortBy] = useState('')

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (userToken) {
            dispatch(serversListDataThunk(userToken))
        }
    }, [userToken])

    React.useEffect(() => {
        setSortedServersList(serversList)
    }, [serversList])

    const handleSortBy = (e: any) => {
        e.preventDefault()
        const sortValue = e.target.value

        if (sortValue === 'distance') {
            const sortedListByDistance = sortedServersList
                .slice()
                .sort((a, b) => a.distance - b.distance)
            setSortedServersList(sortedListByDistance)
        }

        if (sortValue === 'name') {
            const sortedListByName = sortedServersList.slice().sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                }
                if (a.name > b.name) {
                    return 1
                }
                return 0
            })
            setSortedServersList(sortedListByName)
        }

        setSortBy(sortValue)
    }

    return (
        <div className="servers-list">
            <div className="servers-list-sort">
                <label htmlFor="sortBy">Sort by: </label>
                <select value={sortBy} onChange={handleSortBy} name="sortBy">
                    <option value="" disabled />
                    <option value="name">Name</option>
                    <option value="distance">Distance</option>
                </select>
            </div>
            <tbody className="servers-list-table">
                <tr>
                    <th>Server name</th>
                    <th>Distance</th>
                </tr>
                {sortedServersList.map(({ name, distance }, i) => (
                    <tr key={i}>
                        <td>{name}</td>
                        <td>{distance}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    )
}

export default ServersList
