export class CiInfo {
    readonly commits: number;
    readonly lastDeployed: Date;


    constructor(commits: number, lastDeployed: Date) {
        this.commits = commits;
        this.lastDeployed = lastDeployed;
    }
}