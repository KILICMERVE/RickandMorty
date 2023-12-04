import React, { Component } from "react";
import ReactPaginate from 'react-paginate';
import { variables } from './Variables.js';
import './App.css';

export class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            pageCount: 0,
            currentPage: 0,
            pageSize: 4, // Her sayfa için gösterilecek karakter sayısı
        };
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = (selectedPage = 0) => {
        const { pageSize } = this.state;
        const apiUrl = `${variables.API_URL}character/getall?page=${selectedPage + 1}&pageSize=${pageSize}`;

        fetch(apiUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);

            const pageCount = Math.ceil(data.length / pageSize);
            this.setState({ characters: data, pageCount, currentPage: selectedPage });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Hata durumunda state'i güncellemek ve kullanıcıya bildirmek için uygun bir mesaj ekleyebilirsiniz.
        });
    }

    handlePageChange = (selected) => {
        this.fetchCharacters(selected.selected);
    }

    render() {
        const { characters, pageCount, currentPage } = this.state;

        return (
            <div className="ust-div">
                {characters.map(c => (
                    <div className="card-ust-div" key={c.characterId}>
                        <div className="card">
                            <img className="image-style" src={c.photo} alt={c.photo} />
                            <h5 className="card-title">{c.characterName}</h5>
                            <p className="card-text">{c.description}</p>
                        </div>
                    </div>
                ))}

                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageChange}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    forcePage={currentPage}
                />
            </div>
        );
    }
}
