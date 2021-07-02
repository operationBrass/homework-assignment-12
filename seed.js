exports.departments = () => {
  return [
      {
          department_name: "HR",
      },
      {
          department_name: "Warehouse",
      },
      {
          department_name: "Service Delivery",
      },
      {
        department_name: "Sales",
      },
  ]};


exports.roles = () => { 
    return [
{
    title: "Manager",
    salary: 100000,
    DepartmentId: 1

  },
  
  {
    title: "Software Developer",
    salary: 95000,
    DepartmentId: 3
  },
  
  {
    title: "Database Engineer",
    salary: 91000,
    DepartmentId: 3
  },
  
  {
    title: "Supervisor",
    salary: 99000,
    DepartmentId: 2
  },
  
  {
    title: "Janitor",
    salary: 99000,
    DepartmentId: 2
  }
]};


  
exports.users = () => {
  return [
    {
        first_name: "Brendan",
        last_name: "Lewis",
        RoleId: 1,
    },
    {
      first_name: "Rachael",
      last_name: "Lewis",
      RoleId: 1,
    },
    {
      first_name: "Archer",
      last_name: "Lewis",
      RoleId: 2,
      managerId: 1
    },
    {
      first_name: "Silas",
      last_name: "Lewis",
      RoleId: 3,
      managerId: 2
    },
    {
      first_name: "Sebastian",
      last_name: "Lewis",
      RoleID: 3,
      managerId: 2
    },
  ]
};
      