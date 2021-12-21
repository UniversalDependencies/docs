---
layout: base
title:  'Ancient Hebrew UD'
udver: '2'
---

# UD for Ancient Hebrew <span class="flagspan"><img class="flag" src="../../flags/svg/IL.svg" /></span>

## Tokenization and Word Segmentation

No tokens in the Ancient Hebrew treebank should contain whitespace. The following are treated as clitics and made into separate tokens:

* Prepositions (ב, ל, מ, ...)
* Possessive and object pronouns (ני, נו, ו, ם, ...)
  * The corresponding independent pronoun is used as the lemma
* Conjunction ו
* Definite determiner ה
  * This includes ה when it appears as demonstrative agreement on adjectives, participles, and demonstrative determiners
  * Since the text includes vowels diacritics, ה is included as a token even when it does correspond to a full character in the consonantal text.

## Morphology

### Tags

All tags are used except `X` and `SYM`. `AUX` is used for the copula היה.

The positive and negative existentials ישׁ and אין are tagged [VERB]().

Participles are tagged either [VERB]() or [NOUN](). If they have arguments or obliques, they are tagged as [VERB](), but if they do not then they are tagged as [NOUN]() if they participate in nominal phrases.

Verbs in the infinitive absolute which are used for emphasis are currently tagged as [ADV]() and attached to the inflected verb with `advmod`.

### Features

The following universal features are in use:

* [Aspect](hbo-feat/Aspect): [AUX](hbo-pos/AUX), [VERB](hbo-pos/VERB)
* [Gender](hbo-feat/Gender): [ADJ](hbo-pos/ADJ), [AUX](hbo-pos/AUX), [NOUN](hbo-pos/NOUN), [PRON](hbo-pos/PRON), [VERB](hbo-pos/VERB)
* [Mood](hbo-feat/Mood): [VERB](hbo-pos/VERB)
* [Number](hbo-feat/Number): [NOUN](hbo-pos/NOUN), [PRON](hbo-pos/PRON), [ADJ](hbo-pos/ADJ), [VERB](hbo-pos/VERB)
* [Person](hbo-feat/Person): [VERB](hbo-pos/VERB)
* [Tense](hbo-feat/Tense): [VERB](hbo-pos/VERB)
* [VerbForm](hbo-feat/VerbForm): [VERB](hbo-pos/VERB)

The following language-specific features are in use:

* [HebBinyan](hbo-feat/HebBinyan): [VERB](hbo-pos/VERB)

The following MISC features are present:

* `SpaceAfter=No`

## Syntax

The subtypes [compound:smixut](hbo-dep/compound-smixut) and [nmod:poss](hbo-dep/nmod-poss) are used. The relation `compound` is currently unused.

The relations `iobj`, `expl`, and `clf` are unused.

The relations `fixed`, `list`, `orphan`, `goeswith`, `reparandum`, and `dep` are currently unused, but may be used in future.

## Treebanks

There is [1](../treebanks/hbo-comparison.html) Ancient Hebrew UD treebank:

  * [Ancient Hebrew-PTNK](../treebanks/hbo_ptnk/index.html)
