export default function Search({ memberName, onMemberNameChange }) {
    const onHandleChange = (name) => {
        onMemberNameChange(name.target.value);
    };
    return (
        <input
            className="SearchInput"
            value={memberName}
            type="search"
            placeholder="Find members"
            onChange={onHandleChange}
        />
    );
}
