---
layout: base
title:  'Notes'
permalink: tr/overview/notes.html
---

# Introduction

This is an unorganized collection of notes that should be
documented in proper sections later.

## POS tagging related

* The time adverbs, *dün* 'yesterday', *bugün* 'today', *akşam* (in
  the) evening, and so on are marked as nouns in MS treebank, and
  corresponding words seem to be marked as nouns in English UD too.
  This conflicts with words with similar usage, e.g., *şimdi* 'now'.

  **Suggestion:** Mark *dün/bugün/yarın* as `NOUN` but use the
  relation label `nmod:time`. This should also cover nominal phrases
  locative marking referring to time, e.g., *eve vardığımda* 'when I
  arrived home'.

* In Turkish, a (rather large) number of postpositions are constructed
  by a regular process, where a set of nouns (mostly indicating place
  or some sort of abstract relation) are combined with possessive
  and case (+ *-lA* and *-CA*) suffixes to form postpositions. For
  example:
  ```
  (1) Kitapların ara-sı-nda           bulabilirsin.
      Book.GEN   between.POS3SG.LOC   find.ABIL.AOR.P2SG
      `You can find (it/him/her) *between* the books.'
  (2) Dolabın       arka-sı-na      düştü
      Cupboard.GEN  back-POS3SG.LOC fall.PAST
      `It fell *behind* the cupboard.'
  ```

  Analyzing these as `ADP` seems reasonable, and would be parallel to
  the analyses in English, and possibly in other languages. Howver,
  things get a bit tricky, as the noun that is modified by the
  postposition may disappear. As in,
  ```
  (3) (Bizim) ön-ümüz-den       gidiyor.
      We.GEN  front.POS1PL.ABL  go.PAST.PROG
      `he/she/it is going *in front of* us'
  (4) (Senin) yer-in-e          onu     atamışlar.
      You.GEN place-POS2SG.DAT  he.DAT  appoint.EVID.P3PL
      `they appointed him *instead of* you.
  ```
  Note that the information about the (pro)noun being modified is
  recoverable from the posposition (using the possessive agreement 
  marker) but the noun phrase is missing.

  Alternatives are (1) treating these as regular nouns (METU-Sabancı
  does so),  (2) marking them as head of the phrase when the noun
  phrase is missing, and (3) make sure the case marker introduces a
  new IG, and mark the noun component of the postposition as the 
  head of the postpositonal phrase. this is somewhat similar to 
  the noun phrase analysis).

  **No suggestion yet**

## Derivations 

* **-lA** is a productive suffix that derives verbs from nouns
  and onomatopoeia, e.g., *model* 'model-N', *modelle* 'model-V'.
  It does not seem to be possible for the derived noun to have any
  dpendents, the whole word acts as a single unit.

  **Suggestion:** collapse

* **-lIk** nominals from nominals. Besides lexicalized forms *tuz-luk*
  'salt container/shaker', it is also quite productive. The nominal
  modified by *-lIk* may be modified by other words in rare cases,
  e.g., *üç (büyük) araç-lık park yeri* 'parking spot for three big vehicles'.

  **Suggestion:** split ??

* **-CI** derives nouns from nouns, typically it derives "occupation
  nouns", e.g. *şarap-çı* 'the wine maker/seller' but also someone who
  has a taste/preference for something, so the example could also mean
  'person who prefers wine (over beer)'. Although not very frequent,
  the non-derived noun can be modified by other words: 
  *[kırmızı şarap]-çı* 'person perferring red wine (over white wine)'/'red wine seller'.

  **Suggestion:** split

* **-DIr** attached to time expressions create time adverbials with
  the approximate meaning of 'since' or 'for', as in *asır-dır*
  'for/since centuries', *üç haftadır* 'for three weeks', 
  *uzun yıllar-dır* 'for many years'. In the last two examples the number
  and the adjective modifies the noun, not the resulting adverbial.

  **Suggestion:** split

* **-lArI** attaches to time expressions, indicating repating events,
  *hafta sonları kitap okurum*
  'I read books *in the weekends*',
  *kış geceleri çok üşürdü* 
  '(s)he used to be/feel very cold *in the winter nights*'.
  The construction is abmigous between noun-phrase and time adverb.
  That is, *geceleri araştıyorum* could mean 'I research (something)
  at nights' or 'I resarch *nights*/I do research about nights'. 
  TRmorph has a special (derivational) tag for this construction.

  **Suggestion:** analyze these as normal noun (phrase) but mark with
  `nmod:tmod`.
   
