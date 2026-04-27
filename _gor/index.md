---
layout: base
title:  'Gorontalo UD'
udver: '2'
---

# UD for Gorontalo <span class="flagspan"><img class="flag" src="../../flags/svg/ID.svg" /></span>

## Orthography

Gorontalo is written in the Latin alphabet, with all characters (including punctuation) in the ASCII set.

## Tokenization and Word Segmentation

* Tokens in Gorontalo are separated by whitespace, except for punctuation such as full-stops and question marks, which are separate tokens despite following a word without space.
* In practice, orthographic styles in Gorontalo can vary depending on the language user. For example, voice-marking adpositions or clitics may be separated by whitespace, or joined by concatenation or hyphenation. At present the data is of a consistent style, but this variance is worth bearing in mind for Gorontalo language data in natural settings.
* We provide morphological segmentation in the `MSeg` field of the misc column.

---

## Lemmatization

* Only VERBs have lemma distinct from the surface form. These are the root verb, stripped of their inflectional affix.

---

## Morphology

### Tags

* The following Universal Parts of Speech tags are currently attested in Gorontalo: NOUN, PROPN, PRON, NUM, VERB, ADJ, ADV, ADP, DET, PART, CCONJ, INTJ, X
* Pivot and non-pivot markers of nominal arguments (such as _li_, _ti_, _lo_, _to_) are annotated as ADP.
* PART is currently only used for unexplained particles.

---

### Features
* VERBs in Gorontalo generally consist of a root (lemma) with a pre-, in- or circumfix for inflectional morphology: for example, "buka" (break_the_fast); "mobuka" (ACT.IRR.break_the_fast). These infixes are synthetic, not agglutinative, and may carry the following morphological features:
  * Voice = {Act, Pat, Ivoc} (Actor, Patient, Instrument Voice)
  * Mood = {Ind, Irr} (Indicative, usually referred to as Realis; Irrealis)
  * Aspect = {Prog} (Progressive)
* Tokens tagged as NOUN generally do not take any morphological features, with the following exceptions:
  * The plural prefix "mongo-" is often attached to nouns to indicate plurality. For example: "lolai" (boy); "mongololai" (boys). This is currently analysed as a plural inflection, and so the feature-value pair `Number=Plur` is used.
* Pivot/non-pivot markers, tagged as ADP, have the following features:
  * Case = {Piv, Npiv, Gen} (obligatory)
  * Gender = {Masc, Fem}

---

## Syntax

* Like most Austronesian languages, Gorontalo is a ***symmetrical voice*** language, meaning that the semantic agent or patient (among other semantic argument types) of a verb phrase may be placed in a pivot position, where the verb's morphology must agree with it and its voice marker (if a voice marker is present). Other arguments are non-pivots. In Universal Dependencies, pivot arguments are, syntactically, speaking, considered to be subjects (nsubj/csubj), and non-pivots are considered objects or obliques (obj, iobj, obl), regardless of their semantic role.
* The basic order of a Gorontalo transitive sentence is pivot-verb-nonpivot (likened to SVO by the above logic).
* Sub-labels are used for subject and object relations in all instances of voice-marked verb phrases to indicate the semantic role, e.g.:
  * ``nsubj:actor``, ``nsubj:patient``, ``nsubj:instrument``
  * ``obj:actor``, ``obj:patient``, ``obj:instrument``
  * ``iobj:patient``, ``iobj:instrument``
* Universal Dependencies only allows one core argument to have the `obj` label, while others are expected to have the `iboj` label. In the case of multiple non-pivot arguments, we follow a hierarchy of _agent > patient > instrument_. The topmost non-pivot argument in this hierarchy takes the bare `obj` label, while any others take the `iobj` label. This is arbitrary as we lack a strong linguistic argument for which is more direct, but partly motivated by the agent usually being closer to the verb.
* A bare `nsubj` label is used for subjects of nominal predicates. In theory, there should be no instances of a bare `obj` label.
* There are no copula in Gorontalo.

## Aliases

The annotation for Gorontalo introduces some new terminology which is intended to be more transparent for users and more reflective of symmetrical voice languages, as an improvement over pre-existing terminology that is more suited to nominative-accusative languages. All these new labels can be mapped back to a pre-existing equivalent. We provide a mapping here:

* Dependency relations -- sublabels:
  * `nsubj:agent`  &rarr; `nsubj:pass`
  * `nsubj:patient` &rarr; `nsubj:pass`
  * `_:instrument` &rarr; `_:ivoc`
* Morphological features -- Voice:
  * `Pat` &rarr; `Pass` 
  * `Ivoc` &rarr; `Ifoc`
* Morphological features -- Case:
  * `Piv` &rarr; `Nom`
  * `Npiv` &rarr; `Gen` (note: this removes the distinction between non-pivots and true genitives in Gorontalo)

---

## Treebanks

There is [one](../treebanks/gor-comparison.html) Gorontalo UD treebank:

  * [UD_Gorontalo-BungoLoLombi](../treebanks/gor_bungololombi/index.html)

---
