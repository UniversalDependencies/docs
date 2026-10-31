---
layout: base
title:  'Kashmiri UD'
udver: '2'
---

# UD for Kashmiri

The Kashmiri data is written in Perso-Arabic script, right to left; every sentence has `# rtl = yes`.
The treebank has two parts: `ks_nehru_*` (Kashmiri Wikipedia) and `ks_grammar_*` (example sentences from Koul, *Kashmiri: A Grammatical Sketch*).

## Sentence-level comments

| Comment | Part | Content |
|---|---|---|
| `# text` | both | The real text. A token not followed by a space has `SpaceAfter=No`. |
| `# original_text` | Nehru | The sentence exactly as written in the Wikipedia article. |
| `# translit` | both | Transliteration of `# text` (see below). |
| `# gloss` | grammar | English word-by-word gloss. |
| `# translation` | both | English translation. |

### Transliteration

`# translit` is generated from the Perso-Arabic text with the same rules for both parts, so it follows the spelling, not a separate phonetic transcription. Words with a missing space in the source are transliterated with the corrected spacing. Punctuation is written as `,` `;` `?` `.`.

| Perso-Arabic | Latin | Perso-Arabic | Latin |
|---|---|---|---|
| `َ` `ِ` `ُ` | a i u | `ٕ` | ụ |
| `ٔ` / `أ` | ạ | `ٲ` | ạ̄ |
| `ا` `آ` (after a consonant) | ā | `ٟ` | ụ̄ |
| `یٖ` | ī | `وٗ` | ū |
| `ی` inside a word / at the end | e / ī | `و` after a consonant / elsewhere | ō / v |
| `ۆ` | o | `ۄ` | ọ |
| `ے` | e (after a, ā: y) | `ؠ` | ʲ |
| `ٹ` `ڈ` `ڑ` | ṭ ḍ ṛ | `ژ` | ts |
| `چ` / `چھ` | ch / chh | `ش` | sh |
| `ق` `خ` `غ` | q kh gh | consonant + `ھ` | aspirated (kh, th, ṭh, bh …) |

## Tokenization and Word Segmentation

* Tokens are separated by whitespace. Punctuation is always a separate token: `۔` (80), `،` (54), `"` (30), `:` (9), `(` and `)` (6 each), `؛` (4), `'` (2), `...` (2).
* Every sentence of the Nehru part ends with `۔`, as in the source. Sentence-final punctuation is left out in the grammar part.
* Digits are written as in the source: the Nehru part uses `1912` …, except `ks_nehru_043` and `ks_nehru_057`, which have `۱۹۱۲` and `۱۹۱۵` in the source. The lemma always uses Western digits (`1912`, `1915`).
* **Misspellings in the source** are kept in FORM and corrected in MISC with `CorrectForm`; the lemma uses the correct spelling: `اَكھ` → `اَکھ` (`ks_nehru_001`), `کێنٛہہ` → `کیٚنٛہہ` (`ks_nehru_036`), `مظهرُل` → `مظہرُل` (`ks_nehru_055`), `تٔحذیٖب` → `تٔہذیٖب` (`ks_nehru_056`), `ہیٛێنٛدؠن` → `ہیٛیٚنٛدؠن` (`ks_nehru_063`), `یێلہِ` → `ییٚلہِ` and `تێلہِ` → `تیٚلہِ` (`ks_nehru_066`).
* **A missing space in the source** between two words is marked with `SpaceAfter=No|CorrectSpaceAfter=Yes`: `مَنٛزآزٲدی` (`ks_nehru_010`), `گوکھَلےموٗد` (`ks_nehru_057`).
* **Case endings written as separate words** are separate tokens, tagged ADP with `case` on the preceding word: `اَس` (16), `یَس` (8), `وَن` (3), `یَن` (2), `ہَس`, `اُک`, `وَس`, `یُک`, `یُن` (1 each), for example `1947 اَس مَنٛز`, `شا ہَس`, `گانٛدھی یُن` "Gandhi's".
* **Genitive postpositions** `سُنٛد`, `ہُنٛد`, `سٕنٛز`, `سٕنٛدِ` … are separate words (ADP, `case`). `کِس` (8) is also written as a separate word and is treated in the same way. A pronoun with a genitive postposition is two words: `تٔمؠ سُنٛد` "his" (in the grammar part also `تٔمؠ سٕنٛز`, `تٔمؠ سٕنٛدِ`, `اَکؠ سُنٛد`).
* The possessive pronouns `تِہُنٛد` "his/her/their (respectful)" and `تُہُنٛد` "your", with their inflected forms, are single words (PRON, `Poss=Yes`).
* **Multiword token:** `کانٛگرٛیسکِس` (`ks_nehru_004`) is written as one word in the source and split into `کانٛگرٛیس` + `کِس`.
* The izafat compound `جَنٛگہِآزٲدی` "freedom struggle" (`ks_nehru_003`) is written as one word in the source and kept as one token. This is different from `مَنٛزآزٲدی` (`ks_nehru_010`), which is two independent words (a postposition and a noun) with a missing space.

