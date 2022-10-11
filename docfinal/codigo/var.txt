// Global variables
var DataPrimitive_Armadillo = ["String", "string", "byte", "short", "int",
    "Int", "long", "Long", "float", "Float", "double", "Double", "boolean",
    "Boolean", "date", "Date", "list", "List", "array", "Array", "arrayList",
    "ArrayList"];
var DataTypeVisibility = [
    {simbol: "+", text: "public"},
    {simbol: "-", text: "private"},
    {simbol: "#", text: "protected"}
];
var DataTypeModifiers = [
    {simbol: "$", text: "static"},
    {simbol: "?", text: "abstract"},
    {simbol: "\¬", text: "final"},
    {simbol: "@", text: "interface"}
];
var DataTypeClass = [
    {simbol: "@", text: "interface"}
    , {simbol: "?", text: "abstract"}
    , {simbol: "\¬", text: "final"}
];
var indexDataType_Armadillo = 0;
var DataType_Armadillo = [];
var notifications = [];
DataType_Armadillo[indexDataType_Armadillo] = DataPrimitive_Armadillo.slice();