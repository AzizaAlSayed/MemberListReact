export default function NewMember() {
    return (
        <div className="FlexDisplay">
            <div className="Members">
                <div className="Member">
                    <input className="AddInput" id="add" type="text" name="add" placeholder="Add a member" />
                </div>
            </div>
            <button type="reset" name="learn" className="ButtonAddMember" value="myimage" onClick="">
                <svg version="1.1" width="10" height="10" id="Capa_1" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                    fill="white" space="preserve">
                    <polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 
          222.031,222.031 0,222.031 0,267.969 222.031,267.969 " />
                </svg>
            </button>
        </div>
    );
}