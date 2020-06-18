export enum ProjectVcsEnum {
  Github = 'gh'
}

export class ProjectSlug {
  public readonly orgName: string;
  public readonly repoName: string;
  public readonly projectType: string;


  constructor(orgName: string, repoName: string, projectType: ProjectVcsEnum = ProjectVcsEnum.Github) {
    this.orgName = orgName;
    this.repoName = repoName;
    this.projectType = projectType.toString();
  }

  public slug(): string {
    return [this.projectType, this.orgName, this.repoName].join('/');
  }
}
