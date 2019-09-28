# Sequelized Burger

### Overview
1. This app uses sequelize to control data going in and out of mysql DB.
2. The app is deployed to Heroku.
3. Link to Heroku:
https://morning-ocean-46389.herokuapp.com/
https://git.heroku.com/morning-ocean-46389.git
https://morning-ocean-46389.herokuapp.com/burgers

4. Link to repo:
https://github.com/liz-guenthner/sequelizedBurger

5. Link to portfolio:
https://liz-guenthner.github.io/lizGuenthnerResume/


### Instructions
1. Type in a burger name and click "Submit" to see it appear in table on left of screen.
2. Click "Devour It! CTA to eat the burger and transer it to table on right of screen.


### Heroku links and instructions
1. https://devcenter.heroku.com/articles/heroku-cli
2. ```brew tap heroku/brew && brew install heroku```
3. ```heroku --version```
4. load in JawsDB (see below)
5. ```heroku login```
6. click any key
7. login to heroku page in browser (email, J-123!)
8. cd to project folder
9. ```heroku create```
10. ```heroku local web``` run app locally
11. ```git push heroku master``` push to heroku master

### Jaws DB instructions
1. ```heroku addons:create jawsdb```
2. ```heroku config:get JAWSDB_URL```
3. ```heroku config -s | grep JAWSDB_URL >> .env```
4. ```echo .env >> .gitignore```

### Open App
1. go to https://dashboard.heroku.com/apps
2. click on "Open app"

https://devcenter.heroku.com/articles/account-verification) for more details.
