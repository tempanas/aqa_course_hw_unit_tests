function validatePassword(password: string): boolean {
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/\d/.test(password)) return false;
    if (password.length < 8) return false;
    if (password.trim().length === 0) return false;
    return true;
}

console.log(validatePassword("Password-1")); 
console.log(validatePassword("Pass2word")); 
console.log(validatePassword("pass3word")); 
console.log(validatePassword("PASS4WORD")); 
console.log(validatePassword("   "));
console.log(validatePassword("Pass1"));
console.log(validatePassword("Passwordwithoutnum"));