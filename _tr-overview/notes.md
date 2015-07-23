---
layout: base
title:  'Notes'
permalink: tr/overview/notes.html
---

# Introduction

This is an unorganized collection of notes that should be
documented in proper sections later.

## Some special constructions

* In some cases when noun phrases are coordinated with suffix *-lA*
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
  between the coordinated noun. Case-marking is possible in both
  configurations (e.g., *Diş fırçam-la kardeşim lavaboyu temizlemiş*
  'apparently my sister/brother cleaned the sink with my toothbrush').
  In some cases it is difficult, or impossible without additional
  context to disambiguate, *Ali-yle Ayşe evlendi* can mean 'Ali and
  Ayşe got married' but also 'Ayşe (but not Leyla) married Ali'.
  In the first case the relation is `coord` (without a `cc`) and in
  the second `nmod` modifying either the predicate or another noun
  phrase. If the *-lA* phrase modifies the subject (and it is clearly
  not a conjunction), we always attach it to the predicate. This
  avoids `remnant` relations where subject is not expressed in the sentence (see below for other missing heads).
  
  Note that as in English PP attachment ambiguity, the `nmod` case can be ambiguous:

  ```
  Ali Ahmet'i    teleskopla  gördü.
  Ali Ahmet.ACC  telecope-lA see.
  `Ali saw Ahmet with a telescope'.
  ```
  With the right context, it is possible that the noun modified with 
  the phrase with *-lA* is omitted in the sentence.

  ```
  Dün       bir arkadaşı-yla   gördüm.
  Yesterday a   friend.P3S-lA  see.PAST.1SG
  `I saw (him/her) with a friend (of him/her)'.
  ```
  In this case, we connect the phrase with *-lA* to the predicate with `remnant` relation.

  In case of coordination, if the second conjunct is a pronoun, it can
  be omitted. 

  ```
  Annem-le      eve         gittik.
  My mother-lA  house.DAT   go.PAST.1PL
  'My mother and I went home'/'I went home with my mother'
  ```
  *-lA* in these cases is almost always ambiguous between a case
  marker and conjunction. If the second component is missing, and the context
  does not clearly indicate a conjunction, we use `nmod`. Otherwise, we
  use `remnant`.

* Modal adverbs like *acaba* 'I wonder', *bakalım* 'let's see',
  *yoksa* 'if not' are linked to the main predicate using `discourse`
  relation.

  The relation should also cover *yani*, *işte*, *şey*.


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
  and case (also with *-lA* and *-CA*) suffixes to form postpositions. For
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
  does so),  (2) marking them as the head of the phrase when the noun
  phrase is missing, and (3) make sure the case marker introduces a
  new IG, and mark the noun component of the postposition as the 
  head of the postpositional phrase. This is somewhat similar to 
  the noun phrase analysis).

  **Suggestion:** (tentative) follow METU-Sabancı analysis.

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

  **Suggestion:** `X`, for the case of verb derivation, we don not
  need to keep the derivation history, so derived verbs will show up as verbs.

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


## Features

* With the same set of TAM markers, tense/aspect/modality changes 
  in subordinated predicates.

  **Suggestion:** keep the features as they are predicted for the
  predicates of the non-subordinate clauses (it likely that these
  could be adjusted automatically).


## Notes on annotation of specific words

* *eğer* an *şayet* signal a conditional clause, but they are
  redundant since they always coexist with the compulsoray mood
  marker on conditional clauses. We mark them as `SCONJ` (following
  TRmorph), but attach to the head of the conditional clause using the
  `discourse` relation.

* The words *var* '(something) exists' and *yok* '(something) does not exist' 
  are used for formimg "existential sentences". In this function, these words
  behave like nominal predicates. Although they do not function like
  adjectives in general, METU-Sabancı marks them as adjectives.
  
  **Suggestion:** Follow METU-Sabancı analysis.
  
* Another special word is negative particle 'değil'. It mainly allows
  negating the nominal predicates. In this function, it behaves
  similar to copular verbs (*ol-*, *bulun-*). METU-Sabancı marks it as
  a verb, and uses a special relation `NEGATIVE.PARTICLE`.

  If değil is used as a predicate, we treat it similar to *ol-*, it is
  marked as `VERB` with feature assignment `Negative=neg`. If it is used 
  in a copular construction, we use the relation `cop` to connect it to 
  the nominal predicate. 
~~~~ sdparse
Arabam mavi değil .\n My car is not blue .
cop(mavi, değil)
~~~~

  *değil* can also be used with verbal predicates, acting as an
  auxiliary, in this case we relate it to the main verb with relating
  `aux`.
  
~~~~ sdparse
Öldürecek değiller . \n They are not going to kill (someone) .
aux(öldürecek, değiller)
~~~~

    If *değil* is used to negate a non-predicate, we mark it as `PART`
    (again with feature `Negative=neg`), and attach it to the content
    word with relation `neg`. (???)

~~~~ sdparse

~~~~

* *olarak* (copula *ol-* + suffix *-ArAk*) is somewhat different than 
  other uses of the copula. It forms adverbial phrases.

