---
layout: base
title:  'Bambara UD'
udver: '2'
---

# UD for Bambara <span class="flagspan"><img class="flag" src="../../flags/svg/ML.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. These are by default tokenized as separate tokens (words).
  Exceptions:
  * The apostrophe may be part of the word: _k', n', y', b', t'_
  * The hyphen does not split a reduplicated word into multiple tokens: _kelen-kelen_
* For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Bambara POS tags](pos/index.html)
and [Bambara features](feat/index.html).

* Bambara uses all 17 universal POS categories, including particles ([PART]()).
  At present, the data does not contain any examples of the [SYM]() category.
* Auxiliaries are used regularly in Bambara clauses. They appear between the subject nominal and the verb
  (or, if an object is present, between subject and object). There is no designated copula; placing one of
  the regular auxiliaries between two nominals creates a nonverbal clause.
  * _tùn_ for the periphrastic past tense.
  * _bɛ́na, na_ is the future affirmative auxiliary.
  * _tɛ́na_ is the future negative auxiliary.
  * _bɛ_ is the imperfect affirmative auxiliary.
  * _tɛ_ is the imperfect negative auxiliary.
  * _ye_ for the periphrastic perfective aspect of transitive verbs.
  * _ma_ is the perfect negative auxiliary.
  * _mána_ for the conditional mood.
  * _kàna_ for the negative imperative (prohibitive).
  * _ka_ is used in multiple contexts, marking infinitive or subjunctive but also optative and simple affirmative.
* Verbs with modal meaning are not considered auxiliary in Bambara.
* There are two main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Participle `Part`, tagged [VERB]() or [ADJ]().
  * Verbal noun `Vnoun`, tagged [NOUN]().

### Features

* The two main values of the [Number]() feature are `Sing` and `Plur`. The singular is annotated only for pronouns.
  Nouns and other nominals have either no `Number` feature, or `Number=Plur` if the plural suffix _-w_ is present.
* Verbal features such as [Tense](), [Aspect](), [Mood]() and [Polarity]() are typically provided by auxiliaries
  ([AUX]()) and annotated on them.
* [PronType]() applies to pronouns ([PRON]()), determiners ([DET]()), and to the interrogative adverb ([ADV]()) _min_ “where”.

## Syntax

* The default word order is subject – auxiliary – object – verb – oblique modifiers.
  In nonverbal clauses, the auxiliary occurs between the subject and the nonverbal predicate.
* Nominals may occur with postpositions but the core arguments (subject, object) are usually bare noun phrases.

## Treebanks

There is 1 Bambara UD treebank:

  * [Bambara-CRB](../treebanks/bm_crb/index.html)
