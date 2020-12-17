---
layout: base
title:  'Buryat UD'
udver: '2'
---

# UD for Buryat <span class="flagspan"><img class="flag" src="../../flags/svg/RU-BU.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  In most cases we tokenize them as separate tokens (words). The exception is
  hyphenated compounds such as _монгол-буряадуудай_ / _mongol-burjaaduudaj_ “Mongol-Buryat” (one token).
* There are no fused multi-word tokens, nor words with spaces.

## Morphology

### Tags

* All 17 universal POS categories are relevant for Buryat, although the current data does not contain any instance of [X]().
* At present, 177 lemma types are tagged [PART]().
* There are four main types of verbal forms, distinguished by the value of the [VerbForm]() feature
  (all of them are tagged [VERB]() or [AUX](), not as other derived categories):
  * Finite verb `Fin` can act as a predicate of a main clause without an auxiliary; it inflects for the [Person]() of the subject.
  * Converb (verbal adverb) `Conv` functions as a predicate in a dependent adverbial clause.
    The literature distinguishes several types of converbs in Buryat; unlike in Indo-European languages,
    they do not necessarily share their subject with the matrix clause.
    We use `VerbForm=Conv` for the conditional converbs (“if doing X, the matrix clause happens”), ending in _-бал, -бол, -бэл._
  * Infinitive `Inf`. The non-finite form ending in _-жа, -жо, -жэ_ normally has to be accompanied by an auxiliary; together
    they can form a predicate of a main or a dependent clause. This makes the form different from verbal adverbs and thus worth
    a separate label. Calling them infinitives is in line with what Washington and Tyers (2019) propose for Turkic languages;
    note that in earlier releases of the Buryat treebank, these forms were labeled `Coverb`
    (see also [#747](https://github.com/UniversalDependencies/docs/issues/747)).
    Some authors (e.g., Skribnik 2011) label them as imperfective converbs.
  * Gerund `Ger` is used for various other forms that are classified as types of converbs in the literature.
    Gerunds may function as predicates in main clauses (without an auxiliary, and with an overt subject).
    * _бүтээ_ / _bütee_ “create” → _бүтээхэеэ_ / _büteexeyee_ “willing to create” (intention)

### Nominal Features

* [Case]() has 6 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Abl`, `Com`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [NUM]().
* [Number](): only plural is annotated with `Number=Plur`, while singular is unmarked.
  However, both numbers are annotated for finite verbs (cross-reference of the subject).

## Syntax

* Nominal subject is normally in the nominative case. It triggers agreement on the finite verb and
  it determines the use of the reflexive marker in the clause, if any.
* Direct object may be in the accusative but it is often in the nominative form, too.
  The unmarked stem (nominative) implies an unspecified unfocused object.
* The dominant and unmarked word order is subject-object-verb (SOV).
* The verb _бай_ / _bay_ “be” can be used as a copula.
  * If combined with a nominal in the comitative case, its meaning is possessively existential,
    corresponding to English “have”: _Хүзүүбшэ улан үнгэтэй байгаа._ / _Xüzüübše ulan üngetey baygaa._
    lit. “neck red fox.with is” = “The red fox has a neck.”

## Treebanks

There is one Buryat UD treebank:

  * [Buryat-BDT](../treebanks/bxr_bdt/index.html)

## References

* Elena Skribnik. 2011. Buryat. In: _The Mongolic Languages._ Routledge
* Jonathan North Washington, Francis M. Tyers. 2019. Delineating Turkic non-finite verb forms by syntactic function. In: _Proceedings of the Workshop on Turkic and Languages in Contact with Turkic 4._ 132--146
