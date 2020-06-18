import {ProjectSlug, ProjectVcsEnum} from "../../lib/circle-ci/project_slug";

describe('A Project', () => {
  test('generates a project slug', () => {
    expect(new ProjectSlug('org_name', 'repo_name', ProjectVcsEnum.Github).slug()).toEqual('gh/org_name/repo_name');
  });

  test('projcet_type defaults to gh', () => {
    expect(new ProjectSlug('org_name', 'repo_name').slug()).toEqual('gh/org_name/repo_name');
  });
});
