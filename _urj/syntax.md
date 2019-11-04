---
layout: base
title: 'Syntax'
udver: 2
---

# Syntax

The dependency syntax makes use and follows most universal guidelines for the
Uralic languages we have studied and documented so far. Few things to note are
mentioned here and on their respective pages.

## Objects using non-grammatical cases (obl)

In many Uralic languages, the "indirect objects" are marked with semantic cases
(i.e. not accusative, dative or nominative), and are commonly debatably optional
/ adjuncts. We prefer the [obl]() dependency for these. We also use the obl for
the complements or adjuncts of the verb in case agreement verbs ("Rektioverbi")
type of semantic cases.

#### Examples

* [fi] _menen kouluun_ "I go to school"
* [fi] _pidän koulusta_ "I like school"

## Owner marked with case plus copula

It is common to mark owning with a copula and a case on owner. This is
annotated using the [cop:own]() specialised dependency. The owned is
[nsubj:cop]() and the owner is the root of the clause, mirroring copula sentence
structure.

#### Examples

* [fi] _minulla on talo_ "I have a house" (lit. "there's a house on me")
  * compare [fi] _mäellä on talo_ "there's a house on a hill"

## Genitive possession

When a possessor is marked by a genitive or similar case on the possessor,
[nmod:poss]() dependency is used.

#### Examples

* [fi] _minun käteni_ "my hands"

## Deverbals’ nominal arguments

In many Uralic languages, the verbs when derived retain the argument structure,
however, dependencies customarily would not mark multiple subject or object
dependencies within a sentence, the deverbal nominals will use nmod:gobj and
nmod:gsubj for objects and subjects respectively.

#### Examples

* [fi] _niiden poistaminen_ "the removal of those"
* [fi] _komission ehdotus_ "the suggestion of comission"

## Copular subjects and objects

In predicative or equative sentences the subjects are marked as nsubj:cop or
csubj:cop for nominal and clausal subjects respectively.

#### Examples

* [fi] _mäellä on talo_ "There's a house on a hill"
* [fi] _on hauskaa, että luet tätä_ "it is fun, that you're reading this"

