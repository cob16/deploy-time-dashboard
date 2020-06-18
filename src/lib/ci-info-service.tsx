import {CiInfo} from "./ci-info";

export interface CiInfoService {
    fetchInfo(): CiInfo
}