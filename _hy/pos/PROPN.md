---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
udver: '2'
---

### Definition

A proper noun is a noun (or nominal content word) that is the name (or part of the name) of a specific individual, place, or object. Armenian proper nouns are always capitalized. Note that names of days of week
(_երկուշաբթի_/_erkowšabt’i_ “Monday”, _երեքշաբթի_/_erek’šabt’i_ “Tuesday”, _չորեքշաբթի_/_čorek’šabt’i_ “Wednesday”, _հինգշաբթի_/_hingšabt’i_ “Thursday”, _ուրբաթ_/_owrbat’_ “Fryday”, _շաբաթ_/_šabat’_ “Saturday”, _կիրակի_/_kiraki_ “Sunday”) and names of months (_հունվար_/_hownvar_ “January”, _փետրվար_/_p’etrvar_ “February”, _մարտ_/_mart_ “March”, _ապրիլ_/_april_ “April”, _մայիս_/_mayis_ “May”, _հունիս_/_hownis_ “June”, _հուլիս_/_howlis_ “July”, _օգոստոս_/_ògostos_ “August”, _սեպտեմբեր_/_september_ “September”, _հոկտեմբեր_/_hoktember_ “October”, _նոյեմբեր_/_noyember_ “November”, _դեկտեմբեր_/_dektember_ “December”) are not capitalized (unlike English) and are not considered proper nouns.

Single-word named entities are tagged `PROPN` even if they originate from a common noun (_Աշտարակ_/_Aštarak_, _Իջևան_/_Iǰewan_) (towns) or an adjective (_Սիզավետ_/_Sizavet_, _Որոտան_/_Orotan_) (village, river). Even if _սիզավետ_/_sizavet_ “grassy” is originally an adjective, syntactically it behaves as a noun. As a geographical name it denotes a concrete location (rather than a property of something).

Note that names of languages (_հայերեն_/_hayeren_ “Armenian”, _անգլերեն_/_angleren_ “English”) and adjectives derived from geographical names (_հայկական_/_haykakan_ “Armenian”, _հայոց_/_hayoc’_ “Armenian”, _անգլիական_/_angliakan_ “English”, _երևանյան__erewanyan_/ “of Yerevan”) are written in lowercase and are not tagged `PROPN`.

Personal names are typically treated as a sequence of proper nouns (one or more given names and one or more surnames). If the name contains prepositions, conjunctions or articles (foreign names), these are tagged [X]() and the morphological analysis does not include their original part of speech.

When other phrases or sentences are used as names, the component words retain their original tags. For example, in _«Մենք ենք մեր սարերը»_/_'Menk’ enk’ mer sarerë'_ “We are our mountains”, _Մենք_/_Menk’_ “we” is [PRON](), _ենք_/_enk’_ “are” is [AUX](), _մեր_/_mer_ “our” is [DET](), etc.

Acronyms of proper nouns, such as _ՄԱԿ_ “UN” and _ՆԱՏՕ_ “NATO”, are tagged `PROPN`. Even if they contain numbers (as in various product names), they are tagged `PROPN` and not [SYM](): _ՏՈՒ-154Մ_, _ԻԼ-76_. However, if the token consists entirely of digits (like _7_ in _Windows 7_), it is tagged [NUM]().

Armenian multi-word named entities have internal syntactic structure, which is preserved in the annotation. The headword is always a noun and there may be other nouns involved. They will be tagged `PROPN` if they are proper nouns as single-word named entities. Even if an adjective is the first word of a multi-word name, and thus it starts with an uppercase letter, it is still tagged `ADJ`.

Note that the additional feature [NameType]() is used to encode the types of named entities.

### Examples

- _<b>Դոնի</b>_/_Doni_ `PROPN` _<b>Ռոստով</b>_/_Ṙostov_ `PROPN` “Rostov-on-Don”, _<b>Մայնի</b>_/_Mayni_ `PROPN` _<b>Ֆրանկֆուրտ</b>_/_Frankfowrt_ `PROPN` “Frankfurt am Main”. _Ռոստով_/_Ṙostov_ and _Ֆրանկֆուրտ_/_Frankfowrt_ are the heads. The _Դոնի_/_Doni_, _Մայնի_/_Mayni_ parts refer to the rivers flowing through the city, and are tagged as `PROPN` too.
- _<b>Լյուդվիգ</b>_/_Lyowdvig_ `PROPN` _<b>վան</b>_/_van_ `X` _<b>Բեթհովեն</b>_/_Bet’hoven_ `PROPN` “Ludwig van Beethoven”, _<b>Միգել</b>_/_Migel_ `PROPN` _<b>դը</b>_/_dë_ `X` _<b>Սերվանտես</b>_/_Servantes_ `PROPN` “Miguel de Cervantes”. The _van, de_ parts are prepositions in the languages of the names’ origin, and are tagged `X` in Armenian.
- _<b>Վերին</b>_/_Verin_ `ADJ` _<b>Սասնաշեն</b>_/_Sasnašen_ `PROPN` is a village. _Սասնաշեն_/_Sasnašen_ is the head and it is tagged `PROPN` although it is a geographical name. _Վերին_/_Verin_ is an adjective meaning “upper” and it is tagged `ADJ`.
- _<b>Հյուսիսային</b>_/_Hyowsisayin_ `ADJ` _<b>սառուցյալ</b>_/_saṙowc’yal_ `ADJ` _<b>օվկիանոս</b>_/_òvkianos_ `NOUN` “The Arctic Ocean”. Although the three words together are a name of an ocean, _օվկիանոս_/_òvkianos_ is a common noun and is tagged as such.
- _<b>Միավորված</b>_/_Miavorvaç_ `ADJ` _<b>ազգերի</b>_/_azgeri_ `NOUN` _<b>կազմակերպություն</b>_/_kazmakerpowt’yown_ `NOUN` “United Nations Organization” consists of three words, none of which is proper noun. However, the acronym _<b>ՄԱԿ</b>_ “UNO” is a single-token name and is tagged `PROPN`. In _<b>ԵԱՀԿ</b>_/_EAHK_ `PROPN` _<b>Մինսկի</b>_/_Minski_ `PROPN` _<b>խումբ</b>_/_xowmb_ `NOUN` “The OSCE Minsk Group” the first two words as single-tokens are proper nouns and are tagged as such.
<!-- Interlanguage links updated Po 29. června 2026, 17:42:00 CEST -->
