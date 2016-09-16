---
layout: postag
title: 'NOUN'
shortdef: 'noun'
---

### Description

Nouns are a part of speech typically denoting a person, place, thing, animal or
idea.  The `NOUN` tag is intended for common nouns only. See `PROPN` for proper
nouns and `PRON` for pronouns.  Nouns are as described in Universal rules.
Uralic nouns can be recognised from typically the case, number and etc.
inflection. Some noun forms lexicalise to Adverbs or adpositions. Nouns do not
typically have so strong tendency of comparative derivations like
adjectives do.

#### Examples

* [fi] _talo_ "house", _tyttö_ "girl"

~~~ conllu
# sentence-text: Oma jääkaappini oli aivan tyhjä ja koska kauppareissu tällä jalalla ei houkuttanut sitten alkuunkaan, turvauduin ystäväni apuun.
1       Oma     oma     ADJ     A       Case=Nom|Degree=Pos|Number=Sing 2       amod    _       _
2       jääkaappini     jää#kaappi      NOUN    N       Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1   5
       nsubj:cop       _       _
3       oli     olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 5       cop
     _       _
4       aivan   aivan   ADV     Adv     _       5       advmod  _       _
5       tyhjä   tyhjä   ADJ     A       Case=Nom|Degree=Pos|Number=Sing 0       root    _       _
6       ja      ja      CONJ    C       _       5       cc      _       _
7       koska   koska   SCONJ   C       _       12      mark    _       _
8       kauppareissu    kauppa#reissu   NOUN    N       Case=Nom|Number=Sing    12      nsubj   _       _
9       tällä   tämä    PRON    Pron    Case=Ade|Number=Sing|PronType=Dem       10      det     _       _
10      jalalla jalka   NOUN    N       Case=Ade|Number=Sing    8       nmod    _       _
11      ei      ei      VERB    V       Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act        12      neg
     _       _
12      houkuttanut     houkuttaa       VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act   16      advcl   _       _
13      sitten  sitten  ADV     Adv     _       14      advmod  _       _
14      alkuunkaan      alkuunkaan      ADV     Adv     _       12      advmod  _       SpaceAfter=No
15      ,       ,       PUNCT   Punct   _       12      punct   _       _
16      turvauduin      turvautua       VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 5       conj    _       _
17      ystäväni        ystävä  NOUN    N       Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1   18      nmod:poss       _       _
18      apuun   apu     NOUN    N       Case=Ill|Number=Sing    16      nmod    _       SpaceAfter=No
19      .       .       PUNCT   Punct   _       5   punct   _   _
~~̃~

