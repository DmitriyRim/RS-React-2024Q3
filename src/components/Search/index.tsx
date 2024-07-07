import { Component } from 'react'
import './index.css'

interface Props {
    getDate: (query: string) => Promise<void>
}
interface State {
    searchQuery: string
}

export class Search extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            searchQuery: '',
        }
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        localStorage.setItem('searchQuery', this.state.searchQuery)
        this.props.getDate(this.state.searchQuery)
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchQuery: event.target.value })
        console.log(event.target.value)
    }

    componentDidMount(): void {
        const query = localStorage.getItem('searchQuery')

        if (query) {
            this.props.getDate(query)
            this.setState({
                searchQuery: query,
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="search">
                <input
                    type="search"
                    name="search"
                    value={this.state.searchQuery}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Search" />
            </form>
        )
    }
}
