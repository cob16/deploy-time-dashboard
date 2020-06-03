import React from 'react';
import {render} from '@testing-library/react';
import {CommitCircle} from "../components/commitCircle";


test('CommitCircle shows 12 as the number of given commits', () => {

    const {getByText} = render(<CommitCircle numberOfCommits={12}/>);
    const commits = getByText(/12/i);
    expect(commits).toBeInTheDocument();
});

test('CommitCircle shows any number of given commits', () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1

    const {getByText} = render(<CommitCircle numberOfCommits={randomNumber}/>);
    const commits = getByText(new RegExp(`${randomNumber}`));
    expect(commits).toBeInTheDocument();
});

test('CommitCircle uses the plural word \'commits\' is used when there are 0 commits', () => {
    const {getByText} = render(<CommitCircle numberOfCommits={0}/>);
    const commits = getByText(/commits\b/i);
    expect(commits).toBeInTheDocument();
});


test('CommitCircle uses the non plural word \'commit\' is used when there is a single commit', () => {
    const {getByText} = render(<CommitCircle numberOfCommits={1}/>);
    const commits = getByText(/commit\b/i);
    expect(commits).toBeInTheDocument();
});

test('CommitCircle the plural word \'commits\' is used when there are 2 commits', () => {
    const {getByText} = render(<CommitCircle numberOfCommits={2}/>);
    const commits = getByText(/commits\b/i);
    expect(commits).toBeInTheDocument();
});





