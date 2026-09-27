---
layout: base
title: 'Mongolian UD'
udver: '2'
---

# UD for Mongolian <span class="flagspan"><img class="flag" src="../../flags/svg/MN.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace.
* Punctuation is separated from adjacent words as separate tokens.
* There are no multiword tokens and no words with spaces in the current treebank.
* Bound morphemes (case, possessive, tense/aspect suffixes) are written together with their host in the Latin transliteration used in the reference grammar.

---

## Morphology

### Tags

* Tags actually attested in the treebank include ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, and X.
* `PART` is used for discourse particles, the interrogative particle, and the negation particle.
* `AUX` is used for the auxiliaries `baj` (progressive/existential) and `bol` (change of state), both registered as language-specific auxiliaries.
* Postpositions are tagged `ADP`.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features: `Case` (Nom, Gen, Dat, Acc, Abl, Ins, Com, Ter), `Number` (Sing, Plur), `Person`, `Poss`, `PronType` (Dem, Int, Prs, Tot), `Reflex`, `NumType` (Card, Ord).
* Verbal features: `VerbForm` (Fin, Inf, Part, Conv), `Mood` (Ind, Int, Cnd), `Tense` (Past, Pres, Fut), `Aspect` (Hab, Imp, Perf, Prog), `Voice` (Cau, Pass), `Polarity`, `Evident` (Fh, Nfh).
* Adjectival features: `Degree` (Pos, Sup).
* Language-specific: `PartType=Int` on the interrogative particle.
* Mongolian-specific morphological distinctions that do not correspond to any value in the universal feature inventory (successive aspect, quotative particle type, and modal marking on certain finite verb forms) are encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Khalkha Mongolian is a head-final language with SOV constituent order.
* Core arguments are identified morphosyntactically: `nsubj` is typically nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head or, less commonly, as separate postpositions attached with the `case` relation.
* Copular constructions use `baj` or `bol` as `cop`, attached to the nonverbal predicate.
* The following language-specific dependency subtypes are used:
  * `acl:relcl` — relative clause modifier
  * `nmod:poss` — possessive nominal modifier
  * `nsubj:pass` — passive nominal subject
  * `obl:agent` — agent of a passive construction
  * `nsubj:outer` — subject of an outer clause whose predicate is itself a clause

---

## Treebanks

There is 1 Mongolian UD treebank:

* [Mongolian-GDUD](../treebanks/mn_gdud/index.html)