## Morphology

### Tags

* The data uses 14 UPOS tags. XPOS is not used.
* **AUX** has two lemmas:
  * `آسُن` "be", with the forms `چھُ`, `چھَ`, `چھِ`, `چھُس`, `چھُسَتھ`, `چھَے`, `چھُم`, `چھُنہٕ`, `چھَنہٕ`, `اوس`, `اوسُس`, `أس`, `أسؠ`, `ٲسؠ`, `آس`, `آسہِ`, `آسان`, `آسِوہِ`.
  * `یُن` "come", the passive auxiliary, with the forms `آیہِ`, `آو`, `آمَژٕ`, `یِوان`.
* `ہیکُن` "can", `گَژُن` "go", `بَنُن` "become" and `لَگُن` are VERB.
* **PART** is used for the negation `نہٕ`, `نَہ`, the question particle `ما`, the focus particle `تہِ` "also", and for `وول` after a verb (see below).
* **DET** and **PRON**: the demonstratives `سُہ`, `سۄ`, `یہِ`, `یِم`, `ہُ`, `یَتھ`, `تَتھ` are DET before a noun and PRON when they stand alone. The quantifiers `سٲری`, `سارِوٕے` and `دۄشوؠن` "all, both" are PRON with `PronType=Tot` when they stand alone (`ks_nehru_046`, `ks_nehru_065`, `ks_grammar_056`). Other DET lemmas: `اَکھ`, `کیٚنٛہہ`, `آل`, `دَ` (English "the" in a book title).
* The relatives `یُس`, `یۄس`, `یٚمہِ` are DET with `det` before a noun (`ks_grammar_001`, `002`, `036`, `038`, `045`) and PRON otherwise.
* **`وول`** after an infinitive or participle forms an agent or relative participle and is PART with `mark` (`دِلہِ روزَن وٲلؠ کٲشِرؠ خاندانٕچ` "of a Kashmiri family living in Delhi", `ks_nehru_060`). After a noun it forms a noun "person of X" and is NOUN: `کانٛگرٛیس والؠن` "the Congress people" (`ks_nehru_067`).
* `کِژھ` / `کِژھِ` "for" is ADP with `case` (`"ہوم روٗل" اَس کِژھ`, `ks_nehru_058`; `پانَس کِژھ` "for himself", `ks_grammar_092`).
* Numbers are NUM with `NumType=Card`, also number words: `زٕ` "two", `ژۄداہ` "fourteen", `کاہ` "eleven" (`ks_nehru_026`), `ترُٛواہ` "thirteen", `اَرٕترٕٛہ` "thirty-eight", `ڈایَن ساسَن` "two and a half thousand" (`ks_nehru_050`).

### Features

