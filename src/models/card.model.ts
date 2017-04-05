import { Document, model, Mongoose, Schema, Types } from 'mongoose';
const enumValues = require('mongoose-enumvalues');

export interface ICard extends Document {
    name: String,
    monsterType: String,
    attribute: String,
    cardType: String,
    cardEffectType: String,
    level: Number,
    attack: Number
    defence: Number
};

export const CardSchema = new Schema({
    name: { type: String, required: true },
    somethingElse: Number,
});

const Card = model<ICard>('Card', CardSchema);

export default Card;
