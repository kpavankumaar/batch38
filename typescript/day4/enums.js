var Access;
(function (Access) {
    Access[Access["Read"] = 1] = "Read";
    Access[Access["Write"] = 2] = "Write";
    Access[Access["Execute"] = 4] = "Execute";
    Access[Access["AnotherAccess"] = 8] = "AnotherAccess";
})(Access || (Access = {}));
console.log(Access.Read);
console.log(Access[4]);
