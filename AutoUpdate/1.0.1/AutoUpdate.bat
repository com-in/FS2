@echo off
setlocal enabledelayedexpansion

::GPLv3
::Powered by Filesafe 2 

echo  ======================
echo  ^| Filesafe2 - Update ^|
echo  ======================
pause
cls
timeout /t 5 /nobreak >nul
echo Deleting old version
del filesafe2.exe 2>nul
echo Downloading 

set "URL1=secret"
set "URL2=secret"

powershell -Command ^
"$ErrorActionPreference='Stop'; ^
$url1='%URL1%'; $url2='%URL2%'; $outfile='filesafe2.exe'; ^
try { ^
    Write-Host 'Downloading from primary link...'; ^
    Invoke-WebRequest -Uri $url1 -OutFile $outfile -ErrorAction Stop; ^
    exit 0; ^
} catch { ^
    Write-Host 'Retrying...'; ^
    try { ^
        Invoke-WebRequest -Uri $url2 -OutFile $outfile -ErrorAction Stop; ^
        exit 0; ^
    } catch { ^
        exit 1; ^
    } ^
}"

if %errorlevel% neq 0 (
    echo.
    echo Update failed!
    pause
    exit /b 1
)

echo.
echo Update complete!
pause
