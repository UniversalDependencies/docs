---
layout: base
title:  'Tokenization'
permalink: be/overview/tokenization.html
---

# Tokenization

The low-level tokenization of the Belarusian UD treebank generally adopts the RNC standard.

* In general, tokens are delimited by whitespace. The regexp [А-zА-яЁёУўі\-]+ usually corresponds to one token.
* Punctuation (recognized by the corresponding Unicode property) that is conventionally written adjacent to the preceding or following word is separated during tokenization.
* Each punctuation mark is treated as a single token, e.g. the following sequence: <b>)", -</b> becomes four tokens, <b>)</b> , <b>"</b>, <b>,</b>, and <b>-"</b>. Exceptions are conventional multi-character punctuation marks: <b>--</b> , <b>...</b> , <b>?!</b> ,  etc., and emojis and smileys: <b>:)</b> , <b>^_^</b>, etc.
* Conventional non-cyrillic multi-character terms are tokenized as single tokens: <b>°С</b>, <b>км2</b>. 

Some special cases worth mentioning: 
* Numerical expressions including decimal numbers, such as <b>245</b>, <b>3,14</b>, are treated as single tokens. 
* Time expressions like <b>20:55</b> are splitted into separate tokens (in this case, three { <b>20</b> , <b>:</b> , <b>55</b> }). 
* Dates like <b>20.04.2012</b> are splitted into separate tokens (in this case, five { <b>20</b> , <b>.</b> , <b>04</b> , <b>.</b> , <b>2012</b> }). 
* Special symbols before and after numerical expressions, as in <b>$500</b> , <b>2,67%</b> , <b>+27°С</b> , are tokenised separately (so, the tokens are { <b>$</b> , <b>500</b> } , { <b>2,67</b> , <b>%</b> } , { <b>+</b> , <b>27</b> , <b>°С</b> }). 
* Numerical expressions with hyphen and cyrillic endings (e.g. <b>1-ый</b> “1st”, <b>3-м</b> “3rd.Ins”) as well as adjectives and other non-numerals which contain digits (e.g. <b>79-гадовы</b> “79 year old”, <b>500-годдзе</b> “500th anniversary”) are treated as single tokens. 
* Other words with hyphen are treated as single tokens, except for the cases then the first part is inflected. Examples: { <b>з-за</b> } “because of”, { <b>зялёна-шэрых</b> } “green-gray”, { <b>Санкт-Пецярбург</b> } “St. Petersburg”, but { <b>Ростове</b> , <b>-</b> , <b>на</b> , <b>-</b> , <b>Дону</b>} “(in) Rostov on Don”. 
* Abbreviations are treated as single tokens, whitespaces split the abbreviations.
* Abbreviations marked by a period, as in <b>стр.</b> “p. (page)”, <b>П.</b> “P. (for Peter)”, are treated as single tokens. If the period overlaps with the end of sentence period then it is written once as a separate token (denoting end-of-sentence), e.g. { <b>1914</b> , <b>г</b> , <b>.</b> } “year 1914”.
* Abbreviations can not contain a period inside, i.e. the patterns like <b>і т.д.</b> “and so on”, <b>да т.п.</b> “and so forth” are splitted into three tokens: { <b>i</b> , <b>т.</b> , <b>д.</b> }, { <b>да</b> , <b>т.</b> , <b>п.</b> }. 
* Email addresses, URLs, and tweet-style names are treated as single tokens: {no@mail.ru}, {https://github.com}, {@anna_li}

The Belarusian UD treebank does not contain multiword tokens.

### Indefinite pronouns and adverbs

* <b>хто-небудзь</b> “someone, somebody” = single token
* <b>сёй-той</b> , Gen. <b>сяго-таго</b> “someone” = three tokens: { <b>сёй</b> , <b>-</b> , <b>той</b> }, { <b>сяго</b> , <b>-</b> , <b>таго</b> }
* <b>хтось</b> , <b>хтосьцi</b> “someone, somebody” = single token (orthographic rule)

### Verb forms, analytical grammatical forms, negation

* reflexive verbs are kept as a single token (orthographic rule): <b>з'яўляецца</b> “is”. 
* the forms of subjunctive mood, analytical passive, complex future tense, complex comparatives, etc. are splitted
according to the orthographic principle: { <b>маглі</b> , <b>б</b> } “would be able, could”, { <b>былі</b> , <b>зафіксаваныя</b> } “were recorded”, { <b>будзе</b> , <b>трымацца</b> } “will be held”, { <b>больш</b> , <b>сур'ёзныя</b> } “more serious” 
* <b>не</b> and <b>ни</b> used as negation markers with verbs, pronouns and other words are tokenized according to the orthographic rules: { <b>не</b> , <b>рэагуючы</b> } “not reacting”, { <b>ні</b> , <b>ў</b> , <b>каго</b> } “at no one”, but { <b>непапраўнай</b> } “irrecoverable”, { <b>незавершаны</b> } “not finished”, { <b>ніякіх</b> } “no one”.
* паў- and напаў- “half” are never kept separate: <b>паўбеспрацоўны</b> “half-unemployed”, <b>напаўзабыты</b> “half-forgotten”. 

### Character set

-,;:!?.'’"“”()/&#%°+0123456789aAábdDeěfFghHiIjkKlLmn№oOpPrRsStTuvVwWXyаАбБвВгГдДеЕёЁжЖзЗіІйкКлЛмМнНоОпПрРсСтТуУўфФхХцЦчЧшШыьэЭюЮяЯ
