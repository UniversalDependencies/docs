---
layout: base
title:  'Ancient Greek UD'
udver: '2'
---

# UD for Ancient Greek <span class="flagspan"><img class="flag" src="../../flags/svg/GR.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words).
* There are neither multi-word tokens nor words with spaces.
* Clitics are already split from their phonological hosts in the original edited texts
* Crasis (i.e., contraction of a vowel/diphthong at the end of a word with a vowel/diphthong at the beginning of the following word) is resolved in the following cases:
  * article + any other word, such as in τοὐναντίον (i.e., τὸ ἐναντίον)
  * pronoun + any other word, such as in ἐγᾧδα (i.e., ἐγὼ οἶδα)
  * καί + any other word, such as in καὑτός (i.e., καὶ αὐτός)
* particles, such as ἄν and τοι, are never split from other words (i.e., ἄν = εἰ + ἄν and τοιγάρ)
* negations are never split from conjunctions (i.e, οὔτε)

## Sentence split

* Sentence split is based on the punctuation found in the original edited text, which has been added/modified by the editor of manuscript(s).
* In the standard editorial practice, four punctuation marks can be found: comma (, encoded as U+002C "COMMA"), period (. encoded as U+002E "FULL STOP"), the point above the line (corresponding in function to the English colon and semicolon; it is encoded as ·, i.e., U+00B7 "MIDDLE DOT"), and interrogation mark (; encoded as U+003B "SEMICOLON").
  All of these are, except the comma, taken to mark the end of a sentence.
  If a sentence is particularly long, the editor of a digital text can sometimes decide to split such a sentence into two or more sentences, regarless of the punctuation of the original text.

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Ancient Greek POS tags](pos/index.html)
and [Ancient Greek features](feat/index.html).

* All 17 universal POS categories are relevant for Ancient Greek (perhaps except [SYM]()), but some categories are currently
  not used in all Ancient Greek treebanks.
  At present, 96 word types are tagged [PART](). This is a legacy of an existing Ancient Greek morphological analyzer
  and many of these words should probably belong to another category in UD; however, the exact list has yet to be worked out.
* Ancient Greek has the following auxiliary verbs ([AUX]()):
  * _εἰμί_ (“be”) is used as the copula.
  * _ἔχω_ (“have”) is used together with a participle of a lexical verb to form periphrastic perfect.
* Verbs with modal meaning are not considered auxiliary in Ancient Greek.
* There are three main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

* Besides universal subtypes, PROIEL uses one language-specific dependency subtype, [advcl:cmp]() for adverbial clauses of comparison

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [2](../treebanks/grc-comparison.html) Ancient Greek UD treebanks:

  * [Ancient Greek-Perseus](../treebanks/grc_perseus/index.html)
  * [Ancient Greek-PROIEL](../treebanks/grc_proiel/index.html)
