export function StateEventDemo1(){
    function handleContextMenu(){
        document.oncontextmenu = function(){
            alert('Right click Not Allowed')
            return false;
        }
    }
    function handleDbClick(){
        window.open('iphone-green.jpg', 'Iphone', 'width=300 height=400')
    }
    return(
        <div className="container-fluid" onContextMenu={handleContextMenu}>
            <h2>Button Events</h2>
            <img src="iphone-green.jpg" onDoubleClick={handleDbClick} width="100" height="100" alt=""/>
            <p>Double Click to View Large - Right Click is disabled on this page</p>
        </div>
    )

}