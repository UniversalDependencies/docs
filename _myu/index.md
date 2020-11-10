---
layout: base
title:  'Munduruku UD'
udver: '2'
---

# UD for Mundurukú <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>


## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words);


## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Mundurukú POS tags](pos/index.html)
and [Mundurukú features](feat/index.html).

* Mundurukú uses 16 ofthe 17 universal POS categories. `ADJ` is not used since there is no separate class of adjectives.
Stative-verbs and possessed nouns behave alike, in a way that is not possible to distinguish them morphologically
(I am ugly / I have uglyness; ugly boy / boy with uglyness).


### Nominal Features

* Nominal words, [NOUN](https://universaldependencies.org/u/pos/NOUN.html), [PROPN](https://universaldependencies.org/u/pos/PROPN.html) and [PRON](https://universaldependencies.org/u/pos/PRON.html), are not marked for [Gender](https://universaldependencies.org/u/feat/Gender.html).
* The two main values of the [Number](https://universaldependencies.org/u/feat/Number.html) feature are Sing and Plural. Plural is marked by a separate pronoun or by reduplication on the predicate.
* Another way to express existential predication is through the reduplication of a noun with the vowel *e* replacing
the original vowel, e.g, *xat* 'food' *xaxet* 'there is food'. These nouns receive a marked `Redup=Ex` (reduplication existential) in the FEATS column.
* Mundurukú classifiers are real nouns, and there are more than a hundred of nouns in classifier function. Nouns in this function
have the feature `Noun=Clf`.
* The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`. 
* Mundurukú has possessor markers that distinguish alienably and inalienably possessed nouns. These types of possession have the feature [Poss](https://universaldependencies.org/u/feat/Poss.html) and the values alienable `(Poss=Ali)`, and inalienable `(Poss=Inal)`.


### Verbal Features

* Verbs have a lexical [Aspect](https://universaldependencies.org/u/feat/Aspect.html): imperfective (Imp), perfective (Perf), iterative (Iter).
* Some lexical roots can not easily be assigned to a  specific lexical category. This is the case with *kake* and *opop*.
These are tagged as [AUX](https://universaldependencies.org/u/pos/AUX_.html) in the [UPOS](), and v:ex (existential verb) and `aux` respectively in the XPOS.

Some of the words that have [AUX](https://universaldependencies.org/u/pos/AUX_.html) as POS are given below:

* osunuy

* Particles or reduplication mark [Aspect](https://universaldependencies.org/u/feat/Aspect.html) or [Tense](https://universaldependencies.org/u/feat/Tense.html).
* [Person](https://universaldependencies.org/u/feat/Person.html) can have the value [1](), [2](), and [3]().
* The feature [Evident](https://universaldependencies.org/u/feat/Evident.html) can take the following values in:
* [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) is also distinguished.
* There are three values for the [Voice](https://universaldependencies.org/u/feat/Voice.html) feature: Act, Mid Pass. All other verb forms have Voice=Act.




## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

As a head-marking language, core arguments, except oblique core arguments are cross-referenced on the predicate, as in the example below:

```
asepjak 

a-s-epjak

1.SG-3-see

I see her/him/it/them
```

This is the case only when the object is third-person. For this reason the feature [Person](https://universaldependencies.org/u/feat/Person.html) takes values combining both arguments (A dn P): `Person=13`, `Person=23`, and `Person=33`. No othe combinations occur.




### Non-verbal clauses

Mundurukú has some lexemes that function as [copula](https://universaldependencies.org/u/dep/cop.html) in non-verbal clauses for existentia and locational predicates. Examples are: *opop*, *kug̃*, and *kake*. These copular elements are not treated as the
head of a clause, but rather the dependent of a lexical predicate



---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is 1 Mundurukú UD treebank:

  * [Munduruku-TuDeT](../treebanks/myu_tudet/index.html)
