import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

function App() {


  const items = ["item0","item1","item2","item3"];
  
  const onDragEnd = (result)=>{
    console.log(result);
    const remove = items.splice(result.source.index,1);
    items.splice(result.destination.index,0,...remove);

    console.log(items);
  
  }

  return (
    <div className='dragDropArea'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='drapable'>
          {(provided)=> (
            <div ref={provided.innerRef}>
              {items.map((item,index)=>{
                return(
                  <Draggable key={item} draggableId={item} index={index}>
                  {(provided)=> (
                    
                    <div
                      className='item'
                      ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    >
                      {item}
                    </div>

                  )}
                </Draggable>
                )
              })}        
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
