"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
function fileUpload(path) {
    return (0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: path,
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
    });
}
exports.fileUpload = fileUpload;
//# sourceMappingURL=file-upload.js.map