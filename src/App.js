import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

function App() {


  const items = ["item0","item1","item2"];
  
  const onDragEnd = (result)=>{
  
    const remove = items.splice(result.source.index,1);
    items.splice(result.destination.index,0,remove);
  
  
  }

  return (
    <div className='dragDropArea'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='drapable'>
          {(provided)=> (
            <div ref={provided.innerRef}>
              <Draggable draggableId="{items[0]}" index={0}>
                {(provided)=> (
                  <div
                    className='item'
                    ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  >{items[0]}</div>
                  
                )}
              </Draggable>
              <Draggable draggableId="{items[1]}" index={1}>
                {(provided)=> (
                  <div
                    className='item'
                    ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  >{items[1]}</div>
                  
                )}
              </Draggable>
              <Draggable draggableId="{items[2]}" index={2}>
                {(provided)=> (
                  <div
                    className='item'
                    ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  >{items[2]}</div>
                  
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
