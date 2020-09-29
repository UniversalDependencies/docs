---
layout: feature
title: 'Polarity'
redirect_from: "tr/feat/Negative.html"
shortdef: 'whether the word can be or is negated'
---

In Turkish [verbs](tr-pos/VERB) are negated with the suffix _-mA_ (and its allomorphs).
Only exception is the verb/particle _değil_ which functions as an auxiliary or copula
(it is the main means of negating a copular clause, but it can also be used to negate a verbal clause).
_değil_ is marked as `Negative=Neg` when it is used as a copula or auxiliary.
We use the POS tag [particle](tr-pos/PART) when _değil_ is used for negating non-predicates,
in which case we use the feature [`PronType`](PronType) for marking its negativity. 


In Turkish [adjectives](tr-pos/ADJ) are normally negated by forming adjectival
clauses with copula _ol-_, e.g., _verimli olmayan_ "<b>un</b>productive"
(lit: "(something) that is not productive").
A non-productive prefix (of Arabic origin), _na-_, can be used for negating a lexicalized set of adjectives, e.g., _<b>na</b>müsait_ "not suitable".
We (currently) do not mark adjectives for the `Polarity` feature.

### `Pos`: positive, affirmative

#### Examples

- _Okuyacak_ "he/she will read"
- _Ali doktor_ "Ali is a doctor"

### `Neg`: negative

#### Examples

- _Oku<b>ma</b>yacak_ "he/she will not read"
- _Ali doktor <b>değil</b>_ "Ali is not a doctor"

<!-- Interlanguage links updated Út zář 29 20:31:37 CEST 2020 -->
