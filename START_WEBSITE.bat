@echo off
echo =====================================================
echo   LearnMore Projects — Starting Website
echo =====================================================
echo.

IF EXIST node_modules (
    echo [OK] node_modules found. Starting dev server...
) ELSE (
    echo [INFO] node_modules not found. Installing dependencies...
    echo This will take 1-2 minutes on first run.
    echo.
    npm install
    echo.
    echo [OK] Dependencies installed!
)

echo.
echo Starting website at http://localhost:3000
echo Press Ctrl+C to stop the server.
echo.
start "" http://localhost:3000
npm run dev
pause
