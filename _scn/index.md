---
layout: base
title:  'Sicilian UD'
udver: '2'
---

# UD for Sicilian <span class="flagspan"><img class="flag" src="../../flags/svg/IT-SIC.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace or apostrophes.
* Punctuation marks are treated as separate tokens, with some exceptions:
  * Apostrophes indicate elision, and are attached to the neighbouring word that underwent elision. This commonly occurs with determiners: *d'iddu, l'acqua*;
  * Apostrophes indicate apheresis, and are attached to the neighboring word that has undergone apheresis: *'na, 'nvitatu, 'nchianau, 'mmucciari*;
  * Apostrophes indicate apocope, and are attached to the nearby word that has undergone apocope: *cu', va', fa'*;
  * Numerical expressions are treated as single words and may contain punctuation: *'62, 150, 500*.
* Multi-word tokens are used for the following cases:
  * Articulated prepositions composed of a simple preposition and a definite article: *â* (a + la), *dû* (di + lu), *ô* (a + lu), *ntô* (nta + lu);
  * Articulated prepositions composed of a simple preposition and an indefinite article: *ôn* (a + nu);
  * Contraction of two clitic pronouns: *mâ* (mi + la), *mû* (mi + lu), *sû* (si + lu), *tû* (ti + lu);
  * Verbs containing one or more clitic pronouns: *dimmillu* (di + mi + lu), *riniscillu* (rinisci + lu);
  * Verbs containing personal pronouns as enclitic particles: *pinzàvatu* (pinzàva + tu);
  * Some compound forms: *’napocu* ('na + pocu).

---

## Morphology

### Tags
* Sicilian uses 15 universal POS tags; the SYM and X tags are not used.
* The only word tagged as PART is the particle a, used in the periphrasis: *aviri a fari, veniri a diciri*.
* The tag AUX is used in the following cases:
  * *essiri*  which is also the copula;
  * *avíri*, the only auxiliary form for compound tenses;
  * *putiri, vuliri, duvuri* when they are used as modals: *putimu jiri*;
  *  passive auxiliary, used to form passive verb forms, is represented by *essiri*: *fu chiamatu*;
  * auxiliary used for the progressive form, *stari + gerund*: *sta liggennu*.

* The tag DET is used to mark: articles (*l'occhi*), predeterminers (**tutti** i pinzera*), adjectives that works as determiner (*stu film*), possessives (*sa mugghi*).

* The tag PRON is used for words that replace nouns or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context: *pi curpa so*.

* There are some cases of deverbal forms, mostly verbal participles, tagged as ADJ: *sugnu vivu*



### Features

* NOUN is inflected for Gender (Masc or Fem) and Number (Sing or Plur).
* VERB is inflected for Mood, Tense, Person. 
* ADJECTIVE agrees with nouns for Gender and Number; but in some cases, adjectives are invariant with respect to Gender and/or Number.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/scn-comparison.html) Sicilian UD treebanks:

  * [Sicilian-A](../treebanks/scn_a/index.html)
  * [Sicilian-B](../treebanks/scn_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
