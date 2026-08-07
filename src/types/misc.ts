export type ParsedAssignments = {
    eventId: number;
    instanceId: number;
    courseName: string;
    assignmentTitle: string;
    moduleName: string;
    startDate?: number;
    dueDate: number;
    url: string;
    actionAvailable?: boolean;
    /** `'improvable'`: 受験済みだが「最高評点」方式で満点に達しておらず、再受験できる状態 */
    hasSubmitted: boolean | 'unknown' | 'improvable';
};
