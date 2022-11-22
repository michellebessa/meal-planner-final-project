import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const DailyMealPlanning = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={props.mealid + "header"}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${props.mealid}-toggle`}
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          {props.mealid}
        </button>
      </h2>
      <div
        id={`${props.mealid}-toggle`}
        className="accordion-collapse collapse show panelsStayOpen"
        aria-labelledby={props.mealid}
      >
        <div className="accordion-body">{props.children}</div>
      </div>
    </div>
  );
};

export const MealPlanning = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <li className="list-group-item" id="mealplanning">
            <h1>Daily Meal Planner</h1>
            <p>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Week Day
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Monday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tuesday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wednesday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Thursday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Friday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saturday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sunday
                    </a>
                  </li>
                </ul>
              </div>
            </p>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <DailyMealPlanning mealid="Breakfast"></DailyMealPlanning>
              <DailyMealPlanning mealid="Lunch"></DailyMealPlanning>
              <DailyMealPlanning mealid="Dinner"></DailyMealPlanning>
            </div>
          </li>
        </div>
        <div className="col">
          <li className="list-group-item" id="mealplanning">
            <h1>Shopping List</h1>
            <p>
              {" "}
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Week Day
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Monday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tuesday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wednesday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Thursday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Friday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saturday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sunday
                    </a>
                  </li>
                </ul>
              </div>
            </p>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <DailyMealPlanning mealid="Healthy-Fat"></DailyMealPlanning>
              <DailyMealPlanning mealid="Protein"></DailyMealPlanning>
              <DailyMealPlanning mealid="Dairy"></DailyMealPlanning>
              <DailyMealPlanning mealid="Grains-Carbohydrates"></DailyMealPlanning>
              <DailyMealPlanning mealid="Vegetables"></DailyMealPlanning>
              <DailyMealPlanning mealid="Fruits"></DailyMealPlanning>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
