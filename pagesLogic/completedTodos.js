import { getAllTasks } from '../API/get.js';
import {
  addDeleteButtonEventListeners,
  checkBoxesList,
  createTaskHTML,
  getFilteredTasks,
  logOutUser,
  showLoader,
  userAuthorized,
} from '../utils.js';

const loader = document.querySelector('.loader-container');
const taskContainer = document.querySelector('.tasks');
const logOutButton = document.querySelector('.log-out__button');
const authorized = userAuthorized();

const showTasks = async () => {
  if (authorized) {
    showLoader(loader);
    const allTasks = await getAllTasks();
    const completedTasks = getFilteredTasks(allTasks, 'completed');

    let taskHTML = '';

    completedTasks.forEach((task) => {
      taskHTML += createTaskHTML(task);
    });

    taskContainer.innerHTML = taskHTML;

    addDeleteButtonEventListeners(taskContainer);
    checkBoxesList(taskContainer);
  } else {
    logOutUser();
  }
};

logOutButton.addEventListener('click', () => {
  logOutUser();
});
showTasks();
