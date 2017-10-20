import { Roles } from './roles';

export class User {

  public static initiateUser( u: User ): User {

    let roles = new Array<Roles>();

    for (let r of u.roles) {
      roles.push( Roles.initiateRoles( r ) );
    }

    return new User(
      u.id, u.firstname,
      u.lastname, u.email,
      u.personalEmail, u.phoneOne, u.phoneTwo,
      u.skype, u.activated, u.langKey, roles, u.filePath,
      u.cvpath, u.position, u.birthDate, u.office
    );
  }
  public id: number;
  public firstname: string;
  public lastname: string;
  public email: string;
  public personalEmail: string;
  public phoneOne: string;
  public phoneTwo: string;
  public skype: string;
  public activated: boolean;
  public langKey: string;
  public roles: Roles[];
  public filePath: string;
  public cvpath: string;
  public position: string;
  public birthDate: string;
  public office: string;

  constructor(
    id?: number, firstname?: string, lastname?: string, email?: string, personalEmail?: string,
    phoneOne?: string, phoneTwo?: string, skype?: string, activated?: boolean, langKey?: string,
    roles?: Roles[], filePath?: string, cvpath?: string, position?: string, birthDate?: string,
    office?: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.personalEmail = personalEmail;
    this.phoneOne = phoneOne;
    this.phoneTwo = phoneTwo;
    this.skype = skype;
    this.activated = activated;
    this.langKey = langKey;
    this.roles = roles;
    this.filePath = filePath;
    this.cvpath = cvpath;
    this.position = position;
    this.birthDate = birthDate;
    this.office = office;
  }
}
