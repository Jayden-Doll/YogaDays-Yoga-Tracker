import "react-calendar/dist/Calendar.css";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .react-calendar {
    abbr[title] {
      text-decoration: none;
    }

    width: 650px;
    padding: 2rem 2rem;
    border: none;
    border-radius: 1rem;
    user-select: none;
    box-shadow: 10px 8px 26px 0px rgba(79, 66, 44, 0.49);
    -webkit-box-shadow: 10px 8px 26px 0px rgba(79, 66, 44, 0.49);
    -moz-box-shadow: 10px 8px 26px 0px rgba(79, 66, 44, 0.49);
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Cutive Mono";
  }

  .react-calendar__navigation button {
    font-size: 2rem;
    border-radius: 0.25rem;
  }

  .react-calendar__navigation button:disabled {
    visibility: hidden;
  }

  .react-calendar__month-view__weekdays {
    font-size: 1.25rem;
    font-family: "Cormorant Garamond";
    font-weight: 600;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #333;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #a8a8a8 !important;
  }

  .react-calendar__month-view__days__day:first-child {
    border-radius: 0.75rem 0 0 0;
  }

  .react-calendar__month-view__days__day:last-child {
    border-radius: 0 0 0.75rem 0;
  }

  .react-calendar__month-view__days__day:nth-child(7) {
    border-radius: 0 0.75rem 0 0;
  }

  .react-calendar__month-view__days__day:nth-child(36) {
    border-radius: 0 0 0 0.75rem;
  }

  .react-calendar__month-view__days__day {
    font-size: 1.25rem;
    color: #333;
  }

  .react-calendar__tile {
    background: none;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__tile:enabled:focus {
    background-color: #333;
    border-radius: 0.5rem;
  }

  .react-calendar__tile:enabled:hover {
    border-radius: 0.5rem;
    background-color: #333;
    color: white;
  }

  .react-calendar__tile--now {
    border-radius: 0.5rem;
    background: #333;
    color: white;
  }

  .react-calendar__tile--active:focus {
    color: #f0f0f0;
  }

  .react-calendar__tile--active:active:focus {
    color: #f0f0f0;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: transparent;
  }

  .day-complete {
    background-color: #859e7e !important;
  }
`;
