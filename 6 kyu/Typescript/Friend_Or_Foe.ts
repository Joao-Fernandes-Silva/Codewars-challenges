export function friend(friends: string[]): string[] { 
    const realFriends: string[] = [];
    
    for (const name of friends) {
        if (name.length === 4) realFriends.push(name);
    }
    return realFriends;
}