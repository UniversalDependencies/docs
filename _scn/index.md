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

* The default Word Order in Sicilian is SVO, but it is highly flexible and can vary depending on the communicative or pragmatic focus, for instance placing the object in initial position to highlight it.
* In Sicilian, the nominal subject (nsubj) agrees in person and number with the governing verb.
* In Sicilian, subjects can be omitted, as it is a pro-drop language.
* In Sicilian, modal verbs—often derived from auxiliaries like essiri (‘to be’) and aviri (‘to have’)—serve two main roles: they can carry their own lexical meaning or act as support verbs combined with an infinitive to express modal values. Common examples include: ability/possibility (putiri ‘can’), desire/will (vuliri ‘want’), and obligation/necessity (duviri ‘must’ or aviri a ‘have to’).
  In modern spoken Sicilian, the periphrastic construction aviri a + infinitive is widely used to indicate obligation, often replacing the older duviri. The tense of aviri determines the modal meaning: the past remote conveys epistemic certainty about past events, while the present or imperfect allows for epistemic probability or deontic obligation. With certain present or imperfect forms, the construction can also take on an exhortative function.
  
### Reduplication Phenomenon 
Reduplication is a widespread syntactic phenomenon in Sicilian, involving the repetition of a word to extend or shift meaning within a sentence. It remains highly productive in contemporary usage showing no significant diachronic or social variation. Reduplication can affect verbs, nouns, and other parts of speech, often creating adjectives, adverbs, or locational modifiers.
* The following subtypes are used in Sicilian:
 * * [det:predet]() appears in front of another determiner



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
