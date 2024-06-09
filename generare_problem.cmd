@echo off
set /p number="Enter a number: "
mkdir %number%
set /p problem="Enter a problem: "
echo # Problem %number% - %problem% > %number%/problem.md
echo. >> %number%/problem.md
echo. >> %number%/problem.md
set /p ext="Enter a file extension: "
echo. > %number%/solution.%ext%
