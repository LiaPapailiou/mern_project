import React, { Fragment } from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Experience({ experience }) {
    const experiences = experience.map((item) => (
        <tr key={item._id}>
            <td>{item.company}</td>
            <td className="hide-sm">{item.title}</td>
            <td>
                <Moment format='DD/MM/YYYY'>{item.from}</Moment> - {
                    item.to === null ? ('Now') : (<Moment format='DD/MM/YYYY'>{item.to}</Moment>)
                }
            </td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
}

export default connect()(Experience)

