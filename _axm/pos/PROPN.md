---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
udver: '2'
---

### Definition

A proper noun is a noun (or nominal content word) that is the name (or part of the name) of a specific individual, place, or object. Middle Armenian proper nouns are always written starting with an uppercase letter. Note that names of days of week
_(երկուշապթի (երկուշաբթի)/erkowšapt’i (erkowšabt’i), իրեքշապթի (իրեքշաբթի, իրեքշափթի)/irek’šapt’i (irek’šabt’i,irek’šap’t’i), չորեքշաբթի/čorek’šabt’i, հինկշապթի/hinkšapt’i, ուրբադ/owrbad, շաբաթ/šabat’, կիրակի/kiraki)&nbsp;_
and names of months _(յունուարիոս/yownowarios, փետրվար (փեբրուարիոս)/p’etrvar (p’ebrowarios), մարտ/mart, ապրիլիոս/aprilios, մայիս/mayis, հունիս/hownis, յուլիս (յուլիոս)/yowlis (yowlios), յաղւեստոս (յաղվեստոս)/yaġwestos, գերմանիկոս (սեխտեմբռ, սեխտեմպեր)/germanikos (sextembṙ,  sextemper), հոկտընբեր/hoktënber, նոյեմբեր/noyember, դեկտեմբեր (դեկտեմբռ, դեկտեմպեր, դեկտընբեր))&nbsp;_ are not written capitalized (unlike English) and are not considered proper nouns.

Note that names of languages (_հայրէն/hayrēn_ “Armenian language”, _արապերէն (արապկերէն)/araperēn (arapkerēn)_ “Arabic language”) and adjectives derived from geographical names (_պարսի/parsi_ “Persian”, _արապիկ/arapik_ “Arabic”, _սուրի/sowri_ “Syrian”) are written in lowercase and are not tagged `PROPN`.

Personal names are typically treated as a sequence of proper nouns (one or more given names and one or more surnames). If the name contains prepositions, conjunctions or articles (foreign names), these are tagged as [X]() and the morphological analysis does not include their original part of speech.

When other phrases or sentences are used as names, the component words retain their original tags. For example, in _«Գիրք վաստակոց»/Girk’ vastakoc’&nbsp;_ “Book of agricultural pursuits” (Geoponica), _Գիրք/Girk’_ “Book”&nbsp; is [NOUN]().

Middle Armenian multi-word named entities have internal syntactic structure, which is preserved in the annotation. The headword is always noun and there may be other nouns involved. They will be tagged `PROPN` if they are proper nouns as single-word named entities. Even if an adjective is the first word of a multi-word name, and thus it starts with an uppercase letter, it is still tagged `ADJ`.

Note, that the additional feature [NameType]() is used to encode the types of named entities.

### Examples

- _Հեթում/Het’owm_ “Hethum”
- _Պօլիս/Pòlis_ short for “Constantinople”
<!-- Interlanguage links updated St 6. května 2026, 20:42:07 CEST -->
