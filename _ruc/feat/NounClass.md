---
layout: feature
title: "NounClass"
shortdef: "noun class"
udver: "2"
---

Ruuli has a system of 21 noun classes, including 17 non-locative classes and 4 locative classes. (The Proto-Bantu noun classes 19 and 21 are not attested.)
All [nouns](u-pos/NOUN) and other nominals ([pronouns](u-pos/PRON) and [proper nouns](u-pos/PROPN)) receive a noun class assignment. 
In addition, three [adpositions](u-pos/ADP) as well as four verbal enclitics belong to the locative noun classes.
The system also extends to various agreement targets, such as [adjectives](u-pos/ADJ), [determiners](u-pos/DET), [verbs](u-pos/VERB), etc. 

On nominals, the noun class is commonly marked as the prefix and can also be determined on the basis of agreement markers on the various agreement targets. 
The nominal prefix is commonly preceded by a word-initial vowel, the so-called augment (annotated with [Referent]()).
Verbs index the noun class of both subjects and objects as prefixes.
We annotate the noun class of the subject prefix as `NounClass` and the noun class of the object prefixes as [NounClass[obj]]() and [NounClass[iobj]]().

| Class | Noun Prefix | Subject Prefix | Adposition | Enclitic |
|------|--------|--------|--------|--------|
| 1 | _mu-_/_*Ø-_ | _a-_ | - | - |
| 2 | _ba-_ | _ba-_ | - | - |
| 3 | _mu-_/_*Ø-_ | _gu-_ | - | - |
| 4 | _mi-_ | _gi-_ | - | - |
| 5 | _i-_/_*Ø-_/_*li-_ | _li-_ | - | - |
| 6 | _ma-_ | _ga-_ | - | - |
| 7 | _ki-_ | _ki-_ | - | - |
| 8 | _bi-_ | _bi-_ | - | - |
| 9 | _n-_/_*Ø-_ | _e-_/_gi-_ | - | - |
| 10 | _n-_/_*Ø-_ | _zi-_ | - | - |
| 11 | _lu-_ | _lu-_ | - | - |
| 12 | _ka-_ | _ka-_ | - | - |
| 13 | _tu-_ | _tu-_ | - | - |
| 14 | _bu-_ | _bu-_ | - | - |
| 15 | _ku-_ | _ku-_ | - | - |
| 16 | _wa-_ | _wa-_ | - | _wo_ |
| 17 | - | _ku-_ | _ku_ | _ku_ |
| 18 | - | _mu-_ | _mu_ | _mu_ |
| 20 | _gu-_ | _gu-_ | - | - |
| 22 | _ga-_ | _ga-_ | - | - |
| 23 | - | _e-_ | _e_ | _yo_ |

The noun class reflects the number of the nominal: nouns in singular classes (1, 3, 5, 7, 9, 11, 12, 20) form plurals by assignment to corresponding plural classes. 
Common singular–plural pairings are 1/2, 1/10, 3/4, 5/6, 7/8, 9/10, 11/10, 12/14, and 20/22. Many nouns occur in one class only and lack either a singular or a plural counterpart.

### <a name="Bantu1">`Bantu1`</a>: noun class 1

Noun class 1 contains singular nouns, mostly for humans. The corresponding plural classes are `Bantu2` and `Bantu10`.

#### Examples

* _(o)mukoli_ "worker"
* _(o)fundi_ "tailor"
* _(o)njango_ "cat"

### <a name="Bantu2">`Bantu2`</a>: noun class 2

Noun class 2 contains plural nouns, mostly for humans. The corresponding singular class is `Bantu1`.

#### Examples

* _(a)bakoli_ "workers"
* _(a)bafundi_ "tailors"

### <a name="Bantu3">`Bantu3`</a>: noun class 3

Noun class 3 contains singular nouns. The corresponding plural class is `Bantu4`.

#### Examples

* _(o)muganda_ "bundle"

### <a name="Bantu4">`Bantu4`</a>: noun class 4

Noun class 4 contains plural nouns. The corresponding singular class is `Bantu3`.

#### Examples

* _(e)miganda_ "bundles"

### <a name="Bantu5">`Bantu5`</a>: noun class 5

Noun class 5 contains singular nouns. The corresponding plural class is `Bantu6`.

#### Examples

* _(e)ibeere_ "breast"
* _(e)dinisa_ "window"
* _(e)riiso_ "eye"

### <a name="Bantu6">`Bantu6`</a>: noun class 6

Noun class 6 contains plural and uncountable nouns. The corresponding singular class is `Bantu5`.

#### Examples

* _(a)mabeere_ "breasts"
* _(a)madinisa_ "windows"
* _(a)maiso_ "eyes"

### <a name="Bantu7">`Bantu7`</a>: noun class 7

