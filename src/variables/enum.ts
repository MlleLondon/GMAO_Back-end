export enum Status {
    CREATED= 'créé',
    SCHEDULED = 'programmé',
    IN_PROGRESS = 'en cours',
    COMPLETED = 'terminé',
    CANCELlED = 'annulé',
}

export enum Level {
    ADMINISTRATOR = 1,
    ORGANIZATION_MANAGER = 2,
    TECHNICIAN_MANAGER = 3,
    TECHNICIAN = 4,
}

export enum TableAccess {
    VENDOR= 'vendor',
    ORGANIZATION= 'organization',
    HISTORY= 'history',
    INCIDENT_TYPE= 'incidentType',
    WO_TYPE= 'woType',
    ROLE= 'role',
    AUTHORIZATION= 'authorization',
    NOTIFICATION= 'notification',
    PART= 'part',
    BUILDING= 'building',
    EQUIPMENT= 'equipement',
    USER= 'user',
    WORKORDER= 'workorder',
    INTERVENTION= 'intervention',
    REPORT= 'report',
    PICKED_PART= 'pickedPart',
    FREQUENCY= 'frequency',
    PURCHASE= 'purchase',
    UTILIZED= 'utilized',
    WORK= 'work',
    ALLOW= 'allow',
}

export enum TableTypeAccess {
    CREATE= 'create',
    READ= 'read',
    UPDATE= 'update',
    DELETE= 'delete',
}

export enum Priority{
    URGENT= 'urgent',
    NOT_URGENT= 'non urgent',
}