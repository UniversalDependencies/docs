---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
udver: '2'
---

### Definition

A proper noun is a noun (or nominal content word) that is the name (or part of the name) of a specific individual, place, or object. Western Armenian proper nouns are always capitalized. Note that in Western Armenian, the names of months and days of the week may appear either capitalized or in lowercase. Regardless of their capitalization, they are not considered proper nouns and are therefore not tagged PROPN.

Single-word named entities are tagged `PROPN` even if they originate from a common noun (_Աշտարակ_/_Aštarak_, _Իջեւան_/_Iǰewan_) (towns) or an adjective (_Սիզավետ_/_Sizavet_, _Որոտան_/_Orotan_) (village, river). Even if _սիզավետ_/_sizavet_ “grassy” is originally an adjective, syntactically it behaves as a noun. As a geographical name it denotes a concrete location (rather than a property of something).

Note that names of languages (_հայերեն_/_hayeren_ “Armenian”, _անգլերեն_/_angleren_ “English”) and adjectives derived from geographical names (_հայկական_/_haykakan_ “Armenian”, _հայոց_/_hayoc’_ “Armenian”, _անգլիական_/_angliakan_ “English”, _երևանյան__erewanyan_/ “of Yerevan”) are written in lowercase and are not tagged `PROPN`.

Personal names are typically treated as a sequence of proper nouns (one or more given names and one or more surnames). If the name contains prepositions, conjunctions or articles (foreign names), these are tagged [X]() and the morphological analysis does not include their original part of speech.

When other phrases or sentences are used as names, the component words retain their original tags. For example, in _«Մենք ենք մեր սարերը»_/_'Menk’ enk’ mer sarerë'_ “We are our mountains”, _Մենք_/_Menk’_ “we” is [PRON](), _ենք_/_enk’_ “are” is [AUX](), _մեր_/_mer_ “our” is [DET](), etc.

Acronyms of proper nouns, such as _ՄԱԿ_ “UN” and _ՆԱՏՕ_ “NATO”, are tagged `PROPN`. Even if they contain numbers (as in various product names), they are tagged `PROPN` and not [SYM](): _ՏՈՒ-154Մ_, _ԻԼ-76_. However, if the token consists entirely of digits (like _7_ in _Windows 7_), it is tagged [NUM]().

Western Armenian multi-word named entities have internal syntactic structure, which is preserved in the annotation. The headword is always a noun and there may be other nouns involved. They will be tagged `PROPN` if they are proper nouns as single-word named entities. Even if an adjective is the first word of a multi-word name, and thus it starts with an uppercase letter, it is still tagged `ADJ`.

Note that the additional feature [NameType]() is used to encode the types of named entities.

### Examples

- _<b>Մայնի</b>_/_Mayni_ `PROPN` _<b>Ֆրանքֆուրթ</b>_/_Frank’fowrt’_ `PROPN` “Frankfurt am Main”. _Ֆրանքֆորթ_/_Frank’fort’_ is the heads. The _Մայնի_/_Mayni_ part refers to the river flowing through the city, and is tagged as `PROPN` too.
- _<b>Լուտուիկ</b>_/_Lowtowik_ `PROPN` _<b>վան</b>_/_van_ `X` _<b>Պեթհովըն</b>_/_Pet’hovën_ `PROPN` “Ludwig van Beethoven”, _<b>Միկէլ</b>_/_Mikēl_ `PROPN` _<b>տէ</b>_/_tē_ `X` _<b>Սերվանտես</b>_/_Servantes_ `PROPN` “Miguel de Cervantes”, _<b>Շիրին</b>_/_Širin_ _<b>օղլու</b>_/_òġlow_ _<b>Յակոբ</b>_/_Yakob_. The non-capitalized parts are prepositions (_van, de_) or common words (_òġlow_) in the languages of the names’ origin, and are tagged `X` in Armenian.
- _<b>Մեծ</b>_/_Meç_ `ADJ` _<b>Մասիս</b>_/_Masis_ `PROPN` is a mountain. _<b>Մասիս</b>_/_Masis_ is the head and it is tagged `PROPN` as it is a geographical name. _<b>Մեծ</b>_/_Meç_ is an adjective meaning “big” and it is tagged `ADJ`.
- _<b>Հիւսիսային</b>_/_Hiwsisayin_ `ADJ` _<b>սառուցեալ</b>_/_saṙowc’eal_ `ADJ` _<b>ովկիանոս</b>_/_ovkianos_ `NOUN` “The Arctic Ocean”. Although the three words together are a name of an ocean, _<b>ովկիանոս</b>_/_ovkianos_ is a common noun and is tagged as such.   
- _<b>Միացեալ</b>_/_Miac’eal_ `ADJ` _<b>Ազգերու</b>_/_Azgerow_ `NOUN` _<b>Կազմակերպութիւն</b>_/_Kazmakerpowt’iwn_ `NOUN` “United Nations” consists of three words, none of which is proper noun. However, the acronym _<b>ՄԱԿ</b>_ “UNO” is a single-token name and is tagged `PROPN`. In _<b>ԵԱՀԿ</b>_/_EAHK_ `PROPN` _<b>Մինսքի</b>_/_Minsk’i_ `PROPN` _<b>խումբ</b>_/_xowmb_ `NOUN` “The OSCE Minsk Group” the first two words as single-tokens are proper nouns and are tagged as such.
<!-- Interlanguage links updated Po 29. června 2026, 18:10:20 CEST -->