| UPOS | Features |
|---|---|
| PRON | `PronType` (`Prs`, `Dem`, `Ind`, `Int`, `Rel`, `Tot`), `Person` (`1`, `2`, `3`), `Number` (`Sing`, `Plur`), `Gender` (`Masc`, `Fem`), `Poss=Yes`, `Reflex=Yes` |
| DET | `PronType` (`Dem`, `Ind`, `Tot`, `Art`, `Rel`), `Number=Plur` |
| NUM | `NumType=Card` |
| VERB | `VerbForm` (`Fin`, `Inf`, `Part`, `Conv`), and on finite forms `Mood` (`Ind`, `Imp`) and `Tense` (`Past`, `Fut`) |
| AUX | `VerbForm` (`Fin`, `Part`), `Mood=Ind`, `Tense` (`Pres`, `Past`, `Fut`), `Polarity=Neg` |

* Every VERB and AUX has at least `VerbForm`. Finite indicative forms have `Mood=Ind` and `Tense` where the form shows it.
* Future forms have `Tense=Fut`: `گَژھہِ` "will go", `یِیہِ` "will come", `آسہِ` "will be" (`ks_nehru_004`), `میلَن` "will get" (`ks_nehru_069b`).
* Commands have `Mood=Imp`: `کَر` "do!" (`ks_grammar_048`), `یِزہِ` "come!" (`ks_grammar_058`).
* `Reflex=Yes` is used on `پان`, `پَنُن` and `پانہِوانؠ`. `Polarity=Neg` is used on `چھُنہٕ` and `چھَنہٕ`; the particles `نہٕ`, `نَہ` have no features.
* Nouns, adjectives and proper nouns have no features. Case is not annotated.

## Syntax

### Core arguments

* Ergative subjects such as `تٔمؠ`, `نِہروٗ وَن` are `nsubj`.
* `iobj` is used for the recipient beside a direct object: `لیٖچھ نِہروٗوَن شا ہَس چِٹھؠ` "Nehru wrote a letter to Shaw" (`ks_nehru_034`).
* A dative experiencer is `obl`: `تٔمؠ سُنٛد نَژُن چھُ مےٚ پَسَنٛد` "I like his dance" (`ks_grammar_049`).
* A postposition is `case` on its noun.

### Copula and auxiliaries

* With a nominal or adjectival predicate, the predicate is the head and `آسُن` is `cop`: `یہِ چھُ سؠٹھا بۆڈ کُل` "this is a very big tree" (`ks_grammar_003`). With an infinitive clause as predicate, `cop` attaches to the infinitive (`ییٚمیُٛک مَقصَد اوس … ژھانٛڈُن` "whose aim was to find …", `ks_nehru_068`).
* With a verb, `آسُن` is `aux`: `شُر چھُ تێز دوران` "the child runs fast" (`ks_grammar_004`).
* In passives, `یُن` with an infinitive is `aux:pass`, the subject is `nsubj:pass` and the "by" phrase is `obl:agent`: `پَلَو آیہِ نہٕ مینِنہِ ذَرِیہِ چھَلنہِ` "the clothes were not washed by Meena" (`ks_grammar_016`). See also `ks_nehru_007`, `ks_grammar_076`, `ks_grammar_077`.
* The tag question `چھَ نَہ` "isn't it?" is `parataxis` of the main predicate (`ks_grammar_023`).

### Light verbs, compounds and reduplication

* A noun combined with a light verb is `compound` of the verb:
  * with `کَرُن` "do": `کَتھ`, `کٲم`, `اعلان`, `تٔحریٖک`, `مُخٲلَفتھ`, `شۆروٗ`, `مَدَتھ`, `ٹیلیٖفون`, `تَرقی`, `تَشکیٖل`, `یِزَتھ`, `حَملہٕ`, `یۆد`, `کوٗشِش`, `کھانٛدَر`, `بٔرتی`, `گِرَفتار`, `بُنؠیاد`, `شران`, `زار`
  * with `دِیُن` "give": `دیٛان`; with `کَڈُن`: `کٕٹھ`; with `گَژُن`: `شۆروٗ`
