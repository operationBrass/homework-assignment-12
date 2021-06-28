exports.roles = () => { 
    return [
{
    title: "Unix Engineer",
    department_id: 1,
    salary: 90000
  },
  
  {
    title: "Software Developer",
    department_id: 1,
    salary: 95000
  },
  
  {
    title: "Database Engineer",
    department_id: 3,
    salary: 91000
  },
  
  {
    title: "Storage Engineer",
    department_id: 4,
    salary: 91000
  },
  
  {
    title: "Manager",
    department_id: 5,
    salary: 100000
  }
]};

exports.departments = () => {
return [
    {
        name: "HR",
    },
    {
        name: "Warehouse",
    },
    {
        name: "Heavy Vehicles",
    },
    {
        name: "Service Delivery",
    },
    {
        name: "Projects",
    },
]};
    

exports.users = () => {
  return [
    {
        first_name: "Brendan",
        last_name: "Lewis",
        role_id: 1,
        employee_id: 2
    },
    {
      first_name: "Rachael",
      last_name: "Lewis",
      role_id: 5,
      
    },
    {
      first_name: "Archer",
      last_name: "Lewis",
      role_id: 3,
      employee_id: 2
    },
    {
      first_name: "Silas",
      last_name: "Lewis",
      role_id: 4,
      employee_id: 2
    },
    {
      first_name: "Sebastian",
      last_name: "Lewis",
      role_id: 2,
      employee_id: 1
    },
  ]
};
      