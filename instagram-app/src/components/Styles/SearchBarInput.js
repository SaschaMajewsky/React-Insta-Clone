import styled from 'styled-components';

const SearchBarInput = styled.input`
content: 'Search';
padding: 0.3rem;
padding-left: 2rem;
padding-right: 2rem;
text-align: center;
border: 2px solid rgba(169, 169, 169, 0.5);
outline: none;
border-radius: 5px;
font-size: 1.3rem;
background: #fafafa url(/assets/symbol-search-bar-scope.PNG) no-repeat 32% 50%;

&:focus::-webkit-input-placeholder {
opacity: 0;
}

&:focus {
    color: rgba(116, 113, 113, 0.8);
    background: none;
}
`

export default SearchBarInput;