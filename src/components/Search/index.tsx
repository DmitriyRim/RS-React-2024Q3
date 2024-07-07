import { Component } from 'react'

interface Props {}
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

    render() {
        return (
            <form>
                <input type="search" defaultValue={this.state.searchQuery} />
                <input type="submit" value="Search" />
            </form>
        )
    }

    componentDidMount(): void {
        const query = localStorage.getItem('searchQuery')

        if (query) {
            this.setState({
                searchQuery: query,
            })
        }
    }
}
