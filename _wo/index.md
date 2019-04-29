---
layout: base
title:  'Wolof UD'
udver: '2'
---

# UD for LANGUAGE <span class="flagspan"><img class="flag" src="../../flags/svg/SN.svg" /></span>

## Tokenization and Word Segmentation

* Following most tokenization patterns, words are delimited by whitespace.
* Clitics that attach to orthographic words are systematically segmented. Function words such as prepositions, conjunctions, auxiliaries and determiners can attach to other function or content words. For instance, a word like *cib* "in a" is segmented into the preposition *ci* "in" and the indefinite article *ab* "a". A similar segmentation is done for focus markers, since these usually constitute an amalgam of a subject pronoun (e.g. *mu* "he/she") and a morpheme marking focus (e.g. *a* which mark subject focus), resulting in a complex form (e.g. *moo*).

## Morphology

### Tags

* Wolof uses all 17 universal POS categories, including particles (PART). Most common usage of PART is for infinitive particles `a` (to).
* Wolof uses a wide range of auxiliary verb (AUX), including:
	* *di*: imperfective marker
	* *a*: subject focus marker
	* *da*: verb focus marker
	* *la*: non-subject focus marker
	* *na*: neutral (i.e. non-focus) and perfective marker
* The tag [DET]() is used for definite/indefinite articles, quantifiers and determiner words used with a determiner function;
  they can precede or follow the noun they quantify.
  The tag [PRON]() is used for subjects or objects of a noun phrase and to show possession. In addition, possessive, reflexive, relative, interrogative, demonstrative, and indefinite pronouns are also grouped under the [PRON]() tag.
* Since Wolof lacks adjectival modifiers, the tag [ADJ]() was used only to annotate foreign material (i.e. some of the French adjectives that occurred in the data).

### Features

* Determiners agree with noun in Number and Noun class.
* Definite articles and pronouns may specify deixis information. Also, demonstratives encode information about deixis, including reference to the speaker and/or addressee.
* There is no morphological Case; instead, adpositions (ADP) are used as case markers and specify the role of a noun in a phrase.
* Focus is marked morphosyntactically. Focus on the subject, verb, or non-subject (i.e. any constituent which is neither subject nor main verb) is signaled by special morphemes. The encode the focus type respectively as Subject focus, Verb Focus and Non-subject focus.
* The tense feature distinguishes three values: past, present and future. Tense is typically marked on auxiliaries (e.g. *dina* "he will") and particles (*woon* "past tense particle") which follow the verb.

## Syntax

* Wolof is an SVO language with a rigid word order.

### Subjects

* Nominal subjects are in initial position.
* Nominal subject (nsubj) is a noun phrase without preposition.
* A (nonfinite) subordinate clause may serve as the subject and is labeled csubj.

### Objects

* Objects follow the main verb.
* When a verb has two objects, the one immediately folowing the verb is the primary object, the second one treated as the secondary object.

Wolof uses the following relation subtypes:
* `compound:prt` to attach verbal particles to verbs
* `compound:svc` to connect verbs in a serial verb construction
* `acl:relcl`: relative clause modifier
* `obj:appl`: direct applicative object
* `iobj:appl`: indirect applicative object
* `obj:caus`: causative object

## Treebanks

There is only one Wolof UD treebank at present:

  * [Wolof-WTB](../treebanks/_wo/index.html)
