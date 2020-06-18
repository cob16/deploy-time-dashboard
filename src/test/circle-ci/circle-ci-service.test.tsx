import {WorkflowStatusEnum} from "circleci-typescript-axios/lib/api";
import {CiInfo} from "../../lib/ci-info";
import {Workflow} from "circleci-typescript-axios";
import {CircleCiService} from "../../lib/circle-ci/circle-ci-service";

const apiKey: string = 'foobar'

test('Returns new CI info when called', () => {
    let service = new CircleCiService(apiKey)
    let ciInfo = service.fetchInfo()

    expect(ciInfo).toBeInstanceOf(CiInfo)
});


test('Find last workflow success', () => {
    let service = new CircleCiService(apiKey)

    let workflow_array: Array<Workflow> = [
        new TestWorkflow(1, WorkflowStatusEnum.Running),
        new TestWorkflow(2, WorkflowStatusEnum.Failed),
        new TestWorkflow(3, WorkflowStatusEnum.Success),
        new TestWorkflow(4, WorkflowStatusEnum.Success)
    ]

    let lastWorkflowSuccess = service.findLastWorkflowSuccess(workflow_array)

    expect(lastWorkflowSuccess).not.toBeNull()
    // @ts-ignore
    expect(lastWorkflowSuccess.id).toEqual("3")
});

test('return null if no workflow success found', () => {
    let service = new CircleCiService(apiKey)

    let workflow_array: Array<Workflow> = [
        new TestWorkflow(1, WorkflowStatusEnum.Running),
        new TestWorkflow(2, WorkflowStatusEnum.Failed),
    ]

    let lastWorkflowSuccess = service.findLastWorkflowSuccess(workflow_array)

    expect(lastWorkflowSuccess).toBeNull()
});


class TestWorkflow implements Workflow {

    constructor(id: number, status: WorkflowStatusEnum) {
        this.canceled_by = "canceled_by";
        this.created_at = "created_at";
        this.errored_by = "errored_by";
        this.id = String(id);
        this.name = name;
        this.pipeline_id = "pipeline_id";
        this.pipeline_number = 1234;
        this.project_slug = "project_slug";
        this.started_by = "started_by";
        this.status = status;
        this.stopped_at = "stopped_at";
    }

    canceled_by: string;
    created_at: string;
    errored_by: string;
    id: string;
    name: string;
    pipeline_id: string;
    pipeline_number: number;
    project_slug: string;
    started_by: string;
    status: WorkflowStatusEnum;
    stopped_at: string;
}
