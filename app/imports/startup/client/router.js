import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { $ } from 'meteor/jquery';


/*                        LANDING ROUTE                       */

export const landingPageRouteName = 'Landing_Page';
FlowRouter.route('/', {
  name: landingPageRouteName,
  action() {
    BlazeLayout.render('Landing_Layout', { main: landingPageRouteName });
  },
});

export const gameTypesPageRouteName = 'Game_Types_Page';
FlowRouter.route('/gametypes', {
  name: gameTypesPageRouteName,
  action() {
    BlazeLayout.render('Game_Types_Layout', { main: gameTypesPageRouteName });
  },
});

export const homePageRouteName = 'Home_Page';
FlowRouter.route('/home', {
  name: homePageRouteName,
  action() {
    BlazeLayout.render('Home_Layout', { main: homePageRouteName });
  },
});

export const userProfilePageRouteName = 'User_Profile_Page';
FlowRouter.route('/userprofile', {
  name: userProfilePageRouteName,
  action() {
    BlazeLayout.render('User_Profile_Layout', { main: userProfilePageRouteName });
  },
});

export const leaderboardPageRouteName = 'Leaderboard_Page';
FlowRouter.route('/leaderboard', {
  name: leaderboardPageRouteName,
  action() {
    BlazeLayout.render('Leaderboard_Layout', { main: leaderboardPageRouteName });
  },
});

export const game1PageRouteName = 'Game1_Page';
FlowRouter.route('/game1', {
  name: game1PageRouteName,
  action() {
    BlazeLayout.render('Game1_Layout', { main: game1PageRouteName });
  },
});

/*                        DIRECTORY ROUTE                       */

function addDirectoryBodyClass() {
  $('body').addClass('directory-page-body');
}

function removeDirectoryBodyClass() {
  $('body').removeClass('directory-page-body');
}

export const directoryPageRouteName = 'Directory_Page';
FlowRouter.route('/directory', {
  name: directoryPageRouteName,
  action() {
    BlazeLayout.render('Directory_Layout', { main: directoryPageRouteName });
  },
  triggersEnter: [addDirectoryBodyClass],
  triggersExit: [removeDirectoryBodyClass],
});


/*                        USER ROUTES                      */


function addUserBodyClass() {
  $('body').addClass('user-layout-body');
}

function removeUserBodyClass() {
  $('body').removeClass('user-layout-body');
}

const userRoutes = FlowRouter.group({
  prefix: '/:username',
  name: 'userRoutes',
  triggersEnter: [addUserBodyClass],
  triggersExit: [removeUserBodyClass],
});

export const profilePageRouteName = 'Profile_Page';
userRoutes.route('/profile', {
  name: profilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: profilePageRouteName });
  },
});

export const filterPageRouteName = 'Filter_Page';
userRoutes.route('/filter', {
  name: filterPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: filterPageRouteName });
  },
});


/*                        MISC ROUTES                       */
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Page_Not_Found');
  },
};
