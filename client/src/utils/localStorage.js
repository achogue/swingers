export const getSavedBuddyEmails = () => {
  const savedBuddyEmails = localStorage.getItem('saved_buddies')
    ? JSON.parse(localStorage.getItem('saved_buddies'))
    : [];

  return savedBuddyEmails;
};

export const saveBuddyEmails = (buddyEmailArr) => {
  if (buddyEmailArr !== undefined && buddyEmailArr.length) {
    localStorage.setItem('saved_buddies', JSON.stringify(buddyEmailArr));
  } else {
    localStorage.removeItem('saved_buddies');
  }
};

export const removeBuddyEmail = (buddyEmail) => {
  const savedBuddyEmails = localStorage.getItem('saved_buddies')
    ? JSON.parse(localStorage.getItem('saved_buddies'))
    : null;

  if (!savedBuddyEmails) {
    return false;
  }

  const updatedSavedBuddyEmails = 
          savedBuddyEmails?.filter((savedBuddyEmail) => savedBuddyEmail !== buddyEmail);
  localStorage.setItem('saved_buddies', JSON.stringify(updatedSavedBuddyEmails));

  return true;
};
