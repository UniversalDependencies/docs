---
layout: base
title:  'Notes'
permalink: tr/overview/notes.html
---

# Introduction

This is an unorganized collection of notes that should be
documented in proper sections later.

## Some special constructions

* In some chases when noun phrases are coordinated with suffix *-lA*
  it is not clear whether it is a conjunction or simply
  'commutative/instrumental' case marking.
  
  ```
  (1) Annem-le     babam     eve       gitmiş
      My_mother-lA my_father house.DAT go.PAST.EVID
      `My mother and my father went home.'
   or `My father went home with my mother.'
  (2) Annem     babam-la     eve       gitmiş.
      My_mother my_father-lA house.DAT go.PAST.EVID
      `My mother went home with my mother.'
  ```

  Coordination is only possible and more likely when the -lA suffix is
  between the coordinated noun. But, case-marking is still possible
  in this case (e.g., *Diş fırçam-la kardeşim lavaboyu temizlemiş*
  'my sister/brother cleaned the sink with my toothbrush').

  **Question:** should we split off -lA when used as a conjunction?

## POS tagging related

* The time adverbs, *dün* 'yesterday', *bugün* 'today', *akşam* (in
  the) evening, and so on are marked as nouns in MS treebank, and
  corresponding words seem to be marked as nouns in English UD too.
  This conflicts with words with similar usage, e.g., *şimdi* 'now'.

  **Suggestion:** Mark *dün/bugün/yarın* as `NOUN` but use the
  relation label `nmod:tmod`. This should also cover nominal phrases
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
  the analyses in English, and possibly in other languages. However,
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
  recoverable from the postposition (using the possessive agreement 
  marker) but the noun phrase is missing.

  Alternatives are (1) treating these as regular nouns (METU-Sabancı
  does so),  (2) marking them as head of the phrase when the noun
  phrase is missing, and (3) make sure the case marker introduces a
  new IG, and mark the noun component of the postposition as the 
  head of the postpositional phrase. This is somewhat similar to 
  the noun phrase analysis).

  **No suggestion yet**

* UD does not seem to have a clear way of marking onomatopoeia.
  In most cases `X` seems to be a good option.

  In Turkish, onomatopoeic words may get some suffixes. Most common
  case is the *-lA* suffix which derives a noun meaning making a sound
  like it, e.g., *kedi miyav-la-r* 'cat meows'. 
  
  In a rather infrequent usage, these words may also get copular
  suffixes (An example from the web: *Gitsin çay falan demlesin, ne o
  öyle yok havmış da yok miyavmış da bilmemneymiş.*. This also affects
  the analysis of foreign phrases, e.g., *Bunun İngilizce orjinali 'to
  be or not to be'dir* 'Original English (version) of this is "to be
  or not to be" (quoting the foreign expressions is common, but not
  necessarily a standard practice).

  **Suggestion:** `X`, for the case of verb derivation, we should not
  keep the derivation history, so these will show up as verbs.

* A particular class of complex "pronominals" are formed by possessive
  suffixes attached to adjectives, determiners and numerals. For
  example, *üç-ü* 'three of them', *sarı-ları* 'the yellow parts (of
  it)'/'the ones that are yellow', *hiçbir-imiz* 'none of us'. These
  words behave a lot like a normal pronouns. METU-Sabancı treebank
  marks these as adjectives that are promoted to nouns, followed by a
  possessive suffix. TRmorph analyzes as dervied pronouns.

  Marking them as pronouns may be interesting as their referrents may
  potentially be resolved in the linguistic context. On the other hand
  this seems to be against the current UD classification that lists
  pronouns as closed class words. (On a related note, one can stretch
  this to verbal nouns too, e.g., *Bu hafta bir sürü kısa öykü yazdım. 
  Daha sonradan yaztıklarım daha guzel oldu.* 
  'I wrote many short stories today. The ones I wrote later were better'.)

  **Suggestion:** (tentative) Follow METU-Sabancı analysis, unless the
  resulting pronoun is a lexicalized one.

* The words *var* '(something) exists' and *yok* '(something) does not exist' 
  are used for formimg "existential sentences". In this function, these words
  behave like nominal predicates. Although they do not function like
  adjectives in general, METU-Sabancı marks them as adjectives.
  
  **Suggestion:** Follow METU-Sabancı analysis.
  
* Another special word is negative particle 'değil'. It mainly allows
  negating the nominal predicates. In this function, it behaves
  similar to copular verbs (*ol-*, *bulun-*). METU-Sabancı marks it as
  a verb, and uses a special relation `NEGATIVE.PARTICLE`.

  **Suggestion:** (tentative) Follow METU-Sabancı for marking *değil*
  as verb, but use the relation `cop` to link *değil* to the head of
  the nominal predicate. The negation should be inferred from the
  `Negative` feature marked on *değil*.
  This is in line with other cases of negation in Turkish, but it may
  break the parallel between English (and other languages).

## Features

* Except for personal pronouns, nominals in Turkish does have a clear
  `Person` marking for subject-predicate agreement. When they are
  in subject position, these nouns agree with 3rd person singular and
  plural predicates.
  
  METU-Sabancı treebank marks all nominals for person/number unmarked
  as `Person=3|Number=Sing`.

  This marking crops up in many places where it is at best
  unnecessary, for example,
  ```
  (Biz) doktor          -uz
  We    doctor.P3.SG    cop.PRES.P1.PL
  `We are the doctors.'
  ```
  Although one should look at the agreement markers on the copula,
  rather than the noun, it is easy to confuse them, and it has no use.

  **Suggestion:** never mark for `Person` unless there is an explicit
  marker (only for pronouns). `Number` is marked on all nouns, and it
  defaults to `Sing` for nouns without a plural marker.

## Derivations 

* **-lA** is a productive suffix that derives verbs from nouns
  and onomatopoeia, e.g., *model* 'model-N', *modelle* 'model-V'.
  It does not seem to be possible for the derived noun to have any
  dependents, the whole word acts as a single unit.

  **Suggestion:** collapse

* **-lAn** is a another productive suffix that derives verbs:
  *hoş-lan*, *silah-lan*, *ağaç-lan*.

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
  *[kırmızı şarap]-çı* 'person preferring red wine (over white wine)'/'red wine seller'.

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
  The construction is abmiguous between noun-phrase and time adverb.
  That is, *geceleri araştıyorum* could mean 'I research (something)
  at nights' or 'I research *nights*/I do research about nights'. 
  TRmorph has a special (derivational) tag for this construction.

  **Suggestion:** analyze these as normal noun (phrase) but mark with
  `nmod:tmod`.
   
