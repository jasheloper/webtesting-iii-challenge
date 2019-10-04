// Test away!

import React from "react";
import Controls from './Controls';
import {render} from "@testing-library/react";
import { fireEvent } from "react-testing-library";


test("provide buttons to toggle the closed and locked states", () => {
      const {getByText} = render(<Controls />);
      const lockedbtn  = getByText(/lock gate/i);
      const closebtn = getByText(/close gate/i);

      expect(lockedbtn).toBeDefined();
      expect(closebtn).toBeDefined();
});

test("buttons' text changes to reflect the state the door will be in if clicked", () => {

   const locked = false;
   const closed = false;
   const toggleClosed = jest.fn();

   const {getByText, findByText} = render(
      <Controls locked={locked} closed={closed} toggleClosed={toggleClosed} />)

   const closedBtn = getByText(/close gate/i);

   fireEvent.click(closedBtn);

   const openBtn = findByText(/open gate/i);

   expect(openBtn).toBeDefined();
   expect(toggleClosed).toHaveBeenCalled();
});



test("buttons' text changes to reflect the state the door will be in if clicked", () => {

   const locked = false;
   const closed = false;
   const toggleClosed = jest.fn();

   const {getByText, findByText} = render(
      <Controls locked={locked} closed={closed} toggleClosed={toggleClosed} />)

   const closedBtn = getByText(/close gate/i);

   fireEvent.click(closedBtn);

   const openBtn = findByText(/open gate/i);

   expect(openBtn).toBeDefined();
   expect(toggleClosed).toHaveBeenCalled();
});


test("the closed toggle button is disabled if gate is locked", () => {
   const locked = true;
   const closed = true;
   const toggleClosed = jest.fn();

   const { getByText } = render(
     <Controls locked={locked} closed={closed} toggleClosed={toggleClosed} />
   );
 

   const openBtn = getByText(/open gate/i);
 

   fireEvent.click(openBtn);
 

   expect(toggleClosed).not.toHaveBeenCalled();
 });




test("the locked toggle button is disabled if gate is open", () => {
   const locked = false;
   const closed = false;
   const toggleLocked = jest.fn();
   const { getByText } = render(
     <Controls locked={locked} closed={closed} toggleLocked={toggleLocked} />
   );
 
   const lockBtn = getByText(/lock gate/i);
 
   fireEvent.click(lockBtn);
 
   expect(toggleLocked).not.toHaveBeenCalled();
 });

