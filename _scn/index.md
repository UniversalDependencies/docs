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
* Sicilian uses all 17 universal tags.
* The only word tagged as PART is the particle *a*, used in the periphrasis: *aviri a* + infinitive, *veniri a diciri*.
* The tag AUX is used in the following cases:
  * *essiri*  which is also the copula;
  * *avíri*, the only auxiliary form for compound tenses: *aju rinisciutu*;
  * *putiri, vuliri, sapiri, duviri* when they are used as modals: *putimu jiri*;
  * passive auxiliary, used to form passive verb forms, is represented by *essiri*: *fu chiamatu*;
  * auxiliary used for the progressive form, represented by *stari* + gerund: *sta liggennu*.
* The tag DET is used for determiners that modify nouns or noun phrases and is used to mark: articles (*l'occhi, na jurnata*), predeterminers (***tutti** i pinzera*), and different types of adjectives playing the determiner function (i.e. possesive ***sa** mugghieri*, demonstrative ***stu** film*, interrogative *quantu*, indefinite ***tanti** furmìculi*, exclamative ***chi** malaffruntu!*).
  In Sicilian, usually a nominal allows for one DET modifier only, with the following exceptions:
  * Predeterminers;
  * Possessive adjectives preceded by the article.
* The tag PRON is used for words that replace nouns or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context: *pi curpa so*.
* There are some cases of deverbal forms, mostly verbal participles, tagged as ADJ: *è bruciatu*.



### Features

* NOUN is inflected for Gender (Masc or Fem) and Number (Sing or Plur).
* VERB is inflected for Mood, Tense, Person, Number:
  * Past participle verbs are also inflected for gender.
* ADJECTIVE agrees with nouns for Gender and Number. Adjectives can be invariant with respect to Gender and/or Number.
* DETERMINERS agree with nouns in the same way as adjectives. In Sicilian, some determiners can appear in the same form for multiple referents and be invariant for gender or number.
* Pronouns, determiners, quantifiers and pronominal adverbs may be further specified by the PronType feature. The value Clitic is used for marking clitic pronouns.

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
