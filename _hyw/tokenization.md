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
  * Inflectional bound morphemes and hypens after phrases or sentences used as names in quotation marks or after abbreviations marked by a period, as in _«Ցեղին սիրտը»էն_ “from “----” or _2020 թ.-ին_ “in year 2020” are split and are considered as separate tokens: {&nbsp;<b>«</b> , <b>Ցեղին</b> , <b>սիրտը</b> , <b>»</b> , <b>էն</b>&nbsp;} and {&nbsp;<b>2020</b> , <b>թ</b> , <b>.</b> , <b>-</b> , <b>ին</b>&nbsp;} .
  The word before the hypen is the head and the bound morpheme is linked with the deprel `dep`. Tokenizing and segmenting this way seems easier for parsing.  
  * The words that contain “infixed” punctuation (question, exclamation, emphasis and Armenian abbreviation marks), as in *ինչպէ՞ս* “----?”, are considered multi-word tokens and become two tokens, <b>ինչպէս</b> and <b>՞</b> . EXCEPTION is the apostrophe, as in _Ժանն տ՚Արք_ “Joan of Arc” or _կ՚ընէ_, which is split and belongs to the preceding word, {&nbsp;<b>Ժան</b> , <b>տ՚</b> , <b>Արք</b>&nbsp;} , {&nbsp;<b>կ՚</b> , <b>ընէ</b>&nbsp;}.
  * Generally, every punctuation character constitutes a token of its own. Thus *»,—* will become three tokens.
  * EXCEPTIONs are conventional multi-character punctuation marks: <b>...</b> , <b>....</b> , and emojis and smileys: <b>:)</b> , <b>^_^</b> , <b>։Ճ</b> etc.
  Conventional non-armenian multi-character punctuation marks and terms are tokenized as single tokens: <b>?!</b> .
* Special symbols before and after numerical expressions, as in *$250* , *4,81%* , *+32°С* , are tokenised separately (so, the tokens are {&nbsp;<b>$</b> , <b>250</b>&nbsp;} , {&nbsp;<b>4,81</b> , <b>%</b>&nbsp;} , {&nbsp;<b>+</b> , <b>32</b> , <b>°С</b>&nbsp;}).
* Email addresses, URLs, and tweet-style names are treated as single tokens: muster@muster.am , https://github.com , @gov_am .

Some special cases worth mentioning:

  * Numerical expressions are treated as single words as long as they do not contain spaces or hyphen, for example, <b>355,089.40</b> . Decimal numbers (with Armenian decimal comma or English decimal point) are also kept as one token, e.g. <b>2.1</b> , <b>2,1</b> .
  * EXCEPTION: Time expressions and dates like _19:45_ or _20.05.2000_ , _20/05/2000>_ are splitted into separate tokens (in this case, three {&nbsp;<b>19</b> , <b>:</b> , <b>45</b>&nbsp;} and five {&nbsp;<b>20</b> , <b>.</b> , <b>05</b> , <b>.</b> , <b>2000</b>&nbsp;} , {&nbsp;<b>20</b> , <b>/</b> , <b>05</b> , <b>/</b> , <b>2000</b>&nbsp;}).
  * Numerical expressions with or without hyphen and Armenian endings as well as adjectives and other non-numerals which contain digits (e.g. <b>2րդ</b> “2nd” , <b>44օրեայ</b> “----” , <b>1700ամյա</b> “1700-year-old” , <b>5նոց</b> “in5ts” , <b>ՆԱՏՕ-ական</b> “belonging-to-NATO , <b>ՏՈՒ-154Մ</b> “TU-154M”) are treated as single tokens as long as they do not contain inflectional endings (e.g. _96ի_ “of 96.Dat” , *1956ին* “in 1956.Dat” , *196-ամեակի* “196th anniversary.Dat” ) which are splitted into separate tokens (in this case, two or three {&nbsp;<b>96</b> , <b>ի</b>&nbsp;} , {&nbsp;<b>1956</b> , <b>ին</b>&nbsp;} , {&nbsp;<b>196</b> , <b>-</b> , <b>ամեակի</b>&nbsp;}). 

### Multi-word tokens

See above, the “infixed” punctuation.

### Pronouns and adverbs

* Indefinite pronouns and adverbs like _ինչ-որ, ինչ-ինչ_ “something, somewhat”, etc. are splitted as compounds containing a hyphen and become three tokens (two words and the hyphen).

### Verb forms, analytical grammatical forms, negation

* the forms of indicative mood, complex tenses, analytical causative, complex comparatives, etc. are splitted
according to the orthographic principle: {&nbsp;<b>կ՚</b> , <b>ըսուի</b>&nbsp;} “----”, {&nbsp;<b>պայքարած</b> , <b>են</b>&nbsp;} “----”, {&nbsp;<b>պէտք</b> , <b>է</b> , <b>սկսած</b> , <b>ըլլար</b>&nbsp;} “----”, {&nbsp;<b>շինել</b> , <b>տուեր</b> , <b>էին</b>&nbsp;} “made write”, {&nbsp;<b>աւելի</b> , <b>յաճախ</b>&nbsp;} “----”.

* <b>մի՛</b> and <b>ոչ</b> used as negation markers with verbs, adjectives, adverbs, pronouns and other words are tokenized according to the orthographic rules: {&nbsp;<b>մի</b> , <b>՛</b> , <b>ընէք</b>&nbsp;} “don't ----”, {&nbsp;<b>ոչ</b> , <b>հինցած</b>&nbsp;} “----”, {&nbsp;<b>ոչ </b> , <b>հիմա</b>&nbsp;} “----” , {&nbsp;<b>ոչ</b> , <b>մէկ</b> , <b>տեղ</b>&nbsp;} “---”.

# Sentence splitting

Each sentence contains only one root.
Splitting is usually performed after an end-of-sentence full stop or after a dot, ellipsis or colon when these punctuation marks separate unrelated subparts of a sentence. Items in a list may sometimes be rendered as separate sentences.
