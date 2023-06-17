import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./PageLayout/Layout";

import AddMoney from "./pages/AddMoney/AddMoney";

import UserMoneyList from "./pages/AddMoney/UserMoneyList";
import AddMember from "./pages/Member/AddMember";

import MoneyEdite from "./pages/AddMoney/MoneyEdite";
import AddBazarDay from "./pages/BazarDay/AddBazarDay";
import BazarDayList from "./pages/BazarDay/BazarDayList";
import EditeBazarDay from "./pages/BazarDay/EditeBazarDay";

import DashBoard from "./pages/DashBoard/DashBoard";

import AddMeal from "./pages/Meal/AddMeal";
import MealEdite from "./pages/Meal/MealEdite";
import MealList from "./pages/Meal/MealList";
import AddMealCost from "./pages/MealCost/AddMealCost";
import MealCostList from "./pages/MealCost/MealCostList";
import MealcostEdite from "./pages/MealCost/MealcostEdite";
import MemberEdite from "./pages/Member/MemberEdite";
import MembersList from "./pages/Member/MembersList";
import AddOtherCost from "./pages/OtherCost/AddOtherCost";
import OtherCostEdite from "./pages/OtherCost/OtherCostEdite";
import OtherCostList from "./pages/OtherCost/OtherCostList";

import SummaryList from "./Componets/SummaryList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          {/* member */}
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/edit-member/:id" element={<MemberEdite />} />
          <Route path="/members-list" element={<MembersList />} />

          {/* Add Money */}
          <Route path="/add-money" element={<AddMoney />} />
          <Route path="/money-edite/:id" element={<MoneyEdite />} />
          <Route path="/money-list" element={<UserMoneyList />} />

          {/* Add meal  */}
          <Route path="/add-meal" element={<AddMeal />} />
          <Route path="/edite-meal/:id" element={<MealEdite />} />
          <Route path="/meal-list" element={<MealList />} />

          {/* bazarDAy */}

          <Route path="/add-bazar-day" element={<AddBazarDay />} />
          <Route path="/edite-bazar-day/:id" element={<EditeBazarDay />} />
          <Route path="/bazar-day-list" element={<BazarDayList />} />

          {/* meal Cost */}
          <Route path="/add-meal-cost" element={<AddMealCost />} />
          <Route path="/edite-meal-cost/:id" element={<MealcostEdite />} />
          <Route path="/meal-cost-list" element={<MealCostList />} />

          {/* other Cost */}
          <Route path="/add-other-cost" element={<AddOtherCost />} />
          <Route path="/edite-other-cost/:id" element={<OtherCostEdite />} />
          <Route path="/other-cost-list" element={<OtherCostList />} />

          <Route path="/summary" element={<SummaryList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
