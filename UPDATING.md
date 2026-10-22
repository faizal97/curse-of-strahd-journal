# Updating the journal after a session

The site is three data files plus two pages. Every update touches the data files only.

| File | What it holds |
|---|---|
| `content.js` | Cliffhanger, next steps, teamwork, reminders, quest, open questions, journal entries, party, NPCs |
| `guides.js` | Tips for each character (Malam ini, combat turn, abilities, outside combat, watch out) |
| `inventory.js` | Key party items, each person's gold and items |
| `img/` | Portraits (party and NPCs) |

## 1. Collect (from the players, right after the game)

- The DM's journal entry, if there is one. Otherwise a few bullet points on what happened.
- Where the session ended (the new cliffhanger).
- Loot found, gold spent or earned, items used up (holy water, rations, bolts, scrolls).
- New NPCs, with a portrait if the DM shared one.
- Questions that got answered, and new ones that came up.
- Level-ups, new spells, or anything that changed on a character sheet. Fresh Roll20 PDF exports are best.
- The next session's date and time.

## 2. Update, in this order

1. **Journal:** add the new entry to `sessions` with the next number and date. Keep the DM's text as written. If you translate it, put the original in `original`.
2. **Cliffhanger:** rewrite `leftOff` (`session`, `text`, `quote`).
3. **Next session:** set `nextSession`.
4. **Open questions:** remove the answered ones from `threads` and add the new ones.
5. **Next steps:** rewrite `nextSteps` from scratch for the new situation. Don't just append.
6. **Reminders:** remove the ones that no longer apply. Add the new dangers and promises.
7. **Quest, party, NPCs, teamwork:** update anything that changed. Mark the dead with `status: "dead"` and `fate`.
8. **Character tips (`guides.js`):** rewrite each character's `tonight` for the new situation. Update `stats`, `abilities` and `turn` after a level-up.
9. **Inventory (`inventory.js`):** change gold and items for each person, update `shared` quest items, and set `updated`.
10. **Stamp it:** set `lastUpdate`, every value in `reviewed`, each guide's `asOf` and `inventory.asOf` to the new session number. Only stamp a part after you've actually checked it.

## 3. Check and publish

```bash
node check.mjs
```

This must say `All parts reviewed through session N`. If it lists anything, that part is outdated. Fix it, then run the check again.

Next, open `index.html` and one `character.html?id=...` page locally (for example with `python3 -m http.server`) and look at them on a phone-sized window.

Last, commit and push. GitHub Pages republishes in about a minute.

## Rules

- **No module spoilers.** Only write what the table has seen or been told.
- The menu is in English. Everything else is in Bahasa Indonesia.
- If something isn't known yet, say so ("Belum dicatat"). Don't guess.
