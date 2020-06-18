import {
    Configuration,
    Pipeline, PipelineApi,
    PipelineApiFactory,
    PipelineListResponse,
    Workflow,
    WorkflowStatusEnum
} from 'circleci-typescript-axios';
import {CiInfoService} from "../ci-info-service";
import {CiInfo} from "../ci-info";

export class CircleCiService implements CiInfoService {

    private client: PipelineApi;

    constructor(apiKey: string) {
        let config = new Configuration({
                apiKey: apiKey,
            }
        )
        this.client = PipelineApiFactory(config) as PipelineApi;
    }

    fetchInfo(): CiInfo {
        return new CiInfo(12, new Date());
    }

    findLastWorkflowSuccess(workflow_array: Array<Workflow>): Workflow | null {
        for (let workflow of workflow_array) {
            if (workflow.status === WorkflowStatusEnum.Success) {
                return workflow
            }
        }
        return null
    }
}