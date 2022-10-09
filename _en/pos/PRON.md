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

`PronType=Prs`* | Nominative<br> `Case=Nom` | Accusative<br> `Case=Acc` | Dependent Possessive<br> `Case=Gen`, `Poss=Yes` | Independent Possessive<br> `Poss=Yes` | Reflexive<br> `Case=Acc`, `Reflex=Yes` 
-- | -- | -- | -- | -- | -- 
`Person=1`, `Number=Sing` | I | me [I] | my | mine [my] | myself 
`Person=1`, `Number=Plur` | we | us [we] | our | ours [our] | ourselves 
`Person=2` | you, _u_, _ya_ | you, _u_ [you], _ya_ | your, _ur_ [your], _yo_ | yours [your] | 
`Person=2`, `Number=Sing` | _thou_ | _thee_ [thou] | _thy_ | _thine_ [thy] | yourself, _thyself_
`Person=2`, `Number=Plur` | _ye_ | _y'all_ |  |   | yourselves 
`Person=3`, `Number=Sing`, `Gender=Masc` | he | him [he] | his | his | himself 
`Person=3`, `Number=Sing`, `Gender=Fem` | she | her [she] | her | hers [her] | herself 
`Person=3`, `Number=Sing`, `Gender=Neut` | it | it | its | its | itself 
`Person=3`, `Number=Plur` | they | them [they] | their | theirs [their] | themselves 
XPOS (PTB) | PRP | PRP | PRP$ | PRP | PRP

\* Some reflexives (_I <b>myself</b> am..._) are [PronType]()=`Emp`.

Variant 2nd person features (in addition to the features associated with the standard counterpart): 
  - [Abbr]()=`Yes`: *u*, *ur*. As these are abbreviations, the lemma will reflect the standard spelling (*you*, *your*).
  - [Style]()=`Arch`: archaic forms *ye*, *thou*, *thee*, *thy*, *thine*, *thyself* (from [Early Modern English](https://en.wikipedia.org/wiki/Early_Modern_English#Pronouns)) are retained in some idioms. These mark a combination of number and formality. The features only represent the number distinction. For *you*, *your*, etc., the modern, number-unspecified interpretation is assumed.
  - [Style]()=`Coll`: *ya*
  - [Style]()=`Slng`: *yo*
  - [Style]()=`Vrnc`: *y'all*

TODO: Is *ur* treated like *u* in the data?

## Relative/interrogative (WH) pronouns

These are either [PronType]()=`Int` (interrogative) or [PronType]()=`Rel` (relative). [PronType]() is the only feature except where shown below.

WH | Plain | -ever | Possessive 
-- | -- | -- | -- 
wh.anim | who, whom (WP) | whoever, whomever (WP) | whose (WP$) 
wh.inanim | what, _wtf_ (WP) | whatever (WP) | whose (WP$) 
wh.det | which (WDT) | whichever (WDT) |   

Relative *that* is also considered a PRON in UD (XPOS WDT).

The table shows only PRON forms. Note that *what*, *whatever*, and *which* are tagged [DET]() when functioning as [det]() (WDT).

The variant _wtf_ receives `Style=Expr`.

TODO: *whatever* is sometimes DET+WDT even when not [det]()

TODO: tag *whom(ever)* for case; lemmatize *whom* as *who* and *whomever* as *whoever*

TODO: add Case=Gen for *whose*

TODO: exclamative *what* is PRON+WDT?

## Indefinite pronouns

These are NN in PTB but PRON in UD. The only feature at present is [Number]()=`Sing`, but it would be appropriate to add [PronType]()=`Ind`.

INDEFINITE | one | body | thing
-- | -- | -- | --
every | everyone | everybody | everything
any | anyone | anybody | anything
some | someone | somebody | something
no | no one | nobody | nothing

TODO: PronType=Ind

TODO: *No one* is currently analyzed as det(one/NOUN, no/DET). Perhaps *one* should be PRON. 

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

## Generic *one*

Currently, this pronoun (NN in PTB) receives no features, but it should probably be `Number=Sing` (TODO).

## Reciprocal pronouns

*each other*, *one another*: TODO ([issue 183](https://github.com/UniversalDependencies/UD_English-EWT/issues/183))

<!-- Interlanguage links updated So kvě 14 19:01:53 CEST 2022 -->
