import { object, number, func } from 'prop-types'

export const propTypes = Object.freeze({
    count: number.isRequired,
    fetch1: func.isRequired,
    fetch2: func.isRequired,
    onClick: func.isRequired,
    params: object.isRequired,
    post: object.isRequired,
})

export const defaultTypes = Object.freeze({})
