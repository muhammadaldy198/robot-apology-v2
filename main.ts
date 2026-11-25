import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// The Robot Apology v2 — under-doing: the lock I never checked.
// Lesson = inversion of the assumption + a two-step ritual the reader can picture.
const text = "I'm sorry I never locked the back door because I assumed you had, and one windy night Milo slipped out and never came home.\nI have learned a door is not locked until I have heard it click, so now I turn the handle twice and say 'locked' out loud before the house goes quiet.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);
