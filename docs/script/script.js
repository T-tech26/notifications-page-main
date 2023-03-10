"use strict"
const markAsRead = document.querySelector('#mark-as-read');
const newNotificationIdentifier = document.querySelector('#new-notf-id');
const newNotificationIcon = document.querySelectorAll('#not-icon');
const newNotification = document.querySelectorAll('#new-notf');

markAsRead.addEventListener('click', () => {
  newNotificationIdentifier.textContent = '0';

  for (let i = 0; i < newNotificationIcon.length; i++) {
    newNotificationIcon[i].classList.add('hidden');
  }

  for (let x = 0; x < newNotification.length; x++) {
    newNotification[x].classList.remove('bg-Vlgb');
  }
})