* A noun or proper noun that modifies a following noun is `compound` of it: `نِہروٗ خاندان` (`ks_nehru_017`).
* In reduplication, the second copy is `compound:redup` of the first: `زورہِ زورہِ` (`ks_grammar_005`), `کُس کُس` (`ks_grammar_029`), `کؠا کؠا` (`ks_grammar_030`), `پَکان پَکان` (`ks_grammar_054`), `پانہٕ پانہٕ` (`ks_nehru_064`).

### Names

* Names of persons and places are PROPN; the first word is the head and the following words are `flat`: `جَواہَر لال نِہروٗ` (`ks_nehru_001`), `اِللّٰه اَباد` (`ks_nehru_024`, `ks_nehru_040`).
* Names of organizations and titles that have a regular internal structure are annotated with regular relations, following the UD guidelines for `flat`: `اِنڈیَن اِنسٹیٖچیٛوٗٹ آف ٹیکنالَجی` (`ks_nehru_013`), *The Discovery of India* `دَ ڈِسکَوَری آف اِنڈیا` (`ks_nehru_009`), `اِنَر ٹیمپلَس` (`ks_nehru_038`), `مُسلِم لیٖگ` (`ks_nehru_055`, `ks_nehru_063`).

### Nominal modifiers

* A genitive is `nmod`, with the genitive postposition as `case`.
* An izafat phrase is `nmod` of its head: `تٔحریٖکہِ آزٲدی` "freedom movement" (`ks_nehru_002`, `ks_nehru_005`).
* A participle with `وول` is `acl` of the noun that follows it: `بَننہٕ وول ہِندوستٲنؠ قومَس` "the Indian nation that was to be formed" (`ks_nehru_006`).
* Clauses with the relatives `یُس`, `یۄس`, `یَتھ`, `ییٚمؠ`, `ییٚمیُٛک`, `یٚمہِ` are `acl:relcl`. In `یُس … سُہ` correlatives, the relative clause is attached to the correlative word: `یُس کوٹھ ژٚ ہؠۆتُتھ سُہ` (`ks_grammar_001`).
* An apposition follows its head and is `appos`. A bracket that comes before the word it explains is `parataxis`, because `appos` cannot precede its head (`ks_nehru_058`).

### Clauses

* `ccomp` clauses are introduced by `زِ`, `کہِ` or `اَگَر`.
* `csubj` is used for a clause that is the subject: with `لَگُن` (`ks_nehru_041`, `044`, `049`) and with the predicates `مَژَر`, `مُمکِن` and `پَسَنٛد`.
* **Infinitives** are annotated by their function:
  * `xcomp` when the infinitive is a complement required by the verb: "want to see" (`ks_grammar_033`), "forget to give" (`ks_grammar_035`), "let me eat" (`ks_grammar_074`), "told him to read" (`ks_grammar_051`, `ks_grammar_092`).
  * `advcl` for purpose, time and cause: "went to see a play" (`ks_grammar_050`), "will go to pluck flowers" (`ks_grammar_073`), "marched … to do satyagraha" (`ks_nehru_050`), "before he comes" (`ks_grammar_046`), "after his departure" (`ks_grammar_047`), "because of the arrival" (`ks_grammar_056`).
  * `csubj` as subject, `acl` as noun modifier (`ks_nehru_051`, `ks_nehru_058`).
* A postposition after an infinitive is `mark`: `خاطرہِ`, `پؠٹھ`, `وَرٲے`, `بروہ`, `پَتہٕ`, `سٟتؠ`, `کہِ`. After a noun it is `case`.
* Other adverbial clauses are `advcl`, for example those with `ییٚلہِ`, `تِکیٛازِ`, `اَگَر`, `اَگَرچہِ`, and converbs in `-ِتھ`.
* Coordination: the coordinators `تہٕ`, `مَگَر`, `یا`, `کِنہِ` and `نَتہِ` are `cc` on the following conjunct; every later conjunct is `conj` of the first.
* `parataxis` is used in `ks_nehru_035`, `ks_nehru_051`, `ks_nehru_058`, `ks_nehru_066` and `ks_grammar_023`.