Noun class 7 contains singular nouns. The corresponding plural class is `Bantu8`.

#### Examples

* _(e)kibbambo_ "bundle"

### <a name="Bantu8">`Bantu8`</a>: noun class 8

Noun class 8 contains plural nouns. The corresponding singular class is `Bantu7`.

#### Examples

* _(e)bibbambo_ "bundles"

### <a name="Bantu9">`Bantu9`</a>: noun class 9

Noun class 9 contains singular nouns. The corresponding plural class is `Bantu10`. Noun class 9 also contains multiple borrowings and proper nouns.

#### Examples

* _(e)nsansa_ "palm leaf"
* _(e)bbaasi_ "bus"

### <a name="Bantu10">`Bantu10`</a>: noun class 10

Noun class 10 contains plural nouns. The corresponding singular classes are `Bantu1`, `Bantu9`, and `Bantu11`.

#### Examples

* _(e)njango_ "cats"
* _(e)nsansa_ "palm leaves"
* _(e)bbaasi_ "buses"
* _(e)ndimi_ "flames"

### <a name="Bantu11">`Bantu11`</a>: noun class 11

Noun class 11 contains singular nouns. The corresponding plural class is `Bantu10`.

#### Examples

* _(o)lulimi_ "flame"

### <a name="Bantu12">`Bantu12`</a>: noun class 12

Noun class 12 contains both singular and uncountable nouns.
It is also used to form diminutive singular nouns. The corresponding plural class is `Bantu14`.

#### Examples

* _(a)katiko_ "mushroom"
* _(a)kaana_ "small child" (from _(a)mwana_ "child" `Bantu1`)

### <a name="Bantu13">`Bantu13`</a>: noun class 13

Noun class 13 is used to form diminutive uncountable nouns. There is no corresponding plural class.

#### Examples

* _(o)tuceere_ "little rice" (from _(o)muceere_ "rice" `Bantu3`)

### <a name="Bantu14">`Bantu14`</a>: noun class 14

Noun class 14 contains multiple abstract nouns.
It is also used to form diminutive plural nouns. The corresponding singular class is `Bantu12`.

#### Examples

* _(o)butiko_ "mushrooms"
* _(o)bwana_ "small children" (from _(a)baana_ "children" `Bantu2`)

### <a name="Bantu15">`Bantu15`</a>: noun class 15

Noun class 15 contains deverbal nouns. There is no corresponding plural class. Infinitives used as nouns ([VerbForm]()=`Vnoun`) also belong to this class.

#### Examples

* _(o)kusaaga_ "joke"
* _(o)kubandula_ "marrying"

### <a name="Bantu16">`Bantu16`</a>: noun class 16

Noun class 16 is used as a locative subject in existential and locative constructions with the copula _li_.
It is also used as a verbal enclitic.

#### Examples

* _<b>Wa</b>li<b>wo</b> enjawulo._ "**There** is a difference."

### <a name="Bantu17">`Bantu17`</a>: noun class 17

Noun class 17 can be used as a locative subject and as an adposition (most commonly) denoting location in space or time.
It is also used as a verbal enclitic.

#### Examples

* _Ayabire o<b>ku</b> igombolola._ "He has gone **to** the sub-county."
* _<b>Ku</b> isomero <b>ku</b>lu<b>ku</b> ani?_ "Who is at school? (Lit. **At** school **there** is who?)"

### <a name="Bantu18">`Bantu18`</a>: noun class 18

Noun class 18 can be used as a locative subject and as an adposition (most commonly) denoting interiority.
It is also used as a verbal enclitic.

#### Examples

* _Yaboine oitimba <b>omu</b> kisiko._ "He saw a python **in** the bush."
* _Taa<b>mu</b> sukaali yenkai._ "Put there sugar only."

### <a name="Bantu20">`Bantu20`</a>: noun class 20

Noun class 20 is used to form augmentative singular nouns. The corresponding plural class is `Bantu22`.

#### Examples

* _(o)gusolo_ "large animal" (from _(e)kisolo_ "animal" `Bantu7`)

### <a name="Bantu22">`Bantu22`</a>: noun class 22

Noun class 22 is used to form augmentative plural nouns. The corresponding singular class is `Bantu20`.

#### Examples

* _(a)gasolo_ "large animals" (from _(e)bisolo_ "animals" `Bantu8`)

### <a name="Bantu23">`Bantu23`</a>: noun class 23

Noun class 23 can be used as a locative subject and as an adposition (most commonly). As an adposition, it is typically used with proper place names.
It is also used as a verbal enclitic.

#### Examples

* _Twayaba <b>e</b> Kampala._ "We will go **to** Kampala."
* _Zwa<b>yo</b> mangu <b>e</b> Masaka._ "Return right away **from** Masaka."