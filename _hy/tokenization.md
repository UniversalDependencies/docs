---
layout: base
title:  'Tokenization'
udver: '2'
---

# Tokenization

The low-level tokenization of the Armenian UD treebank follows the tokenization of the
[ՀայՇտեմ - Armenian Dependency Treebank 1.0](http://armtreebank.yerevann.com/) (ArmDT):

* In general, tokens are delimited by whitespace.
* Punctuation (recognized by the corresponding Unicode property) that is conventionally written adjacent to the preceding or following word is separated during tokenization.
  Some special cases worth mentioning:
  * An abbreviation marked by a period, as in *թ.* “year”, becomes two tokens, *<b>թ</b>* and *<b>.</b>* .
  * A compound containing a hyphen becomes three tokens (two words and the hyphen), as in *անգլո-ամերիկյան* “anglo-american”, *պատմա-բանասիրական* “historical-philological”.
    In these cases, the first token is a special form of adjective that never occurs independently.
    Compounds without a hyphen are not split, thus _ռազմածովային_ “navy” is one token but _հասարակական-քաղաքական_ “civic-social” would be three tokens.
    Another common case of splitting-on-hyphen are reduplicative or echo words as in _մեծ-մեծ_ “very big”, _շուն-մուն_ “dog or something”.
  * The words that contain “infixed” punctuation (question, exclamation or emphasis marks), as in *ինչո՞ւ* “why?”, are considered as multi-word token and become two tokens, *<b>ինչու</b>* and *<b>՞</b>* .
  * Numerical expressions (including dates) are treated as single words as long as they do not contain spaces, for example, *01.01.1970*, *01/01/1970*, *11:00*, *11.00*, *1937-1938*, *10-15*. Decimal numbers also kept as one token, e.g. *<b>2.1</b>* or *<b>2,1</b>*, *0.5-1.5* .

Թվանշա-տառային արտահայտությունները, որոնցում թվանշանին հաջորդում է միության գծիկ (ենթամնա) ու հայերեն տառեր, դիտարկվում են որպես մեկ միասնական բառանիշ, լինեն դրանք թվականներ, ածականներ կամ ցանկացած այլ տիպի արտահայտություն։ Օր.՝ { 1-ին }, { 2-րդ }, { 4-ը }, { 1000-ական }, { 1950-ականներին }, { 20-ամյակ }, { 1700-ամյա }։
{ ՀՀԿ-ականներից }
* Numerical expressions with hyphen and cyrillic endings (e.g. <b>1-ый</b> “1st”, <b>3-м</b> “3rd.Ins”) as well as adjectives and other non-numerals which contain digits (e.g. <b>79-летний</b> “79 year old”, <b>500-летие</b> “500th anniversary”) are treated as single tokens.


* Most of the time, every punctuation character constitutes a token of its own. Thus *<b>»,—</b>* will become three tokens.
  * Exceptions are conventional multi-character punctuation marks: *<b>...</b>* , *<b>....</b>* , and emojis and smileys: *<b>:)</b>* , *<b>^_^</b>*, etc.
  Conventional non-armenian multi-character punctuation marks and terms are tokenized as single tokens: *<b>?!</b>* .
* Email addresses, URLs, and tweet-style names are treated as single tokens: {muster@muster.am}, {https://github.com}, {@anna_il}
* Special symbols before and after numerical expressions, as in <b>$500</b> , <b>2,67%</b> , <b>+27°С</b> , are tokenised separately (so, the tokens are { <b>$</b> , <b>500</b> } , { <b>2,67</b> , <b>%</b> } , { <b>+</b> , <b>27</b> , <b>°С</b> }).

The Armenian UD treebanks contain multiword tokens (see above, the “infixed” punctuation).

### Verb forms, analytical grammatical forms, negation

* the forms of necessitative mood, analytical causative, complex tenses, complex comparatives, etc. are splitted
according to the orthographic principle: { <b>պիտի</b> , <b>վազեն</b> } “they must run”, { <b>գրել</b> , <b>տվեց</b> } “made write”, { <b>վազում</b> , <b>եմ</b> } “I run”, { <b>ավելի</b> , <b>լուրջ</b> } “more serious”.
* <b>մի</b> and <b>ոչ</b> used as negation markers with verbs, adjectives, pronouns and other words are tokenized according to the orthographic rules: { <b>մի</b> , <b>գրիր</b> } “don't write”, { <b>ոչ</b> , <b>պաշտոնական</b> } “unofficial”, { <b>ոչ</b> , <b>մի</b> , <b>կերպ</b> } “in no way”.
