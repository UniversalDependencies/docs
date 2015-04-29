---
layout: postag
title: 'NUM'
shortdef: 'numeral'
---

### Definition

A numeral is a word, functioning most typically as a determiner,
adjective or pronoun, that expresses a number and a relation to the
number, such as quantity, sequence, frequency or fraction.

Cardinal numerals are covered by `NUM` whether they are used
as determiners or not (as in _Windows <b>Seven</b>_) and whether they
are expressed as words _(four)_, or digits _(4)_.

There are numerals belonging to other parts of speech in the universal
tagging scheme, based mainly on syntactic criteria: e.g. ordinal numerals
are tagged as [adjectives](ADJ) _(first, second, third, ...)_. 
In Italian there are no adverbial numerals like [cs] _poprvé_ "for the first time" nor multiplicative numerals such as [en] _(once, twice)_.

Note that, since Roman numerals _(IV)_ are only used as ordinal numerals in Italian (Enciclopedia Treccani), are tagged [ADJ]() for coherence with other ordinal numerals. 
In this case we specify `NumType=Ord` as morphological feature. 
Similarly a cardinal number followed by *a*, *o*, *esimo*, *esima*, or the symbol *°*.

Other words functioning as determiners (including quantifiers
such as _many_ and _few_) are tagged [DET]().

### Examples

Tagged as `NUM`:

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3,14159265359_
- _uno, due, tre, settantasette_

Tagged as [ADJ]():

- *XX* secolo 
- 48esimo
- 20°

### References

[Enciclopedia Treccani](http://www.treccani.it/enciclopedia/aggettivi-numerali-ordinali_%28La_grammatica_italiana%29/)

