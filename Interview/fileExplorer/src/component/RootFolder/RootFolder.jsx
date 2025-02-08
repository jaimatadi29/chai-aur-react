import { useState } from 'react'
import './RootFolder.css'

const RootFolder = ({handleInsertnode, folderData}) => {
    const [openFolder, setOpenFolder] = useState(false);
    const [showInput, setShowInput] = useState({
        isVisible: false,
        isFolder: null
    })

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setOpenFolder(true);
        setShowInput({isVisible: true, isFolder})
    }
    const onAddFolder = (e) => {
        e.stopPropagation();
        //add logic
        if (e.keyCode === 13 && e.target.value) {
            handleInsertnode(folderData?.id, e.target.value, showInput?.isFolder)
            setShowInput({...showInput, isVisible: false})
        }
    }
    if (folderData?.isFolder) {
    return (
        <>
            <div className="root-folder" onClick={() => {
                setOpenFolder((prevState) => !prevState)
            }}>
                <span>📂 {folderData?.name}</span>
                <div>
                    <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
                    <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
                </div>
            </div>
            {openFolder &&
               <div style={{paddingLeft: '25px'}}>
                {showInput?.isVisible &&
                    <div>
                        {showInput?.isFolder ? '📂' : '📄'}
                        <input 
                            onKeyDown={(e) => onAddFolder(e)}
                            onBlur={() => setShowInput({...showInput, isVisible: false})}
                            autoFocus
                            type="text" 
                            name={showInput?.name}
                        />
                    </div>
                }
                {folderData?.items?.map((item, index) => {
                    return (
                        <RootFolder key={item.id} handleInsertnode={handleInsertnode} folderData={item} />
                    )
                })

                }
               </div> 
                }
        </>
    ) } else {
        return (
            <div className="file">📄 {folderData?.name}</div>
        )
    }

}
export default RootFolder;