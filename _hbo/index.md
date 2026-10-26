---
layout: base
title:  'Ancient Hebrew UD'
udver: '2'
---

# UD for Ancient Hebrew <span class="flagspan"><img class="flag" src="../../flags/svg/IL.svg" /></span>

## Tokenization and Word Segmentation

No tokens in the Ancient Hebrew treebank should contain whitespace. The following are made into separate tokens:

* Prepositions (ב, כ, ל, מ)
* Possessive and object pronouns (ני, נו, ו, ם, ...)
  * The corresponding independent pronoun is used as the lemma
* Conjunction ו
* Definite determiner ה
  * This includes ה when it appears as demonstrative agreement on adjectives, participles, and demonstrative determiners
  * Since the text includes vowels diacritics, ה is included as a token even when it does not correspond to a full character in the consonantal text.

## Morphology

### Tags

All tags are used except `X` and `SYM`. `AUX` is used for the copula היה.

The positive and negative existentials ישׁ and אין are tagged [VERB]().

Participles are tagged either [VERB]() or [NOUN](). If they have arguments or obliques, they are tagged as [VERB](), but if they do not then they are tagged as [NOUN]() if they participate in nominal phrases.

The correspondences between XPOS ([BHSA feature `sp`](https://etcbc.github.io/bhsa/features/sp/)) and UPOS are listed below.
Rows prefixed with → indicate that the part of speech tag's correspondence is conditioned by the [BHSA lexical set feature](https://etcbc.github.io/bhsa/features/ls/).

| BHSA tag | BHSA name | UPOS | Notes |
|----------|-----------|------|-------|
| `adjv` | adjective | [ADJ]() | Also [NOUN]() in certain situations |
| → `ordn` | ordinal | [NUM]() | |
| `advb` | adverb | [ADV]() | |
| `art` | article | [DET]() | Also [SCONJ]() in certain situations |
| `conj` | conjunction | [CCONJ]() or [SCONJ]() | |
| `inrg` | interrogative particle | [ADV]() or [PART]() | |
| `intj` | interjection | [INTJ]() | |
| `nega` | negative particle | [ADV]() | |
| `nmpr` | proper noun | [PROPN]() | |
| `prde` | demonstrative pronoun | [PRON]() | |
| `prep` | preposition | [ADP]() | |
| `prin` | interrogative pronoun | [PRON]() | |
| `prn` | pronominal suffix | [PRON]() | Tag added in conversion process |
| `prps` | personal pronoun | [PRON]() | |
| `punct` | punctuation | [PUNCT]() | Tag added in conversion process |
| `subs` | noun | [NOUN]() | |
| → `card` | cardinal | [NUM]() | |
| → `nmcp` | copulative noun | [VERB]() | These are the existential verbs |
| → `padv` | potential adverb | [ADV]() | Sometimes |
| → `ppre` | potential preposition | [ADP]() | Sometimes |
| `verb` | verb | [VERB]() | Also [NOUN]() in certain situations |
| → `vbcp` | copulative verb | [AUX]() | |

### Features

The following universal features are in use:

* [Aspect](hbo-feat/Aspect): [AUX](hbo-pos/AUX), [VERB](hbo-pos/VERB)
* [ExtPos]()
* [Gender](hbo-feat/Gender): [ADJ](hbo-pos/ADJ), [AUX](hbo-pos/AUX), [NOUN](hbo-pos/NOUN), [PRON](hbo-pos/PRON), [VERB](hbo-pos/VERB)
* [Mood](hbo-feat/Mood): [VERB](hbo-pos/VERB)
* [Number](hbo-feat/Number): [NOUN](hbo-pos/NOUN), [PRON](hbo-pos/PRON), [ADJ](hbo-pos/ADJ), [VERB](hbo-pos/VERB)
* [NumType](): [NUM]()
* [Person](hbo-feat/Person): [AUX](hbo-pos/AUX), [VERB](hbo-pos/VERB)
* [Polarity](): [ADV]()
* [PronType](): [PRON]()
* [Tense](hbo-feat/Tense): [VERB](hbo-pos/VERB)
* [VerbForm](hbo-feat/VerbForm): [NOUN](hbo-pos/NOUN), [VERB](hbo-pos/VERB)
* [Voice](): [VERB]()

The following language-specific features are in use:

* [HebBinyan](hbo-feat/HebBinyan): [VERB](hbo-pos/VERB) ([AUX](hbo-pos/AUX), [NOUN](hbo-pos/NOUN))

The following MISC features are present:

* `Cantillation`
  * The names of any cantillation marks that appear on a word, e.g. `Cantillation=Etnahta`
  * When multiple marks appear on a word, they are separated with commas and listed in the order they appear, e.g. `Cantillation=Pazer,Geresh`
  * The names follow the spellings used by Unicode
* `Gloss`
  * Currently taken from [the BHSA `gloss` feature](https://etcbc.github.io/bhsa/features/gloss/)
* `LexDomain[SDBH]`
  * ID of the semantic domain(s) corresponding to the value of `LId[SDBH]`
* `LId[SDBH]`
  * ID of the (mostly) disambiguated word in MARBLE's [Semantic Dictionary of Biblical Hebrew](https://marble.bible/dictionary)
* `LId[Strongs]`
  * Number of the word root in Strong's Concordance
  * The values come from the [MACULA corpus](https://github.com/Clear-Bible/macula-hebrew), which assigns non-numeric values to function words (conjunctions, prefixed prepositions) which are not listed in the original concordance
* `Ref`
  * The values are formatted as `BOOK_CHAPTER.VERSE`, e.g. `GEN_1.1`
  * The book abbreviations are listed below
* `Ref[BHSA]`
  * The numeric ID of the word in the BHSA corpus
* `Ref[MACULA]`
  * The ID of the word in the [MACULA corpus](https://github.com/Clear-Bible/macula-hebrew)
* `SpaceAfter=No`
* `Translit`
  * The value of this field follows the [Library of Congress romanization standard](https://www.loc.gov/catdir/cpso/romanization/hebrew.pdf)

| Book | `Ref` Abbreviation |
|------|--------------------|
| Genesis | `GEN` |
| Exodus | `EXOD` |
| Leviticus | `LEV` |
| Numbers | `NUM` |
| Deuteronomy | `DEUT` |
| Joshua | `JOSH` |
| Judges | `JUDG` |
| Ruth | `RUTH` |
| 1 Samuel | `1SAM` |
| 2 Samuel | `2SAM` |
| 1 Kings | `1KGS` |
| 2 Kings | `2KGS` |
| 1 Chronicles | `1CHR` |
| 2 Chronicles | `2CHR` |
| Ezra | `EZRA` |
| Nehemiah | `NEH` |
| Esther | `ESTH` |
| Job | `JOB` |
| Psalms | `PS` |
| Proverbs | `PROV` |
| Ecclesiastes | `ECCL` |
| Song of Songs | `SONG` |
| Isaiah | `ISA` |
| Jeremiah | `JER` |
| Lamentations | `LAM` |
| Ezekiel | `EZEK` |
| Daniel | `DAN` |
| Hosea | `HOS` |
| Joel | `JOEL` |
| Amos | `AMOS` |
| Obadiah | `OBAD` |
| Jonah | `JONAH` |
| Micah | `MIC` |
| Nahum | `NAH` |
| Habakkuk | `HAB` |
| Zephaniah | `ZEPH` |
| Haggai | `HAG` |
| Zechariah | `ZECH` |
| Malachi | `MAL` |

## Syntax

The subtypes [acl:relcl](), [compound:smixut](), [nmod:poss](), [nsubj:outer](), and [obl:npmod]() are used. The relation `compound` is currently unused.

The relation `clf` is unused.

The relations `list`, `goeswith`, `reparandum`, and `dep` are currently unused, but may be used in future.

Detailed discussion of the relations that are used can be found via [the list of Ancient Hebrew relations](dep/index).

## Treebanks

There is [1](../treebanks/hbo-comparison.html) Ancient Hebrew UD treebank:

  * [Ancient Hebrew-PTNK](../treebanks/hbo_ptnk/index.html)
