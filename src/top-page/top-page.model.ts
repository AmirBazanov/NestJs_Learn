import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Goods

}

class HhData {
    @prop()
    count: number;

    @prop()
    juniorSalary: number;

    @prop()
    middleSalary: number;

    @prop()
    seniorSalary: number;
}

class TopPageAdvantages {
    @prop()
    title: string;

    @prop()
    description: string;
}

export interface TopPageModel extends Base { }

export class TopPageModel extends TimeStamps {

    @prop({ enum: TopLevelCategory })
    firstLevelCategory: TopLevelCategory;

    @prop()
    secondCategory: string;

    @prop()
    title: string;

    @prop()
    category: string;

    @prop({ unique: true })
    alias: string;

    @prop({ type: () => HhData })
    hh?: HhData;

    @prop({ type: () => [TopPageAdvantages] })
    advantages: TopPageAdvantages[];

    @prop()
    seoText: string;

    @prop()

    @prop()
    tagsTitle: string;

    @prop({ type: () => [String] })
    tags: string[];
}
