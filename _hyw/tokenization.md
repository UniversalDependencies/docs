---
layout: base
title:  'Tokenization'
udver: '2'
---

# Tokenization

The low-level tokenization of the UD Armenian Treebanks (both Eastern and Western Armenian) generally adopts the [Հայերէնի ծառադարան - ArmTDP](http://www.ysu.am/files/06M_Yavrumyan.pdf) standard:

* In general, tokens are delimited by whitespace.
* Punctuation (recognized by the corresponding Unicode property) that is conventionally written adjacent to the preceding or following word is separated during tokenization.
  Some special cases worth mentioning:
  * An abbreviation marked by a period, as in _թ._ “year”, becomes two tokens, <b>թ</b> and <b>.</b> .
  * A compound containing a hyphen becomes three tokens (two words and the hyphen), as in _առասպելա-բանաստեղծական_ “----”, _ռուսա-իրանա-սուրիական_ “----”.
    In these cases, the first token is a special form of adjective that never occurs independently.
    Compounds without a hyphen are not split, thus _պաղեստինեւիսրայէլեան_ “----” is one token but _բիւզանդական-արեւելեան_ “----” would be three tokens.
    Another common case of splitting-on-hyphen are reduplicative or echo words as in _մէկիկ-մէկիկ_ “----”,  _միս-մինակ_ “----”.
  * Inflectional bound morphemes and hypens after phrases or sentences used as names in quotation marks or after abbreviations marked by a period, as in _«Ցեղին սիրտը»էն_ “from “----” or *2020 թ.-ին* “in year 2020” are split and are considered as separate tokens: {&nbsp;<b>«</b> , <b>Ցեղին</b> , <b>սիրտը</b> , <b>»</b> , <b>էն</b>&nbsp;} and {&nbsp;<b>2020</b> , <b>թ</b> , <b>.</b> , <b>-</b> , *<b>ին</b>&nbsp;} .
  The word before the hypen is the head and the bound morpheme is linked with the deprel `dep`. Tokenizing and segmenting this way seems easier for parsing.  
  * The words that contain “infixed” punctuation (question, exclamation, emphasis and Armenian abbreviation marks), as in *ինչպէ՞ս* “----?”, are considered multi-word tokens and become two tokens, <b>ինչպէս</b> and <b>՞</b> . EXCEPTION is the apostrophe, as in _Ժանն տ՚Արք_ “Joan of Arc” or _կ՚ընէ_, which is split and belongs to the preceding word, {&nbsp;<b>Ժան</b> , <b>տ՚</b> , <b>Արք</b>&nbsp;} , {&nbsp;<b>կ՚</b> , <b>ընէ</b>&nbsp;}.
  * Generally, every punctuation character constitutes a token of its own. Thus *»,—* will become three tokens.
  * EXCEPTIONs are conventional multi-character punctuation marks: <b>...</b> , <b>....</b> , and emojis and smileys: <b>:)</b> , <b>^_^</b> , <b>։Ճ</b> etc.
  Conventional non-armenian multi-character punctuation marks and terms are tokenized as single tokens: <b>?!</b> .
* Special symbols before and after numerical expressions, as in *$250* , *4,81%* , *+32°С* , are tokenised separately (so, the tokens are {&nbsp;<b>$</b> , <b>250</b>&nbsp;} , {&nbsp;<b>4,81</b> , <b>%</b>&nbsp;} , {&nbsp;<b>+</b> , <b>32</b> , <b>°С</b>&nbsp;}).
* Email addresses, URLs, and tweet-style names are treated as single tokens: muster@muster.am , https://github.com , @gov_am .

Some special cases worth mentioning:

  * Numerical expressions are treated as single words as long as they do not contain spaces or hyphen, for example, *<b>355,089.40</b>* . Decimal numbers (with Armenian decimal comma or English decimal point) are also kept as one token, e.g. <b>2.1</b> , <b>2,1</b> .
  * EXCEPTION: Time expressions and dates like *19:45* or *20.05.2000* , *20/05/2000>* are splitted into separate tokens (in this case, three {&nbsp;<b>19</b> , <b>:</b> , <b>45</b>&nbsp;} and five {&nbsp;<b>20</b> , <b>.</b> , <b>05</b> , <b>.</b> , <b>2000</b>&nbsp;} , {&nbsp;<b>20</b> , <b>/</b> , <b>05</b> , <b>/</b> , <b>2000</b>&nbsp;}).
  * Numerical expressions with or without hyphen and Armenian endings as well as adjectives and other non-numerals which contain digits (e.g. <b>2րդ</b> “2nd” , <b>1000-ական</b> “by 1000” , <b>1700ամյա</b> “1700-year-old” , <b>ՆԱՏՕ-ական</b> “belonging-to-NATO , <b>ՏՈՒ-154Մ</b> “TU-154M”) are treated as single tokens as long as they do not contain inflectional endings (e.g. *3-ով* “3.Ins” , *1950-ականներին* “in 1950s” , *20-ամյակը* “the 20th anniversary” ) which are splitted into separate tokens (in this case, three {&nbsp;<b>3</b> , <b>-</b> , <b>ով</b>&nbsp;} , {&nbsp;<b>1950</b> , <b>-</b> , <b>ականներին</b>&nbsp;} , {&nbsp;<b>20</b> , <b>-</b> , <b>ամյակը</b>&nbsp;}). 

### Multi-word tokens

See above, the “infixed” punctuation.

### Pronouns and adverbs

* Indefinite pronouns and adverbs like *ինչ-որ, փոքր-ինչ, դույզն-ինչ, ինչ-ինչ* “something, somewhat”, etc. are splitted as compounds containing a hyphen and become three tokens (two words and the hyphen).

### Verb forms, analytical grammatical forms, negation

* the forms of necessitative mood, analytical causative, complex tenses, complex comparatives, etc. are splitted
according to the orthographic principle: {&nbsp;<b>պիտի</b> , <b>վազեն</b>&nbsp;} “they must run”, {&nbsp;<b>գրել</b> , <b>տվեց</b>&nbsp;} “made write”, {&nbsp;<b>վազում</b> , <b>եմ</b>&nbsp;} “I run”, {&nbsp;<b>ավելի</b> , <b>լուրջ</b>&nbsp;} “more serious”.
* <b>մի</b> and <b>ոչ</b> used as negation markers with verbs, adjectives, pronouns and other words are tokenized according to the orthographic rules: {&nbsp;<b>մի</b> , <b>գրիր</b>&nbsp;} “don't write”, {&nbsp;<b>ոչ</b> , <b>պաշտոնական</b>&nbsp;} “unofficial”, {&nbsp;<b>ոչ</b> , <b>մի</b> , <b>կերպ</b>&nbsp;} “in no way”.

# Sentence splitting

Each sentence contains only one root.
Splitting is usually performed after an end-of-sentence full stop or after a dot, ellipsis or colon when these punctuation marks separate unrelated subparts of a sentence. Items in a list may sometimes be rendered as separate sentences.
