export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    cp?: string,
    city?: string
  },
  isActive?: boolean,
  registered?: any
}
