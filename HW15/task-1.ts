interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee = {
    name: "Alice",
    salary: 2000,
    isManager: false,
};

type EmployeeKeys = keyof IEmployee;

type QaKeys = keyof typeof QA;

type UserType = typeof QA;

type PartialEmployee = Partial<IEmployee>;

type NameAndSalary = Pick<IEmployee, "name" | "salary">;

type WithoutIsManager = Omit<IEmployee, "isManager">;

type ReadonlyEmployee = Readonly<IEmployee>;

type QaKeyUnion = keyof typeof QA;
const recordObj: Record<string, QaKeyUnion> = {
    first: "name",
    second: "salary",
    third: "isManager",
};