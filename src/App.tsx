import { Component } from 'react'
import { Search } from './components/Search'
import './App.css'
import { PeoleDetail } from './components/PeopleDetail'
import { Loader } from './components/Loader'

interface State {
    peopleDate: []
    loading: boolean
}

interface Props {}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            peopleDate: [],
            loading: false,
        }
    }
    getPeopleDate = async (query: string) => {
        this.setState({ loading: true })
        const response = await fetch(
            `https://swapi.dev/api/people/?search=${query.trim()}`
        )
        const data = await response.json()

        this.setState({ peopleDate: data.results })
        this.setState({ loading: false })
    }
    render() {
        return (
            <>
                <Search getDate={this.getPeopleDate} />
                <hr />
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <div>
                        {this.state.peopleDate.map((people, index) => (
                            <PeoleDetail data={people} key={index} />
                        ))}
                    </div>
                )}
            </>
        )
    }
}

export default App
