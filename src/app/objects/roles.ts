export class Roles {

  public static initiateRoles( r: Roles ): Roles {
    return new Roles( r.id, r.roleType );
  }
  public id: number;
  public roleType: string;

  constructor(
    id?: number, roleType?: string
  ) {
    this.id = id;
    this.roleType = roleType;
  }

}
