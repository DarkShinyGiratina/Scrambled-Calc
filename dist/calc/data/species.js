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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var XY_PATCH = {};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
var SM_PATCH = {};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
var SS_PATCH = {};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH);
var PLA_PATCH = {};
var SV_PATCH = {
    Bulbasaur: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 48,
            at: 47,
            df: 58,
            sa: 67,
            sd: 65,
            sp: 45
        },
        weightkg: 6.9,
        nfe: true
    },
    Ivysaur: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 68,
            at: 67,
            df: 73,
            sa: 87,
            sd: 85,
            sp: 60
        },
        weightkg: 13,
        nfe: true
    },
    Venusaur: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 113,
            at: 102,
            df: 83,
            sa: 102,
            sd: 100,
            sp: 50
        },
        weightkg: 100
    },
    Charmander: {
        types: ["Fire"],
        bs: {
            hp: 43,
            at: 63,
            df: 43,
            sa: 73,
            sd: 43,
            sp: 65
        },
        weightkg: 8.5,
        nfe: true
    },
    Charmeleon: {
        types: ["Fire"],
        bs: {
            hp: 58,
            at: 93,
            df: 58,
            sa: 93,
            sd: 58,
            sp: 80
        },
        weightkg: 19,
        nfe: true
    },
    Charizard: {
        types: ["Fire", "Dragon"],
        bs: {
            hp: 78,
            at: 103,
            df: 78,
            sa: 113,
            sd: 78,
            sp: 100
        },
        weightkg: 90.5
    },
    Squirtle: {
        types: ["Water"],
        bs: {
            hp: 44,
            at: 43,
            df: 80,
            sa: 65,
            sd: 65,
            sp: 33
        },
        weightkg: 9,
        nfe: true
    },
    Wartortle: {
        types: ["Water"],
        bs: {
            hp: 64,
            at: 63,
            df: 100,
            sa: 80,
            sd: 80,
            sp: 53
        },
        weightkg: 22.5,
        nfe: true
    },
    Blastoise: {
        types: ["Water", "Steel"],
        bs: {
            hp: 84,
            at: 83,
            df: 125,
            sa: 105,
            sd: 105,
            sp: 48
        },
        weightkg: 85.5
    },
    Ekans: {
        types: ["Poison"],
        bs: {
            hp: 70,
            at: 60,
            df: 55,
            sa: 60,
            sd: 55,
            sp: 75
        },
        weightkg: 6.9,
        nfe: true
    },
    Arbok: {
        types: ["Poison", "Dragon"],
        bs: {
            hp: 105,
            at: 100,
            df: 80,
            sa: 80,
            sd: 80,
            sp: 80
        },
        weightkg: 65
    },
    Pikachu: {
        types: ["Electric"],
        bs: {
            hp: 45,
            at: 65,
            df: 50,
            sa: 85,
            sd: 60,
            sp: 120
        },
        weightkg: 6,
        nfe: true
    },
    Raichu: {
        types: ["Electric"],
        bs: {
            hp: 70,
            at: 90,
            df: 70,
            sa: 110,
            sd: 85,
            sp: 125
        },
        weightkg: 30,
        otherFormes: ["Raichu-Alola"]
    },
    "Raichu-Alola": {
        types: ["Electric", "Psychic"],
        bs: {
            hp: 70,
            at: 80,
            df: 60,
            sa: 115,
            sd: 95,
            sp: 130
        },
        weightkg: 21,
        baseSpecies: "Raichu"
    },
    Sandshrew: {
        types: ["Ground"],
        bs: {
            hp: 50,
            at: 75,
            df: 110,
            sa: 20,
            sd: 80,
            sp: 40
        },
        weightkg: 12,
        nfe: true,
        otherFormes: ["Sandshrew-Alola"]
    },
    "Sandshrew-Alola": {
        types: ["Ice", "Steel"],
        bs: {
            hp: 50,
            at: 75,
            df: 110,
            sa: 20,
            sd: 80,
            sp: 40
        },
        weightkg: 40,
        nfe: true,
        baseSpecies: "Sandshrew"
    },
    Sandslash: {
        types: ["Ground"],
        bs: {
            hp: 75,
            at: 110,
            df: 120,
            sa: 45,
            sd: 90,
            sp: 75
        },
        weightkg: 29.5,
        otherFormes: ["Sandslash-Alola"]
    },
    "Sandslash-Alola": {
        types: ["Ice", "Steel"],
        bs: {
            hp: 75,
            at: 110,
            df: 120,
            sa: 45,
            sd: 90,
            sp: 75
        },
        weightkg: 55,
        baseSpecies: "Sandslash"
    },
    "Nidoran-F": {
        types: ["Poison"],
        bs: {
            hp: 55,
            at: 47,
            df: 52,
            sa: 40,
            sd: 40,
            sp: 41
        },
        weightkg: 7,
        nfe: true
    },
    Nidorina: {
        types: ["Poison"],
        bs: {
            hp: 70,
            at: 62,
            df: 67,
            sa: 55,
            sd: 55,
            sp: 56
        },
        weightkg: 20,
        nfe: true
    },
    Nidoqueen: {
        types: ["Poison", "Ground"],
        bs: {
            hp: 90,
            at: 92,
            df: 87,
            sa: 75,
            sd: 85,
            sp: 76
        },
        weightkg: 60
    },
    "Nidoran-M": {
        types: ["Poison"],
        bs: {
            hp: 46,
            at: 57,
            df: 40,
            sa: 40,
            sd: 40,
            sp: 50
        },
        weightkg: 9,
        nfe: true
    },
    Nidorino: {
        types: ["Poison"],
        bs: {
            hp: 61,
            at: 72,
            df: 57,
            sa: 55,
            sd: 55,
            sp: 65
        },
        weightkg: 19.5,
        nfe: true
    },
    Nidoking: {
        types: ["Poison", "Ground"],
        bs: {
            hp: 81,
            at: 102,
            df: 77,
            sa: 85,
            sd: 75,
            sp: 85
        },
        weightkg: 62
    },
    Clefairy: {
        types: ["Fairy"],
        bs: {
            hp: 70,
            at: 55,
            df: 80,
            sa: 90,
            sd: 100,
            sp: 45
        },
        weightkg: 7.5,
        nfe: true
    },
    Clefable: {
        types: ["Fairy"],
        bs: {
            hp: 95,
            at: 70,
            df: 85,
            sa: 115,
            sd: 125,
            sp: 60
        },
        weightkg: 40
    },
    Vulpix: {
        types: ["Fire", "Fairy"],
        bs: {
            hp: 43,
            at: 43,
            df: 45,
            sa: 81,
            sd: 94,
            sp: 69
        },
        weightkg: 9.9,
        nfe: true,
        otherFormes: ["Vulpix-Alola"]
    },
    "Vulpix-Alola": {
        types: ["Ice", "Fairy"],
        bs: {
            hp: 43,
            at: 43,
            df: 45,
            sa: 81,
            sd: 94,
            sp: 69
        },
        weightkg: 9.9,
        nfe: true,
        baseSpecies: "Vulpix"
    },
    Ninetales: {
        types: ["Fairy", "Fire"],
        bs: {
            hp: 73,
            at: 76,
            df: 75,
            sa: 81,
            sd: 100,
            sp: 100
        },
        weightkg: 19.9,
        otherFormes: ["Ninetales-Alola"]
    },
    "Ninetales-Alola": {
        types: ["Ice", "Fairy"],
        bs: {
            hp: 73,
            at: 58,
            df: 75,
            sa: 101,
            sd: 119,
            sp: 109
        },
        weightkg: 19.9,
        baseSpecies: "Ninetales"
    },
    Jigglypuff: {
        types: ["Normal", "Fairy"],
        bs: {
            hp: 115,
            at: 30,
            df: 45,
            sa: 75,
            sd: 95,
            sp: 40
        },
        weightkg: 5.5,
        nfe: true
    },
    Wigglytuff: {
        types: ["Normal", "Fairy"],
        bs: {
            hp: 140,
            at: 50,
            df: 65,
            sa: 100,
            sd: 115,
            sp: 45
        },
        weightkg: 12
    },
    Oddish: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 45,
            at: 30,
            df: 75,
            sa: 75,
            sd: 75,
            sp: 30
        },
        weightkg: 5.4,
        nfe: true
    },
    Gloom: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 60,
            at: 65,
            df: 90,
            sa: 90,
            sd: 90,
            sp: 40
        },
        weightkg: 8.6,
        nfe: true
    },
    Vileplume: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 85,
            at: 80,
            df: 95,
            sa: 115,
            sd: 110,
            sp: 50
        },
        weightkg: 18.6
    },
    Venonat: {
        types: ["Bug", "Poison"],
        bs: {
            hp: 60,
            at: 25,
            df: 65,
            sa: 80,
            sd: 95,
            sp: 75
        },
        weightkg: 30,
        nfe: true
    },
    Venomoth: {
        types: ["Bug", "Poison"],
        bs: {
            hp: 75,
            at: 65,
            df: 65,
            sa: 115,
            sd: 95,
            sp: 110
        },
        weightkg: 12.5
    },
    Diglett: {
        types: ["Ground"],
        bs: {
            hp: 25,
            at: 65,
            df: 45,
            sa: 35,
            sd: 45,
            sp: 105
        },
        weightkg: 0.8,
        nfe: true,
        otherFormes: ["Diglett-Alola"]
    },
    "Diglett-Alola": {
        types: ["Ground", "Steel"],
        bs: {
            hp: 25,
            at: 65,
            df: 45,
            sa: 35,
            sd: 45,
            sp: 105
        },
        weightkg: 1,
        nfe: true,
        baseSpecies: "Diglett"
    },
    Dugtrio: {
        types: ["Ground"],
        bs: {
            hp: 75,
            at: 100,
            df: 75,
            sa: 45,
            sd: 55,
            sp: 130
        },
        weightkg: 33.3,
        otherFormes: ["Dugtrio-Alola"]
    },
    "Dugtrio-Alola": {
        types: ["Ground", "Steel"],
        bs: {
            hp: 75,
            at: 100,
            df: 90,
            sa: 45,
            sd: 60,
            sp: 110
        },
        weightkg: 66.6,
        baseSpecies: "Dugtrio"
    },
    Meowth: {
        types: ["Normal"],
        bs: {
            hp: 45,
            at: 65,
            df: 40,
            sa: 60,
            sd: 45,
            sp: 95
        },
        weightkg: 4.2,
        nfe: true,
        otherFormes: ["Meowth-Alola", "Meowth-Galar"]
    },
    "Meowth-Alola": {
        types: ["Dark"],
        bs: {
            hp: 45,
            at: 65,
            df: 40,
            sa: 60,
            sd: 45,
            sp: 95
        },
        weightkg: 4.2,
        nfe: true,
        baseSpecies: "Meowth"
    },
    "Meowth-Galar": {
        types: ["Steel", "Normal"],
        bs: {
            hp: 50,
            at: 70,
            df: 70,
            sa: 40,
            sd: 50,
            sp: 95
        },
        weightkg: 7.5,
        nfe: true,
        baseSpecies: "Meowth"
    },
    Persian: {
        types: ["Normal"],
        bs: {
            hp: 70,
            at: 105,
            df: 60,
            sa: 90,
            sd: 75,
            sp: 115
        },
        weightkg: 32,
        otherFormes: ["Persian-Alola"]
    },
    "Persian-Alola": {
        types: ["Dark"],
        bs: {
            hp: 70,
            at: 100,
            df: 60,
            sa: 95,
            sd: 75,
            sp: 115
        },
        weightkg: 33,
        baseSpecies: "Persian"
    },
    Psyduck: {
        types: ["Water", "Psychic"],
        bs: {
            hp: 50,
            at: 52,
            df: 63,
            sa: 95,
            sd: 85,
            sp: 55
        },
        weightkg: 19.6,
        nfe: true
    },
    Golduck: {
        types: ["Water", "Psychic"],
        bs: {
            hp: 75,
            at: 92,
            df: 88,
            sa: 115,
            sd: 90,
            sp: 85
        },
        weightkg: 76.6
    },
    Mankey: {
        types: ["Fighting"],
        bs: {
            hp: 40,
            at: 80,
            df: 40,
            sa: 35,
            sd: 40,
            sp: 115
        },
        weightkg: 28,
        nfe: true
    },
    Primeape: {
        types: ["Fighting"],
        bs: {
            hp: 80,
            at: 105,
            df: 75,
            sa: 50,
            sd: 75,
            sp: 105
        },
        weightkg: 32,
        nfe: true
    },
    Growlithe: {
        types: ["Fire", "Ice"],
        bs: {
            hp: 60,
            at: 75,
            df: 60,
            sa: 90,
            sd: 60,
            sp: 80
        },
        weightkg: 19,
        nfe: true,
        otherFormes: ["Growlithe-Hisui"]
    },
    "Growlithe-Hisui": {
        types: ["Fire", "Rock"],
        bs: {
            hp: 60,
            at: 80,
            df: 75,
            sa: 75,
            sd: 60,
            sp: 75
        },
        weightkg: 22.7,
        nfe: true,
        baseSpecies: "Growlithe"
    },
    Arcanine: {
        types: ["Fire", "Ice"],
        bs: {
            hp: 100,
            at: 110,
            df: 80,
            sa: 120,
            sd: 80,
            sp: 110
        },
        weightkg: 155,
        otherFormes: ["Arcanine-Hisui"]
    },
    "Arcanine-Hisui": {
        types: ["Fire", "Rock"],
        bs: {
            hp: 100,
            at: 120,
            df: 95,
            sa: 95,
            sd: 80,
            sp: 110
        },
        weightkg: 168,
        baseSpecies: "Arcanine"
    },
    Poliwag: {
        types: ["Water"],
        bs: {
            hp: 40,
            at: 40,
            df: 40,
            sa: 60,
            sd: 60,
            sp: 90
        },
        weightkg: 12.4,
        nfe: true
    },
    Poliwhirl: {
        types: ["Water"],
        bs: {
            hp: 65,
            at: 80,
            df: 80,
            sa: 70,
            sd: 80,
            sp: 65
        },
        weightkg: 20,
        nfe: true
    },
    Poliwrath: {
        types: ["Water", "Fighting"],
        bs: {
            hp: 105,
            at: 130,
            df: 95,
            sa: 70,
            sd: 95,
            sp: 55
        },
        weightkg: 54
    },
    Bellsprout: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 50,
            at: 55,
            df: 35,
            sa: 70,
            sd: 55,
            sp: 65
        },
        weightkg: 4,
        nfe: true
    },
    Weepinbell: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 65,
            at: 85,
            df: 75,
            sa: 85,
            sd: 75,
            sp: 55
        },
        weightkg: 6.4,
        nfe: true
    },
    Victreebel: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 105,
            at: 105,
            df: 80,
            sa: 110,
            sd: 80,
            sp: 70
        },
        weightkg: 15.5
    },
    Tentacool: {
        types: ["Water", "Poison"],
        bs: {
            hp: 60,
            at: 40,
            df: 60,
            sa: 90,
            sd: 100,
            sp: 70
        },
        weightkg: 45.5,
        nfe: true
    },
    Tentacruel: {
        types: ["Water", "Poison"],
        bs: {
            hp: 80,
            at: 50,
            df: 65,
            sa: 120,
            sd: 120,
            sp: 100
        },
        weightkg: 55
    },
    Geodude: {
        types: ["Rock", "Ground"],
        bs: {
            hp: 45,
            at: 80,
            df: 120,
            sa: 25,
            sd: 60,
            sp: 20
        },
        weightkg: 20,
        nfe: true,
        otherFormes: ["Geodude-Alola"]
    },
    "Geodude-Alola": {
        types: ["Rock", "Electric"],
        bs: {
            hp: 45,
            at: 80,
            df: 120,
            sa: 25,
            sd: 60,
            sp: 20
        },
        weightkg: 20.3,
        nfe: true,
        baseSpecies: "Geodude"
    },
    Graveler: {
        types: ["Rock", "Ground"],
        bs: {
            hp: 75,
            at: 115,
            df: 125,
            sa: 35,
            sd: 65,
            sp: 65
        },
        weightkg: 105,
        nfe: true,
        otherFormes: ["Graveler-Alola"]
    },
    "Graveler-Alola": {
        types: ["Rock", "Electric"],
        bs: {
            hp: 75,
            at: 115,
            df: 125,
            sa: 35,
            sd: 65,
            sp: 65
        },
        weightkg: 110,
        nfe: true,
        baseSpecies: "Graveler"
    },
    Golem: {
        types: ["Rock", "Ground"],
        bs: {
            hp: 80,
            at: 120,
            df: 130,
            sa: 45,
            sd: 95,
            sp: 80
        },
        weightkg: 300,
        otherFormes: ["Golem-Alola"]
    },
    "Golem-Alola": {
        types: ["Rock", "Electric"],
        bs: {
            hp: 80,
            at: 120,
            df: 130,
            sa: 105,
            sd: 70,
            sp: 45
        },
        weightkg: 316,
        baseSpecies: "Golem"
    },
    Slowpoke: {
        types: ["Water", "Psychic"],
        bs: {
            hp: 90,
            at: 65,
            df: 65,
            sa: 70,
            sd: 70,
            sp: 15
        },
        weightkg: 36,
        nfe: true
    },
    Slowbro: {
        types: ["Water", "Psychic"],
        bs: {
            hp: 95,
            at: 70,
            df: 115,
            sa: 95,
            sd: 115,
            sp: 25
        },
        weightkg: 78.5,
        otherFormes: ["Slowbro-Galar"]
    },
    "Slowbro-Galar": {
        types: ["Poison", "Psychic"],
        bs: {
            hp: 95,
            at: 115,
            df: 95,
            sa: 115,
            sd: 70,
            sp: 25
        },
        weightkg: 70.5,
        baseSpecies: "Slowbro"
    },
    Magnemite: {
        types: ["Electric", "Steel"],
        bs: {
            hp: 20,
            at: 15,
            df: 115,
            sa: 95,
            sd: 90,
            sp: 40
        },
        weightkg: 6,
        nfe: true
    },
    Magneton: {
        types: ["Electric", "Steel"],
        bs: {
            hp: 60,
            at: 45,
            df: 125,
            sa: 120,
            sd: 100,
            sp: 75
        },
        weightkg: 60,
        nfe: true
    },
    Doduo: {
        types: ["Ground", "Flying"],
        bs: {
            hp: 55,
            at: 75,
            df: 50,
            sa: 35,
            sd: 50,
            sp: 110
        },
        weightkg: 39.2,
        nfe: true
    },
    Dodrio: {
        types: ["Ground", "Flying"],
        bs: {
            hp: 80,
            at: 110,
            df: 70,
            sa: 60,
            sd: 70,
            sp: 125
        },
        weightkg: 85.2
    },
    Seel: {
        types: ["Water", "Ice"],
        bs: {
            hp: 65,
            at: 65,
            df: 65,
            sa: 65,
            sd: 70,
            sp: 45
        },
        weightkg: 90,
        nfe: true
    },
    Dewgong: {
        types: ["Water", "Ice"],
        bs: {
            hp: 100,
            at: 90,
            df: 80,
            sa: 90,
            sd: 95,
            sp: 70
        },
        weightkg: 120
    },
    Grimer: {
        types: ["Poison"],
        bs: {
            hp: 80,
            at: 75,
            df: 60,
            sa: 75,
            sd: 85,
            sp: 25
        },
        weightkg: 30,
        nfe: true,
        otherFormes: ["Grimer-Alola"]
    },
    "Grimer-Alola": {
        types: ["Poison", "Dark"],
        bs: {
            hp: 80,
            at: 80,
            df: 65,
            sa: 70,
            sd: 80,
            sp: 25
        },
        weightkg: 42,
        nfe: true,
        baseSpecies: "Grimer"
    },
    Muk: {
        types: ["Poison"],
        bs: {
            hp: 105,
            at: 105,
            df: 80,
            sa: 95,
            sd: 115,
            sp: 20
        },
        weightkg: 30,
        otherFormes: ["Muk-Alola"]
    },
    "Muk-Alola": {
        types: ["Poison", "Dark"],
        bs: {
            hp: 110,
            at: 110,
            df: 85,
            sa: 90,
            sd: 110,
            sp: 20
        },
        weightkg: 52,
        baseSpecies: "Muk"
    },
    Shellder: {
        types: ["Water"],
        bs: {
            hp: 45,
            at: 65,
            df: 125,
            sa: 35,
            sd: 65,
            sp: 40
        },
        weightkg: 4,
        nfe: true
    },
    Cloyster: {
        types: ["Water", "Steel"],
        bs: {
            hp: 70,
            at: 95,
            df: 180,
            sa: 40,
            sd: 70,
            sp: 70
        },
        weightkg: 132.5
    },
    Gastly: {
        types: ["Ghost", "Poison"],
        bs: {
            hp: 30,
            at: 20,
            df: 30,
            sa: 100,
            sd: 50,
            sp: 100
        },
        weightkg: 0.1,
        nfe: true
    },
    Haunter: {
        types: ["Ghost", "Poison"],
        bs: {
            hp: 55,
            at: 95,
            df: 45,
            sa: 115,
            sd: 60,
            sp: 130
        },
        weightkg: 0.1,
        nfe: true
    },
    Gengar: {
        types: ["Ghost", "Poison"],
        bs: {
            hp: 70,
            at: 65,
            df: 60,
            sa: 130,
            sd: 75,
            sp: 115
        },
        weightkg: 40.5
    },
    Drowzee: {
        types: ["Psychic"],
        bs: {
            hp: 85,
            at: 48,
            df: 80,
            sa: 80,
            sd: 115,
            sp: 42
        },
        weightkg: 32.4,
        nfe: true
    },
    Hypno: {
        types: ["Psychic", "Dark"],
        bs: {
            hp: 85,
            at: 63,
            df: 80,
            sa: 115,
            sd: 115,
            sp: 67
        },
        weightkg: 75.6
    },
    Voltorb: {
        types: ["Electric"],
        bs: {
            hp: 40,
            at: 20,
            df: 55,
            sa: 95,
            sd: 70,
            sp: 120
        },
        weightkg: 10.4,
        nfe: true,
        otherFormes: ["Voltorb-Hisui"]
    },
    "Voltorb-Hisui": {
        types: ["Electric", "Grass"],
        bs: {
            hp: 40,
            at: 20,
            df: 70,
            sa: 90,
            sd: 60,
            sp: 120
        },
        weightkg: 13,
        nfe: true,
        baseSpecies: "Voltorb"
    },
    Electrode: {
        types: ["Electric"],
        bs: {
            hp: 70,
            at: 30,
            df: 70,
            sa: 120,
            sd: 95,
            sp: 150
        },
        weightkg: 66.6,
        otherFormes: ["Electrode-Hisui"]
    },
    "Electrode-Hisui": {
        types: ["Electric", "Grass"],
        bs: {
            hp: 60,
            at: 30,
            df: 95,
            sa: 120,
            sd: 80,
            sp: 150
        },
        weightkg: 71,
        baseSpecies: "Electrode"
    },
    Exeggcute: {
        types: ["Grass", "Psychic"],
        bs: {
            hp: 60,
            at: 40,
            df: 95,
            sa: 85,
            sd: 95,
            sp: 25
        },
        weightkg: 2.5,
        nfe: true
    },
    Exeggutor: {
        types: ["Grass", "Psychic"],
        bs: {
            hp: 95,
            at: 95,
            df: 95,
            sa: 125,
            sd: 115,
            sp: 50
        },
        weightkg: 120,
        otherFormes: ["Exeggutor-Alola"]
    },
    "Exeggutor-Alola": {
        types: ["Grass", "Dragon"],
        bs: {
            hp: 145,
            at: 70,
            df: 95,
            sa: 125,
            sd: 95,
            sp: 45
        },
        weightkg: 415.6,
        baseSpecies: "Exeggutor"
    },
    Hitmonlee: {
        types: ["Fighting"],
        bs: {
            hp: 75,
            at: 120,
            df: 65,
            sa: 35,
            sd: 110,
            sp: 95
        },
        weightkg: 49.8
    },
    Hitmonchan: {
        types: ["Fighting"],
        bs: {
            hp: 75,
            at: 120,
            df: 80,
            sa: 35,
            sd: 110,
            sp: 80
        },
        weightkg: 50.2
    },
    Koffing: {
        types: ["Poison"],
        bs: {
            hp: 45,
            at: 30,
            df: 100,
            sa: 75,
            sd: 75,
            sp: 50
        },
        weightkg: 1,
        nfe: true
    },
    Weezing: {
        types: ["Poison"],
        bs: {
            hp: 90,
            at: 60,
            df: 125,
            sa: 100,
            sd: 90,
            sp: 60
        },
        weightkg: 9.5,
        otherFormes: ["Weezing-Galar"]
    },
    "Weezing-Galar": {
        types: ["Poison", "Fairy"],
        bs: {
            hp: 90,
            at: 60,
            df: 125,
            sa: 100,
            sd: 90,
            sp: 60
        },
        weightkg: 16,
        baseSpecies: "Weezing"
    },
    Rhyhorn: {
        types: ["Ground", "Rock"],
        bs: {
            hp: 95,
            at: 120,
            df: 115,
            sa: 20,
            sd: 35,
            sp: 90
        },
        weightkg: 115,
        nfe: true
    },
    Rhydon: {
        types: ["Ground", "Rock"],
        bs: {
            hp: 105,
            at: 130,
            df: 120,
            sa: 45,
            sd: 65,
            sp: 60
        },
        weightkg: 120,
        nfe: true
    },
    Chansey: {
        types: ["Normal", "Fairy"],
        bs: {
            hp: 180,
            at: 5,
            df: 25,
            sa: 55,
            sd: 115,
            sp: 60
        },
        weightkg: 34.6,
        nfe: true
    },
    Horsea: {
        types: ["Water"],
        bs: {
            hp: 40,
            at: 40,
            df: 70,
            sa: 75,
            sd: 60,
            sp: 75
        },
        weightkg: 8,
        nfe: true
    },
    Seadra: {
        types: ["Water", "Dragon"],
        bs: {
            hp: 65,
            at: 60,
            df: 95,
            sa: 100,
            sd: 75,
            sp: 85
        },
        weightkg: 25,
        nfe: true
    },
    Scyther: {
        types: ["Bug", "Flying"],
        bs: {
            hp: 80,
            at: 125,
            df: 80,
            sa: 45,
            sd: 80,
            sp: 125
        },
        weightkg: 56,
        nfe: true
    },
    Electabuzz: {
        types: ["Electric"],
        bs: {
            hp: 65,
            at: 98,
            df: 67,
            sa: 105,
            sd: 85,
            sp: 105
        },
        weightkg: 30,
        nfe: true
    },
    Magmar: {
        types: ["Fire"],
        bs: {
            hp: 65,
            at: 90,
            df: 77,
            sa: 115,
            sd: 85,
            sp: 93
        },
        weightkg: 44.5,
        nfe: true
    },
    Tauros: {
        types: ["Normal"],
        bs: {
            hp: 90,
            at: 120,
            df: 95,
            sa: 40,
            sd: 80,
            sp: 110
        },
        weightkg: 88.4,
        otherFormes: [
            "Tauros-Paldea-Combat",
            "Tauros-Paldea-Blaze",
            "Tauros-Paldea-Aqua",
        ]
    },
    "Tauros-Paldea-Combat": {
        types: ["Fighting", "Dark"],
        bs: {
            hp: 90,
            at: 120,
            df: 105,
            sa: 40,
            sd: 80,
            sp: 100
        },
        weightkg: 115,
        baseSpecies: "Tauros"
    },
    "Tauros-Paldea-Blaze": {
        types: ["Fighting", "Fire"],
        bs: {
            hp: 90,
            at: 120,
            df: 105,
            sa: 40,
            sd: 80,
            sp: 100
        },
        weightkg: 85,
        baseSpecies: "Tauros"
    },
    "Tauros-Paldea-Aqua": {
        types: ["Fighting", "Water"],
        bs: {
            hp: 90,
            at: 120,
            df: 105,
            sa: 30,
            sd: 80,
            sp: 100
        },
        weightkg: 110,
        baseSpecies: "Tauros"
    },
    Magikarp: {
        types: ["Water"],
        bs: {
            hp: 32,
            at: 10,
            df: 56,
            sa: 15,
            sd: 56,
            sp: 81
        },
        weightkg: 10,
        nfe: true
    },
    Gyarados: {
        types: ["Water", "Flying"],
        bs: {
            hp: 112,
            at: 125,
            df: 81,
            sa: 120,
            sd: 81,
            sp: 81
        },
        weightkg: 235
    },
    Lapras: {
        types: ["Water", "Dragon"],
        bs: {
            hp: 130,
            at: 85,
            df: 110,
            sa: 100,
            sd: 100,
            sp: 50
        },
        weightkg: 220
    },
    Ditto: {
        types: ["Normal", "Steel"],
        bs: {
            hp: 48,
            at: 48,
            df: 144,
            sa: 48,
            sd: 144,
            sp: 48
        },
        weightkg: 4
    },
    Eevee: {
        types: ["Normal"],
        bs: {
            hp: 55,
            at: 60,
            df: 55,
            sa: 60,
            sd: 65,
            sp: 80
        },
        weightkg: 6.5,
        nfe: true
    },
    Vaporeon: {
        types: ["Water"],
        bs: {
            hp: 70,
            at: 65,
            df: 80,
            sa: 110,
            sd: 130,
            sp: 70
        },
        weightkg: 29
    },
    Jolteon: {
        types: ["Electric"],
        bs: {
            hp: 70,
            at: 60,
            df: 60,
            sa: 110,
            sd: 95,
            sp: 130
        },
        weightkg: 24.5
    },
    Flareon: {
        types: ["Fire"],
        bs: {
            hp: 70,
            at: 65,
            df: 70,
            sa: 130,
            sd: 110,
            sp: 80
        },
        weightkg: 25
    },
    Porygon: {
        types: ["Electric", "Psychic"],
        bs: {
            hp: 75,
            at: 40,
            df: 95,
            sa: 95,
            sd: 95,
            sp: 40
        },
        weightkg: 36.5,
        nfe: true
    },
    Snorlax: {
        types: ["Normal"],
        bs: {
            hp: 160,
            at: 130,
            df: 65,
            sa: 65,
            sd: 110,
            sp: 20
        },
        weightkg: 460
    },
    Articuno: {
        types: ["Ice", "Flying"],
        bs: {
            hp: 90,
            at: 60,
            df: 100,
            sa: 125,
            sd: 125,
            sp: 100
        },
        weightkg: 55.4,
        otherFormes: ["Articuno-Galar"]
    },
    "Articuno-Galar": {
        types: ["Psychic", "Ice"],
        bs: {
            hp: 90,
            at: 65,
            df: 85,
            sa: 125,
            sd: 125,
            sp: 110
        },
        weightkg: 50.9,
        baseSpecies: "Articuno"
    },
    Zapdos: {
        types: ["Electric", "Flying"],
        bs: {
            hp: 90,
            at: 90,
            df: 90,
            sa: 125,
            sd: 90,
            sp: 115
        },
        weightkg: 52.6,
        otherFormes: ["Zapdos-Galar"]
    },
    "Zapdos-Galar": {
        types: ["Fighting", "Electric"],
        bs: {
            hp: 90,
            at: 125,
            df: 90,
            sa: 80,
            sd: 90,
            sp: 125
        },
        weightkg: 58.2,
        baseSpecies: "Zapdos"
    },
    Moltres: {
        types: ["Fire", "Flying"],
        bs: {
            hp: 90,
            at: 80,
            df: 90,
            sa: 125,
            sd: 115,
            sp: 100
        },
        weightkg: 60,
        otherFormes: ["Moltres-Galar"]
    },
    "Moltres-Galar": {
        types: ["Dark", "Fire"],
        bs: {
            hp: 90,
            at: 80,
            df: 90,
            sa: 125,
            sd: 125,
            sp: 90
        },
        weightkg: 66,
        baseSpecies: "Moltres"
    },
    Dratini: {
        types: ["Dragon"],
        bs: {
            hp: 60,
            at: 30,
            df: 60,
            sa: 70,
            sd: 80,
            sp: 60
        },
        weightkg: 3.3,
        nfe: true
    },
    Dragonair: {
        types: ["Dragon"],
        bs: {
            hp: 90,
            at: 50,
            df: 80,
            sa: 100,
            sd: 90,
            sp: 70
        },
        weightkg: 16.5,
        nfe: true
    },
    Dragonite: {
        types: ["Dragon", "Flying"],
        bs: {
            hp: 100,
            at: 120,
            df: 95,
            sa: 110,
            sd: 95,
            sp: 80
        },
        weightkg: 210
    },
    Mewtwo: {
        types: ["Psychic"],
        bs: {
            hp: 106,
            at: 90,
            df: 90,
            sa: 154,
            sd: 130,
            sp: 130
        },
        weightkg: 122
    },
    Mew: {
        types: ["Psychic"],
        bs: {
            hp: 100,
            at: 100,
            df: 100,
            sa: 100,
            sd: 100,
            sp: 100
        },
        weightkg: 4
    },
    Chikorita: {
        types: ["Grass"],
        bs: {
            hp: 50,
            at: 42,
            df: 70,
            sa: 53,
            sd: 70,
            sp: 45
        },
        weightkg: 6.4,
        nfe: true
    },
    Bayleef: {
        types: ["Grass"],
        bs: {
            hp: 70,
            at: 62,
            df: 90,
            sa: 73,
            sd: 90,
            sp: 55
        },
        weightkg: 15.8,
        nfe: true
    },
    Meganium: {
        types: ["Grass", "Fairy"],
        bs: {
            hp: 115,
            at: 82,
            df: 100,
            sa: 93,
            sd: 100,
            sp: 60
        },
        weightkg: 100.5
    },
    Cyndaquil: {
        types: ["Fire"],
        bs: {
            hp: 48,
            at: 53,
            df: 45,
            sa: 74,
            sd: 45,
            sp: 65
        },
        weightkg: 7.9,
        nfe: true
    },
    Quilava: {
        types: ["Fire"],
        bs: {
            hp: 63,
            at: 68,
            df: 60,
            sa: 94,
            sd: 60,
            sp: 95
        },
        weightkg: 19,
        nfe: true
    },
    Typhlosion: {
        types: ["Fire", "Ground"],
        bs: {
            hp: 93,
            at: 93,
            df: 80,
            sa: 119,
            sd: 80,
            sp: 85
        },
        weightkg: 79.5,
        otherFormes: ["Typhlosion-Hisui"]
    },
    "Typhlosion-Hisui": {
        types: ["Fire", "Ghost"],
        bs: {
            hp: 93,
            at: 73,
            df: 80,
            sa: 119,
            sd: 100,
            sp: 85
        },
        weightkg: 69.8,
        baseSpecies: "Typhlosion"
    },
    Totodile: {
        types: ["Water"],
        bs: {
            hp: 50,
            at: 75,
            df: 65,
            sa: 44,
            sd: 53,
            sp: 43
        },
        weightkg: 9.5,
        nfe: true
    },
    Croconaw: {
        types: ["Water"],
        bs: {
            hp: 70,
            at: 95,
            df: 85,
            sa: 54,
            sd: 73,
            sp: 63
        },
        weightkg: 25,
        nfe: true
    },
    Feraligatr: {
        types: ["Water", "Dark"],
        bs: {
            hp: 100,
            at: 125,
            df: 100,
            sa: 59,
            sd: 83,
            sp: 83
        },
        weightkg: 88.8
    },
    Sentret: {
        types: ["Normal"],
        bs: {
            hp: 45,
            at: 51,
            df: 44,
            sa: 35,
            sd: 65,
            sp: 85
        },
        weightkg: 6,
        nfe: true
    },
    Furret: {
        types: ["Normal"],
        bs: {
            hp: 85,
            at: 76,
            df: 74,
            sa: 45,
            sd: 85,
            sp: 115
        },
        weightkg: 32.5
    },
    Hoothoot: {
        types: ["Psychic", "Flying"],
        bs: {
            hp: 60,
            at: 30,
            df: 50,
            sa: 76,
            sd: 76,
            sp: 58
        },
        weightkg: 21.2,
        nfe: true
    },
    Noctowl: {
        types: ["Psychic", "Flying"],
        bs: {
            hp: 100,
            at: 50,
            df: 65,
            sa: 106,
            sd: 106,
            sp: 88
        },
        weightkg: 40.8
    },
    Spinarak: {
        types: ["Bug", "Poison"],
        bs: {
            hp: 40,
            at: 70,
            df: 60,
            sa: 30,
            sd: 60,
            sp: 70
        },
        weightkg: 8.5,
        nfe: true
    },
    Ariados: {
        types: ["Bug", "Poison"],
        bs: {
            hp: 80,
            at: 110,
            df: 80,
            sa: 40,
            sd: 80,
            sp: 90
        },
        weightkg: 33.5
    },
    Chinchou: {
        types: ["Water", "Electric"],
        bs: {
            hp: 75,
            at: 33,
            df: 63,
            sa: 91,
            sd: 111,
            sp: 52
        },
        weightkg: 12,
        nfe: true
    },
    Lanturn: {
        types: ["Water", "Electric"],
        bs: {
            hp: 125,
            at: 48,
            df: 68,
            sa: 116,
            sd: 116,
            sp: 62
        },
        weightkg: 22.5
    },
    Pichu: {
        types: ["Electric"],
        bs: {
            hp: 30,
            at: 45,
            df: 40,
            sa: 75,
            sd: 50,
            sp: 60
        },
        weightkg: 2,
        nfe: true
    },
    Cleffa: {
        types: ["Fairy"],
        bs: {
            hp: 50,
            at: 35,
            df: 60,
            sa: 70,
            sd: 80,
            sp: 35
        },
        weightkg: 3,
        nfe: true
    },
    Igglybuff: {
        types: ["Normal", "Fairy"],
        bs: {
            hp: 90,
            at: 15,
            df: 25,
            sa: 60,
            sd: 75,
            sp: 35
        },
        weightkg: 1,
        nfe: true
    },
    Mareep: {
        types: ["Electric", "Fairy"],
        bs: {
            hp: 55,
            at: 40,
            df: 40,
            sa: 75,
            sd: 80,
            sp: 35
        },
        weightkg: 7.8,
        nfe: true
    },
    Flaaffy: {
        types: ["Electric", "Fairy"],
        bs: {
            hp: 70,
            at: 55,
            df: 70,
            sa: 90,
            sd: 95,
            sp: 45
        },
        weightkg: 13.3,
        nfe: true
    },
    Ampharos: {
        types: ["Electric", "Fairy"],
        bs: {
            hp: 95,
            at: 75,
            df: 85,
            sa: 125,
            sd: 115,
            sp: 55
        },
        weightkg: 61.5
    },
    Bellossom: {
        types: ["Grass", "Fairy"],
        bs: {
            hp: 75,
            at: 65,
            df: 95,
            sa: 110,
            sd: 100,
            sp: 90
        },
        weightkg: 5.8
    },
    Marill: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 70,
            at: 20,
            df: 50,
            sa: 20,
            sd: 50,
            sp: 40
        },
        weightkg: 8.5,
        nfe: true
    },
    Azumarill: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 105,
            at: 50,
            df: 90,
            sa: 70,
            sd: 105,
            sp: 60
        },
        weightkg: 28.5
    },
    Sudowoodo: {
        types: ["Rock"],
        bs: {
            hp: 75,
            at: 105,
            df: 125,
            sa: 30,
            sd: 105,
            sp: 75
        },
        weightkg: 38
    },
    Politoed: {
        types: ["Water", "Normal"],
        bs: {
            hp: 90,
            at: 80,
            df: 80,
            sa: 105,
            sd: 100,
            sp: 95
        },
        weightkg: 33.9
    },
    Hoppip: {
        types: ["Grass", "Flying"],
        bs: {
            hp: 40,
            at: 35,
            df: 60,
            sa: 50,
            sd: 75,
            sp: 90
        },
        weightkg: 0.5,
        nfe: true
    },
    Skiploom: {
        types: ["Grass", "Flying"],
        bs: {
            hp: 55,
            at: 45,
            df: 70,
            sa: 70,
            sd: 95,
            sp: 90
        },
        weightkg: 1,
        nfe: true
    },
    Jumpluff: {
        types: ["Grass", "Flying"],
        bs: {
            hp: 75,
            at: 55,
            df: 75,
            sa: 90,
            sd: 115,
            sp: 115
        },
        weightkg: 3
    },
    Aipom: {
        types: ["Normal"],
        bs: {
            hp: 55,
            at: 70,
            df: 55,
            sa: 40,
            sd: 55,
            sp: 100
        },
        weightkg: 11.5,
        nfe: true
    },
    Sunkern: {
        types: ["Grass"],
        bs: {
            hp: 40,
            at: 30,
            df: 85,
            sa: 45,
            sd: 100,
            sp: 30
        },
        weightkg: 1.8,
        nfe: true
    },
    Sunflora: {
        types: ["Grass", "Electric"],
        bs: {
            hp: 75,
            at: 50,
            df: 85,
            sa: 120,
            sd: 100,
            sp: 50
        },
        weightkg: 8.5
    },
    Yanma: {
        types: ["Bug", "Flying"],
        bs: {
            hp: 50,
            at: 61,
            df: 52,
            sa: 101,
            sd: 46,
            sp: 140
        },
        weightkg: 38,
        nfe: true
    },
    Wooper: {
        types: ["Water", "Ground"],
        bs: {
            hp: 55,
            at: 45,
            df: 80,
            sa: 45,
            sd: 80,
            sp: 15
        },
        weightkg: 8.5,
        nfe: true,
        otherFormes: ["Wooper-Paldea"]
    },
    "Wooper-Paldea": {
        types: ["Poison", "Ground"],
        bs: {
            hp: 55,
            at: 45,
            df: 65,
            sa: 45,
            sd: 85,
            sp: 15
        },
        weightkg: 11,
        nfe: true,
        baseSpecies: "Wooper"
    },
    Quagsire: {
        types: ["Water", "Ground"],
        bs: {
            hp: 100,
            at: 85,
            df: 100,
            sa: 75,
            sd: 100,
            sp: 20
        },
        weightkg: 75
    },
    Espeon: {
        types: ["Psychic"],
        bs: {
            hp: 70,
            at: 60,
            df: 60,
            sa: 130,
            sd: 95,
            sp: 110
        },
        weightkg: 26.5
    },
    Umbreon: {
        types: ["Dark"],
        bs: {
            hp: 70,
            at: 60,
            df: 110,
            sa: 90,
            sd: 130,
            sp: 65
        },
        weightkg: 27
    },
    Murkrow: {
        types: ["Dark", "Flying"],
        bs: {
            hp: 60,
            at: 85,
            df: 55,
            sa: 85,
            sd: 55,
            sp: 110
        },
        weightkg: 2.1,
        nfe: true
    },
    Slowking: {
        types: ["Water", "Psychic"],
        bs: {
            hp: 95,
            at: 70,
            df: 95,
            sa: 115,
            sd: 115,
            sp: 25
        },
        weightkg: 79.5,
        otherFormes: ["Slowking-Galar"]
    },
    "Slowking-Galar": {
        types: ["Poison", "Ghost"],
        bs: {
            hp: 95,
            at: 70,
            df: 95,
            sa: 115,
            sd: 115,
            sp: 25
        },
        weightkg: 79.5,
        baseSpecies: "Slowking"
    },
    Misdreavus: {
        types: ["Ghost", "Fairy"],
        bs: {
            hp: 60,
            at: 30,
            df: 60,
            sa: 110,
            sd: 110,
            sp: 110
        },
        weightkg: 1,
        nfe: true
    },
    Girafarig: {
        types: ["Normal", "Dark"],
        bs: {
            hp: 70,
            at: 85,
            df: 75,
            sa: 95,
            sd: 75,
            sp: 95
        },
        weightkg: 41.5,
        nfe: true
    },
    Pineco: {
        types: ["Bug"],
        bs: {
            hp: 55,
            at: 65,
            df: 110,
            sa: 65,
            sd: 90,
            sp: 15
        },
        weightkg: 7.2,
        nfe: true
    },
    Forretress: {
        types: ["Bug", "Steel"],
        bs: {
            hp: 75,
            at: 100,
            df: 140,
            sa: 100,
            sd: 120,
            sp: 15
        },
        weightkg: 125.8
    },
    Dunsparce: {
        types: ["Normal", "Ground"],
        bs: {
            hp: 80,
            at: 70,
            df: 100,
            sa: 70,
            sd: 100,
            sp: 30
        },
        weightkg: 14,
        nfe: true
    },
    Gligar: {
        types: ["Poison", "Flying"],
        bs: {
            hp: 65,
            at: 90,
            df: 105,
            sa: 30,
            sd: 65,
            sp: 105
        },
        weightkg: 64.8,
        nfe: true
    },
    Snubbull: {
        types: ["Fairy"],
        bs: {
            hp: 60,
            at: 80,
            df: 60,
            sa: 40,
            sd: 60,
            sp: 50
        },
        weightkg: 7.8,
        nfe: true
    },
    Granbull: {
        types: ["Fairy", "Fighting"],
        bs: {
            hp: 90,
            at: 120,
            df: 90,
            sa: 50,
            sd: 90,
            sp: 75
        },
        weightkg: 48.7
    },
    Qwilfish: {
        types: ["Water", "Poison"],
        bs: {
            hp: 75,
            at: 100,
            df: 100,
            sa: 55,
            sd: 85,
            sp: 85
        },
        weightkg: 3.9,
        otherFormes: ["Qwilfish-Hisui"]
    },
    "Qwilfish-Hisui": {
        types: ["Dark", "Poison"],
        bs: {
            hp: 75,
            at: 100,
            df: 100,
            sa: 55,
            sd: 85,
            sp: 85
        },
        weightkg: 3.9,
        nfe: true,
        baseSpecies: "Qwilfish"
    },
    Scizor: {
        types: ["Bug", "Steel"],
        bs: {
            hp: 80,
            at: 130,
            df: 130,
            sa: 45,
            sd: 90,
            sp: 60
        },
        weightkg: 118
    },
    Heracross: {
        types: ["Bug", "Fighting"],
        bs: {
            hp: 80,
            at: 125,
            df: 110,
            sa: 40,
            sd: 95,
            sp: 85
        },
        weightkg: 54
    },
    Sneasel: {
        types: ["Dark", "Ice"],
        bs: {
            hp: 55,
            at: 100,
            df: 55,
            sa: 40,
            sd: 75,
            sp: 120
        },
        weightkg: 28,
        nfe: true,
        otherFormes: ["Sneasel-Hisui"]
    },
    "Sneasel-Hisui": {
        types: ["Ice", "Poison"],
        bs: {
            hp: 55,
            at: 105,
            df: 55,
            sa: 35,
            sd: 75,
            sp: 120
        },
        weightkg: 27,
        nfe: true,
        baseSpecies: "Sneasel"
    },
    Teddiursa: {
        types: ["Normal"],
        bs: {
            hp: 65,
            at: 80,
            df: 65,
            sa: 35,
            sd: 65,
            sp: 65
        },
        weightkg: 8.8,
        nfe: true
    },
    Ursaring: {
        types: ["Normal"],
        bs: {
            hp: 105,
            at: 130,
            df: 75,
            sa: 40,
            sd: 75,
            sp: 75
        },
        weightkg: 125.8,
        nfe: true
    },
    Slugma: {
        types: ["Fire"],
        bs: {
            hp: 50,
            at: 40,
            df: 50,
            sa: 95,
            sd: 95,
            sp: 20
        },
        weightkg: 35,
        nfe: true
    },
    Magcargo: {
        types: ["Fire", "Rock"],
        bs: {
            hp: 80,
            at: 50,
            df: 120,
            sa: 125,
            sd: 120,
            sp: 30
        },
        weightkg: 55
    },
    Swinub: {
        types: ["Ice", "Ground"],
        bs: {
            hp: 65,
            at: 65,
            df: 80,
            sa: 30,
            sd: 60,
            sp: 50
        },
        weightkg: 6.5,
        nfe: true
    },
    Piloswine: {
        types: ["Ice", "Ground"],
        bs: {
            hp: 100,
            at: 100,
            df: 85,
            sa: 50,
            sd: 65,
            sp: 50
        },
        weightkg: 55.8,
        nfe: true
    },
    Delibird: {
        types: ["Ice", "Fairy"],
        bs: {
            hp: 70,
            at: 80,
            df: 70,
            sa: 95,
            sd: 70,
            sp: 95
        },
        weightkg: 16,
        nfe: true
    },
    Skarmory: {
        types: ["Steel", "Flying"],
        bs: {
            hp: 65,
            at: 110,
            df: 140,
            sa: 40,
            sd: 70,
            sp: 110
        },
        weightkg: 50.5
    },
    Houndour: {
        types: ["Dark", "Fire"],
        bs: {
            hp: 45,
            at: 65,
            df: 45,
            sa: 90,
            sd: 45,
            sp: 80
        },
        weightkg: 10.8,
        nfe: true
    },
    Houndoom: {
        types: ["Dark", "Fire"],
        bs: {
            hp: 75,
            at: 100,
            df: 65,
            sa: 120,
            sd: 65,
            sp: 100
        },
        weightkg: 35
    },
    Kingdra: {
        types: ["Water", "Dragon"],
        bs: {
            hp: 95,
            at: 95,
            df: 105,
            sa: 125,
            sd: 105,
            sp: 75
        },
        weightkg: 152
    },
    Phanpy: {
        types: ["Ground"],
        bs: {
            hp: 65,
            at: 80,
            df: 90,
            sa: 40,
            sd: 60,
            sp: 40
        },
        weightkg: 33.5,
        nfe: true
    },
    Donphan: {
        types: ["Ground"],
        bs: {
            hp: 90,
            at: 120,
            df: 120,
            sa: 55,
            sd: 65,
            sp: 65
        },
        weightkg: 120,
        nfe: true
    },
    Porygon2: {
        types: ["Electric", "Psychic"],
        bs: {
            hp: 75,
            at: 40,
            df: 100,
            sa: 105,
            sd: 125,
            sp: 60
        },
        weightkg: 32.5,
        nfe: true
    },
    Stantler: {
        types: ["Normal", "Psychic"],
        bs: {
            hp: 73,
            at: 100,
            df: 67,
            sa: 100,
            sd: 75,
            sp: 100
        },
        weightkg: 71.2,
        nfe: true
    },
    Smeargle: {
        types: ["Normal"],
        bs: {
            hp: 65,
            at: 60,
            df: 65,
            sa: 75,
            sd: 65,
            sp: 95
        },
        weightkg: 58
    },
    Tyrogue: {
        types: ["Fighting"],
        bs: {
            hp: 50,
            at: 80,
            df: 55,
            sa: 35,
            sd: 55,
            sp: 80
        },
        weightkg: 21,
        nfe: true
    },
    Hitmontop: {
        types: ["Fighting"],
        bs: {
            hp: 75,
            at: 110,
            df: 95,
            sa: 35,
            sd: 110,
            sp: 75
        },
        weightkg: 48
    },
    Elekid: {
        types: ["Electric"],
        bs: {
            hp: 45,
            at: 63,
            df: 47,
            sa: 70,
            sd: 55,
            sp: 95
        },
        weightkg: 23.5,
        nfe: true
    },
    Magby: {
        types: ["Fire"],
        bs: {
            hp: 45,
            at: 65,
            df: 47,
            sa: 75,
            sd: 55,
            sp: 88
        },
        weightkg: 21.4,
        nfe: true
    },
    Blissey: {
        types: ["Normal", "Fairy"],
        bs: {
            hp: 255,
            at: 10,
            df: 30,
            sa: 75,
            sd: 135,
            sp: 35
        },
        weightkg: 46.8
    },
    Raikou: {
        types: ["Electric", "Dark"],
        bs: {
            hp: 90,
            at: 115,
            df: 60,
            sa: 125,
            sd: 80,
            sp: 130
        },
        weightkg: 178
    },
    Entei: {
        types: ["Fire", "Ground"],
        bs: {
            hp: 90,
            at: 125,
            df: 85,
            sa: 125,
            sd: 75,
            sp: 100
        },
        weightkg: 198
    },
    Suicune: {
        types: ["Water", "Ice"],
        bs: {
            hp: 90,
            at: 75,
            df: 90,
            sa: 115,
            sd: 115,
            sp: 115
        },
        weightkg: 187
    },
    Larvitar: {
        types: ["Rock", "Ground"],
        bs: {
            hp: 50,
            at: 69,
            df: 90,
            sa: 30,
            sd: 70,
            sp: 51
        },
        weightkg: 72,
        nfe: true
    },
    Pupitar: {
        types: ["Rock", "Ground"],
        bs: {
            hp: 75,
            at: 104,
            df: 120,
            sa: 45,
            sd: 100,
            sp: 36
        },
        weightkg: 152,
        nfe: true
    },
    Tyranitar: {
        types: ["Rock", "Dark"],
        bs: {
            hp: 115,
            at: 144,
            df: 120,
            sa: 60,
            sd: 100,
            sp: 61
        },
        weightkg: 202
    },
    Lugia: {
        types: ["Psychic", "Flying"],
        bs: {
            hp: 106,
            at: 90,
            df: 130,
            sa: 90,
            sd: 154,
            sp: 110
        },
        weightkg: 216
    },
    "Ho-Oh": {
        types: ["Fire", "Flying"],
        bs: {
            hp: 106,
            at: 130,
            df: 90,
            sa: 110,
            sd: 154,
            sp: 90
        },
        weightkg: 199
    },
    Treecko: {
        types: ["Grass"],
        bs: {
            hp: 40,
            at: 50,
            df: 40,
            sa: 70,
            sd: 40,
            sp: 90
        },
        weightkg: 5,
        nfe: true
    },
    Grovyle: {
        types: ["Grass"],
        bs: {
            hp: 50,
            at: 95,
            df: 50,
            sa: 85,
            sd: 50,
            sp: 110
        },
        weightkg: 21.6,
        nfe: true
    },
    Sceptile: {
        types: ["Grass", "Dragon"],
        bs: {
            hp: 70,
            at: 115,
            df: 70,
            sa: 105,
            sd: 70,
            sp: 120
        },
        weightkg: 52.2
    },
    Torchic: {
        types: ["Fire"],
        bs: {
            hp: 45,
            at: 60,
            df: 50,
            sa: 70,
            sd: 50,
            sp: 55
        },
        weightkg: 2.5,
        nfe: true
    },
    Combusken: {
        types: ["Fire", "Fighting"],
        bs: {
            hp: 60,
            at: 90,
            df: 60,
            sa: 85,
            sd: 60,
            sp: 85
        },
        weightkg: 19.5,
        nfe: true
    },
    Blaziken: {
        types: ["Fire", "Fighting"],
        bs: {
            hp: 80,
            at: 120,
            df: 70,
            sa: 110,
            sd: 70,
            sp: 100
        },
        weightkg: 52
    },
    Mudkip: {
        types: ["Water"],
        bs: {
            hp: 50,
            at: 70,
            df: 55,
            sa: 65,
            sd: 55,
            sp: 40
        },
        weightkg: 7.6,
        nfe: true
    },
    Marshtomp: {
        types: ["Water", "Ground"],
        bs: {
            hp: 80,
            at: 85,
            df: 75,
            sa: 75,
            sd: 75,
            sp: 50
        },
        weightkg: 28,
        nfe: true
    },
    Swampert: {
        types: ["Water", "Ground"],
        bs: {
            hp: 110,
            at: 110,
            df: 90,
            sa: 90,
            sd: 90,
            sp: 60
        },
        weightkg: 81.9
    },
    Poochyena: {
        types: ["Dark", "Normal"],
        bs: {
            hp: 45,
            at: 80,
            df: 45,
            sa: 30,
            sd: 45,
            sp: 85
        },
        weightkg: 13.6,
        nfe: true
    },
    Mightyena: {
        types: ["Dark", "Normal"],
        bs: {
            hp: 70,
            at: 120,
            df: 70,
            sa: 45,
            sd: 70,
            sp: 105
        },
        weightkg: 37
    },
    Lotad: {
        types: ["Water", "Grass"],
        bs: {
            hp: 40,
            at: 30,
            df: 70,
            sa: 65,
            sd: 95,
            sp: 30
        },
        weightkg: 2.6,
        nfe: true
    },
    Lombre: {
        types: ["Water", "Grass"],
        bs: {
            hp: 65,
            at: 80,
            df: 70,
            sa: 90,
            sd: 95,
            sp: 80
        },
        weightkg: 32.5,
        nfe: true
    },
    Ludicolo: {
        types: ["Water", "Grass"],
        bs: {
            hp: 90,
            at: 80,
            df: 90,
            sa: 100,
            sd: 110,
            sp: 80
        },
        weightkg: 55
    },
    Seedot: {
        types: ["Grass"],
        bs: {
            hp: 40,
            at: 30,
            df: 100,
            sa: 50,
            sd: 80,
            sp: 30
        },
        weightkg: 4,
        nfe: true
    },
    Nuzleaf: {
        types: ["Grass", "Dark"],
        bs: {
            hp: 70,
            at: 80,
            df: 90,
            sa: 85,
            sd: 70,
            sp: 85
        },
        weightkg: 28,
        nfe: true
    },
    Shiftry: {
        types: ["Grass", "Dark"],
        bs: {
            hp: 90,
            at: 105,
            df: 90,
            sa: 105,
            sd: 70,
            sp: 90
        },
        weightkg: 59.6
    },
    Wingull: {
        types: ["Water", "Flying"],
        bs: {
            hp: 45,
            at: 55,
            df: 45,
            sa: 65,
            sd: 45,
            sp: 95
        },
        weightkg: 9.5,
        nfe: true
    },
    Pelipper: {
        types: ["Water", "Flying"],
        bs: {
            hp: 90,
            at: 65,
            df: 100,
            sa: 95,
            sd: 100,
            sp: 65
        },
        weightkg: 28
    },
    Ralts: {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 45,
            at: 25,
            df: 45,
            sa: 80,
            sd: 75,
            sp: 50
        },
        weightkg: 6.6,
        nfe: true
    },
    Kirlia: {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 60,
            at: 35,
            df: 60,
            sa: 95,
            sd: 90,
            sp: 80
        },
        weightkg: 20.2,
        nfe: true
    },
    Gardevoir: {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 75,
            at: 65,
            df: 65,
            sa: 130,
            sd: 115,
            sp: 100
        },
        weightkg: 48.4
    },
    Surskit: {
        types: ["Bug", "Water"],
        bs: {
            hp: 40,
            at: 20,
            df: 32,
            sa: 79,
            sd: 62,
            sp: 97
        },
        weightkg: 1.7,
        nfe: true
    },
    Masquerain: {
        types: ["Bug", "Water"],
        bs: {
            hp: 70,
            at: 35,
            df: 62,
            sa: 104,
            sd: 82,
            sp: 127
        },
        weightkg: 3.6
    },
    Shroomish: {
        types: ["Grass"],
        bs: {
            hp: 60,
            at: 40,
            df: 105,
            sa: 60,
            sd: 105,
            sp: 30
        },
        weightkg: 4.5,
        nfe: true
    },
    Breloom: {
        types: ["Grass", "Fighting"],
        bs: {
            hp: 70,
            at: 130,
            df: 80,
            sa: 60,
            sd: 80,
            sp: 105
        },
        weightkg: 39.2
    },
    Slakoth: {
        types: ["Normal", "Ice"],
        bs: {
            hp: 60,
            at: 70,
            df: 60,
            sa: 45,
            sd: 60,
            sp: 25
        },
        weightkg: 24,
        nfe: true
    },
    Vigoroth: {
        types: ["Normal", "Ice"],
        bs: {
            hp: 80,
            at: 105,
            df: 70,
            sa: 55,
            sd: 70,
            sp: 100
        },
        weightkg: 46.5,
        nfe: true
    },
    Slaking: {
        types: ["Normal", "Ice"],
        bs: {
            hp: 150,
            at: 160,
            df: 80,
            sa: 65,
            sd: 80,
            sp: 65
        },
        weightkg: 130.5
    },
    Makuhita: {
        types: ["Fighting"],
        bs: {
            hp: 72,
            at: 92,
            df: 74,
            sa: 30,
            sd: 64,
            sp: 28
        },
        weightkg: 86.4,
        nfe: true
    },
    Hariyama: {
        types: ["Fighting"],
        bs: {
            hp: 144,
            at: 120,
            df: 74,
            sa: 40,
            sd: 64,
            sp: 38
        },
        weightkg: 253.8,
        nfe: true
    },
    Azurill: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 50,
            at: 20,
            df: 40,
            sa: 40,
            sd: 55,
            sp: 70
        },
        weightkg: 2,
        nfe: true
    },
    Nosepass: {
        types: ["Rock"],
        bs: {
            hp: 50,
            at: 30,
            df: 135,
            sa: 80,
            sd: 135,
            sp: 20
        },
        weightkg: 97,
        nfe: true
    },
    Sableye: {
        types: ["Dark", "Ghost"],
        bs: {
            hp: 65,
            at: 85,
            df: 95,
            sa: 90,
            sd: 95,
            sp: 85
        },
        weightkg: 11
    },
    Mawile: {
        types: ["Steel", "Fairy"],
        bs: {
            hp: 50,
            at: 85,
            df: 85,
            sa: 55,
            sd: 55,
            sp: 50
        },
        weightkg: 11.5
    },
    Meditite: {
        types: ["Fighting", "Psychic"],
        bs: {
            hp: 50,
            at: 40,
            df: 55,
            sa: 95,
            sd: 80,
            sp: 80
        },
        weightkg: 11.2,
        nfe: true
    },
    Medicham: {
        types: ["Fighting", "Psychic"],
        bs: {
            hp: 75,
            at: 60,
            df: 75,
            sa: 125,
            sd: 110,
            sp: 80
        },
        weightkg: 31.5
    },
    Electrike: {
        types: ["Electric"],
        bs: {
            hp: 40,
            at: 45,
            df: 40,
            sa: 65,
            sd: 40,
            sp: 65
        },
        weightkg: 15.2,
        nfe: true
    },
    Manectric: {
        types: ["Electric"],
        bs: {
            hp: 70,
            at: 75,
            df: 60,
            sa: 105,
            sd: 60,
            sp: 105
        },
        weightkg: 40.2
    },
    Plusle: {
        types: ["Electric", "Fire"],
        bs: {
            hp: 65,
            at: 50,
            df: 65,
            sa: 105,
            sd: 90,
            sp: 105
        },
        weightkg: 4.2
    },
    Minun: {
        types: ["Electric", "Ice"],
        bs: {
            hp: 65,
            at: 40,
            df: 75,
            sa: 95,
            sd: 100,
            sp: 105
        },
        weightkg: 4.2
    },
    Volbeat: {
        types: ["Bug", "Electric"],
        bs: {
            hp: 75,
            at: 47,
            df: 90,
            sa: 112,
            sd: 106,
            sp: 85
        },
        weightkg: 17.7
    },
    Illumise: {
        types: ["Bug", "Fairy"],
        bs: {
            hp: 75,
            at: 47,
            df: 90,
            sa: 101,
            sd: 117,
            sp: 85
        },
        weightkg: 17.7
    },
    Gulpin: {
        types: ["Poison"],
        bs: {
            hp: 83,
            at: 20,
            df: 83,
            sa: 83,
            sd: 83,
            sp: 23
        },
        weightkg: 10.3,
        nfe: true
    },
    Swalot: {
        types: ["Poison"],
        bs: {
            hp: 166,
            at: 40,
            df: 83,
            sa: 108,
            sd: 83,
            sp: 45
        },
        weightkg: 80
    },
    Numel: {
        types: ["Fire", "Ground"],
        bs: {
            hp: 65,
            at: 70,
            df: 105,
            sa: 80,
            sd: 70,
            sp: 35
        },
        weightkg: 24,
        nfe: true
    },
    Camerupt: {
        types: ["Fire", "Ground"],
        bs: {
            hp: 110,
            at: 110,
            df: 110,
            sa: 120,
            sd: 75,
            sp: 50
        },
        weightkg: 220
    },
    Torkoal: {
        types: ["Fire"],
        bs: {
            hp: 80,
            at: 55,
            df: 140,
            sa: 100,
            sd: 120,
            sp: 20
        },
        weightkg: 80.4
    },
    Spoink: {
        types: ["Psychic"],
        bs: {
            hp: 60,
            at: 25,
            df: 60,
            sa: 95,
            sd: 95,
            sp: 80
        },
        weightkg: 30.6,
        nfe: true
    },
    Grumpig: {
        types: ["Psychic", "Dark"],
        bs: {
            hp: 110,
            at: 50,
            df: 75,
            sa: 120,
            sd: 110,
            sp: 70
        },
        weightkg: 71.5
    },
    Trapinch: {
        types: ["Bug", "Ground"],
        bs: {
            hp: 61,
            at: 113,
            df: 113,
            sa: 20,
            sd: 83,
            sp: 10
        },
        weightkg: 15,
        nfe: true
    },
    Vibrava: {
        types: ["Bug", "Ground"],
        bs: {
            hp: 71,
            at: 63,
            df: 50,
            sa: 113,
            sd: 50,
            sp: 133
        },
        weightkg: 15.3,
        nfe: true
    },
    Flygon: {
        types: ["Bug", "Dragon"],
        bs: {
            hp: 101,
            at: 118,
            df: 80,
            sa: 118,
            sd: 80,
            sp: 103
        },
        weightkg: 82
    },
    Cacnea: {
        types: ["Grass"],
        bs: {
            hp: 55,
            at: 85,
            df: 95,
            sa: 35,
            sd: 85,
            sp: 45
        },
        weightkg: 51.3,
        nfe: true
    },
    Cacturne: {
        types: ["Grass", "Dark"],
        bs: {
            hp: 80,
            at: 125,
            df: 115,
            sa: 45,
            sd: 90,
            sp: 70
        },
        weightkg: 77.4
    },
    Swablu: {
        types: ["Fairy", "Flying"],
        bs: {
            hp: 50,
            at: 40,
            df: 60,
            sa: 65,
            sd: 95,
            sp: 65
        },
        weightkg: 1.2,
        nfe: true
    },
    Altaria: {
        types: ["Dragon", "Fairy"],
        bs: {
            hp: 75,
            at: 55,
            df: 90,
            sa: 105,
            sd: 120,
            sp: 80
        },
        weightkg: 20.6
    },
    Zangoose: {
        types: ["Normal", "Fighting"],
        bs: {
            hp: 73,
            at: 123,
            df: 73,
            sa: 60,
            sd: 73,
            sp: 113
        },
        weightkg: 40.3
    },
    Seviper: {
        types: ["Poison", "Dark"],
        bs: {
            hp: 73,
            at: 123,
            df: 73,
            sa: 60,
            sd: 73,
            sp: 113
        },
        weightkg: 52.5
    },
    Barboach: {
        types: ["Water", "Ground"],
        bs: {
            hp: 60,
            at: 48,
            df: 75,
            sa: 46,
            sd: 75,
            sp: 69
        },
        weightkg: 1.9,
        nfe: true
    },
    Whiscash: {
        types: ["Water", "Ground"],
        bs: {
            hp: 120,
            at: 88,
            df: 95,
            sa: 78,
            sd: 95,
            sp: 59
        },
        weightkg: 23.6
    },
    Corphish: {
        types: ["Water"],
        bs: {
            hp: 43,
            at: 85,
            df: 105,
            sa: 37,
            sd: 85,
            sp: 45
        },
        weightkg: 11.5,
        nfe: true
    },
    Crawdaunt: {
        types: ["Water", "Dark"],
        bs: {
            hp: 73,
            at: 125,
            df: 115,
            sa: 57,
            sd: 95,
            sp: 60
        },
        weightkg: 32.8
    },
    Feebas: {
        types: ["Water"],
        bs: {
            hp: 44,
            at: 15,
            df: 85,
            sa: 45,
            sd: 85,
            sp: 61
        },
        weightkg: 7.4,
        nfe: true
    },
    Milotic: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 114,
            at: 80,
            df: 90,
            sa: 110,
            sd: 125,
            sp: 81
        },
        weightkg: 162
    },
    Shuppet: {
        types: ["Ghost", "Normal"],
        bs: {
            hp: 44,
            at: 75,
            df: 35,
            sa: 73,
            sd: 73,
            sp: 75
        },
        weightkg: 2.3,
        nfe: true
    },
    Banette: {
        types: ["Ghost", "Normal"],
        bs: {
            hp: 69,
            at: 115,
            df: 65,
            sa: 103,
            sd: 103,
            sp: 70
        },
        weightkg: 12.5
    },
    Duskull: {
        types: ["Ghost"],
        bs: {
            hp: 40,
            at: 20,
            df: 100,
            sa: 60,
            sd: 120,
            sp: 20
        },
        weightkg: 15,
        nfe: true
    },
    Dusclops: {
        types: ["Ghost"],
        bs: {
            hp: 80,
            at: 70,
            df: 100,
            sa: 90,
            sd: 120,
            sp: 20
        },
        weightkg: 30.6,
        nfe: true
    },
    Tropius: {
        types: ["Grass", "Dragon"],
        bs: {
            hp: 129,
            at: 108,
            df: 93,
            sa: 102,
            sd: 92,
            sp: 51
        },
        weightkg: 100
    },
    Chimecho: {
        types: ["Psychic", "Flying"],
        bs: {
            hp: 75,
            at: 40,
            df: 95,
            sa: 110,
            sd: 110,
            sp: 95
        },
        weightkg: 1
    },
    Snorunt: {
        types: ["Ice"],
        bs: {
            hp: 50,
            at: 50,
            df: 80,
            sa: 70,
            sd: 50,
            sp: 50
        },
        weightkg: 16.8,
        nfe: true
    },
    Glalie: {
        types: ["Ice", "Rock"],
        bs: {
            hp: 80,
            at: 100,
            df: 120,
            sa: 90,
            sd: 80,
            sp: 80
        },
        weightkg: 256.5
    },
    Luvdisc: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 65,
            at: 15,
            df: 80,
            sa: 75,
            sd: 100,
            sp: 115
        },
        weightkg: 8.7,
        nfe: true
    },
    Bagon: {
        types: ["Dragon"],
        bs: {
            hp: 55,
            at: 75,
            df: 85,
            sa: 25,
            sd: 60,
            sp: 60
        },
        weightkg: 42.1,
        nfe: true
    },
    Shelgon: {
        types: ["Dragon"],
        bs: {
            hp: 80,
            at: 95,
            df: 135,
            sa: 30,
            sd: 110,
            sp: 30
        },
        weightkg: 110.5,
        nfe: true
    },
    Salamence: {
        types: ["Dragon", "Flying"],
        bs: {
            hp: 95,
            at: 135,
            df: 80,
            sa: 110,
            sd: 80,
            sp: 100
        },
        weightkg: 102.6
    },
    Beldum: {
        types: ["Steel", "Psychic"],
        bs: {
            hp: 40,
            at: 40,
            df: 110,
            sa: 80,
            sd: 70,
            sp: 20
        },
        weightkg: 95.2,
        nfe: true
    },
    Metang: {
        types: ["Steel", "Psychic"],
        bs: {
            hp: 65,
            at: 95,
            df: 120,
            sa: 95,
            sd: 80,
            sp: 25
        },
        weightkg: 202.5,
        nfe: true
    },
    Metagross: {
        types: ["Steel", "Psychic"],
        bs: {
            hp: 100,
            at: 135,
            df: 130,
            sa: 115,
            sd: 90,
            sp: 30
        },
        weightkg: 550
    },
    Regirock: {
        types: ["Rock"],
        bs: {
            hp: 80,
            at: 150,
            df: 200,
            sa: 50,
            sd: 100,
            sp: 20
        },
        weightkg: 230
    },
    Regice: {
        types: ["Ice"],
        bs: {
            hp: 80,
            at: 50,
            df: 100,
            sa: 150,
            sd: 200,
            sp: 20
        },
        weightkg: 175
    },
    Registeel: {
        types: ["Steel"],
        bs: {
            hp: 80,
            at: 100,
            df: 150,
            sa: 100,
            sd: 150,
            sp: 20
        },
        weightkg: 205
    },
    Latias: {
        types: ["Dragon", "Fairy"],
        bs: {
            hp: 80,
            at: 60,
            df: 90,
            sa: 110,
            sd: 130,
            sp: 130
        },
        weightkg: 40
    },
    Latios: {
        types: ["Dragon", "Psychic"],
        bs: {
            hp: 80,
            at: 90,
            df: 60,
            sa: 130,
            sd: 110,
            sp: 130
        },
        weightkg: 60
    },
    Kyogre: {
        types: ["Water"],
        bs: {
            hp: 100,
            at: 100,
            df: 90,
            sa: 150,
            sd: 140,
            sp: 90
        },
        weightkg: 352
    },
    Groudon: {
        types: ["Ground"],
        bs: {
            hp: 100,
            at: 150,
            df: 140,
            sa: 100,
            sd: 90,
            sp: 90
        },
        weightkg: 950
    },
    Rayquaza: {
        types: ["Dragon", "Flying"],
        bs: {
            hp: 105,
            at: 150,
            df: 90,
            sa: 150,
            sd: 90,
            sp: 95
        },
        weightkg: 206.5
    },
    Jirachi: {
        types: ["Fairy", "Steel"],
        bs: {
            hp: 100,
            at: 65,
            df: 100,
            sa: 120,
            sd: 135,
            sp: 100
        },
        weightkg: 1.1
    },
    Deoxys: {
        types: ["Psychic"],
        bs: {
            hp: 80,
            at: 120,
            df: 80,
            sa: 120,
            sd: 80,
            sp: 120
        },
        weightkg: 60.8,
        otherFormes: ["Deoxys-Attack", "Deoxys-Defense", "Deoxys-Speed"]
    },
    "Deoxys-Attack": {
        types: ["Psychic"],
        bs: {
            hp: 80,
            at: 180,
            df: 20,
            sa: 180,
            sd: 20,
            sp: 120
        },
        weightkg: 60.8,
        baseSpecies: "Deoxys"
    },
    "Deoxys-Defense": {
        types: ["Psychic"],
        bs: {
            hp: 80,
            at: 70,
            df: 180,
            sa: 70,
            sd: 180,
            sp: 20
        },
        weightkg: 60.8,
        baseSpecies: "Deoxys"
    },
    "Deoxys-Speed": {
        types: ["Psychic"],
        bs: {
            hp: 80,
            at: 80,
            df: 90,
            sa: 80,
            sd: 90,
            sp: 180
        },
        weightkg: 60.8,
        baseSpecies: "Deoxys"
    },
    Turtwig: {
        types: ["Grass"],
        bs: {
            hp: 55,
            at: 60,
            df: 85,
            sa: 34,
            sd: 65,
            sp: 31
        },
        weightkg: 10.2,
        nfe: true
    },
    Grotle: {
        types: ["Grass"],
        bs: {
            hp: 75,
            at: 90,
            df: 115,
            sa: 39,
            sd: 85,
            sp: 36
        },
        weightkg: 97,
        nfe: true
    },
    Torterra: {
        types: ["Grass", "Ground"],
        bs: {
            hp: 115,
            at: 120,
            df: 125,
            sa: 44,
            sd: 90,
            sp: 56
        },
        weightkg: 310
    },
    Chimchar: {
        types: ["Fire"],
        bs: {
            hp: 44,
            at: 63,
            df: 44,
            sa: 63,
            sd: 44,
            sp: 72
        },
        weightkg: 6.2,
        nfe: true
    },
    Monferno: {
        types: ["Fire", "Fighting"],
        bs: {
            hp: 56,
            at: 88,
            df: 52,
            sa: 88,
            sd: 52,
            sp: 104
        },
        weightkg: 22,
        nfe: true
    },
    Infernape: {
        types: ["Fire", "Fighting"],
        bs: {
            hp: 76,
            at: 104,
            df: 71,
            sa: 104,
            sd: 71,
            sp: 124
        },
        weightkg: 55
    },
    Piplup: {
        types: ["Water"],
        bs: {
            hp: 53,
            at: 53,
            df: 58,
            sa: 65,
            sd: 61,
            sp: 40
        },
        weightkg: 5.2,
        nfe: true
    },
    Prinplup: {
        types: ["Water"],
        bs: {
            hp: 73,
            at: 88,
            df: 78,
            sa: 65,
            sd: 86,
            sp: 50
        },
        weightkg: 23,
        nfe: true
    },
    Empoleon: {
        types: ["Water", "Steel"],
        bs: {
            hp: 88,
            at: 118,
            df: 118,
            sa: 65,
            sd: 101,
            sp: 60
        },
        weightkg: 84.5
    },
    Starly: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 45,
            at: 55,
            df: 45,
            sa: 30,
            sd: 45,
            sp: 80
        },
        weightkg: 2,
        nfe: true
    },
    Staravia: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 60,
            at: 80,
            df: 60,
            sa: 40,
            sd: 60,
            sp: 100
        },
        weightkg: 15.5,
        nfe: true
    },
    Staraptor: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 85,
            at: 120,
            df: 80,
            sa: 50,
            sd: 75,
            sp: 105
        },
        weightkg: 24.9
    },
    Kricketot: {
        types: ["Bug", "Normal"],
        bs: {
            hp: 47,
            at: 41,
            df: 51,
            sa: 71,
            sd: 51,
            sp: 59
        },
        weightkg: 2.2,
        nfe: true
    },
    Kricketune: {
        types: ["Bug", "Normal"],
        bs: {
            hp: 77,
            at: 101,
            df: 51,
            sa: 101,
            sd: 51,
            sp: 99
        },
        weightkg: 25.5
    },
    Shinx: {
        types: ["Electric"],
        bs: {
            hp: 45,
            at: 65,
            df: 44,
            sa: 65,
            sd: 44,
            sp: 67
        },
        weightkg: 9.5,
        nfe: true
    },
    Luxio: {
        types: ["Electric", "Dark"],
        bs: {
            hp: 60,
            at: 90,
            df: 54,
            sa: 85,
            sd: 54,
            sp: 97
        },
        weightkg: 30.5,
        nfe: true
    },
    Luxray: {
        types: ["Electric", "Dark"],
        bs: {
            hp: 80,
            at: 120,
            df: 79,
            sa: 100,
            sd: 79,
            sp: 92
        },
        weightkg: 42
    },
    Cranidos: {
        types: ["Rock", "Dragon"],
        bs: {
            hp: 67,
            at: 110,
            df: 100,
            sa: 30,
            sd: 50,
            sp: 68
        },
        weightkg: 31.5,
        nfe: true
    },
    Rampardos: {
        types: ["Rock", "Dragon"],
        bs: {
            hp: 107,
            at: 150,
            df: 115,
            sa: 35,
            sd: 65,
            sp: 78
        },
        weightkg: 102.5
    },
    Shieldon: {
        types: ["Rock", "Steel"],
        bs: {
            hp: 67,
            at: 62,
            df: 138,
            sa: 15,
            sd: 118,
            sp: 25
        },
        weightkg: 57,
        nfe: true
    },
    Bastiodon: {
        types: ["Rock", "Steel"],
        bs: {
            hp: 107,
            at: 102,
            df: 168,
            sa: 20,
            sd: 138,
            sp: 15
        },
        weightkg: 149.5
    },
    Combee: {
        types: ["Bug", "Flying"],
        bs: {
            hp: 52,
            at: 37,
            df: 102,
            sa: 52,
            sd: 102,
            sp: 90
        },
        weightkg: 5.5,
        nfe: true
    },
    Vespiquen: {
        types: ["Bug", "Flying"],
        bs: {
            hp: 102,
            at: 82,
            df: 117,
            sa: 102,
            sd: 117,
            sp: 30
        },
        weightkg: 38.5
    },
    Pachirisu: {
        types: ["Electric", "Normal"],
        bs: {
            hp: 65,
            at: 45,
            df: 70,
            sa: 90,
            sd: 95,
            sp: 115
        },
        weightkg: 3.9
    },
    Buizel: {
        types: ["Water", "Normal"],
        bs: {
            hp: 55,
            at: 65,
            df: 45,
            sa: 65,
            sd: 45,
            sp: 100
        },
        weightkg: 29.5,
        nfe: true
    },
    Floatzel: {
        types: ["Water", "Normal"],
        bs: {
            hp: 85,
            at: 105,
            df: 65,
            sa: 95,
            sd: 65,
            sp: 115
        },
        weightkg: 33.5
    },
    Shellos: {
        types: ["Water", "Ground"],
        bs: {
            hp: 76,
            at: 48,
            df: 63,
            sa: 77,
            sd: 87,
            sp: 24
        },
        weightkg: 6.3,
        nfe: true
    },
    Gastrodon: {
        types: ["Water", "Ground"],
        bs: {
            hp: 111,
            at: 68,
            df: 78,
            sa: 107,
            sd: 107,
            sp: 29
        },
        weightkg: 29.9
    },
    Ambipom: {
        types: ["Normal"],
        bs: {
            hp: 75,
            at: 100,
            df: 75,
            sa: 60,
            sd: 75,
            sp: 115
        },
        weightkg: 20.3
    },
    Drifloon: {
        types: ["Ghost", "Flying"],
        bs: {
            hp: 90,
            at: 20,
            df: 40,
            sa: 75,
            sd: 75,
            sp: 75
        },
        weightkg: 1.2,
        nfe: true
    },
    Drifblim: {
        types: ["Ghost", "Flying"],
        bs: {
            hp: 150,
            at: 45,
            df: 60,
            sa: 100,
            sd: 100,
            sp: 80
        },
        weightkg: 15
    },
    Mismagius: {
        types: ["Ghost", "Psychic"],
        bs: {
            hp: 65,
            at: 45,
            df: 65,
            sa: 125,
            sd: 125,
            sp: 125
        },
        weightkg: 4.4
    },
    Honchkrow: {
        types: ["Dark", "Flying"],
        bs: {
            hp: 70,
            at: 125,
            df: 70,
            sa: 105,
            sd: 70,
            sp: 95
        },
        weightkg: 27.3
    },
    Chingling: {
        types: ["Psychic", "Flying"],
        bs: {
            hp: 45,
            at: 30,
            df: 75,
            sa: 80,
            sd: 80,
            sp: 65
        },
        weightkg: 0.6,
        nfe: true
    },
    Bronzor: {
        types: ["Steel", "Psychic"],
        bs: {
            hp: 53,
            at: 24,
            df: 118,
            sa: 89,
            sd: 118,
            sp: 23
        },
        weightkg: 60.5,
        nfe: true
    },
    Bronzong: {
        types: ["Steel", "Psychic"],
        bs: {
            hp: 73,
            at: 89,
            df: 123,
            sa: 109,
            sd: 123,
            sp: 33
        },
        weightkg: 187
    },
    Bonsly: {
        types: ["Rock"],
        bs: {
            hp: 50,
            at: 80,
            df: 110,
            sa: 10,
            sd: 90,
            sp: 35
        },
        weightkg: 15,
        nfe: true
    },
    Happiny: {
        types: ["Normal", "Fairy"],
        bs: {
            hp: 105,
            at: 5,
            df: 5,
            sa: 45,
            sd: 105,
            sp: 35
        },
        weightkg: 24.4,
        nfe: true
    },
    Chatot: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 76,
            at: 65,
            df: 45,
            sa: 92,
            sd: 42,
            sp: 91
        },
        weightkg: 1.9
    },
    Spiritomb: {
        types: ["Ghost", "Dark"],
        bs: {
            hp: 108,
            at: 45,
            df: 108,
            sa: 148,
            sd: 108,
            sp: 8
        },
        weightkg: 108
    },
    Gible: {
        types: ["Dragon", "Ground"],
        bs: {
            hp: 58,
            at: 90,
            df: 75,
            sa: 30,
            sd: 65,
            sp: 42
        },
        weightkg: 20.5,
        nfe: true
    },
    Gabite: {
        types: ["Dragon", "Ground"],
        bs: {
            hp: 68,
            at: 100,
            df: 95,
            sa: 40,
            sd: 85,
            sp: 92
        },
        weightkg: 56,
        nfe: true
    },
    Garchomp: {
        types: ["Dragon", "Ground"],
        bs: {
            hp: 112,
            at: 130,
            df: 95,
            sa: 66,
            sd: 85,
            sp: 112
        },
        weightkg: 95
    },
    Munchlax: {
        types: ["Normal"],
        bs: {
            hp: 135,
            at: 85,
            df: 50,
            sa: 40,
            sd: 85,
            sp: 5
        },
        weightkg: 105,
        nfe: true
    },
    Riolu: {
        types: ["Fighting"],
        bs: {
            hp: 40,
            at: 75,
            df: 40,
            sa: 75,
            sd: 40,
            sp: 95
        },
        weightkg: 20.2,
        nfe: true
    },
    Lucario: {
        types: ["Fighting", "Steel"],
        bs: {
            hp: 70,
            at: 115,
            df: 70,
            sa: 115,
            sd: 70,
            sp: 110
        },
        weightkg: 54
    },
    Hippopotas: {
        types: ["Ground"],
        bs: {
            hp: 68,
            at: 88,
            df: 98,
            sa: 37,
            sd: 77,
            sp: 32
        },
        weightkg: 49.5,
        nfe: true
    },
    Hippowdon: {
        types: ["Ground"],
        bs: {
            hp: 123,
            at: 128,
            df: 118,
            sa: 52,
            sd: 82,
            sp: 47
        },
        weightkg: 300
    },
    Croagunk: {
        types: ["Poison", "Fighting"],
        bs: {
            hp: 48,
            at: 66,
            df: 50,
            sa: 66,
            sd: 50,
            sp: 95
        },
        weightkg: 23,
        nfe: true
    },
    Toxicroak: {
        types: ["Poison", "Fighting"],
        bs: {
            hp: 78,
            at: 116,
            df: 65,
            sa: 86,
            sd: 65,
            sp: 125
        },
        weightkg: 44.4
    },
    Finneon: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 49,
            at: 24,
            df: 56,
            sa: 69,
            sd: 96,
            sp: 81
        },
        weightkg: 7,
        nfe: true
    },
    Lumineon: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 74,
            at: 49,
            df: 76,
            sa: 109,
            sd: 116,
            sp: 91
        },
        weightkg: 24
    },
    Snover: {
        types: ["Grass", "Ice"],
        bs: {
            hp: 61,
            at: 82,
            df: 85,
            sa: 82,
            sd: 85,
            sp: 30
        },
        weightkg: 50.5,
        nfe: true
    },
    Abomasnow: {
        types: ["Grass", "Ice"],
        bs: {
            hp: 122,
            at: 122,
            df: 85,
            sa: 102,
            sd: 85,
            sp: 59
        },
        weightkg: 135.5
    },
    Weavile: {
        types: ["Dark", "Ice"],
        bs: {
            hp: 70,
            at: 120,
            df: 65,
            sa: 60,
            sd: 85,
            sp: 125
        },
        weightkg: 34
    },
    Magnezone: {
        types: ["Electric", "Steel"],
        bs: {
            hp: 80,
            at: 70,
            df: 135,
            sa: 145,
            sd: 110,
            sp: 60
        },
        weightkg: 180
    },
    Rhyperior: {
        types: ["Ground", "Rock"],
        bs: {
            hp: 115,
            at: 150,
            df: 140,
            sa: 50,
            sd: 115,
            sp: 30
        },
        weightkg: 282.8
    },
    Electivire: {
        types: ["Electric", "Fighting"],
        bs: {
            hp: 95,
            at: 123,
            df: 77,
            sa: 110,
            sd: 85,
            sp: 85
        },
        weightkg: 138.6
    },
    Magmortar: {
        types: ["Fire", "Steel"],
        bs: {
            hp: 95,
            at: 95,
            df: 97,
            sa: 125,
            sd: 95,
            sp: 68
        },
        weightkg: 68
    },
    Yanmega: {
        types: ["Bug", "Dragon"],
        bs: {
            hp: 100,
            at: 91,
            df: 72,
            sa: 116,
            sd: 56,
            sp: 140
        },
        weightkg: 51.5
    },
    Leafeon: {
        types: ["Grass"],
        bs: {
            hp: 70,
            at: 110,
            df: 70,
            sa: 96,
            sd: 70,
            sp: 110
        },
        weightkg: 25.5
    },
    Glaceon: {
        types: ["Ice"],
        bs: {
            hp: 70,
            at: 60,
            df: 95,
            sa: 130,
            sd: 95,
            sp: 75
        },
        weightkg: 25.9
    },
    Gliscor: {
        types: ["Poison", "Dark"],
        bs: {
            hp: 95,
            at: 120,
            df: 125,
            sa: 35,
            sd: 80,
            sp: 95
        },
        weightkg: 42.5
    },
    Mamoswine: {
        types: ["Ice", "Ground"],
        bs: {
            hp: 130,
            at: 130,
            df: 100,
            sa: 55,
            sd: 80,
            sp: 80
        },
        weightkg: 291
    },
    "Porygon-Z": {
        types: ["Electric", "Psychic"],
        bs: {
            hp: 75,
            at: 80,
            df: 50,
            sa: 150,
            sd: 75,
            sp: 120
        },
        weightkg: 34
    },
    Gallade: {
        types: ["Psychic", "Fighting"],
        bs: {
            hp: 75,
            at: 130,
            df: 65,
            sa: 65,
            sd: 115,
            sp: 100
        },
        weightkg: 52
    },
    Probopass: {
        types: ["Rock", "Steel"],
        bs: {
            hp: 80,
            at: 55,
            df: 150,
            sa: 110,
            sd: 150,
            sp: 30
        },
        weightkg: 340
    },
    Dusknoir: {
        types: ["Ghost", "Fighting"],
        bs: {
            hp: 120,
            at: 120,
            df: 100,
            sa: 120,
            sd: 120,
            sp: 20
        },
        weightkg: 106.6
    },
    Froslass: {
        types: ["Ice", "Ghost"],
        bs: {
            hp: 70,
            at: 70,
            df: 70,
            sa: 120,
            sd: 100,
            sp: 110
        },
        weightkg: 26.6
    },
    Rotom: {
        types: ["Electric", "Ghost"],
        bs: {
            hp: 50,
            at: 29,
            df: 50,
            sa: 125,
            sd: 95,
            sp: 151
        },
        weightkg: 0.3,
        otherFormes: [
            "Rotom-Heat",
            "Rotom-Wash",
            "Rotom-Fan",
            "Rotom-Frost",
            "Rotom-Mow",
        ]
    },
    "Rotom-Heat": {
        types: ["Electric", "Fire"],
        bs: {
            hp: 60,
            at: 40,
            df: 102,
            sa: 125,
            sd: 102,
            sp: 121
        },
        weightkg: 0.3,
        baseSpecies: "Rotom"
    },
    "Rotom-Wash": {
        types: ["Electric", "Water"],
        bs: {
            hp: 80,
            at: 40,
            df: 107,
            sa: 125,
            sd: 107,
            sp: 91
        },
        weightkg: 0.3,
        baseSpecies: "Rotom"
    },
    "Rotom-Frost": {
        types: ["Electric", "Ice"],
        bs: {
            hp: 75,
            at: 40,
            df: 107,
            sa: 125,
            sd: 107,
            sp: 96
        },
        weightkg: 0.3,
        baseSpecies: "Rotom"
    },
    "Rotom-Fan": {
        types: ["Electric", "Flying"],
        bs: {
            hp: 50,
            at: 40,
            df: 102,
            sa: 125,
            sd: 107,
            sp: 121
        },
        weightkg: 0.3,
        baseSpecies: "Rotom"
    },
    "Rotom-Mow": {
        types: ["Electric", "Grass"],
        bs: {
            hp: 70,
            at: 40,
            df: 107,
            sa: 125,
            sd: 107,
            sp: 101
        },
        weightkg: 0.3,
        baseSpecies: "Rotom"
    },
    Uxie: {
        types: ["Psychic", "Normal"],
        bs: {
            hp: 75,
            at: 40,
            df: 130,
            sa: 115,
            sd: 150,
            sp: 90
        },
        weightkg: 0.3
    },
    Mesprit: {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 75,
            at: 60,
            df: 105,
            sa: 125,
            sd: 125,
            sp: 110
        },
        weightkg: 0.3
    },
    Azelf: {
        types: ["Psychic", "Fighting"],
        bs: {
            hp: 75,
            at: 80,
            df: 80,
            sa: 135,
            sd: 100,
            sp: 130
        },
        weightkg: 0.3
    },
    Heatran: {
        types: ["Fire", "Steel"],
        bs: {
            hp: 101,
            at: 90,
            df: 116,
            sa: 130,
            sd: 116,
            sp: 47
        },
        weightkg: 430
    },
    Regigigas: {
        types: ["Normal", "Ground"],
        bs: {
            hp: 200,
            at: 250,
            df: 100,
            sa: 40,
            sd: 100,
            sp: 10
        },
        weightkg: 420
    },
    Giratina: {
        types: ["Ghost", "Dragon"],
        bs: {
            hp: 150,
            at: 100,
            df: 120,
            sa: 100,
            sd: 120,
            sp: 90
        },
        weightkg: 750,
        otherFormes: ["Giratina-Origin"]
    },
    "Giratina-Origin": {
        types: ["Ghost", "Dragon"],
        bs: {
            hp: 150,
            at: 120,
            df: 100,
            sa: 120,
            sd: 100,
            sp: 90
        },
        weightkg: 650,
        baseSpecies: "Giratina"
    },
    Cresselia: {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 120,
            at: 55,
            df: 110,
            sa: 110,
            sd: 120,
            sp: 85
        },
        weightkg: 85.6
    },
    Phione: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 80,
            at: 45,
            df: 80,
            sa: 80,
            sd: 135,
            sp: 80
        },
        weightkg: 3.1,
        nfe: true
    },
    Manaphy: {
        types: ["Water", "Psychic"],
        bs: {
            hp: 100,
            at: 45,
            df: 80,
            sa: 135,
            sd: 135,
            sp: 80
        },
        weightkg: 1.4
    },
    Darkrai: {
        types: ["Dark", "Ghost"],
        bs: {
            hp: 70,
            at: 90,
            df: 60,
            sa: 150,
            sd: 90,
            sp: 140
        },
        weightkg: 50.5
    },
    Shaymin: {
        types: ["Fairy", "Grass"],
        bs: {
            hp: 100,
            at: 40,
            df: 115,
            sa: 115,
            sd: 135,
            sp: 70
        },
        weightkg: 2.1,
        otherFormes: ["Shaymin-Sky"]
    },
    "Shaymin-Sky": {
        types: ["Flying", "Grass"],
        bs: {
            hp: 100,
            at: 70,
            df: 60,
            sa: 125,
            sd: 115,
            sp: 130
        },
        weightkg: 5.2,
        baseSpecies: "Shaymin"
    },
    Snivy: {
        types: ["Grass"],
        bs: {
            hp: 43,
            at: 40,
            df: 49,
            sa: 60,
            sd: 65,
            sp: 73
        },
        weightkg: 8.1,
        nfe: true
    },
    Servine: {
        types: ["Grass"],
        bs: {
            hp: 63,
            at: 60,
            df: 69,
            sa: 70,
            sd: 75,
            sp: 103
        },
        weightkg: 16,
        nfe: true
    },
    Serperior: {
        types: ["Grass", "Dragon"],
        bs: {
            hp: 113,
            at: 75,
            df: 79,
            sa: 75,
            sd: 95,
            sp: 113
        },
        weightkg: 63
    },
    Tepig: {
        types: ["Fire"],
        bs: {
            hp: 65,
            at: 63,
            df: 56,
            sa: 45,
            sd: 56,
            sp: 45
        },
        weightkg: 9.9,
        nfe: true
    },
    Pignite: {
        types: ["Fire", "Fighting"],
        bs: {
            hp: 95,
            at: 93,
            df: 66,
            sa: 60,
            sd: 66,
            sp: 55
        },
        weightkg: 55.5,
        nfe: true
    },
    Emboar: {
        types: ["Fire", "Fighting"],
        bs: {
            hp: 130,
            at: 123,
            df: 81,
            sa: 70,
            sd: 81,
            sp: 65
        },
        weightkg: 150
    },
    Oshawott: {
        types: ["Water"],
        bs: {
            hp: 55,
            at: 65,
            df: 50,
            sa: 45,
            sd: 50,
            sp: 65
        },
        weightkg: 5.9,
        nfe: true
    },
    Dewott: {
        types: ["Water", "Fighting"],
        bs: {
            hp: 75,
            at: 90,
            df: 60,
            sa: 60,
            sd: 60,
            sp: 95
        },
        weightkg: 24.5,
        nfe: true
    },
    Samurott: {
        types: ["Water", "Fighting"],
        bs: {
            hp: 95,
            at: 115,
            df: 110,
            sa: 70,
            sd: 85,
            sp: 75
        },
        weightkg: 94.6,
        otherFormes: ["Samurott-Hisui"]
    },
    "Samurott-Hisui": {
        types: ["Water", "Dark"],
        bs: {
            hp: 95,
            at: 120,
            df: 100,
            sa: 70,
            sd: 75,
            sp: 90
        },
        weightkg: 58.2,
        baseSpecies: "Samurott"
    },
    Blitzle: {
        types: ["Electric", "Normal"],
        bs: {
            hp: 55,
            at: 75,
            df: 52,
            sa: 75,
            sd: 52,
            sp: 106
        },
        weightkg: 29.8,
        nfe: true
    },
    Zebstrika: {
        types: ["Electric", "Normal"],
        bs: {
            hp: 75,
            at: 110,
            df: 67,
            sa: 90,
            sd: 67,
            sp: 126
        },
        weightkg: 79.5
    },
    Timburr: {
        types: ["Fighting"],
        bs: {
            hp: 55,
            at: 80,
            df: 95,
            sa: 25,
            sd: 40,
            sp: 35
        },
        weightkg: 12.5,
        nfe: true
    },
    Gurdurr: {
        types: ["Fighting", "Steel"],
        bs: {
            hp: 80,
            at: 120,
            df: 110,
            sa: 40,
            sd: 50,
            sp: 40
        },
        weightkg: 40,
        nfe: true
    },
    Conkeldurr: {
        types: ["Fighting", "Rock"],
        bs: {
            hp: 120,
            at: 145,
            df: 115,
            sa: 45,
            sd: 80,
            sp: 45
        },
        weightkg: 87
    },
    Sewaddle: {
        types: ["Bug", "Grass"],
        bs: {
            hp: 45,
            at: 53,
            df: 70,
            sa: 55,
            sd: 70,
            sp: 27
        },
        weightkg: 2.5,
        nfe: true
    },
    Swadloon: {
        types: ["Bug", "Grass"],
        bs: {
            hp: 60,
            at: 63,
            df: 95,
            sa: 70,
            sd: 95,
            sp: 37
        },
        weightkg: 7.3,
        nfe: true
    },
    Leavanny: {
        types: ["Bug", "Grass"],
        bs: {
            hp: 75,
            at: 108,
            df: 80,
            sa: 95,
            sd: 80,
            sp: 112
        },
        weightkg: 20.5
    },
    Cottonee: {
        types: ["Grass", "Fairy"],
        bs: {
            hp: 45,
            at: 27,
            df: 60,
            sa: 67,
            sd: 95,
            sp: 81
        },
        weightkg: 0.6,
        nfe: true
    },
    Whimsicott: {
        types: ["Grass", "Fairy"],
        bs: {
            hp: 65,
            at: 47,
            df: 85,
            sa: 92,
            sd: 110,
            sp: 116
        },
        weightkg: 6.6
    },
    Petilil: {
        types: ["Grass", "Fairy"],
        bs: {
            hp: 45,
            at: 35,
            df: 70,
            sa: 85,
            sd: 85,
            sp: 55
        },
        weightkg: 6.6,
        nfe: true
    },
    Lilligant: {
        types: ["Fairy", "Grass"],
        bs: {
            hp: 70,
            at: 50,
            df: 75,
            sa: 110,
            sd: 110,
            sp: 90
        },
        weightkg: 16.3,
        otherFormes: ["Lilligant-Hisui"]
    },
    "Lilligant-Hisui": {
        types: ["Grass", "Fighting"],
        bs: {
            hp: 70,
            at: 110,
            df: 75,
            sa: 50,
            sd: 90,
            sp: 110
        },
        weightkg: 19.2,
        baseSpecies: "Lilligant"
    },
    Basculin: {
        types: ["Water", "Fighting"],
        bs: {
            hp: 70,
            at: 107,
            df: 70,
            sa: 90,
            sd: 70,
            sp: 108
        },
        weightkg: 18,
        otherFormes: ["Basculin-Blue-Striped", "Basculin-White-Striped"]
    },
    "Basculin-Blue-Striped": {
        types: ["Water", "Dark"],
        bs: {
            hp: 70,
            at: 107,
            df: 70,
            sa: 90,
            sd: 70,
            sp: 108
        },
        weightkg: 18,
        baseSpecies: "Basculin"
    },
    "Basculin-White-Striped": {
        types: ["Water"],
        bs: {
            hp: 62,
            at: 80,
            df: 65,
            sa: 80,
            sd: 65,
            sp: 98
        },
        weightkg: 18,
        nfe: true,
        baseSpecies: "Basculin"
    },
    Sandile: {
        types: ["Ground", "Dark"],
        bs: {
            hp: 50,
            at: 92,
            df: 50,
            sa: 31,
            sd: 40,
            sp: 67
        },
        weightkg: 15.2,
        nfe: true
    },
    Krokorok: {
        types: ["Ground", "Dark"],
        bs: {
            hp: 75,
            at: 117,
            df: 65,
            sa: 41,
            sd: 55,
            sp: 87
        },
        weightkg: 33.4,
        nfe: true
    },
    Krookodile: {
        types: ["Ground", "Dark"],
        bs: {
            hp: 95,
            at: 117,
            df: 80,
            sa: 65,
            sd: 70,
            sp: 92
        },
        weightkg: 96.3
    },
    Dwebble: {
        types: ["Bug", "Rock"],
        bs: {
            hp: 50,
            at: 65,
            df: 85,
            sa: 35,
            sd: 35,
            sp: 55
        },
        weightkg: 14.5,
        nfe: true
    },
    Crustle: {
        types: ["Bug", "Rock"],
        bs: {
            hp: 70,
            at: 105,
            df: 125,
            sa: 65,
            sd: 75,
            sp: 45
        },
        weightkg: 200
    },
    Zorua: {
        types: ["Dark"],
        bs: {
            hp: 45,
            at: 65,
            df: 40,
            sa: 90,
            sd: 40,
            sp: 95
        },
        weightkg: 12.5,
        nfe: true,
        otherFormes: ["Zorua-Hisui"]
    },
    "Zorua-Hisui": {
        types: ["Normal", "Ghost"],
        bs: {
            hp: 45,
            at: 65,
            df: 40,
            sa: 90,
            sd: 40,
            sp: 95
        },
        weightkg: 12.5,
        nfe: true,
        baseSpecies: "Zorua"
    },
    Zoroark: {
        types: ["Dark"],
        bs: {
            hp: 70,
            at: 110,
            df: 65,
            sa: 125,
            sd: 65,
            sp: 115
        },
        weightkg: 81.1,
        otherFormes: ["Zoroark-Hisui"]
    },
    "Zoroark-Hisui": {
        types: ["Normal", "Ghost"],
        bs: {
            hp: 70,
            at: 110,
            df: 65,
            sa: 125,
            sd: 65,
            sp: 115
        },
        weightkg: 73,
        baseSpecies: "Zoroark"
    },
    Minccino: {
        types: ["Normal", "Fairy"],
        bs: {
            hp: 50,
            at: 55,
            df: 40,
            sa: 55,
            sd: 55,
            sp: 95
        },
        weightkg: 5.8,
        nfe: true
    },
    Cinccino: {
        types: ["Normal", "Fairy"],
        bs: {
            hp: 65,
            at: 95,
            df: 60,
            sa: 70,
            sd: 95,
            sp: 115
        },
        weightkg: 7.5
    },
    Gothita: {
        types: ["Fairy", "Dark"],
        bs: {
            hp: 45,
            at: 30,
            df: 50,
            sa: 80,
            sd: 80,
            sp: 45
        },
        weightkg: 5.8,
        nfe: true
    },
    Gothorita: {
        types: ["Fairy", "Dark"],
        bs: {
            hp: 60,
            at: 45,
            df: 70,
            sa: 95,
            sd: 95,
            sp: 75
        },
        weightkg: 18,
        nfe: true
    },
    Gothitelle: {
        types: ["Fairy", "Dark"],
        bs: {
            hp: 70,
            at: 55,
            df: 95,
            sa: 125,
            sd: 125,
            sp: 65
        },
        weightkg: 44
    },
    Solosis: {
        types: ["Psychic", "Poison"],
        bs: {
            hp: 25,
            at: 10,
            df: 75,
            sa: 100,
            sd: 100,
            sp: 20
        },
        weightkg: 1,
        nfe: true
    },
    Duosion: {
        types: ["Psychic", "Poison"],
        bs: {
            hp: 70,
            at: 40,
            df: 75,
            sa: 115,
            sd: 100,
            sp: 30
        },
        weightkg: 8,
        nfe: true
    },
    Reuniclus: {
        types: ["Psychic", "Poison"],
        bs: {
            hp: 115,
            at: 115,
            df: 75,
            sa: 125,
            sd: 100,
            sp: 20
        },
        weightkg: 20.1
    },
    Ducklett: {
        types: ["Water", "Flying"],
        bs: {
            hp: 62,
            at: 44,
            df: 51,
            sa: 74,
            sd: 51,
            sp: 68
        },
        weightkg: 5.5,
        nfe: true
    },
    Swanna: {
        types: ["Water", "Flying"],
        bs: {
            hp: 75,
            at: 98,
            df: 70,
            sa: 104,
            sd: 70,
            sp: 108
        },
        weightkg: 24.2
    },
    Deerling: {
        types: ["Normal", "Grass"],
        bs: {
            hp: 65,
            at: 70,
            df: 60,
            sa: 50,
            sd: 60,
            sp: 95
        },
        weightkg: 19.5,
        nfe: true
    },
    Sawsbuck: {
        types: ["Normal", "Grass"],
        bs: {
            hp: 90,
            at: 110,
            df: 80,
            sa: 60,
            sd: 80,
            sp: 105
        },
        weightkg: 92.5
    },
    Foongus: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 74,
            at: 55,
            df: 80,
            sa: 55,
            sd: 80,
            sp: 16
        },
        weightkg: 1,
        nfe: true
    },
    Amoonguss: {
        types: ["Grass", "Poison"],
        bs: {
            hp: 114,
            at: 85,
            df: 85,
            sa: 85,
            sd: 85,
            sp: 25
        },
        weightkg: 10.5,
        nfe: true
    },
    Alomomola: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 165,
            at: 40,
            df: 80,
            sa: 75,
            sd: 100,
            sp: 65
        },
        weightkg: 31.6
    },
    Joltik: {
        types: ["Bug", "Electric"],
        bs: {
            hp: 30,
            at: 47,
            df: 50,
            sa: 92,
            sd: 50,
            sp: 106
        },
        weightkg: 0.6,
        nfe: true
    },
    Galvantula: {
        types: ["Bug", "Electric"],
        bs: {
            hp: 70,
            at: 97,
            df: 60,
            sa: 112,
            sd: 60,
            sp: 126
        },
        weightkg: 14.3
    },
    Drilbur: {
        types: ["Ground"],
        bs: {
            hp: 60,
            at: 90,
            df: 57,
            sa: 30,
            sd: 45,
            sp: 68
        },
        weightkg: 8.5,
        nfe: true
    },
    Excadrill: {
        types: ["Ground", "Steel"],
        bs: {
            hp: 90,
            at: 135,
            df: 107,
            sa: 50,
            sd: 65,
            sp: 88
        },
        weightkg: 40.4
    },
    Tynamo: {
        types: ["Electric"],
        bs: {
            hp: 35,
            at: 20,
            df: 40,
            sa: 83,
            sd: 99,
            sp: 83
        },
        weightkg: 0.3,
        nfe: true
    },
    Eelektrik: {
        types: ["Electric", "Poison"],
        bs: {
            hp: 70,
            at: 85,
            df: 70,
            sa: 93,
            sd: 119,
            sp: 43
        },
        weightkg: 22,
        nfe: true
    },
    Eelektross: {
        types: ["Electric", "Poison"],
        bs: {
            hp: 100,
            at: 119,
            df: 80,
            sa: 119,
            sd: 119,
            sp: 63
        },
        weightkg: 80.5
    },
    Litwick: {
        types: ["Ghost", "Fire"],
        bs: {
            hp: 40,
            at: 30,
            df: 55,
            sa: 95,
            sd: 90,
            sp: 20
        },
        weightkg: 3.1,
        nfe: true
    },
    Lampent: {
        types: ["Ghost", "Fire"],
        bs: {
            hp: 60,
            at: 40,
            df: 60,
            sa: 115,
            sd: 95,
            sp: 70
        },
        weightkg: 13,
        nfe: true
    },
    Chandelure: {
        types: ["Ghost", "Fire"],
        bs: {
            hp: 75,
            at: 55,
            df: 75,
            sa: 145,
            sd: 120,
            sp: 80
        },
        weightkg: 34.3
    },
    Axew: {
        types: ["Dragon", "Fighting"],
        bs: {
            hp: 56,
            at: 92,
            df: 70,
            sa: 30,
            sd: 50,
            sp: 62
        },
        weightkg: 18,
        nfe: true
    },
    Fraxure: {
        types: ["Dragon", "Fighting"],
        bs: {
            hp: 76,
            at: 117,
            df: 100,
            sa: 40,
            sd: 70,
            sp: 77
        },
        weightkg: 36,
        nfe: true
    },
    Haxorus: {
        types: ["Dragon", "Fighting"],
        bs: {
            hp: 106,
            at: 147,
            df: 110,
            sa: 60,
            sd: 80,
            sp: 97
        },
        weightkg: 105.5
    },
    Cubchoo: {
        types: ["Ice"],
        bs: {
            hp: 55,
            at: 70,
            df: 40,
            sa: 60,
            sd: 40,
            sp: 40
        },
        weightkg: 8.5,
        nfe: true
    },
    Beartic: {
        types: ["Ice", "Fighting"],
        bs: {
            hp: 110,
            at: 140,
            df: 80,
            sa: 55,
            sd: 80,
            sp: 70
        },
        weightkg: 260
    },
    Cryogonal: {
        types: ["Ice", "Flying"],
        bs: {
            hp: 80,
            at: 40,
            df: 65,
            sa: 125,
            sd: 135,
            sp: 105
        },
        weightkg: 148
    },
    Mienfoo: {
        types: ["Fighting", "Normal"],
        bs: {
            hp: 55,
            at: 85,
            df: 50,
            sa: 65,
            sd: 50,
            sp: 95
        },
        weightkg: 20,
        nfe: true
    },
    Mienshao: {
        types: ["Fighting", "Normal"],
        bs: {
            hp: 70,
            at: 125,
            df: 60,
            sa: 95,
            sd: 60,
            sp: 115
        },
        weightkg: 35.5
    },
    Golett: {
        types: ["Ground", "Ghost"],
        bs: {
            hp: 69,
            at: 86,
            df: 100,
            sa: 35,
            sd: 100,
            sp: 35
        },
        weightkg: 92,
        nfe: true
    },
    Golurk: {
        types: ["Ground", "Ghost"],
        bs: {
            hp: 149,
            at: 151,
            df: 100,
            sa: 50,
            sd: 100,
            sp: 50
        },
        weightkg: 330
    },
    Pawniard: {
        types: ["Dark", "Steel"],
        bs: {
            hp: 45,
            at: 95,
            df: 75,
            sa: 40,
            sd: 45,
            sp: 75
        },
        weightkg: 10.2,
        nfe: true
    },
    Bisharp: {
        types: ["Dark", "Steel"],
        bs: {
            hp: 70,
            at: 125,
            df: 100,
            sa: 60,
            sd: 70,
            sp: 100
        },
        weightkg: 70,
        nfe: true
    },
    Rufflet: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 70,
            at: 83,
            df: 55,
            sa: 37,
            sd: 55,
            sp: 75
        },
        weightkg: 10.5,
        nfe: true
    },
    Braviary: {
        types: ["Fighting", "Flying"],
        bs: {
            hp: 105,
            at: 123,
            df: 75,
            sa: 57,
            sd: 75,
            sp: 100
        },
        weightkg: 41,
        otherFormes: ["Braviary-Hisui"]
    },
    "Braviary-Hisui": {
        types: ["Psychic", "Flying"],
        bs: {
            hp: 105,
            at: 57,
            df: 75,
            sa: 123,
            sd: 75,
            sp: 100
        },
        weightkg: 43.4,
        baseSpecies: "Braviary"
    },
    Vullaby: {
        types: ["Dark", "Flying"],
        bs: {
            hp: 70,
            at: 55,
            df: 95,
            sa: 30,
            sd: 85,
            sp: 40
        },
        weightkg: 9,
        nfe: true
    },
    Mandibuzz: {
        types: ["Dark", "Flying"],
        bs: {
            hp: 110,
            at: 90,
            df: 105,
            sa: 55,
            sd: 95,
            sp: 80
        },
        weightkg: 39.5
    },
    Deino: {
        types: ["Dark", "Dragon"],
        bs: {
            hp: 52,
            at: 70,
            df: 55,
            sa: 70,
            sd: 55,
            sp: 58
        },
        weightkg: 17.3,
        nfe: true
    },
    Zweilous: {
        types: ["Dark", "Dragon"],
        bs: {
            hp: 72,
            at: 100,
            df: 70,
            sa: 100,
            sd: 70,
            sp: 68
        },
        weightkg: 50,
        nfe: true
    },
    Hydreigon: {
        types: ["Dark", "Dragon"],
        bs: {
            hp: 92,
            at: 125,
            df: 75,
            sa: 125,
            sd: 75,
            sp: 108
        },
        weightkg: 160
    },
    Larvesta: {
        types: ["Bug", "Fire"],
        bs: {
            hp: 65,
            at: 65,
            df: 65,
            sa: 95,
            sd: 80,
            sp: 80
        },
        weightkg: 28.8,
        nfe: true
    },
    Volcarona: {
        types: ["Bug", "Fire"],
        bs: {
            hp: 100,
            at: 65,
            df: 85,
            sa: 135,
            sd: 115,
            sp: 100
        },
        weightkg: 46
    },
    Cobalion: {
        types: ["Steel", "Fighting"],
        bs: {
            hp: 92,
            at: 126,
            df: 129,
            sa: 47,
            sd: 88,
            sp: 118
        },
        weightkg: 250
    },
    Terrakion: {
        types: ["Rock", "Fighting"],
        bs: {
            hp: 100,
            at: 129,
            df: 128,
            sa: 47,
            sd: 88,
            sp: 108
        },
        weightkg: 260
    },
    Virizion: {
        types: ["Grass", "Fighting"],
        bs: {
            hp: 92,
            at: 122,
            df: 88,
            sa: 47,
            sd: 129,
            sp: 122
        },
        weightkg: 200
    },
    Tornadus: {
        types: ["Flying"],
        bs: {
            hp: 79,
            at: 115,
            df: 70,
            sa: 125,
            sd: 80,
            sp: 131
        },
        weightkg: 63,
        otherFormes: ["Tornadus-Therian"]
    },
    "Tornadus-Therian": {
        types: ["Flying"],
        bs: {
            hp: 79,
            at: 95,
            df: 95,
            sa: 115,
            sd: 95,
            sp: 121
        },
        weightkg: 63,
        baseSpecies: "Tornadus"
    },
    Thundurus: {
        types: ["Electric", "Flying"],
        bs: {
            hp: 79,
            at: 120,
            df: 70,
            sa: 125,
            sd: 80,
            sp: 126
        },
        weightkg: 61,
        otherFormes: ["Thundurus-Therian"]
    },
    "Thundurus-Therian": {
        types: ["Electric", "Flying"],
        bs: {
            hp: 79,
            at: 130,
            df: 60,
            sa: 145,
            sd: 70,
            sp: 116
        },
        weightkg: 61,
        baseSpecies: "Thundurus"
    },
    Reshiram: {
        types: ["Dragon", "Fire"],
        bs: {
            hp: 100,
            at: 120,
            df: 100,
            sa: 150,
            sd: 120,
            sp: 90
        },
        weightkg: 330
    },
    Zekrom: {
        types: ["Dragon", "Electric"],
        bs: {
            hp: 100,
            at: 150,
            df: 120,
            sa: 120,
            sd: 100,
            sp: 90
        },
        weightkg: 345
    },
    Landorus: {
        types: ["Ground", "Flying"],
        bs: {
            hp: 89,
            at: 125,
            df: 85,
            sa: 115,
            sd: 75,
            sp: 111
        },
        weightkg: 68,
        otherFormes: ["Landorus-Therian"]
    },
    "Landorus-Therian": {
        types: ["Ground", "Flying"],
        bs: {
            hp: 89,
            at: 145,
            df: 95,
            sa: 95,
            sd: 85,
            sp: 91
        },
        weightkg: 68,
        baseSpecies: "Landorus"
    },
    Kyurem: {
        types: ["Dragon", "Ice"],
        bs: {
            hp: 125,
            at: 125,
            df: 100,
            sa: 150,
            sd: 100,
            sp: 80
        },
        weightkg: 325
    },
    Keldeo: {
        types: ["Water", "Fighting"],
        bs: {
            hp: 71,
            at: 117,
            df: 75,
            sa: 119,
            sd: 75,
            sp: 118
        },
        weightkg: 48.5,
        otherFormes: ["Keldeo-Resolute"]
    },
    "Keldeo-Resolute": {
        types: ["Water", "Fairy"],
        bs: {
            hp: 71,
            at: 127,
            df: 75,
            sa: 129,
            sd: 75,
            sp: 123
        },
        weightkg: 48.5,
        baseSpecies: "Keldeo"
    },
    Meloetta: {
        types: ["Psychic", "Normal"],
        bs: {
            hp: 77,
            at: 77,
            df: 77,
            sa: 133,
            sd: 133,
            sp: 103
        },
        weightkg: 6.5,
        otherFormes: ["Meloetta-Pirouette"]
    },
    "Meloetta-Pirouette": {
        types: ["Fighting", "Normal"],
        bs: {
            hp: 77,
            at: 128,
            df: 77,
            sa: 113,
            sd: 77,
            sp: 128
        },
        weightkg: 6.5,
        baseSpecies: "Meloetta"
    },
    Chespin: {
        types: ["Grass"],
        bs: {
            hp: 58,
            at: 64,
            df: 77,
            sa: 32,
            sd: 60,
            sp: 39
        },
        weightkg: 9,
        nfe: true
    },
    Quilladin: {
        types: ["Grass"],
        bs: {
            hp: 73,
            at: 79,
            df: 107,
            sa: 37,
            sd: 85,
            sp: 59
        },
        weightkg: 29,
        nfe: true
    },
    Chesnaught: {
        types: ["Grass", "Steel"],
        bs: {
            hp: 103,
            at: 114,
            df: 132,
            sa: 42,
            sd: 100,
            sp: 59
        },
        weightkg: 90
    },
    Fennekin: {
        types: ["Fire"],
        bs: {
            hp: 40,
            at: 41,
            df: 42,
            sa: 74,
            sd: 64,
            sp: 69
        },
        weightkg: 9.4,
        nfe: true
    },
    Braixen: {
        types: ["Fire"],
        bs: {
            hp: 60,
            at: 51,
            df: 52,
            sa: 99,
            sd: 84,
            sp: 94
        },
        weightkg: 14.5,
        nfe: true
    },
    Delphox: {
        types: ["Fire", "Psychic"],
        bs: {
            hp: 75,
            at: 61,
            df: 72,
            sa: 124,
            sd: 114,
            sp: 104
        },
        weightkg: 39
    },
    Froakie: {
        types: ["Water"],
        bs: {
            hp: 41,
            at: 54,
            df: 42,
            sa: 69,
            sd: 42,
            sp: 82
        },
        weightkg: 7,
        nfe: true
    },
    Frogadier: {
        types: ["Water"],
        bs: {
            hp: 56,
            at: 69,
            df: 52,
            sa: 94,
            sd: 52,
            sp: 117
        },
        weightkg: 10.9,
        nfe: true
    },
    Greninja: {
        types: ["Water", "Dark"],
        bs: {
            hp: 71,
            at: 109,
            df: 62,
            sa: 109,
            sd: 62,
            sp: 137
        },
        weightkg: 40
    },
    Fletchling: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 43,
            at: 56,
            df: 46,
            sa: 43,
            sd: 46,
            sp: 96
        },
        weightkg: 1.7,
        nfe: true
    },
    Fletchinder: {
        types: ["Fire", "Flying"],
        bs: {
            hp: 63,
            at: 81,
            df: 56,
            sa: 78,
            sd: 56,
            sp: 106
        },
        weightkg: 16,
        nfe: true
    },
    Talonflame: {
        types: ["Fire", "Flying"],
        bs: {
            hp: 73,
            at: 111,
            df: 61,
            sa: 98,
            sd: 61,
            sp: 146
        },
        weightkg: 24.5
    },
    Scatterbug: {
        types: ["Bug"],
        bs: {
            hp: 35,
            at: 37,
            df: 40,
            sa: 50,
            sd: 74,
            sp: 39
        },
        weightkg: 2.5,
        nfe: true
    },
    Spewpa: {
        types: ["Bug"],
        bs: {
            hp: 45,
            at: 22,
            df: 65,
            sa: 60,
            sd: 104,
            sp: 29
        },
        weightkg: 8.4,
        nfe: true
    },
    "Vivillon-Snowy": {
        types: ["Ice", "Bug"],
        bs: {
            hp: 80,
            at: 52,
            df: 65,
            sa: 105,
            sd: 99,
            sp: 99
        },
        weightkg: 17,
        otherFormes: ["Vivillon-Sunny", "Vivillon-Rainy", "Vivillon-Sandy"]
    },
    "Vivillon-Rainy": {
        types: ["Water", "Bug"],
        bs: {
            hp: 80,
            at: 52,
            df: 65,
            sa: 105,
            sd: 99,
            sp: 99
        },
        weightkg: 17,
        baseSpecies: "Vivillon-Snowy"
    },
    "Vivillon-Sandy": {
        types: ["Rock", "Bug"],
        bs: {
            hp: 80,
            at: 52,
            df: 65,
            sa: 105,
            sd: 99,
            sp: 99
        },
        weightkg: 17,
        baseSpecies: "Vivillon-Snowy"
    },
    "Vivillon-Sunny": {
        types: ["Fire", "Bug"],
        bs: {
            hp: 80,
            at: 52,
            df: 65,
            sa: 105,
            sd: 99,
            sp: 99
        },
        weightkg: 17,
        baseSpecies: "Vivillon-Snowy"
    },
    Litleo: {
        types: ["Fire", "Normal"],
        bs: {
            hp: 63,
            at: 73,
            df: 63,
            sa: 73,
            sd: 55,
            sp: 73
        },
        weightkg: 13.5,
        nfe: true
    },
    Pyroar: {
        types: ["Fire", "Normal"],
        bs: {
            hp: 86,
            at: 109,
            df: 72,
            sa: 109,
            sd: 65,
            sp: 109
        },
        weightkg: 81.5
    },
    Flabebe: {
        types: ["Fairy"],
        bs: {
            hp: 43,
            at: 23,
            df: 43,
            sa: 62,
            sd: 104,
            sp: 55
        },
        weightkg: 0.1,
        nfe: true
    },
    Floette: {
        types: ["Fairy"],
        bs: {
            hp: 58,
            at: 38,
            df: 63,
            sa: 82,
            sd: 134,
            sp: 65
        },
        weightkg: 0.9,
        nfe: true
    },
    Florges: {
        types: ["Fairy"],
        bs: {
            hp: 88,
            at: 53,
            df: 68,
            sa: 112,
            sd: 154,
            sp: 75
        },
        weightkg: 10
    },
    Skiddo: {
        types: ["Grass", "Rock"],
        bs: {
            hp: 63,
            at: 80,
            df: 73,
            sa: 40,
            sd: 61,
            sp: 83
        },
        weightkg: 31,
        nfe: true
    },
    Gogoat: {
        types: ["Grass", "Rock"],
        bs: {
            hp: 103,
            at: 110,
            df: 103,
            sa: 50,
            sd: 81,
            sp: 103
        },
        weightkg: 91
    },
    Pancham: {
        types: ["Fighting"],
        bs: {
            hp: 67,
            at: 82,
            df: 62,
            sa: 46,
            sd: 48,
            sp: 43
        },
        weightkg: 8,
        nfe: true
    },
    Pangoro: {
        types: ["Fighting", "Dark"],
        bs: {
            hp: 95,
            at: 124,
            df: 78,
            sa: 69,
            sd: 71,
            sp: 58
        },
        weightkg: 136
    },
    Espurr: {
        types: ["Psychic", "Normal"],
        bs: {
            hp: 59,
            at: 33,
            df: 56,
            sa: 96,
            sd: 92,
            sp: 74
        },
        weightkg: 3.5,
        nfe: true
    },
    Meowstic: {
        types: ["Psychic", "Normal"],
        bs: {
            hp: 74,
            at: 48,
            df: 76,
            sa: 106,
            sd: 107,
            sp: 114
        },
        weightkg: 8.5,
        otherFormes: ["Meowstic-F"]
    },
    "Meowstic-F": {
        types: ["Psychic", "Normal"],
        bs: {
            hp: 74,
            at: 58,
            df: 66,
            sa: 116,
            sd: 97,
            sp: 114
        },
        weightkg: 8.5,
        baseSpecies: "Meowstic"
    },
    Inkay: {
        types: ["Dark", "Psychic"],
        bs: {
            hp: 53,
            at: 52,
            df: 53,
            sa: 87,
            sd: 102,
            sp: 93
        },
        weightkg: 3.5,
        nfe: true
    },
    Malamar: {
        types: ["Dark", "Psychic"],
        bs: {
            hp: 73,
            at: 102,
            df: 73,
            sa: 102,
            sd: 127,
            sp: 73
        },
        weightkg: 47
    },
    Skrelp: {
        types: ["Poison", "Water"],
        bs: {
            hp: 53,
            at: 47,
            df: 65,
            sa: 83,
            sd: 93,
            sp: 34
        },
        weightkg: 7.3,
        nfe: true
    },
    Dragalge: {
        types: ["Poison", "Dragon"],
        bs: {
            hp: 103,
            at: 67,
            df: 90,
            sa: 123,
            sd: 123,
            sp: 44
        },
        weightkg: 81.5
    },
    Clauncher: {
        types: ["Water"],
        bs: {
            hp: 51,
            at: 53,
            df: 93,
            sa: 95,
            sd: 64,
            sp: 44
        },
        weightkg: 8.3,
        nfe: true
    },
    Clawitzer: {
        types: ["Water"],
        bs: {
            hp: 71,
            at: 73,
            df: 118,
            sa: 135,
            sd: 94,
            sp: 59
        },
        weightkg: 35.3
    },
    Sylveon: {
        types: ["Fairy"],
        bs: {
            hp: 70,
            at: 60,
            df: 65,
            sa: 110,
            sd: 130,
            sp: 90
        },
        weightkg: 23.5
    },
    Hawlucha: {
        types: ["Fighting", "Flying"],
        bs: {
            hp: 68,
            at: 112,
            df: 75,
            sa: 54,
            sd: 68,
            sp: 123
        },
        weightkg: 21.5
    },
    Dedenne: {
        types: ["Electric", "Fairy"],
        bs: {
            hp: 67,
            at: 40,
            df: 67,
            sa: 96,
            sd: 109,
            sp: 101
        },
        weightkg: 2.2
    },
    Carbink: {
        types: ["Rock", "Fairy"],
        bs: {
            hp: 50,
            at: 40,
            df: 150,
            sa: 95,
            sd: 150,
            sp: 40
        },
        weightkg: 5.7,
        nfe: true
    },
    Goomy: {
        types: ["Dragon", "Poison"],
        bs: {
            hp: 65,
            at: 25,
            df: 60,
            sa: 75,
            sd: 110,
            sp: 25
        },
        weightkg: 2.8,
        nfe: true
    },
    Sliggoo: {
        types: ["Dragon", "Poison"],
        bs: {
            hp: 85,
            at: 50,
            df: 75,
            sa: 85,
            sd: 150,
            sp: 35
        },
        weightkg: 17.5,
        nfe: true,
        otherFormes: ["Sliggoo-Hisui"]
    },
    "Sliggoo-Hisui": {
        types: ["Steel", "Dragon"],
        bs: {
            hp: 85,
            at: 50,
            df: 150,
            sa: 85,
            sd: 110,
            sp: 5
        },
        weightkg: 68.5,
        nfe: true,
        baseSpecies: "Sliggoo"
    },
    Goodra: {
        types: ["Dragon", "Poison"],
        bs: {
            hp: 110,
            at: 100,
            df: 75,
            sa: 110,
            sd: 150,
            sp: 55
        },
        weightkg: 150.5,
        otherFormes: ["Goodra-Hisui"]
    },
    "Goodra-Hisui": {
        types: ["Steel", "Dragon"],
        bs: {
            hp: 110,
            at: 100,
            df: 150,
            sa: 110,
            sd: 110,
            sp: 20
        },
        weightkg: 334.1,
        baseSpecies: "Goodra"
    },
    Klefki: {
        types: ["Steel", "Fairy"],
        bs: {
            hp: 62,
            at: 80,
            df: 114,
            sa: 70,
            sd: 114,
            sp: 85
        },
        weightkg: 3
    },
    Phantump: {
        types: ["Ghost", "Grass"],
        bs: {
            hp: 47,
            at: 72,
            df: 92,
            sa: 51,
            sd: 92,
            sp: 71
        },
        weightkg: 7,
        nfe: true
    },
    Trevenant: {
        types: ["Ghost", "Grass"],
        bs: {
            hp: 97,
            at: 122,
            df: 97,
            sa: 61,
            sd: 97,
            sp: 61
        },
        weightkg: 71
    },
    Bergmite: {
        types: ["Ice"],
        bs: {
            hp: 62,
            at: 72,
            df: 144,
            sa: 23,
            sd: 61,
            sp: 13
        },
        weightkg: 99.5,
        nfe: true
    },
    Avalugg: {
        types: ["Ice"],
        bs: {
            hp: 127,
            at: 127,
            df: 184,
            sa: 28,
            sd: 66,
            sp: 18
        },
        weightkg: 505,
        otherFormes: ["Avalugg-Hisui"]
    },
    "Avalugg-Hisui": {
        types: ["Ice", "Rock"],
        bs: {
            hp: 127,
            at: 132,
            df: 184,
            sa: 28,
            sd: 61,
            sp: 18
        },
        weightkg: 262.4,
        baseSpecies: "Avalugg"
    },
    Noibat: {
        types: ["Flying", "Dragon"],
        bs: {
            hp: 45,
            at: 45,
            df: 40,
            sa: 92,
            sd: 40,
            sp: 113
        },
        weightkg: 8,
        nfe: true
    },
    Noivern: {
        types: ["Flying", "Dragon"],
        bs: {
            hp: 80,
            at: 95,
            df: 75,
            sa: 117,
            sd: 75,
            sp: 133
        },
        weightkg: 85
    },
    Diancie: {
        types: ["Rock", "Fairy"],
        bs: {
            hp: 75,
            at: 50,
            df: 150,
            sa: 125,
            sd: 150,
            sp: 50
        },
        weightkg: 8.8
    },
    Hoopa: {
        types: ["Psychic", "Ghost"],
        bs: {
            hp: 80,
            at: 60,
            df: 60,
            sa: 150,
            sd: 130,
            sp: 120
        },
        weightkg: 9,
        otherFormes: ["Hoopa-Unbound"]
    },
    "Hoopa-Unbound": {
        types: ["Psychic", "Dark"],
        bs: {
            hp: 80,
            at: 160,
            df: 65,
            sa: 170,
            sd: 130,
            sp: 75
        },
        weightkg: 490,
        baseSpecies: "Hoopa"
    },
    Volcanion: {
        types: ["Fire", "Water"],
        bs: {
            hp: 95,
            at: 90,
            df: 120,
            sa: 130,
            sd: 95,
            sp: 70
        },
        weightkg: 195
    },
    Rowlet: {
        types: ["Grass", "Flying"],
        bs: {
            hp: 58,
            at: 57,
            df: 55,
            sa: 57,
            sd: 55,
            sp: 48
        },
        weightkg: 1.5,
        nfe: true
    },
    Dartrix: {
        types: ["Grass", "Flying"],
        bs: {
            hp: 73,
            at: 77,
            df: 65,
            sa: 77,
            sd: 75,
            sp: 98
        },
        weightkg: 16,
        nfe: true
    },
    Decidueye: {
        types: ["Grass", "Ghost"],
        bs: {
            hp: 73,
            at: 107,
            df: 65,
            sa: 107,
            sd: 100,
            sp: 98
        },
        weightkg: 36.6,
        otherFormes: ["Decidueye-Hisui"]
    },
    "Decidueye-Hisui": {
        types: ["Grass", "Fighting"],
        bs: {
            hp: 73,
            at: 112,
            df: 95,
            sa: 87,
            sd: 95,
            sp: 88
        },
        weightkg: 37,
        baseSpecies: "Decidueye"
    },
    Litten: {
        types: ["Fire"],
        bs: {
            hp: 45,
            at: 65,
            df: 40,
            sa: 50,
            sd: 40,
            sp: 90
        },
        weightkg: 4.3,
        nfe: true
    },
    Torracat: {
        types: ["Fire"],
        bs: {
            hp: 65,
            at: 95,
            df: 60,
            sa: 60,
            sd: 60,
            sp: 100
        },
        weightkg: 25,
        nfe: true
    },
    Incineroar: {
        types: ["Fire", "Dark"],
        bs: {
            hp: 95,
            at: 125,
            df: 90,
            sa: 70,
            sd: 90,
            sp: 80
        },
        weightkg: 83
    },
    Popplio: {
        types: ["Water"],
        bs: {
            hp: 50,
            at: 44,
            df: 54,
            sa: 66,
            sd: 61,
            sp: 55
        },
        weightkg: 7.5,
        nfe: true
    },
    Brionne: {
        types: ["Water"],
        bs: {
            hp: 65,
            at: 54,
            df: 69,
            sa: 96,
            sd: 91,
            sp: 65
        },
        weightkg: 17.5,
        nfe: true
    },
    Primarina: {
        types: ["Water", "Fairy"],
        bs: {
            hp: 95,
            at: 64,
            df: 74,
            sa: 126,
            sd: 116,
            sp: 75
        },
        weightkg: 44
    },
    Pikipek: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 45,
            at: 75,
            df: 40,
            sa: 60,
            sd: 40,
            sp: 75
        },
        weightkg: 1.2,
        nfe: true
    },
    Trumbeak: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 60,
            at: 90,
            df: 55,
            sa: 80,
            sd: 55,
            sp: 100
        },
        weightkg: 14.8,
        nfe: true
    },
    Toucannon: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 80,
            at: 125,
            df: 75,
            sa: 125,
            sd: 75,
            sp: 70
        },
        weightkg: 26
    },
    Yungoos: {
        types: ["Normal"],
        bs: {
            hp: 48,
            at: 75,
            df: 40,
            sa: 30,
            sd: 40,
            sp: 97
        },
        weightkg: 6,
        nfe: true
    },
    Gumshoos: {
        types: ["Normal"],
        bs: {
            hp: 88,
            at: 115,
            df: 80,
            sa: 40,
            sd: 80,
            sp: 77
        },
        weightkg: 14.2
    },
    Grubbin: {
        types: ["Bug"],
        bs: {
            hp: 47,
            at: 82,
            df: 65,
            sa: 30,
            sd: 65,
            sp: 46
        },
        weightkg: 4.4,
        nfe: true
    },
    Charjabug: {
        types: ["Bug", "Electric"],
        bs: {
            hp: 62,
            at: 82,
            df: 110,
            sa: 55,
            sd: 110,
            sp: 36
        },
        weightkg: 10.5,
        nfe: true
    },
    Vikavolt: {
        types: ["Bug", "Electric"],
        bs: {
            hp: 77,
            at: 70,
            df: 90,
            sa: 145,
            sd: 70,
            sp: 123
        },
        weightkg: 45
    },
    Crabrawler: {
        types: ["Fighting", "Water"],
        bs: {
            hp: 67,
            at: 117,
            df: 107,
            sa: 40,
            sd: 77,
            sp: 72
        },
        weightkg: 7,
        nfe: true
    },
    Crabominable: {
        types: ["Fighting", "Ice"],
        bs: {
            hp: 107,
            at: 132,
            df: 107,
            sa: 45,
            sd: 77,
            sp: 67
        },
        weightkg: 180
    },
    Oricorio: {
        types: ["Fire", "Flying"],
        bs: {
            hp: 75,
            at: 69,
            df: 70,
            sa: 108,
            sd: 70,
            sp: 108
        },
        weightkg: 3.4,
        otherFormes: ["Oricorio-Pom-Pom", "Oricorio-Sensu", "Oricorio-Pa'u"]
    },
    "Oricorio-Pom-Pom": {
        types: ["Electric", "Flying"],
        bs: {
            hp: 75,
            at: 69,
            df: 70,
            sa: 108,
            sd: 70,
            sp: 108
        },
        weightkg: 3.4,
        baseSpecies: "Oricorio"
    },
    "Oricorio-Pa'u": {
        types: ["Psychic", "Flying"],
        bs: {
            hp: 75,
            at: 69,
            df: 70,
            sa: 108,
            sd: 70,
            sp: 108
        },
        weightkg: 3.4,
        baseSpecies: "Oricorio"
    },
    "Oricorio-Sensu": {
        types: ["Ghost", "Flying"],
        bs: {
            hp: 75,
            at: 69,
            df: 70,
            sa: 108,
            sd: 70,
            sp: 108
        },
        weightkg: 3.4,
        baseSpecies: "Oricorio"
    },
    Cutiefly: {
        types: ["Bug", "Fairy"],
        bs: {
            hp: 38,
            at: 20,
            df: 40,
            sa: 69,
            sd: 69,
            sp: 114
        },
        weightkg: 0.2,
        nfe: true
    },
    Ribombee: {
        types: ["Bug", "Fairy"],
        bs: {
            hp: 63,
            at: 30,
            df: 60,
            sa: 99,
            sd: 99,
            sp: 129
        },
        weightkg: 0.5
    },
    Rockruff: {
        types: ["Rock", "Normal"],
        bs: {
            hp: 55,
            at: 75,
            df: 68,
            sa: 30,
            sd: 55,
            sp: 92
        },
        weightkg: 9.2,
        nfe: true
    },
    Lycanroc: {
        types: ["Rock", "Normal"],
        bs: {
            hp: 75,
            at: 120,
            df: 78,
            sa: 55,
            sd: 70,
            sp: 127
        },
        weightkg: 25,
        otherFormes: ["Lycanroc-Midnight", "Lycanroc-Dusk"]
    },
    "Lycanroc-Midnight": {
        types: ["Rock", "Dark"],
        bs: {
            hp: 75,
            at: 120,
            df: 98,
            sa: 55,
            sd: 80,
            sp: 97
        },
        weightkg: 25,
        baseSpecies: "Lycanroc"
    },
    "Lycanroc-Dusk": {
        types: ["Rock", "Fighting"],
        bs: {
            hp: 75,
            at: 120,
            df: 88,
            sa: 55,
            sd: 75,
            sp: 112
        },
        weightkg: 25,
        baseSpecies: "Lycanroc"
    },
    Mareanie: {
        types: ["Poison", "Water"],
        bs: {
            hp: 50,
            at: 63,
            df: 102,
            sa: 53,
            sd: 92,
            sp: 40
        },
        weightkg: 8,
        nfe: true
    },
    Toxapex: {
        types: ["Poison", "Water"],
        bs: {
            hp: 65,
            at: 88,
            df: 152,
            sa: 53,
            sd: 142,
            sp: 25
        },
        weightkg: 14.5
    },
    Mudbray: {
        types: ["Ground"],
        bs: {
            hp: 70,
            at: 100,
            df: 90,
            sa: 30,
            sd: 65,
            sp: 45
        },
        weightkg: 110,
        nfe: true
    },
    Mudsdale: {
        types: ["Ground"],
        bs: {
            hp: 115,
            at: 130,
            df: 115,
            sa: 40,
            sd: 85,
            sp: 65
        },
        weightkg: 920
    },
    Dewpider: {
        types: ["Water", "Bug"],
        bs: {
            hp: 42,
            at: 40,
            df: 67,
            sa: 40,
            sd: 102,
            sp: 39
        },
        weightkg: 4,
        nfe: true
    },
    Araquanid: {
        types: ["Water", "Bug"],
        bs: {
            hp: 97,
            at: 70,
            df: 97,
            sa: 70,
            sd: 132,
            sp: 59
        },
        weightkg: 82
    },
    Fomantis: {
        types: ["Grass"],
        bs: {
            hp: 40,
            at: 65,
            df: 60,
            sa: 60,
            sd: 60,
            sp: 65
        },
        weightkg: 1.5,
        nfe: true
    },
    Lurantis: {
        types: ["Grass"],
        bs: {
            hp: 70,
            at: 105,
            df: 90,
            sa: 90,
            sd: 90,
            sp: 90
        },
        weightkg: 18.5
    },
    Salandit: {
        types: ["Poison", "Fire"],
        bs: {
            hp: 53,
            at: 53,
            df: 45,
            sa: 97,
            sd: 60,
            sp: 117
        },
        weightkg: 4.8,
        nfe: true
    },
    Salazzle: {
        types: ["Poison", "Fire"],
        bs: {
            hp: 73,
            at: 93,
            df: 60,
            sa: 117,
            sd: 60,
            sp: 122
        },
        weightkg: 22.2
    },
    Bounsweet: {
        types: ["Grass"],
        bs: {
            hp: 38,
            at: 20,
            df: 98,
            sa: 48,
            sd: 98,
            sp: 28
        },
        weightkg: 3.2,
        nfe: true
    },
    Steenee: {
        types: ["Grass"],
        bs: {
            hp: 58,
            at: 70,
            df: 98,
            sa: 48,
            sd: 98,
            sp: 68
        },
        weightkg: 8.2,
        nfe: true
    },
    Tsareena: {
        types: ["Grass", "Fighting"],
        bs: {
            hp: 78,
            at: 120,
            df: 98,
            sa: 58,
            sd: 98,
            sp: 98
        },
        weightkg: 21.4
    },
    Comfey: {
        types: ["Fairy"],
        bs: {
            hp: 71,
            at: 30,
            df: 90,
            sa: 97,
            sd: 137,
            sp: 100
        },
        weightkg: 0.3
    },
    Oranguru: {
        types: ["Normal", "Psychic"],
        bs: {
            hp: 90,
            at: 55,
            df: 80,
            sa: 135,
            sd: 115,
            sp: 60
        },
        weightkg: 76
    },
    Passimian: {
        types: ["Fighting", "Normal"],
        bs: {
            hp: 100,
            at: 130,
            df: 90,
            sa: 40,
            sd: 70,
            sp: 105
        },
        weightkg: 82.8
    },
    Wimpod: {
        types: ["Bug", "Water"],
        bs: {
            hp: 25,
            at: 35,
            df: 40,
            sa: 20,
            sd: 30,
            sp: 80
        },
        weightkg: 12,
        nfe: true
    },
    Golisopod: {
        types: ["Bug", "Water"],
        bs: {
            hp: 75,
            at: 125,
            df: 140,
            sa: 60,
            sd: 90,
            sp: 40
        },
        weightkg: 108
    },
    Sandygast: {
        types: ["Ghost", "Ground"],
        bs: {
            hp: 55,
            at: 35,
            df: 95,
            sa: 80,
            sd: 95,
            sp: 15
        },
        weightkg: 70,
        nfe: true
    },
    Palossand: {
        types: ["Ghost", "Ground"],
        bs: {
            hp: 110,
            at: 60,
            df: 110,
            sa: 110,
            sd: 110,
            sp: 25
        },
        weightkg: 250
    },
    Pyukumuku: {
        types: ["Water"],
        bs: {
            hp: 55,
            at: 60,
            df: 130,
            sa: 30,
            sd: 130,
            sp: 5
        },
        weightkg: 1.2
    },
    Minior: {
        types: ["Rock", "Flying"],
        bs: {
            hp: 50,
            at: 50,
            df: 150,
            sa: 50,
            sd: 150,
            sp: 50
        },
        weightkg: 40,
        otherFormes: [
            "Minior-Pink",
            "Minior-Orange",
            "Minior-Yellow",
            "Minior-Green",
            "Minior-Blue",
            "Minior-Indigo",
            "Minior-Violet",
        ]
    },
    "Minior-Pink": {
        types: ["Rock", "Fairy"],
        bs: {
            hp: 50,
            at: 125,
            df: 50,
            sa: 125,
            sd: 50,
            sp: 150
        },
        weightkg: 0.3,
        baseSpecies: "Minior"
    },
    "Minior-Orange": {
        types: ["Rock", "Fire"],
        bs: {
            hp: 50,
            at: 125,
            df: 50,
            sa: 125,
            sd: 50,
            sp: 150
        },
        weightkg: 0.3,
        baseSpecies: "Minior"
    },
    "Minior-Yellow": {
        types: ["Rock", "Electric"],
        bs: {
            hp: 50,
            at: 125,
            df: 50,
            sa: 125,
            sd: 50,
            sp: 150
        },
        weightkg: 0.3,
        baseSpecies: "Minior"
    },
    "Minior-Green": {
        types: ["Rock", "Grass"],
        bs: {
            hp: 50,
            at: 125,
            df: 50,
            sa: 125,
            sd: 50,
            sp: 150
        },
        weightkg: 0.3,
        baseSpecies: "Minior"
    },
    "Minior-Blue": {
        types: ["Rock", "Ice"],
        bs: {
            hp: 50,
            at: 125,
            df: 50,
            sa: 125,
            sd: 50,
            sp: 150
        },
        weightkg: 0.3,
        baseSpecies: "Minior"
    },
    "Minior-Indigo": {
        types: ["Rock", "Water"],
        bs: {
            hp: 50,
            at: 125,
            df: 50,
            sa: 125,
            sd: 50,
            sp: 150
        },
        weightkg: 0.3,
        baseSpecies: "Minior"
    },
    "Minior-Violet": {
        types: ["Rock", "Dragon"],
        bs: {
            hp: 50,
            at: 125,
            df: 50,
            sa: 125,
            sd: 50,
            sp: 150
        },
        weightkg: 0.3,
        baseSpecies: "Minior"
    },
    Komala: {
        types: ["Normal", "Grass"],
        bs: {
            hp: 65,
            at: 115,
            df: 115,
            sa: 70,
            sd: 95,
            sp: 60
        },
        weightkg: 19.9
    },
    Mimikyu: {
        types: ["Ghost", "Fairy"],
        bs: {
            hp: 55,
            at: 90,
            df: 55,
            sa: 90,
            sd: 110,
            sp: 115
        },
        weightkg: 0.7,
        otherFormes: ["Mimikyu-Busted"]
    },
    "Mimikyu-Busted": {
        types: ["Ghost", "Fairy"],
        bs: {
            hp: 55,
            at: 90,
            df: 55,
            sa: 90,
            sd: 110,
            sp: 115
        },
        weightkg: 0.7,
        baseSpecies: "Mimikyu"
    },
    Bruxish: {
        types: ["Water", "Psychic"],
        bs: {
            hp: 73,
            at: 105,
            df: 90,
            sa: 90,
            sd: 70,
            sp: 97
        },
        weightkg: 19
    },
    Dhelmise: {
        types: ["Ghost", "Grass"],
        bs: {
            hp: 70,
            at: 131,
            df: 100,
            sa: 86,
            sd: 90,
            sp: 40
        },
        weightkg: 210
    },
    "Jangmo-o": {
        types: ["Dragon"],
        bs: {
            hp: 45,
            at: 55,
            df: 80,
            sa: 55,
            sd: 65,
            sp: 60
        },
        weightkg: 29.7,
        nfe: true
    },
    "Hakamo-o": {
        types: ["Dragon", "Steel"],
        bs: {
            hp: 70,
            at: 95,
            df: 90,
            sa: 60,
            sd: 70,
            sp: 95
        },
        weightkg: 47,
        nfe: true
    },
    "Kommo-o": {
        types: ["Dragon", "Steel"],
        bs: {
            hp: 90,
            at: 110,
            df: 125,
            sa: 100,
            sd: 100,
            sp: 75
        },
        weightkg: 78.2
    },
    Cosmog: {
        types: ["Psychic"],
        bs: {
            hp: 43,
            at: 29,
            df: 31,
            sa: 29,
            sd: 131,
            sp: 37
        },
        weightkg: 0.1,
        nfe: true
    },
    Cosmoem: {
        types: ["Psychic"],
        bs: {
            hp: 43,
            at: 29,
            df: 181,
            sa: 29,
            sd: 181,
            sp: 37
        },
        weightkg: 999.9,
        nfe: true
    },
    Necrozma: {
        types: ["Psychic", "Dark"],
        bs: {
            hp: 137,
            at: 127,
            df: 109,
            sa: 127,
            sd: 109,
            sp: 71
        },
        weightkg: 230
    },
    Magearna: {
        types: ["Steel", "Fairy"],
        bs: {
            hp: 80,
            at: 60,
            df: 130,
            sa: 135,
            sd: 130,
            sp: 65
        },
        weightkg: 80.5
    },
    Marshadow: {
        types: ["Fighting", "Ghost"],
        bs: {
            hp: 90,
            at: 125,
            df: 80,
            sa: 90,
            sd: 90,
            sp: 125
        },
        weightkg: 22.2
    },
    Grookey: {
        types: ["Grass"],
        bs: {
            hp: 50,
            at: 65,
            df: 50,
            sa: 40,
            sd: 40,
            sp: 85
        },
        weightkg: 5,
        nfe: true
    },
    Thwackey: {
        types: ["Grass"],
        bs: {
            hp: 70,
            at: 85,
            df: 70,
            sa: 55,
            sd: 60,
            sp: 100
        },
        weightkg: 14,
        nfe: true
    },
    Rillaboom: {
        types: ["Grass"],
        bs: {
            hp: 110,
            at: 125,
            df: 90,
            sa: 60,
            sd: 80,
            sp: 85
        },
        weightkg: 90
    },
    Scorbunny: {
        types: ["Fire"],
        bs: {
            hp: 50,
            at: 71,
            df: 40,
            sa: 40,
            sd: 40,
            sp: 94
        },
        weightkg: 4.5,
        nfe: true
    },
    Raboot: {
        types: ["Fire"],
        bs: {
            hp: 60,
            at: 86,
            df: 65,
            sa: 55,
            sd: 65,
            sp: 109
        },
        weightkg: 9,
        nfe: true
    },
    Cinderace: {
        types: ["Fire"],
        bs: {
            hp: 70,
            at: 116,
            df: 75,
            sa: 90,
            sd: 75,
            sp: 124
        },
        weightkg: 33
    },
    Sobble: {
        types: ["Water"],
        bs: {
            hp: 50,
            at: 40,
            df: 40,
            sa: 70,
            sd: 40,
            sp: 90
        },
        weightkg: 4,
        nfe: true
    },
    Drizzile: {
        types: ["Water"],
        bs: {
            hp: 65,
            at: 60,
            df: 55,
            sa: 95,
            sd: 55,
            sp: 110
        },
        weightkg: 11.5,
        nfe: true
    },
    Inteleon: {
        types: ["Water"],
        bs: {
            hp: 90,
            at: 70,
            df: 65,
            sa: 125,
            sd: 65,
            sp: 135
        },
        weightkg: 45.2
    },
    Skwovet: {
        types: ["Normal"],
        bs: {
            hp: 70,
            at: 55,
            df: 40,
            sa: 35,
            sd: 55,
            sp: 95
        },
        weightkg: 2.5,
        nfe: true
    },
    Greedent: {
        types: ["Normal"],
        bs: {
            hp: 120,
            at: 95,
            df: 95,
            sa: 55,
            sd: 95,
            sp: 20
        },
        weightkg: 6
    },
    Rookidee: {
        types: ["Flying"],
        bs: {
            hp: 48,
            at: 58,
            df: 53,
            sa: 40,
            sd: 53,
            sp: 78
        },
        weightkg: 1.8,
        nfe: true
    },
    Corvisquire: {
        types: ["Flying"],
        bs: {
            hp: 68,
            at: 83,
            df: 68,
            sa: 45,
            sd: 68,
            sp: 98
        },
        weightkg: 16,
        nfe: true
    },
    Corviknight: {
        types: ["Flying", "Steel"],
        bs: {
            hp: 103,
            at: 118,
            df: 123,
            sa: 50,
            sd: 88,
            sp: 68
        },
        weightkg: 75
    },
    Chewtle: {
        types: ["Water"],
        bs: {
            hp: 50,
            at: 80,
            df: 75,
            sa: 38,
            sd: 58,
            sp: 44
        },
        weightkg: 8.5,
        nfe: true
    },
    Drednaw: {
        types: ["Water", "Rock"],
        bs: {
            hp: 90,
            at: 115,
            df: 120,
            sa: 48,
            sd: 78,
            sp: 74
        },
        weightkg: 115.5
    },
    Rolycoly: {
        types: ["Rock", "Fire"],
        bs: {
            hp: 40,
            at: 70,
            df: 110,
            sa: 45,
            sd: 85,
            sp: 100
        },
        weightkg: 12,
        nfe: true
    },
    Carkol: {
        types: ["Rock", "Fire"],
        bs: {
            hp: 80,
            at: 95,
            df: 115,
            sa: 95,
            sd: 90,
            sp: 50
        },
        weightkg: 78,
        nfe: true
    },
    Coalossal: {
        types: ["Rock", "Fire"],
        bs: {
            hp: 120,
            at: 120,
            df: 120,
            sa: 120,
            sd: 95,
            sp: 25
        },
        weightkg: 310.5
    },
    Applin: {
        types: ["Grass", "Dragon"],
        bs: {
            hp: 40,
            at: 40,
            df: 115,
            sa: 60,
            sd: 100,
            sp: 5
        },
        weightkg: 0.5,
        nfe: true
    },
    Flapple: {
        types: ["Grass", "Dragon"],
        bs: {
            hp: 55,
            at: 115,
            df: 80,
            sa: 115,
            sd: 55,
            sp: 115
        },
        weightkg: 1
    },
    Appletun: {
        types: ["Grass", "Dragon"],
        bs: {
            hp: 115,
            at: 60,
            df: 115,
            sa: 100,
            sd: 115,
            sp: 30
        },
        weightkg: 13
    },
    Silicobra: {
        types: ["Ground"],
        bs: {
            hp: 62,
            at: 45,
            df: 85,
            sa: 77,
            sd: 65,
            sp: 76
        },
        weightkg: 7.6,
        nfe: true
    },
    Sandaconda: {
        types: ["Ground", "Dragon"],
        bs: {
            hp: 107,
            at: 60,
            df: 125,
            sa: 107,
            sd: 70,
            sp: 66
        },
        weightkg: 65.5
    },
    Cramorant: {
        types: ["Flying", "Water"],
        bs: {
            hp: 70,
            at: 85,
            df: 95,
            sa: 85,
            sd: 95,
            sp: 85
        },
        weightkg: 18
    },
    Arrokuda: {
        types: ["Water"],
        bs: {
            hp: 41,
            at: 68,
            df: 45,
            sa: 40,
            sd: 40,
            sp: 116
        },
        weightkg: 1,
        nfe: true
    },
    Barraskewda: {
        types: ["Water"],
        bs: {
            hp: 61,
            at: 123,
            df: 60,
            sa: 60,
            sd: 55,
            sp: 141
        },
        weightkg: 30
    },
    Toxel: {
        types: ["Electric", "Poison"],
        bs: {
            hp: 51,
            at: 43,
            df: 60,
            sa: 88,
            sd: 60,
            sp: 58
        },
        weightkg: 11,
        nfe: true
    },
    Toxtricity: {
        types: ["Electric", "Poison"],
        bs: {
            hp: 81,
            at: 98,
            df: 70,
            sa: 118,
            sd: 70,
            sp: 98
        },
        weightkg: 40,
        otherFormes: ["Toxtricity-Low-Key"]
    },
    "Toxtricity-Low-Key": {
        types: ["Electric", "Poison"],
        bs: {
            hp: 81,
            at: 88,
            df: 80,
            sa: 118,
            sd: 80,
            sp: 88
        },
        weightkg: 40,
        baseSpecies: "Toxtricity"
    },
    Sinistea: {
        types: ["Ghost", "Fairy"],
        bs: {
            hp: 41,
            at: 20,
            df: 76,
            sa: 94,
            sd: 94,
            sp: 50
        },
        weightkg: 0.2,
        nfe: true
    },
    Polteageist: {
        types: ["Ghost", "Fairy"],
        bs: {
            hp: 71,
            at: 30,
            df: 96,
            sa: 134,
            sd: 114,
            sp: 80
        },
        weightkg: 0.4
    },
    Hatenna: {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 45,
            at: 30,
            df: 65,
            sa: 76,
            sd: 75,
            sp: 44
        },
        weightkg: 3.4,
        nfe: true
    },
    Hattrem: {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 65,
            at: 65,
            df: 85,
            sa: 96,
            sd: 95,
            sp: 49
        },
        weightkg: 4.8,
        nfe: true
    },
    Hatterene: {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 95,
            at: 95,
            df: 95,
            sa: 136,
            sd: 115,
            sp: 39
        },
        weightkg: 5.1
    },
    Impidimp: {
        types: ["Dark", "Fairy"],
        bs: {
            hp: 45,
            at: 56,
            df: 30,
            sa: 55,
            sd: 85,
            sp: 64
        },
        weightkg: 5.5,
        nfe: true
    },
    Morgrem: {
        types: ["Dark", "Fairy"],
        bs: {
            hp: 65,
            at: 96,
            df: 65,
            sa: 60,
            sd: 90,
            sp: 79
        },
        weightkg: 12.5,
        nfe: true
    },
    Grimmsnarl: {
        types: ["Dark", "Fairy"],
        bs: {
            hp: 95,
            at: 136,
            df: 95,
            sa: 95,
            sd: 95,
            sp: 59
        },
        weightkg: 61
    },
    Perrserker: {
        types: ["Steel", "Fighting"],
        bs: {
            hp: 70,
            at: 120,
            df: 110,
            sa: 50,
            sd: 70,
            sp: 95
        },
        weightkg: 28
    },
    Milcery: {
        types: ["Fairy"],
        bs: {
            hp: 55,
            at: 40,
            df: 45,
            sa: 70,
            sd: 101,
            sp: 64
        },
        weightkg: 0.3,
        nfe: true
    },
    Alcremie: {
        types: ["Fairy"],
        bs: {
            hp: 95,
            at: 60,
            df: 75,
            sa: 110,
            sd: 121,
            sp: 64
        },
        weightkg: 0.5
    },
    Falinks: {
        types: ["Fighting", "Steel"],
        bs: {
            hp: 84,
            at: 114,
            df: 114,
            sa: 51,
            sd: 84,
            sp: 78
        },
        weightkg: 62
    },
    Pincurchin: {
        types: ["Electric", "Poison"],
        bs: {
            hp: 58,
            at: 101,
            df: 130,
            sa: 101,
            sd: 130,
            sp: 5
        },
        weightkg: 1
    },
    Snom: {
        types: ["Ice", "Bug"],
        bs: {
            hp: 45,
            at: 30,
            df: 95,
            sa: 65,
            sd: 95,
            sp: 20
        },
        weightkg: 3.8,
        nfe: true
    },
    Frosmoth: {
        types: ["Ice", "Bug"],
        bs: {
            hp: 70,
            at: 65,
            df: 65,
            sa: 125,
            sd: 100,
            sp: 75
        },
        weightkg: 42
    },
    Stonjourner: {
        types: ["Rock", "Psychic"],
        bs: {
            hp: 125,
            at: 125,
            df: 135,
            sa: 20,
            sd: 100,
            sp: 70
        },
        weightkg: 520
    },
    Eiscue: {
        types: ["Ice"],
        bs: {
            hp: 75,
            at: 85,
            df: 130,
            sa: 85,
            sd: 90,
            sp: 50
        },
        weightkg: 89,
        otherFormes: ["Eiscue-Noice"]
    },
    "Eiscue-Noice": {
        types: ["Ice"],
        bs: {
            hp: 75,
            at: 85,
            df: 50,
            sa: 85,
            sd: 90,
            sp: 130
        },
        weightkg: 89,
        baseSpecies: "Eiscue"
    },
    Indeedee: {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 70,
            at: 85,
            df: 65,
            sa: 105,
            sd: 95,
            sp: 95
        },
        weightkg: 28,
        otherFormes: ["Indeedee-F"]
    },
    "Indeedee-F": {
        types: ["Psychic", "Fairy"],
        bs: {
            hp: 70,
            at: 65,
            df: 85,
            sa: 95,
            sd: 105,
            sp: 95
        },
        weightkg: 28,
        baseSpecies: "Indeedee"
    },
    Morpeko: {
        types: ["Electric"],
        bs: {
            hp: 63,
            at: 97,
            df: 63,
            sa: 97,
            sd: 63,
            sp: 97
        },
        weightkg: 3,
        otherFormes: ["Morpeko-Hangry"]
    },
    "Morpeko-Hangry": {
        types: ["Electric", "Dark"],
        bs: {
            hp: 63,
            at: 97,
            df: 63,
            sa: 97,
            sd: 63,
            sp: 97
        },
        weightkg: 3,
        baseSpecies: "Morpeko"
    },
    Cufant: {
        types: ["Steel"],
        bs: {
            hp: 72,
            at: 80,
            df: 109,
            sa: 40,
            sd: 59,
            sp: 40
        },
        weightkg: 100,
        nfe: true
    },
    Copperajah: {
        types: ["Steel"],
        bs: {
            hp: 144,
            at: 130,
            df: 122,
            sa: 80,
            sd: 69,
            sp: 30
        },
        weightkg: 650
    },
    Duraludon: {
        types: ["Steel", "Dragon"],
        bs: {
            hp: 85,
            at: 75,
            df: 120,
            sa: 120,
            sd: 50,
            sp: 85
        },
        weightkg: 40,
        nfe: true
    },
    Dreepy: {
        types: ["Dragon", "Ghost"],
        bs: {
            hp: 43,
            at: 60,
            df: 30,
            sa: 70,
            sd: 50,
            sp: 107
        },
        weightkg: 2,
        nfe: true
    },
    Drakloak: {
        types: ["Dragon", "Ghost"],
        bs: {
            hp: 73,
            at: 80,
            df: 55,
            sa: 80,
            sd: 70,
            sp: 122
        },
        weightkg: 11,
        nfe: true
    },
    Dragapult: {
        types: ["Dragon", "Ghost"],
        bs: {
            hp: 103,
            at: 120,
            df: 55,
            sa: 100,
            sd: 80,
            sp: 142
        },
        weightkg: 50
    },
    Eternatus: {
        types: ["Poison", "Dragon"],
        bs: {
            hp: 125,
            at: 95,
            df: 95,
            sa: 145,
            sd: 95,
            sp: 125
        },
        weightkg: 950
    },
    Kubfu: {
        types: ["Fighting"],
        bs: {
            hp: 65,
            at: 90,
            df: 65,
            sa: 53,
            sd: 60,
            sp: 92
        },
        weightkg: 12,
        nfe: true
    },
    Urshifu: {
        types: ["Fighting", "Dark"],
        bs: {
            hp: 105,
            at: 130,
            df: 105,
            sa: 63,
            sd: 75,
            sp: 97
        },
        weightkg: 105,
        otherFormes: ["Urshifu-Rapid"]
    },
    "Urshifu-Rapid": {
        types: ["Fighting", "Water"],
        bs: {
            hp: 105,
            at: 130,
            df: 105,
            sa: 63,
            sd: 60,
            sp: 97
        },
        weightkg: 105,
        baseSpecies: "Urshifu"
    },
    Zarude: {
        types: ["Dark", "Grass"],
        bs: {
            hp: 115,
            at: 120,
            df: 95,
            sa: 70,
            sd: 95,
            sp: 105
        },
        weightkg: 70
    },
    Regieleki: {
        types: ["Electric"],
        bs: {
            hp: 80,
            at: 100,
            df: 60,
            sa: 100,
            sd: 60,
            sp: 200
        },
        weightkg: 145
    },
    Regidrago: {
        types: ["Dragon"],
        bs: {
            hp: 150,
            at: 125,
            df: 60,
            sa: 125,
            sd: 60,
            sp: 80
        },
        weightkg: 200
    },
    Glastrier: {
        types: ["Ice"],
        bs: {
            hp: 115,
            at: 145,
            df: 130,
            sa: 30,
            sd: 115,
            sp: 65
        },
        weightkg: 800
    },
    Spectrier: {
        types: ["Ghost"],
        bs: {
            hp: 100,
            at: 65,
            df: 60,
            sa: 145,
            sd: 100,
            sp: 130
        },
        weightkg: 44.5
    },
    Wyrdeer: {
        types: ["Ice", "Psychic"],
        bs: {
            hp: 108,
            at: 110,
            df: 72,
            sa: 110,
            sd: 75,
            sp: 100
        },
        weightkg: 95.1
    },
    Kleavor: {
        types: ["Bug", "Rock"],
        bs: {
            hp: 80,
            at: 135,
            df: 110,
            sa: 45,
            sd: 80,
            sp: 85
        },
        weightkg: 89
    },
    Ursaluna: {
        types: ["Ground", "Normal"],
        bs: {
            hp: 130,
            at: 140,
            df: 110,
            sa: 45,
            sd: 90,
            sp: 60
        },
        weightkg: 290,
        otherFormes: ["Ursaluna-Bloodmoon"]
    },
    "Ursaluna-Bloodmoon": {
        types: ["Ground", "Dark"],
        bs: {
            hp: 130,
            at: 65,
            df: 110,
            sa: 140,
            sd: 90,
            sp: 40
        },
        weightkg: 333,
        baseSpecies: "Ursaluna"
    },
    Basculegion: {
        types: ["Water", "Ghost"],
        bs: {
            hp: 122,
            at: 122,
            df: 93,
            sa: 80,
            sd: 80,
            sp: 78
        },
        weightkg: 110,
        otherFormes: ["Basculegion-F"]
    },
    "Basculegion-F": {
        types: ["Water", "Ghost"],
        bs: {
            hp: 122,
            at: 80,
            df: 80,
            sa: 122,
            sd: 93,
            sp: 78
        },
        weightkg: 110,
        baseSpecies: "Basculegion"
    },
    Sneasler: {
        types: ["Ice", "Poison"],
        bs: {
            hp: 80,
            at: 130,
            df: 80,
            sa: 40,
            sd: 80,
            sp: 115
        },
        weightkg: 43
    },
    Overqwil: {
        types: ["Dark", "Poison"],
        bs: {
            hp: 115,
            at: 140,
            df: 100,
            sa: 60,
            sd: 85,
            sp: 75
        },
        weightkg: 60.5
    },
    Enamorus: {
        types: ["Fairy", "Flying"],
        bs: {
            hp: 74,
            at: 115,
            df: 70,
            sa: 135,
            sd: 95,
            sp: 111
        },
        weightkg: 48,
        otherFormes: ["Enamorus-Therian"]
    },
    "Enamorus-Therian": {
        types: ["Fairy", "Flying"],
        bs: {
            hp: 74,
            at: 75,
            df: 125,
            sa: 135,
            sd: 145,
            sp: 46
        },
        weightkg: 48,
        baseSpecies: "Enamorus"
    },
    Sprigatito: {
        types: ["Grass"],
        bs: {
            hp: 40,
            at: 61,
            df: 50,
            sa: 51,
            sd: 50,
            sp: 78
        },
        weightkg: 4.1,
        nfe: true
    },
    Floragato: {
        types: ["Grass"],
        bs: {
            hp: 60,
            at: 91,
            df: 55,
            sa: 71,
            sd: 55,
            sp: 108
        },
        weightkg: 12.2,
        nfe: true
    },
    Meowscarada: {
        types: ["Grass", "Dark"],
        bs: {
            hp: 75,
            at: 111,
            df: 65,
            sa: 111,
            sd: 65,
            sp: 123
        },
        weightkg: 31.2
    },
    Fuecoco: {
        types: ["Fire"],
        bs: {
            hp: 64,
            at: 45,
            df: 70,
            sa: 65,
            sd: 70,
            sp: 36
        },
        weightkg: 9.8,
        nfe: true
    },
    Crocalor: {
        types: ["Fire"],
        bs: {
            hp: 84,
            at: 55,
            df: 85,
            sa: 90,
            sd: 86,
            sp: 41
        },
        weightkg: 30.7,
        nfe: true
    },
    Skeledirge: {
        types: ["Fire", "Ghost"],
        bs: {
            hp: 109,
            at: 75,
            df: 105,
            sa: 110,
            sd: 105,
            sp: 46
        },
        weightkg: 326.5
    },
    Quaxly: {
        types: ["Water"],
        bs: {
            hp: 55,
            at: 65,
            df: 50,
            sa: 50,
            sd: 50,
            sp: 60
        },
        weightkg: 6.1,
        nfe: true
    },
    Quaxwell: {
        types: ["Water"],
        bs: {
            hp: 70,
            at: 85,
            df: 70,
            sa: 65,
            sd: 70,
            sp: 80
        },
        weightkg: 21.5,
        nfe: true
    },
    Quaquaval: {
        types: ["Water", "Fighting"],
        bs: {
            hp: 95,
            at: 120,
            df: 80,
            sa: 85,
            sd: 80,
            sp: 90
        },
        weightkg: 61.9
    },
    Lechonk: {
        types: ["Normal", "Ground"],
        bs: {
            hp: 75,
            at: 55,
            df: 75,
            sa: 55,
            sd: 75,
            sp: 35
        },
        weightkg: 10.2,
        nfe: true
    },
    Oinkologne: {
        types: ["Fairy", "Ground"],
        bs: {
            hp: 115,
            at: 100,
            df: 105,
            sa: 75,
            sd: 85,
            sp: 45
        },
        weightkg: 120,
        otherFormes: ["Oinkologne-F"]
    },
    "Oinkologne-F": {
        types: ["Fairy", "Ground"],
        bs: {
            hp: 115,
            at: 75,
            df: 85,
            sa: 100,
            sd: 105,
            sp: 45
        },
        weightkg: 120,
        baseSpecies: "Oinkologne"
    },
    Dudunsparce: {
        types: ["Normal", "Ground"],
        bs: {
            hp: 130,
            at: 100,
            df: 100,
            sa: 100,
            sd: 100,
            sp: 45
        },
        weightkg: 47.4
    },
    Tarountula: {
        types: ["Bug"],
        bs: {
            hp: 41,
            at: 47,
            df: 87,
            sa: 21,
            sd: 77,
            sp: 37
        },
        weightkg: 4,
        nfe: true
    },
    Spidops: {
        types: ["Bug", "Fighting"],
        bs: {
            hp: 71,
            at: 102,
            df: 102,
            sa: 36,
            sd: 87,
            sp: 102
        },
        weightkg: 16.5
    },
    Nymble: {
        types: ["Bug"],
        bs: {
            hp: 41,
            at: 62,
            df: 47,
            sa: 21,
            sd: 27,
            sp: 112
        },
        weightkg: 1,
        nfe: true
    },
    Lokix: {
        types: ["Bug", "Dark"],
        bs: {
            hp: 71,
            at: 112,
            df: 82,
            sa: 36,
            sd: 77,
            sp: 122
        },
        weightkg: 17.5
    },
    Rellor: {
        types: ["Bug", "Ground"],
        bs: {
            hp: 59,
            at: 70,
            df: 107,
            sa: 87,
            sd: 87,
            sp: 70
        },
        weightkg: 1,
        nfe: true
    },
    Rabsca: {
        types: ["Bug", "Psychic"],
        bs: {
            hp: 79,
            at: 50,
            df: 107,
            sa: 137,
            sd: 147,
            sp: 30
        },
        weightkg: 3.5
    },
    Greavard: {
        types: ["Ghost"],
        bs: {
            hp: 62,
            at: 72,
            df: 62,
            sa: 39,
            sd: 62,
            sp: 78
        },
        weightkg: 35,
        nfe: true
    },
    Houndstone: {
        types: ["Ghost", "Rock"],
        bs: {
            hp: 102,
            at: 102,
            df: 102,
            sa: 49,
            sd: 102,
            sp: 68
        },
        weightkg: 15
    },
    Flittle: {
        types: ["Psychic"],
        bs: {
            hp: 45,
            at: 35,
            df: 55,
            sa: 80,
            sd: 90,
            sp: 95
        },
        weightkg: 1.5,
        nfe: true
    },
    Espathra: {
        types: ["Psychic", "Ground"],
        bs: {
            hp: 95,
            at: 60,
            df: 60,
            sa: 120,
            sd: 95,
            sp: 120
        },
        weightkg: 90
    },
    Farigiraf: {
        types: ["Psychic", "Dark"],
        bs: {
            hp: 140,
            at: 100,
            df: 75,
            sa: 115,
            sd: 75,
            sp: 70
        },
        weightkg: 160
    },
    Wiglett: {
        types: ["Water"],
        bs: {
            hp: 25,
            at: 65,
            df: 45,
            sa: 35,
            sd: 45,
            sp: 105
        },
        weightkg: 1.8,
        nfe: true
    },
    Wugtrio: {
        types: ["Water", "Rock"],
        bs: {
            hp: 75,
            at: 100,
            df: 90,
            sa: 45,
            sd: 50,
            sp: 120
        },
        weightkg: 5.4
    },
    Dondozo: {
        types: ["Water"],
        bs: {
            hp: 150,
            at: 125,
            df: 115,
            sa: 80,
            sd: 65,
            sp: 40
        },
        weightkg: 220
    },
    Veluza: {
        types: ["Water", "Psychic"],
        bs: {
            hp: 98,
            at: 112,
            df: 98,
            sa: 40,
            sd: 65,
            sp: 112
        },
        weightkg: 90
    },
    Finizen: {
        types: ["Water"],
        bs: {
            hp: 106,
            at: 80,
            df: 66,
            sa: 66,
            sd: 66,
            sp: 96
        },
        weightkg: 60.2,
        nfe: true
    },
    Palafin: {
        types: ["Water"],
        bs: {
            hp: 106,
            at: 80,
            df: 66,
            sa: 66,
            sd: 66,
            sp: 96
        },
        weightkg: 60.2,
        otherFormes: ["Palafin-Hero"]
    },
    "Palafin-Hero": {
        types: ["Water"],
        bs: {
            hp: 106,
            at: 160,
            df: 96,
            sa: 106,
            sd: 96,
            sp: 96
        },
        weightkg: 97.4,
        baseSpecies: "Palafin"
    },
    Smoliv: {
        types: ["Grass", "Normal"],
        bs: {
            hp: 43,
            at: 33,
            df: 75,
            sa: 65,
            sd: 79,
            sp: 35
        },
        weightkg: 6.5,
        nfe: true
    },
    Dolliv: {
        types: ["Normal", "Grass"],
        bs: {
            hp: 63,
            at: 53,
            df: 75,
            sa: 95,
            sd: 109,
            sp: 45
        },
        weightkg: 11.9,
        nfe: true
    },
    Arboliva: {
        types: ["Ground", "Grass"],
        bs: {
            hp: 93,
            at: 58,
            df: 95,
            sa: 125,
            sd: 129,
            sp: 50
        },
        weightkg: 48.2
    },
    Capsakid: {
        types: ["Grass", "Fire"],
        bs: {
            hp: 54,
            at: 63,
            df: 55,
            sa: 63,
            sd: 55,
            sp: 60
        },
        weightkg: 3,
        nfe: true
    },
    Scovillain: {
        types: ["Grass", "Fire"],
        bs: {
            hp: 74,
            at: 108,
            df: 80,
            sa: 108,
            sd: 80,
            sp: 75
        },
        weightkg: 15
    },
    Tadbulb: {
        types: ["Electric"],
        bs: {
            hp: 63,
            at: 33,
            df: 43,
            sa: 83,
            sd: 103,
            sp: 75
        },
        weightkg: 0.4,
        nfe: true
    },
    Bellibolt: {
        types: ["Electric"],
        bs: {
            hp: 113,
            at: 63,
            df: 93,
            sa: 103,
            sd: 103,
            sp: 40
        },
        weightkg: 113
    },
    Varoom: {
        types: ["Steel", "Poison"],
        bs: {
            hp: 55,
            at: 71,
            df: 99,
            sa: 24,
            sd: 55,
            sp: 71
        },
        weightkg: 35,
        nfe: true
    },
    Revavroom: {
        types: ["Steel", "Poison"],
        bs: {
            hp: 80,
            at: 119,
            df: 109,
            sa: 38,
            sd: 80,
            sp: 109
        },
        weightkg: 120
    },
    Orthworm: {
        types: ["Steel"],
        bs: {
            hp: 105,
            at: 115,
            df: 145,
            sa: 45,
            sd: 65,
            sp: 65
        },
        weightkg: 310
    },
    Tandemaus: {
        types: ["Normal"],
        bs: {
            hp: 54,
            at: 50,
            df: 45,
            sa: 40,
            sd: 45,
            sp: 96
        },
        weightkg: 1.8,
        nfe: true
    },
    Maushold: {
        types: ["Normal"],
        bs: {
            hp: 74,
            at: 75,
            df: 75,
            sa: 65,
            sd: 75,
            sp: 116
        },
        weightkg: 2.8
    },
    Cetoddle: {
        types: ["Ice"],
        bs: {
            hp: 110,
            at: 83,
            df: 85,
            sa: 34,
            sd: 75,
            sp: 63
        },
        weightkg: 45,
        nfe: true
    },
    Cetitan: {
        types: ["Ice"],
        bs: {
            hp: 170,
            at: 143,
            df: 90,
            sa: 44,
            sd: 80,
            sp: 73
        },
        weightkg: 700
    },
    Frigibax: {
        types: ["Dragon", "Ice"],
        bs: {
            hp: 65,
            at: 75,
            df: 67,
            sa: 35,
            sd: 57,
            sp: 61
        },
        weightkg: 17,
        nfe: true
    },
    Arctibax: {
        types: ["Dragon", "Ice"],
        bs: {
            hp: 80,
            at: 110,
            df: 77,
            sa: 45,
            sd: 67,
            sp: 101
        },
        weightkg: 30,
        nfe: true
    },
    Baxcalibur: {
        types: ["Dragon", "Ice"],
        bs: {
            hp: 115,
            at: 145,
            df: 107,
            sa: 60,
            sd: 92,
            sp: 81
        },
        weightkg: 210
    },
    Tatsugiri: {
        types: ["Dragon", "Water"],
        bs: {
            hp: 68,
            at: 50,
            df: 68,
            sa: 123,
            sd: 123,
            sp: 83
        },
        weightkg: 8
    },
    Cyclizar: {
        types: ["Dragon", "Normal"],
        bs: {
            hp: 80,
            at: 95,
            df: 80,
            sa: 95,
            sd: 80,
            sp: 121
        },
        weightkg: 63
    },
    Pawmi: {
        types: ["Electric"],
        bs: {
            hp: 45,
            at: 60,
            df: 45,
            sa: 60,
            sd: 60,
            sp: 60
        },
        weightkg: 2.5,
        nfe: true
    },
    Pawmo: {
        types: ["Electric", "Fighting"],
        bs: {
            hp: 65,
            at: 85,
            df: 60,
            sa: 75,
            sd: 70,
            sp: 85
        },
        weightkg: 6.5,
        nfe: true
    },
    Pawmot: {
        types: ["Electric", "Fighting"],
        bs: {
            hp: 75,
            at: 115,
            df: 70,
            sa: 105,
            sd: 80,
            sp: 105
        },
        weightkg: 41
    },
    Wattrel: {
        types: ["Electric", "Flying"],
        bs: {
            hp: 45,
            at: 55,
            df: 40,
            sa: 65,
            sd: 40,
            sp: 105
        },
        weightkg: 3.6,
        nfe: true
    },
    Kilowattrel: {
        types: ["Electric", "Flying"],
        bs: {
            hp: 75,
            at: 90,
            df: 70,
            sa: 105,
            sd: 70,
            sp: 125
        },
        weightkg: 38.6
    },
    Bombirdier: {
        types: ["Flying", "Dark"],
        bs: {
            hp: 87,
            at: 107,
            df: 87,
            sa: 50,
            sd: 87,
            sp: 107
        },
        weightkg: 42.9
    },
    Squawkabilly: {
        types: ["Normal", "Flying"],
        bs: {
            hp: 82,
            at: 109,
            df: 66,
            sa: 45,
            sd: 66,
            sp: 112
        },
        weightkg: 2.4
    },
    Flamigo: {
        types: ["Flying", "Fighting"],
        bs: {
            hp: 82,
            at: 115,
            df: 74,
            sa: 75,
            sd: 74,
            sp: 105
        },
        weightkg: 37
    },
    Klawf: {
        types: ["Rock", "Bug"],
        bs: {
            hp: 80,
            at: 115,
            df: 125,
            sa: 35,
            sd: 80,
            sp: 80
        },
        weightkg: 79
    },
    Nacli: {
        types: ["Rock"],
        bs: {
            hp: 40,
            at: 60,
            df: 120,
            sa: 5,
            sd: 100,
            sp: 5
        },
        weightkg: 16,
        nfe: true
    },
    Naclstack: {
        types: ["Rock"],
        bs: {
            hp: 80,
            at: 90,
            df: 125,
            sa: 30,
            sd: 100,
            sp: 15
        },
        weightkg: 105,
        nfe: true
    },
    Garganacl: {
        types: ["Rock"],
        bs: {
            hp: 120,
            at: 120,
            df: 130,
            sa: 45,
            sd: 100,
            sp: 35
        },
        weightkg: 240
    },
    Glimmet: {
        types: ["Rock", "Poison"],
        bs: {
            hp: 53,
            at: 35,
            df: 85,
            sa: 105,
            sd: 101,
            sp: 46
        },
        weightkg: 8,
        nfe: true
    },
    Glimmora: {
        types: ["Rock", "Poison"],
        bs: {
            hp: 83,
            at: 50,
            df: 90,
            sa: 135,
            sd: 131,
            sp: 86
        },
        weightkg: 45
    },
    Shroodle: {
        types: ["Poison", "Normal"],
        bs: {
            hp: 40,
            at: 65,
            df: 40,
            sa: 50,
            sd: 40,
            sp: 95
        },
        weightkg: 0.7,
        nfe: true
    },
    Grafaiai: {
        types: ["Poison", "Normal"],
        bs: {
            hp: 66,
            at: 95,
            df: 72,
            sa: 80,
            sd: 72,
            sp: 115
        },
        weightkg: 27.2
    },
    Fidough: {
        types: ["Fairy"],
        bs: {
            hp: 60,
            at: 55,
            df: 75,
            sa: 30,
            sd: 85,
            sp: 65
        },
        weightkg: 10.9,
        nfe: true
    },
    Dachsbun: {
        types: ["Fairy"],
        bs: {
            hp: 75,
            at: 85,
            df: 115,
            sa: 50,
            sd: 95,
            sp: 95
        },
        weightkg: 14.9
    },
    Maschiff: {
        types: ["Dark", "Normal"],
        bs: {
            hp: 60,
            at: 80,
            df: 60,
            sa: 35,
            sd: 60,
            sp: 80
        },
        weightkg: 16,
        nfe: true
    },
    Mabosstiff: {
        types: ["Dark", "Normal"],
        bs: {
            hp: 85,
            at: 120,
            df: 90,
            sa: 55,
            sd: 90,
            sp: 85
        },
        weightkg: 61
    },
    Bramblin: {
        types: ["Grass", "Ghost"],
        bs: {
            hp: 50,
            at: 75,
            df: 75,
            sa: 20,
            sd: 65,
            sp: 90
        },
        weightkg: 0.6,
        nfe: true
    },
    Brambleghast: {
        types: ["Grass", "Ghost"],
        bs: {
            hp: 75,
            at: 115,
            df: 115,
            sa: 30,
            sd: 85,
            sp: 105
        },
        weightkg: 6
    },
    "Gimmighoul-Chest": {
        types: ["Ghost", "Steel"],
        bs: {
            hp: 52,
            at: 50,
            df: 115,
            sa: 93,
            sd: 111,
            sp: 4
        },
        weightkg: 5,
        nfe: true,
        baseSpecies: "Gimmighoul"
    },
    Gimmighoul: {
        types: ["Ghost", "Bug"],
        bs: {
            hp: 45,
            at: 30,
            df: 25,
            sa: 75,
            sd: 45,
            sp: 80
        },
        weightkg: 0.1,
        nfe: true,
        otherFormes: ["Gimmighoul-Chest"]
    },
    Gholdengo: {
        types: ["Steel", "Ghost"],
        bs: {
            hp: 87,
            at: 60,
            df: 95,
            sa: 133,
            sd: 91,
            sp: 84
        },
        weightkg: 30
    },
    "Great Tusk": {
        types: ["Ground", "Fighting"],
        bs: {
            hp: 131,
            at: 131,
            df: 131,
            sa: 53,
            sd: 67,
            sp: 87
        },
        weightkg: 320
    },
    "Brute Bonnet": {
        types: ["Grass", "Dark"],
        bs: {
            hp: 119,
            at: 137,
            df: 109,
            sa: 63,
            sd: 109,
            sp: 63
        },
        weightkg: 21
    },
    "Walking Wake": {
        types: ["Water", "Dragon"],
        bs: {
            hp: 121,
            at: 79,
            df: 81,
            sa: 129,
            sd: 81,
            sp: 109
        },
        weightkg: 280
    },
    "Sandy Shocks": {
        types: ["Electric", "Ground"],
        bs: {
            hp: 87,
            at: 67,
            df: 103,
            sa: 133,
            sd: 103,
            sp: 107
        },
        weightkg: 60
    },
    "Scream Tail": {
        types: ["Fairy", "Dark"],
        bs: {
            hp: 115,
            at: 49,
            df: 99,
            sa: 115,
            sd: 115,
            sp: 111
        },
        weightkg: 8
    },
    "Flutter Mane": {
        types: ["Ghost", "Fairy"],
        bs: {
            hp: 65,
            at: 65,
            df: 65,
            sa: 135,
            sd: 135,
            sp: 135
        },
        weightkg: 4
    },
    "Slither Wing": {
        types: ["Bug", "Fighting"],
        bs: {
            hp: 115,
            at: 135,
            df: 85,
            sa: 75,
            sd: 105,
            sp: 85
        },
        weightkg: 92
    },
    "Roaring Moon": {
        types: ["Dragon", "Dark"],
        bs: {
            hp: 105,
            at: 139,
            df: 79,
            sa: 55,
            sd: 101,
            sp: 121
        },
        weightkg: 380
    },
    "Iron Treads": {
        types: ["Ground", "Steel"],
        bs: {
            hp: 90,
            at: 120,
            df: 120,
            sa: 54,
            sd: 108,
            sp: 108
        },
        weightkg: 240
    },
    "Iron Leaves": {
        types: ["Grass", "Psychic"],
        bs: {
            hp: 92,
            at: 122,
            df: 108,
            sa: 48,
            sd: 108,
            sp: 122
        },
        weightkg: 125
    },
    "Iron Moth": {
        types: ["Poison", "Fire"],
        bs: {
            hp: 90,
            at: 40,
            df: 90,
            sa: 140,
            sd: 140,
            sp: 100
        },
        weightkg: 36
    },
    "Iron Hands": {
        types: ["Fighting", "Electric"],
        bs: {
            hp: 154,
            at: 140,
            df: 124,
            sa: 50,
            sd: 104,
            sp: 28
        },
        weightkg: 380.7
    },
    "Iron Jugulis": {
        types: ["Dark", "Steel"],
        bs: {
            hp: 92,
            at: 80,
            df: 92,
            sa: 126,
            sd: 92,
            sp: 118
        },
        weightkg: 111
    },
    "Iron Thorns": {
        types: ["Dark", "Electric"],
        bs: {
            hp: 114,
            at: 144,
            df: 120,
            sa: 50,
            sd: 100,
            sp: 72
        },
        weightkg: 303
    },
    "Iron Bundle": {
        types: ["Ice", "Water"],
        bs: {
            hp: 70,
            at: 80,
            df: 120,
            sa: 124,
            sd: 70,
            sp: 136
        },
        weightkg: 11
    },
    "Iron Valiant": {
        types: ["Fairy", "Fighting"],
        bs: {
            hp: 74,
            at: 130,
            df: 90,
            sa: 130,
            sd: 60,
            sp: 116
        },
        weightkg: 35
    },
    "Ting-Lu": {
        types: ["Dark", "Ground"],
        bs: {
            hp: 165,
            at: 125,
            df: 125,
            sa: 55,
            sd: 85,
            sp: 45
        },
        weightkg: 699.7
    },
    "Chien-Pao": {
        types: ["Dark", "Ice"],
        bs: {
            hp: 90,
            at: 135,
            df: 80,
            sa: 80,
            sd: 80,
            sp: 135
        },
        weightkg: 152.2
    },
    "Wo-Chien": {
        types: ["Dark", "Grass"],
        bs: {
            hp: 135,
            at: 70,
            df: 115,
            sa: 115,
            sd: 135,
            sp: 30
        },
        weightkg: 74.2
    },
    "Chi-Yu": {
        types: ["Dark", "Fire"],
        bs: {
            hp: 60,
            at: 80,
            df: 80,
            sa: 145,
            sd: 135,
            sp: 100
        },
        weightkg: 4.9
    },
    Koraidon: {
        types: ["Fighting", "Dragon"],
        bs: {
            hp: 100,
            at: 135,
            df: 115,
            sa: 85,
            sd: 100,
            sp: 135
        },
        weightkg: 303
    },
    Miraidon: {
        types: ["Electric", "Dragon"],
        bs: {
            hp: 100,
            at: 85,
            df: 100,
            sa: 135,
            sd: 115,
            sp: 135
        },
        weightkg: 240
    },
    Tinkatink: {
        types: ["Fairy", "Steel"],
        bs: {
            hp: 50,
            at: 60,
            df: 72,
            sa: 22,
            sd: 72,
            sp: 54
        },
        weightkg: 8.9,
        nfe: true
    },
    Tinkatuff: {
        types: ["Fairy", "Steel"],
        bs: {
            hp: 65,
            at: 85,
            df: 92,
            sa: 32,
            sd: 92,
            sp: 74
        },
        weightkg: 59.1,
        nfe: true
    },
    Tinkaton: {
        types: ["Fairy", "Steel"],
        bs: {
            hp: 65,
            at: 125,
            df: 112,
            sa: 42,
            sd: 112,
            sp: 94
        },
        weightkg: 112.8
    },
    Charcadet: {
        types: ["Fire"],
        bs: {
            hp: 60,
            at: 55,
            df: 60,
            sa: 55,
            sd: 60,
            sp: 60
        },
        weightkg: 10.5,
        nfe: true
    },
    Armarouge: {
        types: ["Fire", "Psychic"],
        bs: {
            hp: 75,
            at: 55,
            df: 115,
            sa: 125,
            sd: 100,
            sp: 80
        },
        weightkg: 85
    },
    Ceruledge: {
        types: ["Fire", "Ghost"],
        bs: {
            hp: 75,
            at: 125,
            df: 80,
            sa: 55,
            sd: 115,
            sp: 100
        },
        weightkg: 62
    },
    Toedscool: {
        types: ["Ground", "Grass"],
        bs: {
            hp: 60,
            at: 40,
            df: 60,
            sa: 75,
            sd: 100,
            sp: 90
        },
        weightkg: 33,
        nfe: true
    },
    Toedscruel: {
        types: ["Ground", "Grass"],
        bs: {
            hp: 80,
            at: 50,
            df: 65,
            sa: 120,
            sd: 120,
            sp: 100
        },
        weightkg: 58
    },
    Kingambit: {
        types: ["Dark", "Steel"],
        bs: {
            hp: 115,
            at: 150,
            df: 135,
            sa: 60,
            sd: 90,
            sp: 50
        },
        weightkg: 120
    },
    Clodsire: {
        types: ["Poison", "Ground"],
        bs: {
            hp: 130,
            at: 100,
            df: 85,
            sa: 45,
            sd: 100,
            sp: 20
        },
        weightkg: 223
    },
    Annihilape: {
        types: ["Fighting", "Ghost"],
        bs: {
            hp: 115,
            at: 130,
            df: 90,
            sa: 50,
            sd: 90,
            sp: 75
        },
        weightkg: 56
    },
    "Ogerpon-Teal-Mask": {
        types: ["Grass", "Fairy"],
        bs: {
            hp: 80,
            at: 120,
            df: 84,
            sa: 60,
            sd: 96,
            sp: 110
        },
        weightkg: 39.8,
        otherFormes: [
            "Ogerpon-Hearthflame-Mask",
            "Ogerpon-Wellspring-Mask",
            "Ogerpon-Cornerstone-Mask",
        ]
    },
    "Ogerpon-Wellspring-Mask": {
        types: ["Grass", "Water"],
        bs: {
            hp: 80,
            at: 120,
            df: 84,
            sa: 60,
            sd: 96,
            sp: 110
        },
        weightkg: 39.8,
        baseSpecies: "Ogerpon-Teal-Mask"
    },
    "Ogerpon-Hearthflame-Mask": {
        types: ["Grass", "Fire"],
        bs: {
            hp: 80,
            at: 130,
            df: 94,
            sa: 60,
            sd: 101,
            sp: 110
        },
        weightkg: 39.8,
        baseSpecies: "Ogerpon-Teal-Mask"
    },
    "Ogerpon-Cornerstone-Mask": {
        types: ["Grass", "Rock"],
        bs: {
            hp: 80,
            at: 120,
            df: 109,
            sa: 60,
            sd: 96,
            sp: 110
        },
        weightkg: 39.8,
        baseSpecies: "Ogerpon-Teal-Mask"
    },
    Dipplin: {
        types: ["Bug", "Dragon"],
        bs: {
            hp: 80,
            at: 50,
            df: 115,
            sa: 95,
            sd: 100,
            sp: 40
        },
        weightkg: 4.4,
        nfe: true
    },
    Hydrapple: {
        types: ["Bug", "Dragon"],
        bs: {
            hp: 120,
            at: 90,
            df: 115,
            sa: 135,
            sd: 100,
            sp: 40
        },
        weightkg: 93
    },
    Okidogi: {
        types: ["Poison", "Fighting"],
        bs: {
            hp: 118,
            at: 128,
            df: 118,
            sa: 58,
            sd: 88,
            sp: 65
        },
        weightkg: 92.2
    },
    Munkidori: {
        types: ["Poison", "Psychic"],
        bs: {
            hp: 78,
            at: 65,
            df: 68,
            sa: 138,
            sd: 118,
            sp: 108
        },
        weightkg: 12.2
    },
    Fezandipiti: {
        types: ["Fairy", "Poison"],
        bs: {
            hp: 78,
            at: 65,
            df: 78,
            sa: 118,
            sd: 128,
            sp: 108
        },
        weightkg: 30.1
    },
    "Gouging Fire": {
        types: ["Fire", "Dragon"],
        bs: {
            hp: 121,
            at: 141,
            df: 121,
            sa: 45,
            sd: 91,
            sp: 81
        },
        weightkg: 590
    },
    "Raging Bolt": {
        types: ["Electric", "Dragon"],
        bs: {
            hp: 141,
            at: 73,
            df: 91,
            sa: 141,
            sd: 91,
            sp: 63
        },
        weightkg: 480
    },
    "Iron Crown": {
        types: ["Steel", "Psychic"],
        bs: {
            hp: 92,
            at: 48,
            df: 108,
            sa: 126,
            sd: 108,
            sp: 118
        },
        weightkg: 156
    },
    "Iron Boulder": {
        types: ["Rock", "Psychic"],
        bs: {
            hp: 100,
            at: 128,
            df: 108,
            sa: 48,
            sd: 108,
            sp: 108
        },
        weightkg: 162.5
    },
    Terapagos: {
        types: ["Normal"],
        bs: {
            hp: 75,
            at: 40,
            df: 125,
            sa: 125,
            sd: 125,
            sp: 60
        },
        weightkg: 6.5,
        otherFormes: ["Terapagos-Terastal"]
    },
    "Terapagos-Terastal": {
        types: ["Normal"],
        bs: {
            hp: 100,
            at: 60,
            df: 125,
            sa: 150,
            sd: 125,
            sp: 40
        },
        weightkg: 16,
        baseSpecies: "Terapagos"
    },
    Pecharunt: {
        types: ["Poison", "Ghost"],
        bs: {
            hp: 68,
            at: 48,
            df: 160,
            sa: 108,
            sd: 108,
            sp: 108
        },
        weightkg: 0.3
    },
    Archaludon: {
        types: ["Steel", "Dragon"],
        bs: {
            hp: 105,
            at: 90,
            df: 130,
            sa: 125,
            sd: 80,
            sp: 70
        },
        weightkg: 60
    },
    Poltchageist: {
        types: ["Grass", "Ghost"],
        bs: {
            hp: 41,
            at: 20,
            df: 76,
            sa: 94,
            sd: 94,
            sp: 50
        },
        weightkg: 1.1,
        nfe: true
    },
    Sinistcha: {
        types: ["Grass", "Ghost"],
        bs: {
            hp: 71,
            at: 30,
            df: 106,
            sa: 124,
            sd: 124,
            sp: 70
        },
        weightkg: 2.2
    }
};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH, PLA_PATCH);
exports.SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Species = (function () {
    function Species(gen) {
        this.gen = gen;
    }
    Species.prototype.get = function (id) {
        return SPECIES_BY_ID[this.gen][id];
    };
    Species.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = SPECIES_BY_ID[this.gen];
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
    return Species;
}());
exports.Species = Species;
var Specie = (function () {
    function Specie(name, data) {
        this.kind = "Species";
        this.id = (0, util_1.toID)(name);
        this.name = name;
        var baseStats = {};
        baseStats.hp = data.bs.hp;
        baseStats.atk = data.bs.at;
        baseStats.def = data.bs.df;
        baseStats.spa = gen >= 2 ? data.bs.sa : data.bs.sl;
        baseStats.spd = gen >= 2 ? data.bs.sd : data.bs.sl;
        baseStats.spe = data.bs.sp;
        this.baseStats = baseStats;
        if (data.otherFormes) {
            this.otherFormes = data.otherFormes;
            if (gen >= 9 && !["toxtricity", "urshifu"].includes(this.id)) {
                this.otherFormes = this.otherFormes.filter(function (f) { return !f.endsWith("-Gmax"); });
                if (!this.otherFormes.length)
                    this.otherFormes = undefined;
                if (this.otherFormes)
                    this.otherFormes = __spreadArray([], __read(new Set(this.otherFormes)), false);
            }
        }
        (0, util_1.assignWithout)(this, data, Specie.EXCLUDE);
    }
    Specie.EXCLUDE = new Set(["bs", "otherFormes"]);
    return Specie;
}());
var SPECIES_BY_ID = [];
var gen = 0;
try {
    for (var SPECIES_1 = __values(exports.SPECIES), SPECIES_1_1 = SPECIES_1.next(); !SPECIES_1_1.done; SPECIES_1_1 = SPECIES_1.next()) {
        var species = SPECIES_1_1.value;
        var map = {};
        for (var specie in species) {
            if (gen >= 2 && species[specie].bs.sl)
                delete species[specie].bs.sl;
            var m = new Specie(specie, species[specie]);
            map[m.id] = m;
        }
        SPECIES_BY_ID.push(map);
        gen++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (SPECIES_1_1 && !SPECIES_1_1.done && (_a = SPECIES_1["return"])) _a.call(SPECIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=species.js.map