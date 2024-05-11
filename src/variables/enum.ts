export enum Status {
    ACTIVE = 'actif',
    DISABLED = 'désactivé',
    IN_PROGRESS = 'en cours',
    SCHEDULED = 'programmé',
    COMPLETED = 'terminé',
    ARCHIVED = 'archivé',
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