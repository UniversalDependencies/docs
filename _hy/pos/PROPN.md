---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
udver: '2'
---

### Definition

A proper noun is a noun (or nominal content word) that is the name (or
part of the name) of a specific individual, place, or object. Armenian proper nouns are always written starting with an uppercase letter. Note that names of days of week
_(երկուշաբթի, երեքշաբթի, չորեքշաբթի, հինգշաբթի, ուրբաթ, շաբաթ, կիրակի)&nbsp;_
and names of months
_(հունվար, փետրվար, մարտ, ապրիլ, մայիս, հունիս, հուլիս, օգոստոս, սեպտեմբեր, հոկտեմբեր, նոյեմբեր, դեկտեմբեր)&nbsp;_
are not written capitalized (unlike in English) and are not considered proper nouns.

Single-word named entities should be tagged `PROPN` though they originate from a common noun (Աշտարակ, Իջևան) (towns) or an adjective (Սիզավետ, Որոտան) (village, river). Even if _սիզավետ_ “grassy” is originally an adjective, syntactically it behaves as a noun. As a geographical name it denotes a concrete location (rather than a property of something).

Note that names of languages (հայերեն, անգլերեն) and adjectives derived from geographical names (_հայկական, հայոց, անգլիական, երևանյան&nbsp;_ “Armenian, English, of Yerevan”) are written in lowercase and are not tagged `PROPN`.

Personal names are typically treated as a sequence of proper nouns (one or more given names and one or more surnames). If the name contains prepositions, conjunctions or articles (foreign names), these are tagged as [ADP](), [CCONJ]() and [DET](), respectively.

When other phrases or sentences are used as names, the component words retain their original tags. For example, in _Մենք ենք, մեր սարերըnbsp;_, _Մենք&nbsp;_ is [PRON](), _ենք&nbsp;_ is [AUX](), a _մեր&nbsp;_ [DET](), etc.

Acronyms of proper nouns, such as _ՄԱԿ&nbsp;_ “UN” and _ՆԱՏՕ&nbsp;_ “NATO”, should be tagged `PROPN`. Even if they contain numbers (as in various product names), they are tagged `PROPN` and not [SYM](): _ՏՈՒ-154Մ&nbsp;_, _ԻԼ-76&nbsp;_. However, if the token consists entirely of digits (like _7&nbsp;_ in _Windows 7&nbsp;_), it is tagged [NUM]().

Armenian multi-word named entities have internal syntactic
structure, which is preserved in the annotation. The headword is always noun
and there may be other nouns involved. They will be tagged either `PROPN` or
`NOUN` and possible ambiguities must be resolved individually.

### Examples

- _Զիմզիմովներ_
- _Լոնդոն_
- _ՄԱԿ_
