---
layout: feature
title: 'Case'
shortdef: 'case'
udver: '2'
---

In English, the `Case` feature is only used for some personal [pronouns](en-pos/PRON). Pronouns can be either in the direct or oblique case.

### <a name="Nom">`Nom`</a>: direct

#### Examples

The following pronouns are in the direct case:

* _I, you, he, she, it, we, they_


### <a name="Acc">`Acc`</a>: oblique

#### Examples

The following pronouns are in the oblique case:

* _me, you, him, her, it, us, them, myself, yourself, himself, herself, itself, ourselves, yourselves, themselves_

Note that _you_ and _it_ can be either in the direct or oblique case. If they appear in subject
position, they are marked as `Nom`, while if they appear in object position or if they have a prepositional
[case](en-dep/case) marker, they are marked as `Acc`.

Reflexive pronouns only have this feature if they are used in object position and not if they are used as intensive pronouns ([PronType]()=`Emp`).

### <a name="Gen">`Gen`</a>: dependent genitive

This value is specified for dependent possessives like _my_, to contrast with independent possessive pronouns like _mine_ (which receive no `Case` feature).
[Poss]()=`Yes` is specified for both kinds of possessives.

#### Examples

The following are the main genitive case pronouns:

* _my_, _your_, _his_, _her_, _its_, _our_, _their_, _whose_

Note that _her_ is ambiguous between the oblique case and the genitive case, and _his_ is ambiguous between a dependent (`Case=Gen`) possessive and an independent possessive (no `Case`).

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:36 CET -->
