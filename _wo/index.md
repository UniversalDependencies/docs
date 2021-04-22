---
layout: base
title:  'Wolof UD'
udver: '2'
---

# UD for Wolof <span class="flagspan"><img class="flag" src="../../flags/svg/SN.svg" /></span>

## Tokenization and Word Segmentation

* Following most tokenization patterns, words are delimited by whitespace.
* Clitics that attach to orthographic words are systematically segmented. Function words such as prepositions, conjunctions, auxiliaries and determiners can attach to other function or content words. For instance, a word like *cib* "in a" is segmented into the preposition *ci* "in" and the indefinite article *ab* "a". A similar segmentation is done for focus markers, since these usually constitute an amalgam of a subject pronoun (e.g. *mu* "he/she") and a morpheme marking focus (e.g. *a* which mark subject focus), resulting in a complex form (e.g. *moo*).

## Morphology

### Tags

* Wolof uses all 17 universal POS categories, including particles ([PART]()). The most common usage of PART is for infinitive particles _a_ (to).
* Wolof uses a wide range of auxiliary verb (AUX), including:
	* *a*: subject focus marker
	* *avoir*: French auxiliary *avoir* contained in some foreign material
	* *bu*: negative imperative marker
	* *da*: verb focus marker
	* *di*: imperfective marker
	* *être*: French auxiliary *être* contained in some foreign material
	* *la*: non-subject focus marker
	* *na*: neutral (i.e. non-focus) and perfective marker
	* *ngi*: progressive marker
	* *woon*: past tense marker
* The AUX category also includes copulas. Wolof hhas three copulas:
	* *di*: is used in identificational sentences.
	* *la*: is used in predicational sentences
	* *ngi*: is used in presentative/progressive constructions.
	* In addition the data contain the French copula *être* (to be) (French foreign material)
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

### Copular constructions
* Wolof distinguish between three copulas: *di*, *la*, and *ngi*. These appear
	* *di* appears in identificational sentences like *Góor gi di njiit* (The man is a leader). Such sentences follow the standard SVO worder order (i.e. Nominal Subject + Copula + Nominal Predicate). The predicate is typically a nominal one.
	* *la* is used in predicational sentences like *Góor gi njjit la* (The man is a leader). In contrast to identificational sentences, Wolof predicational sentences do not show the SVO word order, but rather SOV order. The predicate, which is typically a nominal one, precedes the copula.
	* *ngi* is mainly used in presentative/progressive sentences. Unlike the two previous copulas, the predicate of the *ngi* copula can only be a manner or a locative (e.g. in the house) as in *Góor gi mu ngi ci kër gi* (The man is in the house). Also, such copular constructions have an SVO word order.




## Treebanks

There is only one Wolof UD treebank at present:

  * [Wolof-WTB](../treebanks/_wo/index.html)
