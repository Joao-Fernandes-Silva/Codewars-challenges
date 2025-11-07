"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friend = friend;
function friend(friends) {
    const realFriends = [];
    for (const name of friends) {
        if (name.length === 4)
            realFriends.push(name);
    }
    return realFriends;
}
//# sourceMappingURL=Friend_Or_Foe.js.map