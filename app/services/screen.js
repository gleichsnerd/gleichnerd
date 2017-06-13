import EmberScreen, { breakpoint } from 'ember-screen';

export default EmberScreen.extend({
    isNarrowScreen: breakpoint('(max-width: 374px)'),
    isSmallScreen: breakpoint('(max-width: 609px)'),

    isShortScreen: breakpoint('(max-height: 349px)')


});
