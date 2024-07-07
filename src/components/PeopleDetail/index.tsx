import { Component } from 'react'

interface Props {
    data: {
        birth_year: string
        created: string
        edited: string
        eye_color: string
        films: string[]
        gender: string
        hair_color: string
        height: string
        homeworld: string
        mass: string
        name: string
        skin_color: string
        species: []
        starships: []
        url: string
        vehicles: []
    }
}

export class PeoleDetail extends Component<Props> {
    render() {
        const peopleData = this.props.data

        return (
            <div>
                <h4>{peopleData.name}</h4>
                <ul>
                    <li>Gender - {peopleData.gender}</li>
                    <li>Birth year - {peopleData.birth_year}</li>
                    <li>Hair color - {peopleData.hair_color}</li>
                </ul>
            </div>
        )
    }
}
