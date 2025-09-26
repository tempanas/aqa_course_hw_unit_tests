function getKeyByValue<T extends object, V>(
    obj: T,
    value: V
): keyof T | undefined {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key as keyof T] === value) {
                return key as keyof T;
            }
        }
    }
    return undefined;
}

const user = { id: 1, name: "Kris" };
const key = getKeyByValue(user, "Kris");
const notFoundKey = getKeyByValue(user, 100);

console.log(key);
console.log(notFoundKey);