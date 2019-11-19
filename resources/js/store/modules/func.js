moveCourseInRoadmapStage: (state, [course, index, stage, positionChange]) => {
  
  // Get the corresponding roadmap for the stage
  const array = state['roadmapStage' + stage];

  if (index > -1) {
    let newIndex = (index + positionChange);

    // If the change moves the index too far either way - set it to the beginning or end
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= array.length) {
      newIndex = array.length - 1
    }

    // Create a copy of the array
    const arrayClone = array.slice();
    // Remove the course from its old position
    arrayClone.splice(index, 1);
    // Add the course back in at its new position
    arrayClone.splice(newIndex, 0, course);
    // Replace the old stage roadmap with the new array
    state['roadmapStage' + stage] = arrayClone

    // After we've done the state mutation and updated the UI - then we also need to swap the id's of the courses in the roadmap courses table. This means doing a patch request and swapping the ids of the two courses. However - this also means that we need to get the id of the courses that are adjacent to that course - how???

  // Get the adjacent course id
  // We can use the roadmapStage array, clone it and pull the course out to get its id.
    if (positionChange = -1) {
      // Then get the id of the course to the left
      arrayClone[index - 1 ].id
    }
  }
}