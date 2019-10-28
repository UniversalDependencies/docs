---
layout: base
title:  'Tokenization'
udver: '2'
---

# Tokenization

Tokenization of the Slovenian SSJ UD Treebank reflects the following principles:

Space is the principal separator for tokens.

* Sequences of words that can be written both with or without space without changing its meaning (e.g. _<b>kdorkoli</b>_, _<b>kdor koli</b>_ "anybody, any body") follow the same principle and become either one or two tokens depending on the use of space

During tokenization, all characters are divided into two categories: words (W) and characters (C). Words are alphanumeric strings between spaces, while characters are punctuation and symbol characters.
* C tokens are recognized on the basis of a predefined list of punctuation and symbol characters included in the tokenizer.
* C tokens may include only one punctuation or symbol character. Sequences of two or more characters (e.g. _<b>?!</b>_) are treated as sequences of separate C tokens.

If a string of alphanumeric characters between two spaces includes C characters, it is usually split into several tokens (e.g. _AC/DC_ and Micro$oft are split into three tokens _<b>AC / DC</b>_ and _<b>Micro $ oft</b>_).

However, the following exceptions apply, in which C characters become parts of W tokens:
* Apostrophe becomes part of a W token if used without space on both sides (e.g. _<b>O'Brian</b>_, _<b>mor'va</b>_ "O'Brian, we have to").
* Comma and colon become part of a W token if used without space on both sides and if the string contains only digits (e.g. _<b>30:00</b>_, _<b>200,000,000</b>_).
* Hyphen becomes part of a W token if used without space on both sides and if:
  * the left part is an acronym (in capital letters), a single letter or a digit
  * the right part is an affix or an inflectional ending; a finite list of possible affixes and endings is integrated in the tokenizer
  * e.g. _<b>OZN-ovski</b>_ "similar to United Nations", _<b>a-ju</b>_ "to the letter a", _<b>15-i</b>_ "the 15th" )

Dot becomes part of a W token if it is:
* used without space on both sides and the string contains only digits (e.g. _<b>1.2</b>_)
* used without space on the left and is part of an abbreviation or ordinal number (e.g. _<b>dr.</b>_, _<b>4.</b>_, _<b>IV.</b>_); a finite list of possible abbreviations is integrated in the tokenizer.

URLs and e-mail addresses: all C characters become part of a single W token in strings recognized as URLs or addresses using a regular expression.


Information on whether a token is not followed by a space (e.g. _<b>d.o.o.</b>_ vs. _<b>d. o. o.</b>_) is indicated with `SpaceAfter=No` feature in the MISC column.

Note that the current version of the Slovenian UD Treebank does not yet comply with the universal guidelines recommendation for splitting of fused words, such as combinations of prepositions and pronouns, e.g. _<b>name</b> "on me", _<b>zanj</b> "for him", _vase_ "in/to oneself". Instead, these tokens are currently marked as [pronouns](PRON) with feature [Variant=Bound](Variant).

