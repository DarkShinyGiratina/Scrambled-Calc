"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = {};
var GSC_PATCH = {};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var DPP_PATCH = {};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var BW_PATCH = {};
var BW = (0, util_1.extend)(true, {}, DPP, BW_PATCH);
delete BW["Faint Attack"];
var XY_PATCH = {};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
var SM_PATCH = {};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
var SS_PATCH = {};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH);
var SV_PATCH = {
    Pummel: {
        bp: 25,
        type: "Fighting",
        category: "Physical",
        multihit: [2, 5],
        makesContact: true
    },
    "Seismic Fist": {
        bp: 90,
        type: "Ground",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Pay Day": {
        bp: 30,
        type: "Normal",
        category: "Physical",
        multihit: 3
    },
    "Fire Punch": {
        bp: 80,
        type: "Fire",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Ice Punch": {
        bp: 80,
        type: "Ice",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Thunder Punch": {
        bp: 80,
        type: "Electric",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Metal Claw": {
        bp: 60,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Vise Grip": {
        bp: 60,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Guillotine: {
        bp: 1,
        type: "Dark",
        category: "Physical",
        makesContact: true
    },
    "Swords Dance": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Population Bomb": {
        bp: 20,
        type: "Normal",
        category: "Physical",
        multihit: 10,
        makesContact: true
    },
    Gust: {
        bp: 45,
        type: "Flying",
        category: "Special",
        isWind: true
    },
    "Wing Attack": {
        bp: 75,
        type: "Flying",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Whirlwind: {
        bp: 0,
        type: "Flying",
        category: "Status",
        isWind: true
    },
    Fly: {
        bp: 95,
        type: "Flying",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Bind: {
        bp: 60,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Whiplash: {
        bp: 90,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Vine Lashes": {
        bp: 40,
        type: "Grass",
        category: "Physical",
        multihit: 2,
        makesContact: true,
        secondaries: true
    },
    Stomp: {
        bp: 75,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Double Kick": {
        bp: 35,
        type: "Fighting",
        category: "Physical",
        multihit: 2,
        makesContact: true,
        secondaries: true
    },
    "Megaton Kick": {
        bp: 120,
        type: "Ground",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Headbutt: {
        bp: 70,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Stinger Missile": {
        bp: 25,
        type: "Water",
        category: "Physical",
        multihit: [2, 5],
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Spike Cannon": {
        bp: 25,
        type: "Steel",
        category: "Physical",
        multihit: [2, 5],
        makesContact: true,
        isPulse: true,
        isBullet: true
    },
    "Horn Drill": {
        bp: 1,
        type: "Normal",
        category: "Physical",
        makesContact: true
    },
    Wallop: {
        bp: 25,
        type: "Fairy",
        category: "Physical",
        multihit: [2, 5],
        makesContact: true
    },
    "Body Slam": {
        bp: 95,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Wrap: {
        bp: 60,
        type: "Poison",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Take Down": {
        bp: 100,
        type: "Fighting",
        category: "Physical",
        recoil: [20, 100],
        makesContact: true,
        secondaries: true
    },
    Kerfuffle: {
        bp: 130,
        type: "Fairy",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Double Edge": {
        bp: 125,
        type: "Normal",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    "Tail Wag": {
        bp: 0,
        type: "Normal",
        category: "Status",
        target: "allAdjacentFoes"
    },
    "Poison Dart": {
        bp: 25,
        type: "Poison",
        category: "Physical",
        multihit: 2,
        isPulse: true,
        secondaries: true
    },
    "Pin Missile": {
        bp: 25,
        type: "Bug",
        category: "Physical",
        multihit: [2, 5],
        isPulse: true,
        isBullet: true
    },
    Leer: {
        bp: 0,
        type: "Dark",
        category: "Status",
        target: "allAdjacentFoes"
    },
    "Arcane Fangs": {
        bp: 85,
        type: "Dragon",
        category: "Physical",
        drain: [100, 100],
        makesContact: true,
        isPulse: true
    },
    Growl: {
        bp: 0,
        type: "Normal",
        category: "Status",
        target: "allAdjacentFoes",
        isSound: true
    },
    Roar: {
        bp: 0,
        type: "Dark",
        category: "Status",
        isSound: true
    },
    Sing: {
        bp: 0,
        type: "Normal",
        category: "Status",
        isSound: true
    },
    Supersonic: {
        bp: 0,
        type: "Normal",
        category: "Status",
        isSound: true
    },
    Disable: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Acid Spray": {
        bp: 40,
        type: "Poison",
        category: "Special",
        target: "allAdjacentFoes",
        secondaries: true
    },
    Ignite: {
        bp: 45,
        type: "Fire",
        category: "Special",
        isPulse: true
    },
    Flamethrower: {
        bp: 90,
        type: "Fire",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    Mist: {
        bp: 0,
        type: "Ice",
        category: "Status"
    },
    "Water Gun": {
        bp: 45,
        type: "Water",
        category: "Special",
        isPulse: true,
        isBullet: true
    },
    "Hydro Pump": {
        bp: 120,
        type: "Water",
        category: "Special",
        isPulse: true,
        isBullet: true
    },
    Surf: {
        bp: 100,
        type: "Water",
        category: "Special",
        target: "allAdjacent"
    },
    "Ice Beam": {
        bp: 90,
        type: "Ice",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    Blizzard: {
        bp: 125,
        type: "Ice",
        category: "Special",
        target: "allAdjacentFoes",
        isWind: true,
        secondaries: true
    },
    "Pendulum Wave": {
        bp: 65,
        type: "Psychic",
        category: "Special",
        secondaries: true
    },
    "Bubble Beam": {
        bp: 60,
        type: "Water",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Aurora Beam": {
        bp: 70,
        type: "Ice",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Hyper Beam": {
        bp: 150,
        type: "Normal",
        category: "Special",
        dropsSelf: true,
        isPulse: true,
        isBullet: true
    },
    "Fury Pecks": {
        bp: 25,
        type: "Flying",
        category: "Physical",
        multihit: [2, 5],
        makesContact: true,
        isSlicing: true
    },
    "Drill Peck": {
        bp: 80,
        type: "Flying",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Low Kick": {
        bp: 1,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Counter: {
        bp: 1,
        type: "Fighting",
        category: "Physical",
        makesContact: true
    },
    "Ancient Impact": {
        bp: 1,
        type: "Ground",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Strength: {
        bp: 120,
        type: "Rock",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true
    },
    Siphon: {
        bp: 45,
        type: "Bug",
        category: "Special",
        drain: [100, 100]
    },
    "Mega Drain": {
        bp: 60,
        type: "Grass",
        category: "Special",
        drain: [75, 100]
    },
    "Leech Seed": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    Growth: {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Razor Leaf": {
        bp: 60,
        type: "Grass",
        category: "Physical",
        target: "allAdjacentFoes",
        isSlicing: true
    },
    "Solar Beam": {
        bp: 90,
        type: "Grass",
        category: "Special",
        willCrit: true,
        isPulse: true,
        isBullet: true
    },
    "Poison Powder": {
        bp: 0,
        type: "Poison",
        category: "Status"
    },
    "Stun Spore": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Sleep Powder": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Petal Dance": {
        bp: 120,
        type: "Grass",
        category: "Special",
        makesContact: true,
        secondaries: true
    },
    "String Shot": {
        bp: 0,
        type: "Bug",
        category: "Status",
        target: "allAdjacentFoes"
    },
    "Fire Spin": {
        bp: 60,
        type: "Fire",
        category: "Special",
        secondaries: true
    },
    "Thunder Shock": {
        bp: 40,
        type: "Electric",
        category: "Special",
        secondaries: true
    },
    Thunderbolt: {
        bp: 90,
        type: "Electric",
        category: "Special",
        secondaries: true
    },
    "Thunder Wave": {
        bp: 0,
        type: "Electric",
        category: "Status"
    },
    Thunder: {
        bp: 125,
        type: "Electric",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Rock Drop": {
        bp: 60,
        type: "Rock",
        category: "Physical",
        willCrit: true,
        secondaries: true
    },
    Earthquake: {
        bp: 100,
        type: "Ground",
        category: "Physical",
        target: "allAdjacent"
    },
    Fissure: {
        bp: 1,
        type: "Ground",
        category: "Physical"
    },
    Dig: {
        bp: 90,
        type: "Ground",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Toxic: {
        bp: 0,
        type: "Poison",
        category: "Status"
    },
    "Mind Pulse": {
        bp: 60,
        type: "Psychic",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    Psychic: {
        bp: 90,
        type: "Psychic",
        category: "Special",
        secondaries: true
    },
    Hypnosis: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Agility: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Quick Attack": {
        bp: 45,
        type: "Normal",
        category: "Physical",
        makesContact: true
    },
    Teleport: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Soul Absorb": {
        bp: 1,
        type: "Ghost",
        category: "Special",
        drain: [100, 100]
    },
    Mimic: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Screech: {
        bp: 0,
        type: "Normal",
        category: "Status",
        isSound: true
    },
    "Game Plan": {
        bp: 0,
        type: "Fighting",
        category: "Status"
    },
    Recover: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Fortify: {
        bp: 0,
        type: "Steel",
        category: "Status"
    },
    Deflate: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Smokescreen: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Confuse Ray": {
        bp: 0,
        type: "Ghost",
        category: "Status"
    },
    Withdraw: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Defense Curl": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Light Screen": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Haze: {
        bp: 0,
        type: "Ice",
        category: "Status"
    },
    Reflect: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Focus Energy": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Metronome: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Detonate: {
        bp: 250,
        type: "Fire",
        category: "Physical",
        target: "allAdjacent",
        willCrit: true,
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Devious Lick": {
        bp: 20,
        type: "Poison",
        category: "Special",
        makesContact: true,
        secondaries: true
    },
    Smog: {
        bp: 40,
        type: "Poison",
        category: "Special",
        secondaries: true
    },
    "Sludge Fling": {
        bp: 60,
        type: "Poison",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    "Fire Blast": {
        bp: 120,
        type: "Fire",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Hydro Assault": {
        bp: 140,
        type: "Water",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    Swift: {
        bp: 45,
        type: "Normal",
        category: "Special",
        target: "allAdjacentFoes"
    },
    Amnesia: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Soft Boiled": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Divebomb: {
        bp: 130,
        type: "Flying",
        category: "Physical",
        makesContact: true
    },
    Glare: {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Dream Eater": {
        bp: 100,
        type: "Psychic",
        category: "Special",
        drain: [50, 100]
    },
    "Poison Gas": {
        bp: 0,
        type: "Poison",
        category: "Status",
        target: "allAdjacentFoes"
    },
    "Leech Life": {
        bp: 60,
        type: "Bug",
        category: "Physical",
        drain: [100, 100],
        makesContact: true
    },
    "Sky Attack": {
        bp: 120,
        type: "Flying",
        category: "Physical",
        willCrit: true,
        secondaries: true
    },
    Transform: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Spore: {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    Splash: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Acid Armor": {
        bp: 0,
        type: "Poison",
        category: "Status"
    },
    Crabhammer: {
        bp: 60,
        type: "Water",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        secondaries: true
    },
    Explosion: {
        bp: 250,
        type: "Normal",
        category: "Special",
        target: "allAdjacent",
        willCrit: true,
        isPulse: true,
        isBullet: true
    },
    "Fury Swipes": {
        bp: 25,
        type: "Dark",
        category: "Physical",
        multihit: [2, 5],
        makesContact: true,
        isSlicing: true
    },
    Rest: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Rock Slide": {
        bp: 95,
        type: "Rock",
        category: "Physical",
        target: "allAdjacentFoes",
        secondaries: true
    },
    Acclimate: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Tri Attack": {
        bp: 35,
        type: "Normal",
        category: "Special",
        multihit: 3,
        isPulse: true,
        isBullet: true
    },
    "Super Fang": {
        bp: 1,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Slash: {
        bp: 80,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    Substitute: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Struggle: {
        bp: 50,
        type: "Normal",
        category: "Physical",
        makesContact: true
    },
    Sketch: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Triple Kick": {
        bp: 10,
        type: "Fighting",
        category: "Physical",
        multihit: 3,
        makesContact: true,
        willCrit: true
    },
    Thief: {
        bp: 60,
        type: "Dark",
        category: "Physical",
        makesContact: true
    },
    "Flame Wheel": {
        bp: 60,
        type: "Fire",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Snore: {
        bp: 50,
        type: "Normal",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    Curse: {
        bp: 0,
        type: "Ghost",
        category: "Status"
    },
    Flail: {
        bp: 1,
        type: "Normal",
        category: "Physical",
        makesContact: true
    },
    Accustom: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Aeroblast: {
        bp: 80,
        type: "Flying",
        category: "Special",
        willCrit: true,
        isPulse: true,
        isWind: true,
        isSound: true
    },
    "Cotton Spore": {
        bp: 0,
        type: "Grass",
        category: "Status",
        target: "allAdjacentFoes"
    },
    Reversal: {
        bp: 1,
        type: "Fighting",
        category: "Physical",
        makesContact: true
    },
    Spite: {
        bp: 0,
        type: "Ghost",
        category: "Status"
    },
    "Frost Flurry": {
        bp: 45,
        type: "Ice",
        category: "Special",
        target: "allAdjacentFoes",
        isWind: true
    },
    Protect: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Mach Punch": {
        bp: 45,
        type: "Fighting",
        category: "Physical",
        makesContact: true
    },
    "Scary Face": {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Dreamy Kiss": {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    "Belly Drum": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Sludge Bomb": {
        bp: 95,
        type: "Poison",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Mud Bomber": {
        bp: 25,
        type: "Ground",
        category: "Special",
        multihit: 3,
        willCrit: true,
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    Spikes: {
        bp: 0,
        type: "Ground",
        category: "Status"
    },
    "Zap Cannon": {
        bp: 140,
        type: "Electric",
        category: "Special",
        dropsSelf: true,
        isPulse: true,
        isBullet: true
    },
    "Destiny Bond": {
        bp: 0,
        type: "Ghost",
        category: "Status"
    },
    "Perish Song": {
        bp: 0,
        type: "Dark",
        category: "Status",
        isSound: true
    },
    "Icy Wind": {
        bp: 60,
        type: "Ice",
        category: "Special",
        target: "allAdjacentFoes",
        isWind: true,
        secondaries: true
    },
    Detect: {
        bp: 0,
        type: "Fighting",
        category: "Status"
    },
    "Bone Rush": {
        bp: 25,
        type: "Rock",
        category: "Physical",
        multihit: [2, 5]
    },
    "Take Aim": {
        bp: 0,
        type: "Steel",
        category: "Status"
    },
    Outrage: {
        bp: 150,
        type: "Dragon",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Sandstorm: {
        bp: 0,
        type: "Rock",
        category: "Status",
        isWind: true
    },
    "Giga Drain": {
        bp: 75,
        type: "Grass",
        category: "Special",
        drain: [50, 100]
    },
    Endure: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Charm: {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    Rollout: {
        bp: 60,
        type: "Rock",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "False Swipe": {
        bp: 40,
        type: "Normal",
        category: "Physical",
        makesContact: true
    },
    Swagger: {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    Enrich: {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    Spark: {
        bp: 45,
        type: "Electric",
        category: "Physical",
        makesContact: true
    },
    "Fury Cutter": {
        bp: 40,
        type: "Bug",
        category: "Physical",
        makesContact: true,
        isSlicing: true,
        secondaries: true
    },
    "Steel Wingbeat": {
        bp: 45,
        type: "Steel",
        category: "Physical",
        multihit: 2,
        makesContact: true,
        isSlicing: true
    },
    "Mesmer-Eyes": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Attract: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Sleep Talk": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Heal Bell": {
        bp: 0,
        type: "Normal",
        category: "Status",
        isSound: true
    },
    Present: {
        bp: 1,
        type: "Fairy",
        category: "Physical",
        multihit: [2, 5]
    },
    Safeguard: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Pain Split": {
        bp: 0,
        type: "Ghost",
        category: "Status"
    },
    "Bitter Blaze": {
        bp: 60,
        type: "Fire",
        category: "Special",
        drain: [50, 100],
        willCrit: true
    },
    "Knockout Punch": {
        bp: 130,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Megahorn: {
        bp: 120,
        type: "Bug",
        category: "Physical",
        makesContact: true,
        dropsSelf: true,
        isSlicing: true
    },
    "Dragon Breath": {
        bp: 75,
        type: "Dragon",
        category: "Special",
        secondaries: true
    },
    "Baton Pass": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Encore: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Rapid Spin": {
        bp: 60,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Sweet Scent": {
        bp: 0,
        type: "Grass",
        category: "Status",
        target: "allAdjacentFoes"
    },
    "Iron Tail": {
        bp: 100,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Laceration: {
        bp: 80,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Morning Sun": {
        bp: 0,
        type: "Fire",
        category: "Status"
    },
    Synthesis: {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    Moonlight: {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    "Cross Chop": {
        bp: 80,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    Twister: {
        bp: 45,
        type: "Dragon",
        category: "Special",
        target: "allAdjacentFoes",
        isWind: true
    },
    "Rain Dance": {
        bp: 0,
        type: "Water",
        category: "Status"
    },
    "Sunny Day": {
        bp: 0,
        type: "Fire",
        category: "Status"
    },
    Crunch: {
        bp: 85,
        type: "Dark",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Mirror Coat": {
        bp: 1,
        type: "Psychic",
        category: "Special"
    },
    "Psych Up": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Extreme Speed": {
        bp: 80,
        type: "Normal",
        category: "Physical",
        makesContact: true
    },
    "Ancient Power": {
        bp: 60,
        type: "Rock",
        category: "Special",
        secondaries: true
    },
    "Shadow Ball": {
        bp: 90,
        type: "Ghost",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Future Sight": {
        bp: 100,
        type: "Psychic",
        category: "Special",
        willCrit: true
    },
    "Boulder Bash": {
        bp: 85,
        type: "Rock",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Whirlpool: {
        bp: 60,
        type: "Water",
        category: "Special",
        secondaries: true
    },
    "Beat Up": {
        bp: 1,
        type: "Dark",
        category: "Physical",
        multihit: 6
    },
    "Fake Out": {
        bp: 40,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Uproar: {
        bp: 120,
        type: "Fighting",
        category: "Special",
        target: "allAdjacentFoes",
        isSound: true
    },
    Stockpile: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Spew Out": {
        bp: 1,
        type: "Poison",
        category: "Special",
        willCrit: true,
        secondaries: true
    },
    Swallow: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Heat Wave": {
        bp: 60,
        type: "Fire",
        category: "Special",
        target: "allAdjacentFoes",
        willCrit: true,
        isWind: true,
        secondaries: true
    },
    Torment: {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    Flatter: {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Will O Wisp": {
        bp: 0,
        type: "Fire",
        category: "Status"
    },
    Memento: {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    Facade: {
        bp: 70,
        type: "Normal",
        category: "Physical",
        makesContact: true
    },
    "Focus Punch": {
        bp: 100,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        secondaries: true
    },
    "Follow Me": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Recharge: {
        bp: 0,
        type: "Electric",
        category: "Status"
    },
    Taunt: {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Helping Hand": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Trick: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Role Play": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Wish: {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    Ingrain: {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    Superpower: {
        bp: 140,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    Recycle: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Brick Break": {
        bp: 85,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Yawn: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Knock Off": {
        bp: 55,
        type: "Dark",
        category: "Physical",
        makesContact: true
    },
    Endeavor: {
        bp: 1,
        type: "Normal",
        category: "Physical",
        makesContact: true
    },
    Eruption: {
        bp: 150,
        type: "Fire",
        category: "Special",
        target: "allAdjacentFoes",
        isPulse: true
    },
    "Skill Swap": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Imprison: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Dive: {
        bp: 75,
        type: "Water",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Smelling Salts": {
        bp: 80,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Power Glow": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Luster Purge": {
        bp: 95,
        type: "Psychic",
        category: "Special",
        secondaries: true
    },
    "Mist Ball": {
        bp: 70,
        type: "Flying",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Feather Dance": {
        bp: 0,
        type: "Flying",
        category: "Status"
    },
    "Teeter Dance": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Blaze Kick": {
        bp: 95,
        type: "Fire",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Slack Off": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Hyper Voice": {
        bp: 95,
        type: "Normal",
        category: "Special",
        target: "allAdjacentFoes",
        isSound: true,
        secondaries: true
    },
    "Poison Fang": {
        bp: 75,
        type: "Poison",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Jagged Edge": {
        bp: 80,
        type: "Rock",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Blast Burn": {
        bp: 140,
        type: "Fire",
        category: "Special",
        dropsSelf: true,
        isPulse: true,
        isBullet: true
    },
    "Hydro Cannon": {
        bp: 140,
        type: "Water",
        category: "Special",
        dropsSelf: true,
        isPulse: true,
        isBullet: true
    },
    "Meteor Mash": {
        bp: 90,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Spook: {
        bp: 45,
        type: "Ghost",
        category: "Special",
        makesContact: true
    },
    "Weather Ball": {
        bp: 50,
        type: "Normal",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Fake Tears": {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Air Cutter": {
        bp: 60,
        type: "Flying",
        category: "Special",
        target: "allAdjacentFoes",
        isSlicing: true,
        isWind: true,
        secondaries: true
    },
    Overheat: {
        bp: 120,
        type: "Fire",
        category: "Special",
        recoil: [33, 100],
        secondaries: true
    },
    "Rock Tomb": {
        bp: 60,
        type: "Rock",
        category: "Physical",
        secondaries: true
    },
    "Metal Sound": {
        bp: 0,
        type: "Steel",
        category: "Status",
        isSound: true
    },
    Tickle: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Cosmic Power": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Water Spout": {
        bp: 150,
        type: "Water",
        category: "Special",
        target: "allAdjacentFoes",
        isPulse: true
    },
    "Shadow Punch": {
        bp: 80,
        type: "Ghost",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Extrasensory: {
        bp: 75,
        type: "Psychic",
        category: "Special",
        secondaries: true
    },
    "Sand Tomb": {
        bp: 60,
        type: "Ground",
        category: "Special",
        secondaries: true
    },
    Absofusion: {
        bp: 100,
        type: "Ice",
        category: "Special",
        drain: [50, 100]
    },
    "Mud Shower": {
        bp: 80,
        type: "Ground",
        category: "Special",
        target: "allAdjacentFoes",
        secondaries: true
    },
    "Bullet Seed": {
        bp: 25,
        type: "Grass",
        category: "Physical",
        multihit: [2, 5],
        isPulse: true,
        isBullet: true
    },
    "Aerial Ace": {
        bp: 45,
        type: "Flying",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Icicle Spear": {
        bp: 25,
        type: "Ice",
        category: "Physical",
        multihit: [2, 5],
        isPulse: true
    },
    "Iron Defense": {
        bp: 0,
        type: "Steel",
        category: "Status"
    },
    Block: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Howl: {
        bp: 0,
        type: "Normal",
        category: "Status",
        isSound: true
    },
    "Dragon Claw": {
        bp: 80,
        type: "Dragon",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Frenzy Plant": {
        bp: 140,
        type: "Grass",
        category: "Physical",
        dropsSelf: true
    },
    "Bulk Up": {
        bp: 0,
        type: "Fighting",
        category: "Status"
    },
    Bounce: {
        bp: 90,
        type: "Flying",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Mud Shot": {
        bp: 45,
        type: "Ground",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Poison Tail": {
        bp: 95,
        type: "Poison",
        category: "Physical",
        makesContact: true,
        isSlicing: true,
        secondaries: true
    },
    Hoodwink: {
        bp: 80,
        type: "Fairy",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Volt Tackle": {
        bp: 120,
        type: "Electric",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    "Leaf Flurry": {
        bp: 45,
        type: "Grass",
        category: "Special",
        isWind: true
    },
    "Calm Mind": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Leaf Blade": {
        bp: 80,
        type: "Grass",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Dragon Dance": {
        bp: 0,
        type: "Dragon",
        category: "Status"
    },
    "Rock Blast": {
        bp: 25,
        type: "Rock",
        category: "Physical",
        multihit: [2, 5],
        isPulse: true,
        isBullet: true
    },
    "Shock Wave": {
        bp: 45,
        type: "Electric",
        category: "Special"
    },
    "Water Pulse": {
        bp: 75,
        type: "Water",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    "Doom Desire": {
        bp: 100,
        type: "Dark",
        category: "Special",
        willCrit: true
    },
    "Psycho Boost": {
        bp: 140,
        type: "Psychic",
        category: "Special",
        dropsSelf: true
    },
    Roost: {
        bp: 0,
        type: "Flying",
        category: "Status"
    },
    Gravity: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Hammer Arm": {
        bp: 120,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    "Gyro Ball": {
        bp: 1,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        dropsSelf: true,
        isBullet: true
    },
    "Healing Wish": {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    Brine: {
        bp: 70,
        type: "Water",
        category: "Special"
    },
    "Think Fast": {
        bp: 45,
        type: "Psychic",
        category: "Physical"
    },
    Pluck: {
        bp: 60,
        type: "Flying",
        category: "Physical",
        makesContact: true
    },
    Tailwind: {
        bp: 0,
        type: "Flying",
        category: "Status",
        isWind: true
    },
    Acupressure: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Metal Burst": {
        bp: 1,
        type: "Steel",
        category: "Physical"
    },
    "U-Turn": {
        bp: 75,
        type: "Bug",
        category: "Physical",
        makesContact: true
    },
    "Close Combat": {
        bp: 120,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    Payback: {
        bp: 60,
        type: "Dark",
        category: "Physical",
        makesContact: true
    },
    Assurance: {
        bp: 75,
        type: "Dark",
        category: "Physical",
        makesContact: true
    },
    Fling: {
        bp: 1,
        type: "Normal",
        category: "Physical",
        secondaries: true
    },
    "Power Trick": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Acid Reflux": {
        bp: 0,
        type: "Poison",
        category: "Status",
        target: "allAdjacentFoes"
    },
    Copycat: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Power Swap": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Guard Swap": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Last Resort": {
        bp: 120,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        willCrit: true
    },
    "Worry Seed": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Sucker Punch": {
        bp: 70,
        type: "Dark",
        category: "Physical",
        makesContact: true
    },
    "Toxic Spikes": {
        bp: 0,
        type: "Poison",
        category: "Status"
    },
    "Heart Swap": {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    Rehydrate: {
        bp: 0,
        type: "Water",
        category: "Status"
    },
    "Magnet Rise": {
        bp: 0,
        type: "Electric",
        category: "Status"
    },
    "Flare Blitz": {
        bp: 120,
        type: "Fire",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    "Force Waves": {
        bp: 35,
        type: "Fighting",
        category: "Special",
        multihit: 2,
        makesContact: true,
        isPulse: true,
        secondaries: true
    },
    "Aura Sphere": {
        bp: 90,
        type: "Fighting",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Rock Polish": {
        bp: 0,
        type: "Rock",
        category: "Status"
    },
    "Poison Jab": {
        bp: 85,
        type: "Poison",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Dark Pulse": {
        bp: 90,
        type: "Dark",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    "Night Slash": {
        bp: 80,
        type: "Dark",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Aqua Tail": {
        bp: 100,
        type: "Water",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Seed Bomb": {
        bp: 90,
        type: "Grass",
        category: "Physical",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Air Slash": {
        bp: 80,
        type: "Flying",
        category: "Special",
        isSlicing: true,
        isWind: true,
        secondaries: true
    },
    "X Scissor": {
        bp: 80,
        type: "Bug",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Bug Buzz": {
        bp: 95,
        type: "Bug",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Dragon Pulse": {
        bp: 100,
        type: "Dragon",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    "Dragon Rush": {
        bp: 100,
        type: "Dragon",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Power Gem": {
        bp: 90,
        type: "Rock",
        category: "Special",
        secondaries: true
    },
    "Drain Punch": {
        bp: 75,
        type: "Fighting",
        category: "Physical",
        drain: [50, 100],
        makesContact: true
    },
    "Vacuum Wave": {
        bp: 45,
        type: "Fighting",
        category: "Special",
        isPulse: true
    },
    "Focus Blast": {
        bp: 130,
        type: "Fighting",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Energy Ball": {
        bp: 95,
        type: "Grass",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Brave Bird": {
        bp: 120,
        type: "Flying",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    "Earth Power": {
        bp: 100,
        type: "Ground",
        category: "Special",
        secondaries: true
    },
    Switcheroo: {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Giga Impact": {
        bp: 150,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    "Nasty Plot": {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Bullet Punch": {
        bp: 45,
        type: "Steel",
        category: "Physical",
        makesContact: true
    },
    Avalanche: {
        bp: 70,
        type: "Ice",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Ice Shard": {
        bp: 45,
        type: "Ice",
        category: "Physical"
    },
    "Shadow Claw": {
        bp: 80,
        type: "Ghost",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Thunder Fang": {
        bp: 75,
        type: "Electric",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Ice Fang": {
        bp: 75,
        type: "Ice",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Fire Fang": {
        bp: 75,
        type: "Fire",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Shadow Sneak": {
        bp: 45,
        type: "Ghost",
        category: "Physical",
        makesContact: true
    },
    "Psycho Cut": {
        bp: 80,
        type: "Psychic",
        category: "Physical",
        isSlicing: true
    },
    "Zen Headbutt": {
        bp: 95,
        type: "Psychic",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Flash Cannon": {
        bp: 90,
        type: "Steel",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    Defog: {
        bp: 0,
        type: "Flying",
        category: "Status"
    },
    "Trick Room": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Draco Meteor": {
        bp: 140,
        type: "Dragon",
        category: "Special",
        dropsSelf: true
    },
    "Plasma Pulse": {
        bp: 60,
        type: "Electric",
        category: "Special",
        target: "allAdjacent",
        isPulse: true,
        secondaries: true
    },
    "Lava Plume": {
        bp: 80,
        type: "Fire",
        category: "Special",
        target: "allAdjacent",
        secondaries: true
    },
    "Leaf Storm": {
        bp: 140,
        type: "Grass",
        category: "Special",
        dropsSelf: true,
        isWind: true
    },
    "Power Whip": {
        bp: 120,
        type: "Grass",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Rock Wrecker": {
        bp: 140,
        type: "Rock",
        category: "Physical",
        dropsSelf: true,
        isPulse: true,
        isBullet: true
    },
    "Cross Poison": {
        bp: 80,
        type: "Poison",
        category: "Physical",
        makesContact: true,
        isSlicing: true,
        secondaries: true
    },
    "Gunk Shot": {
        bp: 120,
        type: "Poison",
        category: "Physical",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Iron Head": {
        bp: 85,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Stone Edge": {
        bp: 80,
        type: "Rock",
        category: "Physical",
        willCrit: true
    },
    "Stealth Rock": {
        bp: 0,
        type: "Rock",
        category: "Status"
    },
    "Grass Knot": {
        bp: 1,
        type: "Grass",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Ancient Force": {
        bp: 125,
        type: "Normal",
        category: "Special"
    },
    "Bug Biting": {
        bp: 35,
        type: "Bug",
        category: "Physical",
        multihit: 2,
        makesContact: true,
        secondaries: true
    },
    "Charge Beam": {
        bp: 50,
        type: "Electric",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Wood Hammer": {
        bp: 120,
        type: "Grass",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    "Aqua Jet": {
        bp: 45,
        type: "Water",
        category: "Physical",
        makesContact: true
    },
    "Queen's Command": {
        bp: 80,
        type: "Bug",
        category: "Special",
        drain: [50, 100],
        willCrit: true
    },
    "Defend Order": {
        bp: 0,
        type: "Bug",
        category: "Status"
    },
    "Head Smash": {
        bp: 140,
        type: "Rock",
        category: "Physical",
        recoil: [50, 100],
        makesContact: true,
        dropsSelf: true
    },
    "Double Hit": {
        bp: 35,
        type: "Normal",
        category: "Physical",
        multihit: 2,
        makesContact: true,
        secondaries: true
    },
    "Drakonic Beam": {
        bp: 120,
        type: "Dragon",
        category: "Special",
        recoil: [33, 100],
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Subspace Tear": {
        bp: 80,
        type: "Psychic",
        category: "Special",
        willCrit: true
    },
    "Lunar Dance": {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    "Crush Grip": {
        bp: 1,
        type: "Ground",
        category: "Physical",
        drain: [50, 100],
        makesContact: true
    },
    "Land's Wrath": {
        bp: 80,
        type: "Ground",
        category: "Special",
        secondaries: true
    },
    "Dark Void": {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Seed Flare": {
        bp: 120,
        type: "Grass",
        category: "Special",
        recoil: [33, 100],
        isPulse: true,
        secondaries: true
    },
    "Shadow Force": {
        bp: 140,
        type: "Ghost",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    "Hone Claws": {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Wide Guard": {
        bp: 0,
        type: "Rock",
        category: "Status"
    },
    "Guard Split": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Power Split": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Wonder Room": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Psyshock: {
        bp: 90,
        type: "Psychic",
        category: "Special"
    },
    Venoshock: {
        bp: 70,
        type: "Poison",
        category: "Special"
    },
    "Rage Powder": {
        bp: 0,
        type: "Bug",
        category: "Status"
    },
    "Magic Room": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Smack Down": {
        bp: 75,
        type: "Rock",
        category: "Physical",
        secondaries: true
    },
    "Sludge Wave": {
        bp: 120,
        type: "Poison",
        category: "Special",
        target: "allAdjacent",
        secondaries: true
    },
    "Quiver Dance": {
        bp: 0,
        type: "Bug",
        category: "Status"
    },
    "Heavy Slam": {
        bp: 1,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Electro Ball": {
        bp: 1,
        type: "Electric",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    Soak: {
        bp: 0,
        type: "Water",
        category: "Status"
    },
    "Pyro Dash": {
        bp: 45,
        type: "Fire",
        category: "Physical",
        makesContact: true
    },
    Coil: {
        bp: 0,
        type: "Poison",
        category: "Status"
    },
    "Low Sweep": {
        bp: 60,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Sludge Shot": {
        bp: 45,
        type: "Poison",
        category: "Special",
        isPulse: true,
        isBullet: true
    },
    "Foul Play": {
        bp: 95,
        type: "Dark",
        category: "Physical",
        makesContact: true
    },
    "Simple Beam": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Entrainment: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "After You": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Harmonize: {
        bp: 60,
        type: "Normal",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Echoed Voice": {
        bp: 60,
        type: "Normal",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Clear Smog": {
        bp: 55,
        type: "Poison",
        category: "Special"
    },
    "Stored Power": {
        bp: 60,
        type: "Psychic",
        category: "Special",
        secondaries: true
    },
    "Quick Guard": {
        bp: 0,
        type: "Fighting",
        category: "Status"
    },
    "Ally Switch": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Scald: {
        bp: 60,
        type: "Water",
        category: "Special",
        secondaries: true
    },
    "Shell Smash": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Heal Pulse": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    Hex: {
        bp: 70,
        type: "Ghost",
        category: "Special"
    },
    "Shift Gear": {
        bp: 0,
        type: "Steel",
        category: "Status"
    },
    "Circle Throw": {
        bp: 95,
        type: "Fighting",
        category: "Physical",
        makesContact: true
    },
    "Bursting Flames": {
        bp: 25,
        type: "Fire",
        category: "Special",
        target: "allAdjacentFoes",
        multihit: 3,
        isPulse: true
    },
    Quash: {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    Acrobatics: {
        bp: 55,
        type: "Flying",
        category: "Physical",
        makesContact: true
    },
    "Reflect Type": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Retaliate: {
        bp: 100,
        type: "Normal",
        category: "Physical",
        makesContact: true
    },
    "Final Gambit": {
        bp: 1,
        type: "Fighting",
        category: "Special"
    },
    Inferno: {
        bp: 130,
        type: "Fire",
        category: "Special",
        secondaries: true
    },
    "Water Pledge": {
        bp: 80,
        type: "Water",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Fire Pledge": {
        bp: 80,
        type: "Fire",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Grass Pledge": {
        bp: 80,
        type: "Grass",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Volt Switch": {
        bp: 75,
        type: "Electric",
        category: "Special"
    },
    "Struggle Bug": {
        bp: 60,
        type: "Bug",
        category: "Special",
        target: "allAdjacentFoes",
        secondaries: true
    },
    Bulldoze: {
        bp: 60,
        type: "Ground",
        category: "Physical",
        target: "allAdjacent",
        secondaries: true
    },
    "Frost Breath": {
        bp: 60,
        type: "Ice",
        category: "Special",
        willCrit: true
    },
    "Dragon Tail": {
        bp: 95,
        type: "Dragon",
        category: "Physical",
        makesContact: true
    },
    "Work Up": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Electroweb: {
        bp: 60,
        type: "Electric",
        category: "Special",
        target: "allAdjacentFoes",
        secondaries: true
    },
    "Wild Charge": {
        bp: 100,
        type: "Electric",
        category: "Physical",
        recoil: [20, 100],
        makesContact: true,
        secondaries: true
    },
    "Drill Run": {
        bp: 80,
        type: "Ground",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Horn Leech": {
        bp: 90,
        type: "Grass",
        category: "Physical",
        drain: [50, 100],
        makesContact: true,
        isSlicing: true
    },
    "Sacred Slash": {
        bp: 60,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    "Razor Shell": {
        bp: 60,
        type: "Water",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true,
        secondaries: true
    },
    "Heat Crash": {
        bp: 1,
        type: "Fire",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Cotton Guard": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Night Daze": {
        bp: 80,
        type: "Dark",
        category: "Special",
        willCrit: true
    },
    Psystrike: {
        bp: 130,
        type: "Psychic",
        category: "Special",
        isPulse: true,
        isBullet: true
    },
    "Tail Slap": {
        bp: 25,
        type: "Normal",
        category: "Physical",
        multihit: [2, 5],
        makesContact: true
    },
    Hurricane: {
        bp: 125,
        type: "Flying",
        category: "Special",
        isWind: true,
        secondaries: true
    },
    Serenade: {
        bp: 75,
        type: "Normal",
        category: "Special",
        target: "allAdjacentFoes",
        isSound: true,
        secondaries: true
    },
    "Radiant Edge": {
        bp: 80,
        type: "Fairy",
        category: "Special",
        willCrit: true,
        isSlicing: true
    },
    "Absolute Zero": {
        bp: 80,
        type: "Ice",
        category: "Special",
        target: "allAdjacentFoes",
        isWind: true
    },
    "Electro Assault": {
        bp: 140,
        type: "Electric",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    "Dragon's Fury": {
        bp: 130,
        type: "Dragon",
        category: "Special",
        secondaries: true
    },
    "Fiery Dance": {
        bp: 90,
        type: "Fire",
        category: "Special",
        secondaries: true
    },
    "Cryo-Overload": {
        bp: 150,
        type: "Ice",
        category: "Special",
        drain: [100, 100],
        willCrit: true,
        secondaries: true
    },
    "Ice Burn": {
        bp: 150,
        type: "Ice",
        category: "Special",
        secondaries: true
    },
    "Dismal Cry": {
        bp: 60,
        type: "Dark",
        category: "Special",
        target: "allAdjacentFoes",
        isSound: true,
        secondaries: true
    },
    "Icicle Crash": {
        bp: 95,
        type: "Ice",
        category: "Physical",
        secondaries: true
    },
    "Blazing Assault": {
        bp: 140,
        type: "Fire",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    Wildfire: {
        bp: 80,
        type: "Fire",
        category: "Special",
        willCrit: true
    },
    "High Voltage": {
        bp: 80,
        type: "Electric",
        category: "Physical",
        willCrit: true
    },
    "Flying Press": {
        bp: 140,
        type: "Fighting",
        category: "Physical",
        recoil: [50, 100],
        makesContact: true
    },
    Belch: {
        bp: 100,
        type: "Poison",
        category: "Special",
        secondaries: true
    },
    "Sticky Web": {
        bp: 0,
        type: "Bug",
        category: "Status"
    },
    "Finishing Blow": {
        bp: 30,
        type: "Bug",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    "Phantom Force": {
        bp: 120,
        type: "Ghost",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true
    },
    "Battle Cry": {
        bp: 0,
        type: "Fighting",
        category: "Status",
        isSound: true
    },
    "Parabolic Charge": {
        bp: 60,
        type: "Electric",
        category: "Special",
        target: "allAdjacent",
        drain: [75, 100]
    },
    "Forests Curse": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Petal Blizzard": {
        bp: 90,
        type: "Grass",
        category: "Special",
        target: "allAdjacent",
        isWind: true,
        secondaries: true
    },
    "Freeze Dry": {
        bp: 85,
        type: "Ice",
        category: "Special",
        secondaries: true
    },
    "Disarming Voice": {
        bp: 60,
        type: "Fairy",
        category: "Special",
        target: "allAdjacentFoes",
        isSound: true,
        secondaries: true
    },
    "Parting Shot": {
        bp: 0,
        type: "Dark",
        category: "Status",
        isSound: true
    },
    "Topsy Turvy": {
        bp: 0,
        type: "Dark",
        category: "Status"
    },
    "Draining Kiss": {
        bp: 50,
        type: "Fairy",
        category: "Special",
        drain: [75, 100],
        makesContact: true
    },
    "Grassy Terrain": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Misty Terrain": {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    "Play Rough": {
        bp: 100,
        type: "Fairy",
        category: "Physical",
        recoil: [20, 100],
        makesContact: true,
        secondaries: true
    },
    "Pixie Dust": {
        bp: 45,
        type: "Fairy",
        category: "Special",
        isWind: true
    },
    Moonblast: {
        bp: 95,
        type: "Fairy",
        category: "Special",
        secondaries: true
    },
    Boomburst: {
        bp: 120,
        type: "Normal",
        category: "Special",
        target: "allAdjacent",
        isPulse: true,
        isSound: true
    },
    "Fairy Lock": {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    "Play Nice": {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    Confide: {
        bp: 0,
        type: "Dark",
        category: "Status",
        isSound: true
    },
    "Diamond Storm": {
        bp: 140,
        type: "Rock",
        category: "Special",
        target: "allAdjacentFoes",
        recoil: [50, 100]
    },
    "Steam Shot": {
        bp: 60,
        type: "Water",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Psycho Break": {
        bp: 120,
        type: "Psychic",
        category: "Physical",
        dropsSelf: true
    },
    "Water Shuriken": {
        bp: 15,
        type: "Water",
        category: "Special",
        multihit: [2, 5]
    },
    "Mystical Fire": {
        bp: 70,
        type: "Fire",
        category: "Special",
        secondaries: true
    },
    "Spiky Shield": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Aromatic Mist": {
        bp: 0,
        type: "Fairy",
        category: "Status",
        target: "allAdjacentFoes"
    },
    "Strange Impulse": {
        bp: 0,
        type: "Electric",
        category: "Status"
    },
    "Magnetic Flux": {
        bp: 0,
        type: "Electric",
        category: "Status"
    },
    Jackpot: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Electric Terrain": {
        bp: 0,
        type: "Electric",
        category: "Status"
    },
    "Dazzling Gleam": {
        bp: 85,
        type: "Fairy",
        category: "Special",
        target: "allAdjacentFoes",
        secondaries: true
    },
    Celebrate: {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    Befriend: {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    "Baby Doll Eyes": {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    Nuzzle: {
        bp: 0,
        type: "Electric",
        category: "Status",
        makesContact: true
    },
    "Hold Back": {
        bp: 40,
        type: "Fairy",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Infestation: {
        bp: 50,
        type: "Bug",
        category: "Special",
        makesContact: true,
        secondaries: true
    },
    "Torrential Pulse": {
        bp: 80,
        type: "Water",
        category: "Special",
        target: "allAdjacentFoes",
        willCrit: true,
        isPulse: true
    },
    "Precipice Blades": {
        bp: 80,
        type: "Ground",
        category: "Physical",
        target: "allAdjacentFoes",
        secondaries: true
    },
    "Dragon Ascent": {
        bp: 140,
        type: "Dragon",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    "Hyperspace Fury": {
        bp: 120,
        type: "Dark",
        category: "Physical",
        dropsSelf: true
    },
    Sedimend: {
        bp: 0,
        type: "Ground",
        category: "Status"
    },
    "First Impression": {
        bp: 60,
        type: "Bug",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    "Baneful Bunker": {
        bp: 0,
        type: "Poison",
        category: "Status"
    },
    "Spirit Shackle": {
        bp: 50,
        type: "Ghost",
        category: "Physical",
        willCrit: true,
        secondaries: true
    },
    "Brutal Swing": {
        bp: 120,
        type: "Dark",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true
    },
    "Bubble Burst": {
        bp: 90,
        type: "Water",
        category: "Special",
        target: "allAdjacent",
        isPulse: true,
        secondaries: true
    },
    "Ice Hammer": {
        bp: 120,
        type: "Ice",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    "Floral Healing": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "High Horsepower": {
        bp: 55,
        type: "Ground",
        category: "Physical",
        multihit: 2,
        makesContact: true,
        secondaries: true
    },
    "Strength Sap": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Solar Blade": {
        bp: 90,
        type: "Grass",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    "Seed Shot": {
        bp: 45,
        type: "Grass",
        category: "Physical",
        isPulse: true,
        isBullet: true
    },
    "Toxic Thread": {
        bp: 0,
        type: "Poison",
        category: "Status"
    },
    "Throat Chop": {
        bp: 80,
        type: "Dark",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Pollen Puff": {
        bp: 90,
        type: "Bug",
        category: "Special",
        isPulse: true,
        isBullet: true
    },
    "Psychic Terrain": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Bug Bomber": {
        bp: 25,
        type: "Bug",
        category: "Special",
        multihit: 3,
        willCrit: true,
        isPulse: true,
        isBullet: true
    },
    "Fire Lash": {
        bp: 50,
        type: "Fire",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        secondaries: true
    },
    "Power Trip": {
        bp: 60,
        type: "Dark",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Burn Up": {
        bp: 130,
        type: "Fire",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    "Speed Swap": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Smart Strike": {
        bp: 50,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true,
        secondaries: true
    },
    "Revelation Dance": {
        bp: 90,
        type: "Normal",
        category: "Special",
        secondaries: true
    },
    "Trop Kick": {
        bp: 90,
        type: "Grass",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Instruct: {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Beak Blast": {
        bp: 100,
        type: "Flying",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Drakonic Voice": {
        bp: 120,
        type: "Dragon",
        category: "Special",
        target: "allAdjacentFoes",
        isSound: true
    },
    "Dragon Hammer": {
        bp: 120,
        type: "Dragon",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    "Night Burst": {
        bp: 45,
        type: "Dark",
        category: "Special",
        target: "allAdjacent",
        makesContact: true
    },
    "Aurora Veil": {
        bp: 0,
        type: "Ice",
        category: "Status"
    },
    "Eternal Beam": {
        bp: 120,
        type: "Fairy",
        category: "Special",
        recoil: [33, 100],
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Psychic Fangs": {
        bp: 85,
        type: "Psychic",
        category: "Physical",
        drain: [100, 100],
        makesContact: true
    },
    "Stomping Tantrum": {
        bp: 80,
        type: "Ground",
        category: "Physical"
    },
    Accelerock: {
        bp: 45,
        type: "Rock",
        category: "Physical",
        makesContact: true
    },
    Liquidation: {
        bp: 85,
        type: "Water",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Radiant Outburst": {
        bp: 140,
        type: "Fairy",
        category: "Special",
        dropsSelf: true
    },
    "Meteor Impact": {
        bp: 150,
        type: "Fairy",
        category: "Physical",
        recoil: [50, 100],
        makesContact: true,
        willCrit: true,
        dropsSelf: true,
        secondaries: true
    },
    "Spectral Beam": {
        bp: 140,
        type: "Ghost",
        category: "Special",
        dropsSelf: true,
        isPulse: true,
        isBullet: true
    },
    "Tearful Look": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Zing Zap": {
        bp: 90,
        type: "Electric",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Photon Geyser": {
        bp: 65,
        type: "Psychic",
        category: "Special",
        drain: [50, 100],
        willCrit: true
    },
    "Dynamax Cannon": {
        bp: 100,
        type: "Dragon",
        category: "Special",
        drain: [50, 100],
        secondaries: true
    },
    "Snipe Shot": {
        bp: 50,
        type: "Water",
        category: "Special",
        willCrit: true,
        isPulse: true,
        isBullet: true
    },
    "Jaw Lock": {
        bp: 85,
        type: "Rock",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Engorge: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "No Retreat": {
        bp: 0,
        type: "Fighting",
        category: "Status"
    },
    "Tar Shot": {
        bp: 10,
        type: "Rock",
        category: "Special",
        secondaries: true
    },
    "Magic Powder": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Draco Jet": {
        bp: 35,
        type: "Dragon",
        category: "Physical",
        multihit: 2,
        willCrit: true,
        isPulse: true
    },
    Teatime: {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    "Court Change": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Clangorous Soul": {
        bp: 0,
        type: "Dragon",
        category: "Status",
        isSound: true
    },
    "Body Press": {
        bp: 80,
        type: "Fighting",
        category: "Physical",
        makesContact: true
    },
    Decorate: {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    "Drum Beating": {
        bp: 90,
        type: "Grass",
        category: "Physical",
        secondaries: true
    },
    "Pyro Ball": {
        bp: 50,
        type: "Fire",
        category: "Special",
        willCrit: true,
        isPulse: true,
        isBullet: true
    },
    "Brutal Blade": {
        bp: 80,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    "Brutal Bash": {
        bp: 80,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        willCrit: true
    },
    "Aura Wheel": {
        bp: 120,
        type: "Electric",
        category: "Physical",
        secondaries: true
    },
    "Breaking Swipe": {
        bp: 70,
        type: "Dragon",
        category: "Physical",
        target: "allAdjacentFoes",
        makesContact: true,
        secondaries: true
    },
    "Branch Leech": {
        bp: 60,
        type: "Grass",
        category: "Physical",
        drain: [100, 100],
        makesContact: true
    },
    Overdrive: {
        bp: 75,
        type: "Electric",
        category: "Special",
        target: "allAdjacentFoes",
        isSound: true,
        secondaries: true
    },
    "Caustic Acid": {
        bp: 60,
        type: "Poison",
        category: "Special",
        secondaries: true
    },
    "Grav Apple": {
        bp: 80,
        type: "Grass",
        category: "Physical",
        secondaries: true
    },
    "Soul Crush": {
        bp: 80,
        type: "Fairy",
        category: "Physical",
        makesContact: true,
        willCrit: true
    },
    "Strange Steam": {
        bp: 90,
        type: "Fairy",
        category: "Special",
        secondaries: true
    },
    "Life Dew": {
        bp: 0,
        type: "Water",
        category: "Status"
    },
    "Hell Thrust": {
        bp: 100,
        type: "Dark",
        category: "Physical",
        recoil: [20, 100],
        makesContact: true,
        secondaries: true
    },
    "Steel Beam": {
        bp: 90,
        type: "Steel",
        category: "Special",
        willCrit: true,
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Expanding Force": {
        bp: 80,
        type: "Psychic",
        category: "Special"
    },
    "Steel Roller": {
        bp: 130,
        type: "Steel",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Scale Shot": {
        bp: 15,
        type: "Dragon",
        category: "Physical",
        multihit: [2, 5],
        isPulse: true,
        isBullet: true
    },
    "Meteor Beam": {
        bp: 80,
        type: "Rock",
        category: "Special",
        willCrit: true,
        isPulse: true,
        isBullet: true
    },
    "Shell Side Arm": {
        bp: 100,
        type: "Poison",
        category: "Special",
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Misty Explosion": {
        bp: 250,
        type: "Fairy",
        category: "Special",
        target: "allAdjacent",
        willCrit: true,
        isPulse: true,
        isBullet: true
    },
    "Grassy Glide": {
        bp: 70,
        type: "Grass",
        category: "Physical",
        makesContact: true
    },
    "Rising Voltage": {
        bp: 60,
        type: "Electric",
        category: "Special"
    },
    "Terrain Pulse": {
        bp: 50,
        type: "Normal",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    "Creeping Strike": {
        bp: 45,
        type: "Bug",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Burning Jealousy": {
        bp: 85,
        type: "Fire",
        category: "Special",
        target: "allAdjacentFoes",
        secondaries: true
    },
    "Lash Out": {
        bp: 50,
        type: "Dark",
        category: "Physical",
        makesContact: true,
        willCrit: true
    },
    Poltergeist: {
        bp: 100,
        type: "Ghost",
        category: "Physical"
    },
    "Noxious Gas": {
        bp: 0,
        type: "Poison",
        category: "Status",
        target: "allAdjacent"
    },
    "Time Out": {
        bp: 0,
        type: "Fighting",
        category: "Status",
        isSound: true
    },
    "Flip Turn": {
        bp: 60,
        type: "Water",
        category: "Physical",
        makesContact: true
    },
    "Triple Axel": {
        bp: 20,
        type: "Ice",
        category: "Physical",
        multihit: 3,
        makesContact: true
    },
    "Dual Wingbeat": {
        bp: 45,
        type: "Flying",
        category: "Physical",
        multihit: 2,
        makesContact: true,
        secondaries: true
    },
    "Scorching Sands": {
        bp: 75,
        type: "Ground",
        category: "Special",
        secondaries: true
    },
    "Jungle Healing": {
        bp: 0,
        type: "Grass",
        category: "Status"
    },
    "Wicked Blow": {
        bp: 80,
        type: "Dark",
        category: "Physical",
        makesContact: true,
        willCrit: true
    },
    "Surging Strikes": {
        bp: 25,
        type: "Water",
        category: "Physical",
        multihit: 3,
        makesContact: true,
        willCrit: true
    },
    "Thunder Cage": {
        bp: 95,
        type: "Electric",
        category: "Special",
        secondaries: true
    },
    "Dragon Energy": {
        bp: 150,
        type: "Dragon",
        category: "Special",
        target: "allAdjacentFoes",
        isPulse: true
    },
    "Freezing Glare": {
        bp: 60,
        type: "Psychic",
        category: "Special",
        willCrit: true,
        secondaries: true
    },
    "Fiery Wrath": {
        bp: 130,
        type: "Dark",
        category: "Special",
        target: "allAdjacentFoes",
        secondaries: true
    },
    "Thunderous Kick": {
        bp: 120,
        type: "Fighting",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    "Ice Breaker": {
        bp: 80,
        type: "Ice",
        category: "Physical",
        target: "allAdjacentFoes",
        willCrit: true,
        isSlicing: true
    },
    "Astral Storm": {
        bp: 80,
        type: "Ghost",
        category: "Special",
        target: "allAdjacentFoes",
        willCrit: true,
        isPulse: true
    },
    "Eerie Spell": {
        bp: 75,
        type: "Ghost",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Dire Claw": {
        bp: 60,
        type: "Poison",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true,
        secondaries: true
    },
    "Psyshield Bash": {
        bp: 100,
        type: "Psychic",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Power Shift": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Stone Axe": {
        bp: 60,
        type: "Rock",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    "Springtide Storm": {
        bp: 90,
        type: "Fairy",
        category: "Special",
        target: "allAdjacentFoes",
        drain: [50, 100],
        isWind: true,
        secondaries: true
    },
    "Mystical Power": {
        bp: 100,
        type: "Psychic",
        category: "Special",
        secondaries: true
    },
    "Raging Fury": {
        bp: 130,
        type: "Fire",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Wave Crash": {
        bp: 120,
        type: "Water",
        category: "Physical",
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    Chloroblast: {
        bp: 90,
        type: "Grass",
        category: "Special",
        recoil: [50, 100],
        willCrit: true,
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Mountain Gale": {
        bp: 90,
        type: "Ice",
        category: "Physical",
        secondaries: true
    },
    "Victory Dance": {
        bp: 0,
        type: "Fighting",
        category: "Status"
    },
    "Headlong Rush": {
        bp: 120,
        type: "Ground",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    "Barb Barrage": {
        bp: 70,
        type: "Poison",
        category: "Physical",
        isPulse: true,
        secondaries: true
    },
    "Esper Wing": {
        bp: 50,
        type: "Psychic",
        category: "Special",
        willCrit: true,
        secondaries: true
    },
    "Bitter Malice": {
        bp: 60,
        type: "Ghost",
        category: "Special",
        secondaries: true
    },
    Molt: {
        bp: 0,
        type: "Bug",
        category: "Status"
    },
    "Triple Arrows": {
        bp: 50,
        type: "Fighting",
        category: "Physical",
        willCrit: true,
        secondaries: true
    },
    "Infernal Parade": {
        bp: 70,
        type: "Ghost",
        category: "Special",
        secondaries: true
    },
    "Ceaseless Edge": {
        bp: 60,
        type: "Dark",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    "Bleakwind Storm": {
        bp: 90,
        type: "Flying",
        category: "Special",
        target: "allAdjacentFoes",
        isWind: true,
        secondaries: true
    },
    "Wildbolt Storm": {
        bp: 90,
        type: "Electric",
        category: "Special",
        target: "allAdjacentFoes",
        isWind: true,
        secondaries: true
    },
    "Sandsear Storm": {
        bp: 90,
        type: "Ground",
        category: "Special",
        target: "allAdjacentFoes",
        isWind: true,
        secondaries: true
    },
    "Lunar Blessing": {
        bp: 0,
        type: "Fairy",
        category: "Status"
    },
    "Take Heart": {
        bp: 0,
        type: "Psychic",
        category: "Status"
    },
    "Tera Blast": {
        bp: 80,
        type: "Normal",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    "Silk Trap": {
        bp: 0,
        type: "Bug",
        category: "Status"
    },
    "High Jump Kick": {
        bp: 130,
        type: "Fighting",
        category: "Physical",
        makesContact: true
    },
    "Last Respects": {
        bp: 50,
        type: "Ghost",
        category: "Physical"
    },
    "Lumina Crash": {
        bp: 120,
        type: "Psychic",
        category: "Special",
        recoil: [33, 100],
        secondaries: true
    },
    "Order Up": {
        bp: 80,
        type: "Water",
        category: "Physical",
        drain: [50, 100],
        secondaries: true
    },
    "Jet Punch": {
        bp: 50,
        type: "Water",
        category: "Physical",
        makesContact: true,
        willCrit: true
    },
    "Spicy Extract": {
        bp: 10,
        type: "Grass",
        category: "Special",
        secondaries: true
    },
    "Spin Out": {
        bp: 100,
        type: "Steel",
        category: "Physical",
        recoil: [50, 100],
        makesContact: true,
        dropsSelf: true,
        secondaries: true
    },
    Befuddle: {
        bp: 45,
        type: "Fairy",
        category: "Physical",
        makesContact: true
    },
    "Ice Spinner": {
        bp: 60,
        type: "Ice",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Dragon' Blade": {
        bp: 80,
        type: "Dragon",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    Necromancy: {
        bp: 0,
        type: "Ghost",
        category: "Status"
    },
    "Salt Cure": {
        bp: 40,
        type: "Rock",
        category: "Physical",
        secondaries: true
    },
    "Triple Dive": {
        bp: 90,
        type: "Water",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Mortal Spin": {
        bp: 0,
        type: "Poison",
        category: "Status",
        makesContact: true,
        willCrit: true
    },
    Doodle: {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Fillet Away": {
        bp: 0,
        type: "Steel",
        category: "Status"
    },
    "False Surrender": {
        bp: 50,
        type: "Dark",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true,
        secondaries: true
    },
    "Flower Trick": {
        bp: 60,
        type: "Grass",
        category: "Physical",
        willCrit: true
    },
    "Torch Song": {
        bp: 80,
        type: "Fire",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Aqua Step": {
        bp: 80,
        type: "Water",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Raging Bull": {
        bp: 120,
        type: "Normal",
        category: "Physical",
        makesContact: true,
        dropsSelf: true
    },
    "Make It Rain": {
        bp: 120,
        type: "Steel",
        category: "Special",
        target: "allAdjacentFoes",
        dropsSelf: true
    },
    Psyblade: {
        bp: 60,
        type: "Psychic",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    "Hydro Steam": {
        bp: 110,
        type: "Water",
        category: "Special",
        isPulse: true,
        secondaries: true
    },
    Ruination: {
        bp: 1,
        type: "Dark",
        category: "Special",
        secondaries: true
    },
    "Collision Course": {
        bp: 100,
        type: "Fighting",
        category: "Physical",
        recoil: [50, 100],
        makesContact: true,
        dropsSelf: true,
        secondaries: true
    },
    "Electro Drift": {
        bp: 150,
        type: "Electric",
        category: "Physical",
        recoil: [50, 100],
        makesContact: true,
        dropsSelf: true,
        secondaries: true
    },
    "Shed Tail": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    "Chilly Reception": {
        bp: 0,
        type: "Ice",
        category: "Status",
        isSound: true
    },
    "Tidy Up": {
        bp: 0,
        type: "Normal",
        category: "Status"
    },
    Snowscape: {
        bp: 0,
        type: "Ice",
        category: "Status"
    },
    Lunge: {
        bp: 90,
        type: "Bug",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    Trailblaze: {
        bp: 50,
        type: "Grass",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Chilling Water": {
        bp: 50,
        type: "Water",
        category: "Special",
        secondaries: true
    },
    "Hyper Drill": {
        bp: 80,
        type: "Ground",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    Influx: {
        bp: 45,
        type: "Psychic",
        category: "Special",
        isPulse: true
    },
    "Rage Fist": {
        bp: 50,
        type: "Ghost",
        category: "Physical",
        makesContact: true
    },
    "Armor Cannon": {
        bp: 120,
        type: "Fire",
        category: "Special",
        isPulse: true,
        isBullet: true
    },
    "Bitter Blade": {
        bp: 60,
        type: "Fire",
        category: "Physical",
        drain: [50, 100],
        makesContact: true,
        willCrit: true,
        isSlicing: true
    },
    "Short Circuit": {
        bp: 130,
        type: "Electric",
        category: "Special",
        makesContact: true,
        secondaries: true
    },
    "Gigaton Hammer": {
        bp: 160,
        type: "Steel",
        category: "Physical"
    },
    Comeuppance: {
        bp: 1,
        type: "Dark",
        category: "Physical",
        makesContact: true
    },
    "Aqua Cutter": {
        bp: 80,
        type: "Water",
        category: "Physical",
        makesContact: true,
        isSlicing: true
    },
    "Blazing Torque": {
        bp: 85,
        type: "Fire",
        category: "Physical",
        secondaries: true
    },
    "Wicked Torque": {
        bp: 85,
        type: "Dark",
        category: "Physical",
        secondaries: true
    },
    "Noxious Torque": {
        bp: 85,
        type: "Poison",
        category: "Physical",
        willCrit: true,
        secondaries: true
    },
    "Combat Torque": {
        bp: 100,
        type: "Fighting",
        category: "Physical",
        secondaries: true
    },
    "Magical Torque": {
        bp: 100,
        type: "Fairy",
        category: "Physical",
        secondaries: true
    },
    "Twilight Cannon": {
        bp: 140,
        type: "Dark",
        category: "Special",
        dropsSelf: true,
        isPulse: true,
        isBullet: true
    },
    "Matcha Gotcha": {
        bp: 80,
        type: "Grass",
        category: "Special",
        target: "allAdjacentFoes",
        drain: [50, 100],
        secondaries: true
    },
    "Syrup Bomb": {
        bp: 65,
        type: "Grass",
        category: "Special",
        willCrit: true,
        isPulse: true,
        isBullet: true,
        secondaries: true
    },
    "Ivy Cudgel": {
        bp: 65,
        type: "Grass",
        category: "Physical",
        willCrit: true
    },
    "Electro Shot": {
        bp: 80,
        type: "Electric",
        category: "Special",
        willCrit: true,
        isPulse: true,
        isBullet: true
    },
    "Mineral Shower": {
        bp: 140,
        type: "Rock",
        category: "Special",
        dropsSelf: true
    },
    "Fickle Beam": {
        bp: 80,
        type: "Dragon",
        category: "Special",
        willCrit: true,
        isPulse: true,
        isBullet: true
    },
    "Burning Bulwark": {
        bp: 0,
        type: "Fire",
        category: "Status"
    },
    Thunderclap: {
        bp: 50,
        type: "Electric",
        category: "Special",
        willCrit: true,
        isSound: true
    },
    "Mighty Cleave": {
        bp: 65,
        type: "Rock",
        category: "Physical",
        makesContact: true,
        willCrit: true,
        isSlicing: true,
        secondaries: true
    },
    "Mirror Cutter": {
        bp: 30,
        type: "Steel",
        category: "Special",
        multihit: 2,
        willCrit: true,
        isSlicing: true
    },
    "Hard Press": {
        bp: 1,
        type: "Steel",
        category: "Physical",
        makesContact: true
    },
    "Dragon Cheer": {
        bp: 0,
        type: "Dragon",
        category: "Status"
    },
    "Alluring Voice": {
        bp: 80,
        type: "Fairy",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Temper Flare": {
        bp: 80,
        type: "Fire",
        category: "Physical",
        makesContact: true,
        willCrit: true
    },
    "Supercell Slam": {
        bp: 130,
        type: "Electric",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Psychic Noise": {
        bp: 85,
        type: "Psychic",
        category: "Special",
        isSound: true,
        secondaries: true
    },
    "Upper Hand": {
        bp: 65,
        type: "Fighting",
        category: "Physical",
        makesContact: true,
        secondaries: true
    },
    "Malignant Chain": {
        bp: 80,
        type: "Poison",
        category: "Special",
        willCrit: true,
        secondaries: true
    }
};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH);
exports.MOVES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Moves = (function () {
    function Moves(gen) {
        this.gen = gen;
    }
    Moves.prototype.get = function (id) {
        return MOVES_BY_ID[this.gen][id];
    };
    Moves.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = MOVES_BY_ID[this.gen];
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3, 3];
                    id = _c;
                    return [4, this.get(id)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Moves;
}());
exports.Moves = Moves;
var Move = (function () {
    function Move(name, data, gen) {
        this.kind = "Move";
        this.id = (0, util_1.toID)(name);
        this.name = name;
        this.flags = {};
        if (data.makesContact)
            this.flags.contact = 1;
        if (data.dropsSelf)
            this.flags.brazen = 1;
        if (data.isBite)
            this.flags.bite = 1;
        if (data.isBullet)
            this.flags.bullet = 1;
        if (data.isSound)
            this.flags.sound = 1;
        if (data.isPulse)
            this.flags.pulse = 1;
        if (data.isSlicing)
            this.flags.slicing = 1;
        if (data.isWind)
            this.flags.wind = 1;
        (0, util_1.assignWithout)(this, data, Move.FLAGS);
        this.basePower = data.bp;
        if (data.zp)
            this.zMove = { basePower: data.zp };
        if (data.maxPower)
            this.maxMove = { basePower: data.maxPower };
        if (!this.category && gen >= 4)
            this.category = "Status";
        if (this.struggleRecoil)
            delete this.recoil;
    }
    Move.FLAGS = new Set([
        "bp",
        "makesContact",
        "isPunch",
        "isBite",
        "isBullet",
        "isSound",
        "isPulse",
        "zp",
        "maxPower",
        "isSlicing",
        "isWind",
    ]);
    return Move;
}());
var MOVES_BY_ID = [];
var gen = 0;
try {
    for (var MOVES_1 = __values(exports.MOVES), MOVES_1_1 = MOVES_1.next(); !MOVES_1_1.done; MOVES_1_1 = MOVES_1.next()) {
        var moves = MOVES_1_1.value;
        var map = {};
        for (var move in moves) {
            var data = moves[move];
            var m = new Move(move, data, gen);
            map[m.id] = m;
        }
        MOVES_BY_ID.push(map);
        gen++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (MOVES_1_1 && !MOVES_1_1.done && (_a = MOVES_1["return"])) _a.call(MOVES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=moves.js.map