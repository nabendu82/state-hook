import React from 'react'
import { UserContext, ChannelContext } from '../App'

const Child = () => {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <>
                                        <h1>Child Component - {user}</h1>
                                        <h2>Channel is - {channel}</h2>
                                    </>
                                )
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default Child
