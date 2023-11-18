---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

`PRON` is used for English pronouns, such as _we_, _her_, _it_, _who_, and _that_ when used as a relative pronoun.

The English `PRON` corresponds to the PTB PRP, PRP$, WP, WP$, EX, and certain things that are tagged DT or WDT (question and *Wh* pronouns, such as *who*, *this*, and *that*), when they comprise a nominal by themselves rather than functioning as the determiner of a nominal head (usually a noun).


## Personal pronouns

Lemmas that differ from the inflected form are shown in brackets. (The accusative is lemmatized to match the nominative, and the independent possessive is lemmatized to match the dependent possessive.)

Variant forms are italicized, with additional features described below the table.

`PronType=Prs`* | Nominative<br> `Case=Nom` | Accusative<br> `Case=Acc` | Dependent<br> Possessive<br> `Case=Gen`, `Poss=Yes` | Independent<br> Possessive<br> `Poss=Yes` | Reflexive<br> `Case=Acc`, `Reflex=Yes` 
-- | -- | -- | -- | -- | -- 
`Person=1`, `Number=Sing` | I | me [I] | my | mine [my] | myself 
`Person=1`, `Number=Plur` | we | us [we], _’s_ [we] | our | ours [our] | ourselves 
`Person=2` | you, _u_ [you], _ya_ | you, _u_ [you], _ya_ | your, _ur_ [your], _yo_ | yours [your] | 
`Person=2`, `Number=Sing` | _thou_ | _thee_ [thou] | _thy_ | _thine_ [thy] | yourself, _thyself_
`Person=2`, `Number=Plur` | _ye_ | _y’all_ |  |   | yourselves 
`Person=3`, `Number=Sing`, `Gender=Masc` | he | him [he] | his | his | himself 
`Person=3`, `Number=Sing`, `Gender=Fem` | she | her [she] | her | hers [her] | herself 
`Person=3`, `Number=Sing`, `Gender=Neut` | it | it | its | its | itself 
`Person=3`, `Number=Sing` | one | one |  |  | oneself 
`Person=3`, `Number=Plur` | they | them [they], _’em_ | their | theirs [their] | themselves 
XPOS (PTB) | PRP | PRP | PRP$ | PRP | PRP

\* Some reflexives (_I <b>myself</b> am..._) are [PronType]()=`Emp`.

In the table, *one* is the use to refer to a generic individual (PRP in PTB); other uses are mentioned [below](#uses-of-one). Genericity is not made explicit in the features.

Variant forms associated with features (in addition to the features associated with the standard counterpart): 
  - [Abbr]()=`Yes`: *u*, *ur*. As these are abbreviations, the lemma will reflect the standard spelling (*you*, *your*).
  - [Style]()=`Arch`: archaic forms *ye*, *thou*, *thee*, *thy*, *thine*, *thyself* (from [Early Modern English](https://en.wikipedia.org/wiki/Early_Modern_English#Pronouns)) are retained in some idioms. These mark a combination of number and formality. The features only represent the number distinction. For *you*, *your*, etc., the modern, number-unspecified interpretation is assumed.
  - [Style]()=`Coll`: *ya*, *’em*
  - [Style]()=`Slng`: *yo*
  - [Style]()=`Vrnc`: *y’all*

The contracted form of *us* in *let’s* is treated like other standard contractions (e.g. *n’t*), receiving the same lemma (*we*) and features as its noncontracted counterpart.

## Relative/interrogative (WH) pronouns

These are either [PronType]()=`Int` (interrogative) or [PronType]()=`Rel` (relative). [PronType]() is the only feature except where shown below.

WH | Plain | -ever | Possessive 
-- | -- | -- | -- 
wh.anim | who, whom (WP) | whoever, _whosoever_, whomever (WP) | whose (WP$) 
wh.inanim | what, _wtf_ (WP) | whatever (WP) | whose (WP$) 
wh.det | which (WDT) | whichever (WDT) |   

Relative *that* is also considered a PRON in UD (XPOS WDT).

The table shows only PRON forms. Note that *what*, *whatever*, and *which* are tagged [DET]() when functioning as [det]() (WDT).

The variant _wtf_ receives `Style=Expr`. The variant _whosoever_ receives `Style=Form`.

TODO: *whatever* is sometimes DET+WDT even when not [det]()

TODO: tag *whom(ever)* for case; lemmatize *whom* as *who* and *whomever* as *whoever*

TODO: add Poss=Yes and possibly Case=Gen for *whose*. Do we want to distinguish dependent (Case=Gen) and independent uses? Unlike *what*, *whatever*, *which*, all *whose* instances are currently tagged PRON.

TODO: exclamative *what* is PRON+WDT?

## Indefinite pronouns

These are NN in PTB but PRON in UD. A feature indicating the type of pronoun is provided as shown in the table below. These also receive the feature [Number]()=`Sing`.

INDEFINITE | one | body | thing
-- | -- | -- | --
`PronType=Tot` | everyone | everybody | everything
`PronType=Ind` (any) | anyone | anybody | anything
`PronType=Ind` (some) | someone | somebody | something
`PronType=Neg` | no one | nobody | nothing

Note that the `Ind` (indefinite) value of the [PronType]() feature is narrower in UD than the general use of the term "indefinite pronoun": `Ind` specifically refers to the *some-* and *any-* varieties.
These two varieties are not currently distinguished with features.

For *no one*, written as two words, *no* is tagged as [DET](), and *one* is tagged as `PRON` with [PronType]()=`Neg`. (It can also be spelled as one hyphenated word.)

N.B. *when*, *wherever*, *somewhere*, etc. are tagged as [ADV](), not PRON.

## Demonstrative pronouns

Always DT in PTB, but UD uses PRON when these head a nominal.

`PronType=Dem` | `Number=Sing` | `Number=Plur`
-- | -- | --
prox | this | these [this]
dist | that | those [that]

The proximal/distal distinction is not encoded in features, but each corresponds to a unique lemma.

Note that [ADV]()s *here* and *there* also receive `PronType=Dem`.

## Expletive *there*

Expletive *there* (EX) receives no features.

By contrast, *it* is considered a personal pronoun (PRP) even when functioning as [expl]().

## Reciprocal pronouns

Reciprocal pronouns *each other* and *one another* receive the feature [PronType]()=`Rcp` and are analyzed structurally with [fixed]().

Examples with tags:

~~~ sdparse
They saw each/DET other/ADJ
fixed(each, other)
obj(saw, each)
~~~

~~~ sdparse
They saw one/PRON another/DET
fixed(one, another)
obj(saw, one)
~~~

## Uses of *one*

According to the PTB tagging guidelines, *one* should be

- CD by default, even when not a prenominal modifier, e.g. _one of the best reasons_, BUT
- a pronoun if referring to a generic individual (roughly 'a person'): see personal pronoun table above
- NN(S) "if it could be pluralized or modified by an adjective", and in _another one_

These correspond to UPOS tags [NUM](), `PRON`, and [NOUN](), respectively.
However, we depart from PTB in treating *one* as a pronoun in *no one* and *one another*, as described above.

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:28 CET -->
