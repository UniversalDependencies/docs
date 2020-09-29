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
are not written capitalized (unlike English) and are not considered proper nouns.

Single-word named entities should be tagged `PROPN` though they originate from a common noun (Աշտարակ, Իջևան) (towns) or an adjective (Սիզավետ, Որոտան) (village, river). Even if _սիզավետ_ “grassy” is originally an adjective, syntactically it behaves as a noun. As a geographical name it denotes a concrete location (rather than a property of something).

Note that names of languages (հայերեն, անգլերեն) and adjectives derived from geographical names (_հայկական, հայոց, անգլիական, երևանյան&nbsp;_ “Armenian, English, of Yerevan”) are written in lowercase and are not tagged `PROPN`.

Personal names are typically treated as a sequence of proper nouns (one or more given names and one or more surnames). If the name contains prepositions, conjunctions or articles (foreign names), these are also tagged as [X]() and the morphological analysis does not include their original part of speech.

When other phrases or sentences are used as names, the component words retain their original tags. For example, in _«Մենք ենք մեր սարերը»&nbsp;_, _Մենք&nbsp;_ is [PRON](), _ենք&nbsp;_ is [AUX](), _մեր&nbsp;_ is [DET](), etc.

Acronyms of proper nouns, such as _ՄԱԿ&nbsp;_ “UN” and _ՆԱՏՕ&nbsp;_ “NATO”, should be tagged `PROPN`. Even if they contain numbers (as in various product names), they are tagged `PROPN` and not [SYM](): _ՏՈՒ-154Մ&nbsp;_, _ԻԼ-76&nbsp;_. However, if the token consists entirely of digits (like _7&nbsp;_ in _Windows 7&nbsp;_), it is tagged [NUM]().

Armenian multi-word named entities have internal syntactic structure, which is preserved in the annotation. The headword is always noun
and there may be other nouns involved. They will be tagged `PROPN` if they are proper nouns as single-word named entities. Even if an adjective is the first word of a multi-word name, and thus it starts with an uppercase letter, it is still tagged `ADJ`.

Note, that the additional feature [NameType]() is used to encode the types of named entities.

### Examples

- _<b>Դոնի</b>_.`PROPN` _<b>Ռոստով</b>_.`PROPN`, _<b>Մայնի</b>_.`PROPN` _<b>Ֆրանկֆուրտ</b>_.`PROPN` “Rostov-on-Don, Frankfurt am Main”. _Ռոստով&nbsp;_ and _Ֆրանկֆուրտ&nbsp;_ are the heads. The _Դոնի&nbsp;_, _Մայնի&nbsp;_ parts refer to the rivers flowing through the city, and are tagged as `PROPN` too.
- _<b>Լյուդվիգ</b>_.`PROPN` _<b>վան</b>_.`X` _<b>Բեթհովեն</b>_.`PROPN`, _<b>Միգել</b>_.`PROPN` _<b>դը</b>_.`X` _<b>Սերվանտես</b>_.`PROPN` “Ludwig van Beethoven”, “Miguel de Cervantes”. The _van, de&nbsp;_ parts are prepositions in the languages of the names’ origin, are tagged as `X` in Armenian.
- _Վերին_.`ADJ` _<b>Սասնաշեն</b>_.`PROPN` is a village. _Սասնաշեն&nbsp;_ is the head and it is
  tagged `PROPN` although it is a geographical name. _Վերին&nbsp;_ is an adjective meaning “upper” and it is
  tagged `ADJ`.
- _Հյուսիսային_.`ADJ` _սառուցյալ_.`ADJ` _օվկիանոս_.`NOUN` “The Arctic Ocean”. Even though the three words
  together are a name of a particular ocean, _օվկիանոս_ is a common noun and is
  tagged as such.
- _Միավորված_.`ADJ` _ազգերի_.`NOUN` _կազմակերպություն_.`NOUN` “United Nations Organization”
  consists of three words, none of which is proper noun. However, the acronym
  _<b>ՄԱԿ</b>&nbsp;_ “UNO” is a single-token name and is tagged `PROPN`. In _ԵԱՀԿ.`PROPN`_ _Մինսկի.`PROPN`_ _խումբ.`NOUN`_ “The OSCE Minsk Group” the first two words as single-tokens are proper nouns and are tagged as such.
<!-- Interlanguage links updated Út zář 29 18:40:47 CEST 2020 -->
