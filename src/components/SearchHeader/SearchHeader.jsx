import React from 'react';
import SearchBar from './SearchBar';

const SearchHeader = () => {
    const readFrom = () =>
        navigator.clipboard
            .readText()
            .then(clipText => console.log('clipboard ', clipText));

    const copyTo = newClip =>
        navigator.clipboard.writeText(newClip).then(
            () => {
                console.log('write successful');
            },
            () => {
                console.log('Write failed');
            }
        );

    const stuffToCopy = 'copiamo due cazzate';

    return (
        <>
            <SearchBar type="card" />
            <SearchBar type="type" />
            <button onClick={() => copyTo(stuffToCopy)}>
                copy to clipboard
            </button>
            <button onClick={() => readFrom()}>read from clipboard</button>
        </>
    );
};

export default SearchHeader;
