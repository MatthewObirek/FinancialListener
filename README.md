# FinancialListener
These are the systems I use to track my spending, and compare it month over month.

## Important URL information
It is necisarry that the google sheet be open to edit for anyone who has the link

- Google Sheet ID or GSID: https://docs.google.com/spreadsheets/d/"GS_ID"/edit#gid=0
- Using the Script from this Repo on Google Apps Script: https://script.google.com/home/projects/"GAS_ID"/edit

## IOS shortcut
here is a blank version of my "Enter Expenses" Shortcut I use on my phone and watch:


## Google Script Listener
<a href="https://github.com/MatthewObirek/FinancialListener/blob/main/Code.gs">This</a> is a blank version of the google app script I use

## Google Sheets
These are the functions I use to organize my expenses month over month.

- The Total Table for the entire year

<img src="/Example Images/JustTable.png" alt="The Total Table for the entire year">

- The Table for just January

<img src="/Example Images/JanuaryTable.png" alt="The Table for just January">

- The `QUERY` function I use: `=QUERY(Sheet1!A1:C5, "select * where A >= date '2023-01-01' and A < date '2023-02-01'")`

- The accumulated function I use in January: `=SUM($C$2:C2)-=SUM($C$2:C35)`

