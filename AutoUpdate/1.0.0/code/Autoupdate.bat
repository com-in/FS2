::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFAJVQgOKAE+/Fb4I5/jHaRxgJpbL0SbmRAYaAzN17tyVErZsululHprdUCCJ1vRk+ORM6tTiLbG/MI5Bsi1VNeYKds5/Ac/rzeGreuU6SK7RqVWBcZE/xSWs70TwkbYsgzavEPgyHGDuz+JhO8Zg
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJhZksaHGQ=
::ZQ05rAF9IBncCkqN+0xwdVsGAlfMbQs=
::ZQ05rAF9IAHYFVzEqQK23vzQl9IG45Y87HGZAiF9BgHV4gBdYfI7eZveug==
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQK23vzQl9IG45Y87HGZAiF9BgHVKqrX0Qj3/nQPXEJepQ30bZ8j8l7GU6C1+A==
::dhA7uBVwLU+EWHqp13FwGw9BSA2NXA==
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGyX8VAjFAJVQgOKAE+/Fb4I5/jHaRxgJpbL0SbmRAYaAzN17tyVErZsululHprdUCCJ1vRk+ORM6tTiLbG/MI5Bsi1VNeYKds5/Ac/rzeGreuU6SK7RqVWBcZE/8jWq83jvm6QE1ESuEPlARV/A1LhnDdkE/B6xJkzQn9M=
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
echo 文件保护助手2 自动升级程序
pause
cls
:: DEBUG echo %cd%
echo 即将开始...如不想更新，请在5秒内关闭窗口
timeout 5
echo 正在删除旧版本
del filesafe.exe
echo 正在下载新版本（如长时间卡住请使用加速器）
powershell -Command Invoke-WebRequest -Uri "pass" -OutFile %cd%\filesafe2.exe
echo 更新完成
pause