import { Client, MessageAttachment, MessageEmbed, Message, ColorResolvable, Snowflake } from "discord.js";

declare module "flitzzdev";


export function bin(code: string): Promise<string>;

export function ButtonPaginator(message: string, pages: MessageEmbed[], buttons?: ButtonOptions[], time?: number): Promise<void>;

export function inviteLogger(client: Client): Promise<void>;

export function passGen(Length: number): string;

export function remind(memberID: Snowflake, time: string, reason: string): Promise<void>;

interface ButtonEmojiOptions {
    id?: string,
    name: string,
    animated?: boolean;
}

interface ButtonOptions {
    style: ButtonStyleOptions;
    label: string;
    emoji?: ButtonEmojiOptions;
    url?: string;
    custom_id: string;
    id?: ButtonIDOptions;
}

type ButtonStyleOptions = "green" | "red" | "blurple" | "grey" | "url";

type ButtonIDOptions = "next" | "back";