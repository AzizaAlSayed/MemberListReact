
export default function DeleteMembers({ onDeleteMembers }) {
    return (
        <button type="button" className="ButtonDeleteMembers" onClick={() => onDeleteMembers()}> Delete </button>
    );
}