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
    box-shadow: 10px 8px 26px 0px rgba(95, 77, 28, 0.5);
    -webkit-box-shadow: 10px 8px 26px 0px rgba(95, 77, 28, 0.5);
    -moz-box-shadow: 10px 8px 26px 0px rgba(95, 77, 28, 0.5);
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
    border: 2px solid white;
    border-radius: 0.75rem;
  }

  .react-calendar__month-view__days__day:nth-child(36) {
    border-radius: 0.75rem;
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
    border: 2px solid white;
    border-radius: 0.75rem;
  }

  .react-calendar__tile:enabled:focus {
    background-color: #333;
    border-radius: 0.75rem;
  }

  .react-calendar__tile:enabled:hover {
    border-radius: 0.75rem;
    background-color: #333;
    color: white !important;
  }

  .react-calendar__tile--now {
    border-radius: 0.75rem;
    background: #333;
    color: white;
    border: 2px solid white;
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

  .react-calendar__month-view__days__day--neighboringMonth.day-complete {
    color: #333 !important;
    background-color: rgba(102, 154, 88, 0.6) !important;
  }

  .day-complete {
    background-color: #669a58 !important;
    color: white;
    border-radius: 0.75rem;
    border: 2px solid white;
  }

  .react-calendar__tile--now.day-complete {
    box-sizing: border-box;
    border: 2px solid #333;
  }
`;
