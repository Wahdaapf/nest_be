"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_model_1 = require("../models/users.model");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const faker_1 = require("@faker-js/faker");
const mongoose_2 = require("mongoose");
const fs = require("fs");
const path = require("path");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    Add(body) {
        return this.userModel.create(body);
    }
    FindAll() {
        return this.userModel.find();
    }
    FindOne(id) {
        return this.userModel.findOne({ _id: id });
    }
    async Update(id, body) {
        const user = await this.userModel.findOne({ _id: id });
        if (user.filename && user.filename != "") {
            const image = path.join(__dirname, '..', '..', 'images/users', user.filename);
            fs.unlink(image, (err) => {
                if (err) {
                    throw new common_1.NotFoundException('Could not delete file');
                }
            });
        }
        return this.userModel.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
    }
    async Delete(id) {
        const user = await this.userModel.findOne({ _id: id });
        if (user.filename && user.filename != "") {
            const image = path.join(__dirname, '..', '..', 'images/users', user.filename);
            fs.unlink(image, (err) => {
                if (err) {
                    throw new common_1.NotFoundException('Could not delete file');
                }
            });
        }
        return this.userModel.findByIdAndDelete({ _id: id });
    }
    Search(key) {
        const keyword = key
            ? {
                $or: [
                    { fullname: { $regex: key, $options: 'i' } },
                    { email: { $regex: key, $options: 'i' } },
                ],
            }
            : {};
        return this.userModel.find(keyword);
    }
    Faker() {
        for (let index = 0; index <= 30; index++) {
            const fakeUser = {
                fullname: faker_1.faker.name.fullName(),
                email: faker_1.faker.internet.email(),
                age: 30,
                country: faker_1.faker.address.city()
            };
            this.userModel.create(fakeUser);
        }
        return;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map