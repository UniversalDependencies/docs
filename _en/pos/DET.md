---
layout: postag
title: 'DET'
shortdef: 'determiner'
udver: '2'
---

UPDATE IN PROGRESS

OLD TEXT:

The English `DET` covers most cases of Penn Treebank DT, PDT, WDT. However, when a Penn Treebank word with one of these tags stands alone as a noun phrase rather than modifying another word, then it becomes `PRON`.

NEW TEXT:

Here are the English `DET` lexemes with associated morphological features (drawing on [PronType](), [Definite](), [Number](), and [NumType]()):

Lexemes          | Features
---------------- | -------------
_a_, _an_        | `Definite=Ind|PronType=Art`
_the_            | `Definite=Def|PronType=Art`
_this_, _that_   | `Number=Sing|PronType=Dem`
_these_, _those_ | `Number=Plur|PronType=Dem`
_yonder_         | `PronType=Dem`
_all_, _both_, _each_\*\*, _every_ | `PronType=Tot`
_half_\*         | `NumType=Frac|PronType=Ind`
_no_, _neither_, _nary_\*              | `PronType=Neg`
_any_, _some_, _another_\*\*, _either_ | `PronType=Ind`
_such_\*, _quite_\*, _many_\*          | `PronType=Ind`
_which_, _what_, _whatever_            | `PronType=Ind` or `PronType=Rel`

\* Only DET as a predeterminer (PTB `PDT`)

\*\* Except reciprocal _each other_ and _one another_: see [PRON](https://universaldependencies.org/en/pos/PRON.html#reciprocal-pronouns)

<!-- Interlanguage links updated Út 9. května 2023, 20:03:24 CEST -->