* Clitic *dA* (*de/da*)

  In its common use, *dA* is a discourse connective. In this case, 
  we mark it as `ADV` and attach it to the word/phrase that it modifies 
  (typically the preceding word), and mark as `advmod:emph`, which 
  seems to be used in Czech.

  When *dA* is attached to a subordinate predicate, it may look like a
  subordinating conjunction, *Okuyup da anla(ma)mış* 'she
  did (not) understand (because/although) she read (it)'. Note that in
  this usage, the suffix *-(y)Ip* functions as the subordinator.
  Hence, we mark *dA* as above.

  *dA* also functions as a coordinating conjunction. If it is used in
  a construction like *Ahmet de Ali de aradı* 'Ahmet and Ali both
  called', we still attach the clitic to the preceding word, but mark
  coordination without a conjunction, in this case the POS tag is
  `CONJ`. 
  
  If it is used with the meaning of 'but', e.g., *içerim de,
  arabayı kim kullanacak?* 'I would/can drink, but (then) who will
  drive?'. In this case, it is connected to head of the conjunction
  with relation `cc`.

  A infrequent, but interesting usage of *dA* is with
  compound verb forms including suffix *-abil*. A word/utterance like
  *ara-yabilirim de* 'I may also call' can alternatively be expressed
  like *araya da bilirim*. Note that the first word include part of
  the suffix '-(y)Abil', and while the last word contains related free
  morpheme *bil-* 'to know' the expression has nothing to do with the verb
  *bil-*. In this case, we analyze second part of the verb as an
  auxiliary, and attach *dA* to the first part.

~~~~ sdparse
araya da bilirim \n I could call too.
advmod:emph(araya, da)
aux(araya, bilirim)
~~~~

* Clitic *ki*

    Either subordinating conjunction or a discourse connective (mark
    with `advmod:emph` or `discourse`). (**expand this**)

* *-(y)sA* and *ise*

    The suffix *-(y)sA* or its clictic form *ise* behave like the
    copular suffixes or clitics. It mianly forms conditional clauses.
    *Kitabın tamamını okudu<b>ysa</b> şaşarım* 'I'd be surprised if she read all of the book'. We treat this case as subordination, mark the relation with `advmod:cond`.
~~~~ sdparse
Kitabın tamamını okuduysa şaşarım .
advcl:cond(şaşarım, okuduysa)
~~~~

~~~~ sdparse
Evde yse yemek yapmıştır . \n He'd have cooked if he is at home.
advcl:cond(yapmıştır, evde)
cop(evde, yse)
~~~~

    When attached to nouns, both forms can also be used as a discouse
    connective with the meaning 'as for NOUN'. In this case (following
    English UD), we mark the copular suffix/clitic with `case` and use
    appropriate relation (likely `nmod`) to relate it to the head.

~~~~ sdparse
Arabam sa henüz satılmadı . \ As for my car, it wasn't sold yet.
case(arabam, sa)
nsubjpass(satılmadı, arabam)
~~~~

* *hani* is a word that forms (mostly rhetorical) 'where' questions.
  G&K define it as an interjection. In most cases, there is no other word 
  that indicate that the sentence is a question. Furthermore, it fills
  in a (pro)noun slot in this usage. In this case, we mark it as 
  `PRON` (with `PronType=Int`). In some cases it co-occurs with
  *nerede* 'where'. In that case, it is loosely connected to the
  sentence structure, so, we mark it as `ADV` and connect to the
  predicate with relation `discourse`. It may also occur without
  *nerede* but with a weak connection to the sentence structure.
  We also mark it as a discourse connective in this usage. (???)

* The reflexive pronoun (*kendi* and its other forms) is normally
  complementary to the reflexive verbs. If a verb is reflexive, there
  normally 'kendi' is not needed. However, in some cases it is used,
  likely for emphasis. In these cases, we mark it as if it is the
  object of the reflexive ....
  
  

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

  **Suggestion:** split. We keep the first IG as the head, and mark it
  with relation `case`.

* **-CI** derives nouns from nouns, typically it derives "occupation
  nouns", e.g. *şarap-çı* 'the wine maker/seller' but also someone who
  has a taste/preference for something, so the example could also mean
  'person who prefers wine (over beer)'. Although not very frequent,
  the non-derived noun can be modified by other words: 
  *[kırmızı şarap]-çı* 'person preferring red wine (over white wine)'/'red wine seller'.
  Similarly, *iki [[yağlı güreş]-çi]* 'lit: two [[oil(y) wrestle]-r]'
  (the sport is called 'oil(y) wrestling' not that the wrestlers are
  oily (at least not always). Cf. *[iki [güçlü [güreş-çi]]]* 'two
  strong wrestlers'.

  **Suggestion:** split, and mark the final IG as the head of the
  phrase. We currently use `nmod` between two IGs.

* **-DIr** attached to time expressions create time adverbials with
  the approximate meaning of 'since' or 'for', as in *asır-dır*
  'for/since centuries', *üç haftadır* 'for three weeks', 
  *uzun yıllar-dır* 'for many years'. In the last two examples the number
  and the adjective modifies the noun, not the resulting adverbial.

  **Suggestion:** split. We keep the first IG as head, and relate them
  with `case`, this is somewhat in line with the English UD where 
  'since/for' would be linked with `case` as well.

* **-lArI** attaches to time expressions, indicating repeating events,
  *hafta sonları kitap okurum*
  'I read books *in the weekends*',
  *kış geceleri çok üşürdü* 
  '(s)he used to be/feel very cold *in the winter nights*'.
  The construction is ambiguous between noun-phrase and time adverb.
  That is, *geceleri araştıyorum* could mean 'I research (something)
  at nights' or 'I research *nights*/I do research about nights'. 
  TRmorph has a special (derivational) tag for this construction.

  **Suggestion:** analyze these as normal noun (phrase) but mark with
  `nmod:tmod`.

* **-CA** is a multi-functional derivational suffix. When attached to
  nouns, it forms adverbial phrases: *[güvenlik kuvvetleri]-nce* 'by the
  security forces'. In this usage, *-CA* may scope over the whole
  phrase headed by the noun it is attached to. In this usage we split
  -CA, and connect to the noun with `case` relation (the noun bing the
  head). 



