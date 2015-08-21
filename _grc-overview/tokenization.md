---
layout: base
title:  'Tokenization'
permalink: grc/overview/tokenization.html
---

# Tokenization

Ancient Greek tokenization is almost strictly graphic word-based, the language showing strict correspondence between graphic word and morphological word. More precisely, note the following:

* Clitics are already split from their phonological hosts in the original edited texts
* Crasis (i.e., contraction of a vowel/diphthong at the end of a word with a vowel/diphthong at the beginning of the following word) is resolved in the following cases:
  * article + any other word, such as in τοὐναντίον (i.e., τὸ ἐναντίον)
  * pronoun + any other word, such as in ἐγᾧδα (i.e., ἐγὼ οἶδα)
  * καί + any other word, such as in καὑτός (i.e., καὶ αὐτός)
* particles, such as ἄν and τοι, are never split from other words (i.e., ἄν = εἰ + ἄν and τοιγάρ)
* negations are never split from conjunctions (i.e, οὔτε)

# Sentence split

Sentence split is based on the punctuation found in the original edited text, which has been added/modified by the editor of manuscript(s). 

In the standard editorial practice, four punctuation marks can be found: comma (, encoded as U+002C "COMMA"), period (. encoded as U+002E "FULL STOP"), the point above the line (corresponding in function to the English colon and semicolon; it is encoded as ·, i.e., U+00B7 "MIDDLE DOT"), and interrogation mark (; encoded as U+003B "SEMICOLON"). 

All of these are, except the comma, taken to mark the end of a sentence. If a sentence is particularly long, the editor of a digital text can sometimes decide to slipt such a sentence into two or more sentences, regarless of the punctuation of the original text.
