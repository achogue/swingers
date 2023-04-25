export const getSavedBuddyIds = () => {
  const savedBuddyIds = localStorage.getItem('saved_buddies')
    ? JSON.parse(localStorage.getItem('saved_buddies'))
    : [];

  return savedBuddyIds;
};

export const saveBuddyIds = (buddyIdArr) => {
  if (buddyIdArr.length) {
    localStorage.setItem('saved_buddies', JSON.stringify(buddyIdArr));
  } else {
    localStorage.removeItem('saved_buddies');
  }
};

export const removeBuddyId = (buddyId) => {
  const savedBuddyIds = localStorage.getItem('saved_buddies')
    ? JSON.parse(localStorage.getItem('saved_buddies'))
    : null;

  if (!savedBuddyIds) {
    return false;
  }

  const updatedSavedBuddyIds = savedBuddyIds?.filter((savedBuddyId) => savedBuddyId !== buddyId);
  localStorage.setItem('saved_buddies', JSON.stringify(updatedSavedBuddyIds));

  return true;
};
