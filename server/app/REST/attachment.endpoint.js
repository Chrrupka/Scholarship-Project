import applicationException from '../service/applicationException';
import business from '../business/business.container';
import validator from './requestValidator';

const attachmentEndpoint = {
    register(server) {
        server.route({
            method: 'POST',
            path: '/api/attachment',
            options: {
                description: 'Create a new attachment',
                tags: ['api'],
/*                 validate: {
                    payload: validator.createAttachment.payload
                 },*/
                auth: 'bearer'
            },
            handler: async (request, h) => {
                try {
                    const {files} = request.payload
                    const results = []
                    for (const file of files) {
                        let result = await business.getAttachmentManager(request).createAttachment(file);
                        results.push(result);
                    }

                    return {files: results};
                } catch (error) {
                    return applicationException.errorHandler(error, h);
                }
            }
        });
        server.route({
            method: 'GET',
            path: '/api/attachment/{id}',
            options: {
                description: 'Get an attachment by ID',
                tags: ['api'],
                 validate: {
                     params: validator.getById.params
                 },
                auth: 'bearer'
            },
            handler: async (request, h) => {
                try {
                    return await business.getAttachmentManager(request).getAttachmentById(request.params.id);
                } catch (error) {
                    return applicationException.errorHandler(error, h);
                }
            }
        });
        server.route({
            method: 'DELETE',
            path: '/api/attachment/{id}',
            options: {
                description: 'Delete an attachment',
                tags: ['api'],
                 validate: {
                     params: validator.removeAttachment.params
                 },
                auth: 'bearer'
            },
            handler: async (request, h) => {
                try {
                    return await business.getAttachmentManager(request).removeAttachmentById(request.params.id);
                } catch (error) {
                    return applicationException.errorHandler(error, h);
                }
            }
        });
        server.route({
            method: 'GET',
            path: '/api/attachment/file/{id}',
            handler: async (request, h) => {
                try {
                    const attachment = await business.getAttachmentManager(request).getAttachmentById(request.params.id);
                    if (!attachment) {
                        return h.response('Attachment not found').code(404);
                    }

                    const fileName = attachment.file_name;
                    const fileData = attachment.file_data;
                    const contentType = mime.lookup(fileName) || 'application/octet-stream';  // Tutaj użyj odpowiedniej logiki lub biblioteki do określenia MIME typu pliku

                    return h.response(fileData)
                        .type(contentType)
                        .header('Content-Disposition', 'attachment; filename="' + fileName + '"');
                } catch (error) {
                    return applicationException.errorHandler(error, h);
                }
            }
        });
    },
    tag: {
        name: 'attachment',
        description: 'When somebody wants to get attachment'
    }
};
export default attachmentEndpoint;
