# 🛫 AF Travel Matrix

This repository contains both the **Angular frontend** and **ASP.NET backend** of the AF Travel Matrix application, developed to manage and track travel arrangements for companies with multiple branches.
This was completed during my Summer 2024 Internship at SD Worx.

## 📂 Project Structure

In organizations with **multiple branches and frequent travel**, it becomes challenging to:
- **Track employees** who are currently present, arriving, or traveling.
- **Schedule meetings** without knowing the availability of employees across branches.
- **Visualize travel schedules** easily.

AF Travel Matrix solves these challenges by:
1. **Providing real-time updates** on employee travel statuses.
2. Offering a **calendar view** to **schedule meetings** based on employee availability.
3. Storing **centralized travel data** in a database for easy management.

---

## ⚙️ Functionalities

### 1️⃣ Add Forthcoming and Outgoing Employees
- Admins can **add travel entries** for employees:
  - **Outgoing**: Employees leaving a branch.
  - **Forthcoming**: Employees arriving at a branch.
- The travel dates are **stored in the backend** and shown on the **frontend**.

### 2️⃣ Employee Status Table
- A **dashboard** displays employees currently **in the branch** and those **traveling**.
- The table shows:
  - **Employee names**
  - **Status** (present, forthcoming, outgoing)
  - **Branch locations**

### 3️⃣ Calendar Integration for Scheduling Meetings
- A **calendar interface** allows users to:
  1. **Select any day** to schedule a meeting.
  2. View **available and unavailable employees** on that date.
  3. **Schedule meetings** by selecting employees and setting meeting times.

### 4️⃣ Branch-Level View of Employee Presence
- The **calendar** provides a branch-level view, showing which **employees are present** on any given day.

---

## 📝 License

This project is licensed under the MIT License.
