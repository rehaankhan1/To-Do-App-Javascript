const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFilters = ({searchText,hideCompleted}) => {

    //const {searchText,hideCompleted} = updates

    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

export { getFilters, setFilters }
