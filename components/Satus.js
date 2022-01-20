const statusArray = [
  {
    status: "success",
    title: "",
  },
  {
    status: "error",
    title: "",
  },
  {
    status: "info",
    title: "",
  },
  {
    status: "warning",
    title: "",
  },
]
/**
 * 
 * @param {} status 
 * options: success | error | info | warning
 */
export default function getStatus(status, title) {
  let x = {};
  statusArray.forEach(statusOBJ => {
    if (statusOBJ.status === status) {
      statusOBJ.title = title;
      x = statusOBJ;
    }
  });
  return (x);
}

export const statusNames = {
  success: "success",
  error: "error",
  info: "info",
  warning: "warning"
}