/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/users.dto';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    Add(body: UserDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../models/users.model").UserDocument> & import("../models/users.model").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    FindAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../models/users.model").UserDocument> & import("../models/users.model").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>)[], import("mongoose").Document<unknown, {}, import("../models/users.model").UserDocument> & import("../models/users.model").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>, {}, import("../models/users.model").UserDocument, "find", {}>;
    FindOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("../models/users.model").UserDocument> & import("../models/users.model").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>, import("mongoose").Document<unknown, {}, import("../models/users.model").UserDocument> & import("../models/users.model").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>, {}, import("../models/users.model").UserDocument, "findOne", {}>;
    Update(id: string, body: UserDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../models/users.model").UserDocument> & import("../models/users.model").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    Delete(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/users.model").UserDocument> & import("../models/users.model").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    Search(key: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../models/users.model").UserDocument> & import("../models/users.model").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>)[], import("mongoose").Document<unknown, {}, import("../models/users.model").UserDocument> & import("../models/users.model").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>, {}, import("../models/users.model").UserDocument, "find", {}>;
    Faker(): void;
}
