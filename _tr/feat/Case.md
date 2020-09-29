---
layout: feature
title: 'Case'
shortdef: 'case'
---

Case helps specify the role of the noun phrase in the sentence.
For example, the nominative and accusative cases often distinguish subject and object of the verb,
while in fixed-word-order languages these functions would be distinguished merely by the positions of the nouns in the sentence.

In Turkish, case is an inflectional feature of [nouns](tr-pos/NOUN).  In some cases, [numerals](tr-pos/NUM)) may also be inflected for case when they are used as nouns.
It is also valency feature of [postpositions](tr-pos/ADP) (saying that the adposition requires its argument to be in that case).

Traditionally, Turkish is considered to have 6 cases (nominative is
often not listed): `Nom`, `Acc`, `Gen`, `Dat`, `Loc`, `Abl`.
We also consider suffix *-lA* as a case suffix introducing comitative or instrumental case, and mark it as `Ins` (although the function may sometimes be `Com` in some of these cases, currently we do not distinguish the two).

### `Nom`: nominative / direct

The base form of the noun, typically used as citation form (lemma).

### `Acc`: accusative

Typically, accusative case in Turkish marks the definite direct object in a sentence.
Indefinite direct objects do not receive the accusative suffix,
but stays in bare form (`Nom`).

In Turkish `Acc` is expressed by suffix _-(y)I_ (_ı/i/u/ü/yı/yi/yu/yü_).

#### Examples

* _Kitab<b>ı</b> okudum_ "I read-PAST the book" (cf. _Kitap okudum_ "I read a book" / "I read books")

### `Dat`: dative

Dative case is typically used to indicate movement into/towards/to a place or time.
The oblique arguments of some verbs and complements (noun phrases) of some postpositions also required to be in dative case.

In Turkish `Dat` is expressed by suffix _-(y)A_ (_e/a/ye/ya_).

#### Examples

* _Ankara'<b>ya</b> gidiyorum._ "I am going <b>to</b> Ankara"
* _Kitabı Ali'ye ver_ "Give the book <b>to</b> Ali"
* _Yağmur<b>a</b> rağmen oynuyorlar_ "They are playing despite the rain" (postposition _rağmen_ "despite" requires a dative complement)
* _Haber<b>e</b> üzüldük_ "we are sorry/upset about the news"

### `Gen`: genitive

Prototypical meaning of genitive is that the noun phrase somehow belongs to its governor; it would often be translated by the English preposition _of_. 
Complements of some postpositions are also required to be in genitive case.
The genitive morpheme also marks the subject of the subordinate clauses. 

In Turkish `Gen` is expressed by suffix _-(n)In_.

#### Examples

* _Ali'<b>nin</b> kitabı_ "Ali<b>'s</b> book"
* _Kitabı sen<b>in</b> için aldım_ "I bought the book for you" 

### `Loc`: locative

The locative case often expresses location in space or time, which gave it its name. 
The oblique arguments of some verbs and complements (noun phrases) also required to be in locative case.

In Turkish `Loc` is expressed by suffix _-DA_.

#### Examples

* _Ev<b>de</b>yim_ "I am <b>at</b> home"
* _Toplantı iki<b>de</b>_ "The meeting is <b>at</b> two"
* _Kendi yöntemin<b>de</b> ısrar ediyor_ "He is insisting on his own method"

### `Ins`: instrumental

The role from which the name of the instrumental case is derived is that the noun is used as instrument to do something.
In Turkish, instrumental suffix _-(y)lA_ also indicates comitative,
or signal coordination of two phrases.
We mark all meanings/usages as `Ins`.
The oblique arguments of some verbs and complements (noun phrases) of some postpositions also required to carry the instrumental suffix.

Traditionally _instrumental_ and _comitative_ are not considered `Case`s in Turkish.


#### Examples

* _Ankara'ya tren<b>le</b> gitti_ "she went Ankara by train" (instrumental)
* _Ankara'ya Ali'<b>yle</b> giti_ "she went Ankara (together) with Ali" (comitative)
* _Ankara'<b>yla</b> ilgili bir kitap_ "A book about Ankara"
* _Bebek<b>le</b> ilgilenmiyor_ "He does not pay attention to the baby"
* _Elma<b>yla</b> portakalı pazardan aldım_ "I bought the apples and the oranges from the market"  (coordination)

### `Com`: comitative / associative

We mark comitative use of _-(y)lA_ as `Ins`.

### `Abl`: ablative

Prototypical meaning: direction from some point.
The oblique arguments of some verbs and complements (noun phrases) of some postpositions also required to be in ablative case.

#### Examples

* _Ankara'<b>dan</b> gelmişler_ "The came <b>from</b> Ankara"
* _Kitabi Ali'<b>den</b> aldım_ "I took/buy the book <b>from</b> Ali"
* _Ali'<b>den</b> hoşlanıyor_ "she likes Ali"
* _Bunlar Akara'dakiler<b>den</b> dolayı oluyor_ "All these are happening because of people in Ankara"

<!-- Interlanguage links updated Út zář 29 20:43:00 CEST 2020 -->
