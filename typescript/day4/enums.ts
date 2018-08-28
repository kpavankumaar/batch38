enum Access {
    Read = 1,
    Write = 2,
    Execute = 4,
    AnotherAccess = 8
}
console.log(Access.Read);
console.log(Access[4]);