import _ from 'lodash';
import moment from 'moment';

export default class DataAdapter {

    async init(ctx) {
        let items = [];

        items.forEach(item => {
            if (isLeaf(item)) {
                ctx.create(item);
            } else {
                ctx.createContainer(item);
            }
        });

        function isLeaf(item) {
            return item.value;
        }
    }

    async history(ctx, options) {
        const result = [];

        if (options) {
            if (options.start && options.end) {
            }

            if (options.since) {
            }
        }

        return result;
    }

    async update(ctx, payload) {
        throw new Error('Not supported.');
    }
}
