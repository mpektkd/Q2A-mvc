"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThreadUsersUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_thread_users_user_dto_1 = require("./create-thread-users-user.dto");
class UpdateThreadUsersUserDto extends mapped_types_1.PartialType(create_thread_users_user_dto_1.CreateThreadUsersUserDto) {
}
exports.UpdateThreadUsersUserDto = UpdateThreadUsersUserDto;
//# sourceMappingURL=update-thread-users-user.dto.js.map