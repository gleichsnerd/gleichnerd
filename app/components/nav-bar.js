import Ember from 'ember';

const {
  inject,
  computed,
  get
} = Ember;

export default Ember.Component.extend({
  
  screen: inject.service("screen"),

  classNames: ["flex-center"],
  
  classNameBindings: ["showHome:nav-bar:nav-bar-embedded", "isNarrow:flex-column:flex-row"],

  showHome: true,

  navLinksClasses: computed("showHome", "isSmallScreen", "isNarrow", function() {
    let classes = "";

    let isEmbedded = !get(this, "showHome");
    let isSmallScreen = get(this, "isSmallScreen");
    let isNarrow = get(this, "isNarrow");

    //If it's embedded or a small screen, it's a row
    let flexRow = isEmbedded || isSmallScreen;

    //If it's embedded or a narrow screen, center it
    let flexCenter = isEmbedded || isNarrow;

    //If it's small (not narrow) and not embedded, push it to the end
    let flexEnd = isSmallScreen && !isNarrow && !isEmbedded;
    
    if(flexRow) {
      classes += " flex-row";
    } else {
      classes += " flex-column";
    }

    if(flexCenter) {
      classes += " flex-center";
    }

    if(flexEnd) {
      classes += " flex-end padding-largest-right";
    }

    return classes;
  }),

  aboutMe: computed("isSmallScreen", function() {
    return get(this, "isSmallScreen") ? "About" : "About Me";
  }),

  projects: "Projects",

  resume: "Resume",

  contactMe: computed("sisSmallScreen", function() {
    return get(this, "isSmallScreen") ? "Contact" : "Contact Me";
  }),

  isNarrow: computed.readOnly("screen.isNarrowScreen"),

  isSmallScreen: computed.readOnly("screen.isSmallScreen"),

  isRow: computed("isSmallScreen", "showHome", function() {
    let isSmallScreen = get(this, "isSmallScreen");

    return isSmallScreen || (!isSmallScreen && !get(this, "showHome"));
  })
});
