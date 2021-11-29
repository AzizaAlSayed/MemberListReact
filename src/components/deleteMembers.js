export default function DeleteMembers({ onDeleteMembers }) {
    return (
        <div className="MembersDeleting">
            <p className="FontMembersDeleting">Selected Members to Delete</p>
            <button
                type="button"
                className="ButtonDeleteMembers"
                onClick={onDeleteMembers}
            >
                Delete
            </button>
        </div>
    );
}
