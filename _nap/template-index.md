---
layout: base
title:  'Neapolitan UD'
udver: '2'
---

# UD for Neapolitan <span class="flagspan"><img class="flag" src="../../flags/svg/IT-CAM.svg" /></span>

## Tokenization and Word Segmentation

Words are delimited by whitespace or apostrophes. The apostrophes indicate elision, i.e. the omission of a sound in a word.
In Neapolitan, articles undergo elision, e.g.: _unu_-> _'nu_.INDF.M; _de/re_ -> _'e_.GEN

Multiword tokens do occur, namely in the form of ADP+DET.

---

## Morphology

### Tags

Auxiliaries are verbal, usually formed from the verb _avé_ 'to have'.
(De)verbal forms can be tagged in different ways. Participles are usually tagged as ADJ, sometimes as VERB.

---

### Features

Nouns are inflected by gender and number. 
Sometimes, the difference is only graphic, as most word-final vowels are reduced (indicated with a breve diacritic).
Example: _gruossŏ_ 'big'.M.SG vs _gruossĕ_ 'big'.M.PL
Grammatical gender is often marked not by the final vowel, but by the word-internal vowel or diphthong.
Example: _gruossŏ_ 'big'.M.SG vs _grossă_ 'big'.F.SG

Verbs all end with a reduced vowel. However, the distinction between etymological forms is retained by graphemes with a breve diacritic.
Example: _ijĕ magnĕ_ 'I eat'; _issŏ magnă_ 'he eats'.

---

## Syntax

Subjects are constituted of Noun Phrases, which can be also deverbal. They are not marked and usually preceed the verb, except for presentational construction, e.g.:
_Dimmanĕ venĕ Giuvannĕ_ 'Tomorrow John is coming'

Objects usually follow the main verb, or can be constituted by relative clauses, e.g.:
_Mĕ piacĕ 'e pazzià a ppallonĕ_ 'I like to play football'

---

## Treebanks

There are [N](../treebanks/nap-comparison.html) Neapolitan UD treebanks:

  [Neapolitan-A](../treebanks/nap_a/index.html)
  [Neapolitan-B](../treebanks/nap_b/index.html)

---
