---
layout: base
title:  'Tokenization'
---


# Tokenization

The low-level tokenization of the Russian UD treebanks generally adopt the RNC standard.

* In general, tokens are delimited by whitespace. The regexp [А-zА-яЁё\-]+ usually corresponds to one token.
* Punctuation (recognized by the corresponding Unicode property) that is conventionally written adjacent to the preceding or following word is separated during tokenization.
* Each punctuation mark is treated as a single token, e.g. the following sequence: <b>)", -</b> becomes four tokens, <b>)</b> , <b>"</b>, <b>,</b>, and <b>-"</b>. Exceptions are conventional multi-character punctuation marks: <b>--</b> , <b>...</b> , <b>?!</b> ,  etc., and emojis and smileys: <b>:)</b> , <b>^_^</b>, etc.
* Conventional non-cyrillic multi-character terms are tokenized as single tokens: <b>°С</b>.

Some special cases worth mentioning:
* Numerical expressions including decimal numbers, such as <b>245</b>, <b>3,14</b>, are treated as single tokens.
* Time expressions like <b>20:55</b> are splitted into separate tokens (in this case, three { <b>20</b> , <b>:</b> , <b>55</b> }).
* Dates like <b>20.04.2012</b> are splitted into separate tokens (in this case, five { <b>20</b> , <b>.</b> , <b>04</b> , <b>.</b> , <b>2012</b> }).
* Special symbols before and after numerical expressions, as in <b>$500</b> , <b>2,67%</b> , <b>+27°С</b> , are tokenised separately (so, the tokens are { <b>$</b> , <b>500</b> } , { <b>2,67</b> , <b>%</b> } , { <b>+</b> , <b>27</b> , <b>°С</b> }).
* Numerical expressions with hyphen and cyrillic endings (e.g. <b>1-ый</b> “1st”, <b>3-м</b> “3rd.Ins”) as well as adjectives and other non-numerals which contain digits (e.g. <b>79-летний</b> “79 year old”, <b>500-летие</b> “500th anniversary”) are treated as single tokens.
* Other words with hyphen are treated as single tokens, except for the cases then the first part is inflected. Examples: { <b>из-за</b> } “because of”, { <b>зелено-серых</b> } “green-gray”, { <b>Санкт-Петербург</b> } “St. Petersburg”, but { <b>Ростове</b> , <b>-</b> , <b>на</b> , <b>-</b> , <b>Дону</b>} “(in) Rostov on Don”.
* The discoursive particles <b>-то</b> and <b>-с</b> are tokenised separately, e.g. Вася-то { <b>Вася</b> , <b>-</b> , <b>то</b> }. Exception: indefinite pronouns and adverbs, see below.
* Abbreviations are treated as single tokens, whitespaces split the abbreviations.
* Abbreviations marked by a period, as in <b>стр.</b> “p. (page)”, <b>П.</b> “P. (for Peter)”, are treated as single tokens. If the period overlaps with the end of sentence period then it is written once as a separate token (denoting end-of-sentence), e.g. { <b>1914</b> , <b>г</b> , <b>.</b> } “year 1914”.
* Abbreviations can not contain a period inside, i.e. the patterns like <b>и т.д.</b> “and so on”, <b>и т.п.</b> “and so forth” are splitted into three tokens: { <b>и</b> , <b>т.</b> , <b>д.</b> }, { <b>и</b> , <b>т.</b> , <b>п.</b> }.
* Email addresses, URLs, and tweet-style names are treated as single tokens: {no@mail.ru}, {https://github.com}, {@anna_li}

The Russian UD treebanks does not contain multiword tokens. (UD_Russian-Syntagrus treebank v.1.3 and v.1.4 contained multitokens following the Syntagrus standard).

### Pronouns and adverbs

* Indefinite pronouns and adverbs like <b>кто-нибудь</b>, <b>кто-либо</b>, <b>кто-то</b>, <b>кое-кто</b> “someone, somebody”, etc. are treated as a single token.
* In preposition phrases, the pronouns with <b>кое-</b> are splitted into three tokens: <b>кое к кому</b> { <b>кое</b> , <b>к</b> , <b>кому</b> } “to someone”.
* Negative pronouns, adverbs and adverbial predicatives are tokenized as single tokens, e.g. <b>никто</b> “no one”, <b>никакой</b> “no, neither”, <b>нигде</b> “nowhere”, <b>негде</b> “there is no place”. However, in preposition phrases the negative pronouns and predicatives are splitted into three tokens: <b>ни к кому</b> { <b>ни</b> , <b>к</b> , <b>кому</b> } “to no one”, <b>не от кого</b> { <b>не</b> , <b>от</b> , <b>кого</b> }“there is no one”.

### Verb forms, analytical grammatical forms, negation

* reflexive verbs are kept as a single token (orthographic rule): <b>моется</b> “wash oneself”, <b>пройтись</b> “to have a walk”.
* the forms of subjunctive mood, analytical passive, complex future tense, complex comparatives, etc. are splitted
according to the orthographic principle: { <b>могли</b> , <b>бы</b> } “would be able, could”, { <b>были</b> , <b>зафиксированы</b> } “were recorded”, { <b>будет</b> , <b>держаться</b> } “will be held”, { <b>более</b> , <b>серьезные</b> } “more serious”.
* <b>не</b> and <b>ни</b> used as negation markers with verbs, pronouns and other words are tokenized according to the orthographic rules: { <b>не</b> , <b>реагируя</b> } “not reacting”, { <b>ни</b> , <b>в</b> , <b>какую</b> } “in no way”, but { <b>непоправимый</b> } “irrecoverable”, { <b>назавершенный</b> } “not finished”, { <b>никаких</b> } “no one”.
* <b>пол-</b> and <b>полу-</b> “half” are never kept separate: <b>поллитра</b> “half a liter”, <b>пол-яблока</b> “half an apple”, <b>полубезработный</b> “almost unemployed”.
