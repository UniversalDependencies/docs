---
layout: base
title:  'Swedish UD'
udver: '2'
---

# UD for Munduruku <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>


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

* Nominal words [NOUN](https://universaldependencies.org/u/pos/NOUN.html), [PROPN](https://universaldependencies.org/u/pos/PROPN.html) and [PRON](https://universaldependencies.org/u/pos/PRON.html)) are not marked for [Gender](https://universaldependencies.org/u/feat/Gender.html).
* The two main values of the [Number](https://universaldependencies.org/u/feat/Number.html) feature are Sing and Plural. Plural is marked by a separate pronoun or by reduplication on the predicate.
* Another way to express existential predication is through the reduplication of a noun with the vowel *e* replacing
the original vowel *xat* 'food' *xaxet* 'there is food'. These nouns receive a marked Redup=Ex (reduplication existential) in the FEATS column.
* Mundurukú classifiers are real nouns. Gomes (2006) speaks of nouns in classifier function. Nouns (NOUN) in this function 
are tagged cl in the XPOS column.  


### Verbal Features

* Verbs have a lexical [Aspect](https://universaldependencies.org/u/feat/Aspect.html): imperfective (Imp), perfective (Perf), iterative (Iter). 
* Some lexical roots can not easily be assigned to a  specific lexical category. This is the case with *kake* and *opop*. 
These are tagged as [AUX](https://universaldependencies.org/u/pos/AUX_.html) in the [UPOS](), and v:ex (existential verb) and aux respectively in the XPOS.
* Particles or reduplication mark [Aspect](https://universaldependencies.org/u/feat/Aspect.html) or [Tense](https://universaldependencies.org/u/feat/Tense.html).
* [Person](https://universaldependencies.org/u/feat/Person.html) can have the value [1](), [2](), and [3]().
* The feature [Evident](https://universaldependencies.org/u/feat/Evident.html) can take the following values in: 
* [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) is also distinguished.
* There are three values for the [Voice](https://universaldependencies.org/u/feat/Voice.html) feature: Act, Mid Pass. All other verb forms have Voice=Act.




## Syntax

As a head-marking language, arguments, [nsubj](https://universaldependencies.org/u/dep/nsubj.html) for vi and [nsubj]() and [obj](https://universaldependencies.org/u/dep/obj.html) for vt, are cross-referenced on the predicate most of the time, exceptions depend on the verbal [aspect](https://universaldependencies.org/u/feat/Aspect.html). NPs semantically related to the core arguments are [obl](https://universaldependencies.org/u/dep/obl.html). The order of crossreferencing and predicate is always SOV, but obliques do not necessarily follow thso order.

### Non-verbal clauses

Mundurukú has some lexemes that function as [copula](https://universaldependencies.org/u/dep/cop.html) in non-verbal clauses for existentia and locational predicates. Examples are: *opop*, *kug̃*, and *kake*. These copular elements are not treated as the
head of a clause, but rather the dependent of a lexical predicate



---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

  * [LANGUAGE-A](../treebanks/LCODE_a/index.html)
  * [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
