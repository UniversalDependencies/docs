---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
---

### Description

Pronouns are words that substitute for nouns or noun phrases, whose meaning is
recoverable from the linguistic or extralinguistic context.  Pronouns are used
for nominals references without intrinsic semantic value, some pronouns have
defective case paradigms but usually resemble nouns in their paradigms.

Pro-words of other parts of speech than noun are common in Uralic languages, in
the current Universal scheme they are still categorised under the respective
non pro part of speech, i.e., ADJ for pro-adjectives, ADV for pro-adverb and so
forth.

#### Examples

* [fi] _minä_ "I", _me_ "we", _nämä_ "these"
* [fi] _sama_ "same", _kaikki_ "all"
* [fi] _joku_ "someone", _jokin_ "something"
* [fi] _toinen_ "other", _itse_ "self", _jokainen_ "every"
* [fi] _ei <b>mikään</b>_ "none, not <b>any</b>"

~~~ conllu
# sentence-text: Se ravasi käytännössä siksakkia joen toisen penkan muurilta toiselle, kävi tervehtimässä kaikkia vastaantulijoita ja varmuuden vuoksi kyräili jokaista hiihtäjää.
1       Se      se      PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       2       nsubj   11:nsubj|12:nsubj|18:nsubj      _
2       ravasi  ravata  VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
3       käytännössä     käytäntö        NOUN    N       Case=Ine|Number=Sing    2       nmod    _       _
4       siksakkia       siksakki        NOUN    N       Case=Par|Number=Sing    2       dobj    _       _
5       joen    joki    NOUN    N       Case=Gen|Number=Sing    7       nmod:poss       _       _
6       toisen  toinen  PRON    Pron    Case=Gen|Number=Sing|PronType=Rcp       7       det     _       _
7       penkan  penkka  NOUN    N       Case=Gen|Number=Sing    8       nmod:poss       _       _
8       muurilta        muuri   NOUN    N       Case=Abl|Number=Sing    2       nmod    _       _
9       toiselle        toinen  PRON    Pron    Case=All|Number=Sing|PronType=Rcp       2       nmod    _       SpaceAfter=No
10      ,       ,       PUNCT   Punct   _       2       punct   _       _
11      kävi    käydä   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 2       conj
    _       _
12      tervehtimässä   tervehtiä       VERB    V       Case=Ine|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act   11
      xcomp   _       _
13      kaikkia kaikki  PRON    Pron    Case=Par|Number=Plur|PronType=Ind       14      det     _       _
14      vastaantulijoita        vastaantulija   NOUN    N       Case=Par|Number=Plur    12      dobj    _       _
15      ja      ja      CONJ    C       _       2       cc      _       _
16      varmuuden       varmuus NOUN    N       Case=Gen|Number=Sing    18      nmod    _       _
17      vuoksi  vuoksi  ADP     Adp     AdpType=Post    16      case    _       _
18      kyräili kyräillä        VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 2
       conj    _       _
19      jokaista        jokainen        PRON    Pron    Case=Par|Number=Sing|PronType=Ind       20      det     _
       _
20      hiihtäjää       hiihtäjä        NOUN    N       Case=Par|Number=Sing    18      dobj    _       SpaceAfter=No
21      .       .       PUNCT   Punct   _       2       punct   _       _
~~~

~~~ conllu
# sentence-text: Ovatko he niitä, jotka ottavat sen jonka saavat tai eivät ota ketään, kun eivät ole varmoja, kuka on se oikea, eivätkä osaa viestittää mitään oikein tai ollenkaan?
1       Ovatko  olla    VERB    V       Clitic=Ko|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act
       3       cop     _       _
2       he      hän     PRON    Pron    Case=Nom|Number=Plur|Person=3|PronType=Prs      3       nsubj:cop       _
       _
3       niitä   se      PRON    Pron    Case=Par|Number=Plur|PronType=Dem       0       root    _       SpaceAfter=No
4       ,       ,       PUNCT   Punct   _       6       punct   _       _
5       jotka   joka    PRON    Pron    Case=Nom|Number=Plur|PronType=Rel       6       nsubj   12:nsubj        _
6       ottavat ottaa   VERB    V       Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 3       acl:relcl       _       _
7       sen     se      PRON    Pron    Case=Gen|Number=Sing|PronType=Dem       6       dobj    _       _
8       jonka   joka    PRON    Pron    Case=Gen|Number=Sing|PronType=Rel       9       dobj    _       _
9       saavat  saada   VERB    V       Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 7       acl:relcl       _       _
10      tai     tai     CONJ    C       _       6       cc      _       _
11      eivät   ei      VERB    V       Negative=Neg|Number=Plur|Person=3|VerbForm=Fin|Voice=Act        12      neg
     _       _
12      ota     ottaa   VERB    V       Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin        6       conj    3:acl:relcl     _
13      ketään  kukaan  PRON    Pron    Case=Par|Number=Sing|PronType=Ind       12      dobj    _       SpaceAfter=No
14      ,       ,       PUNCT   Punct   _       18      punct   _       _
15      kun     kun     SCONJ   C       _       18      mark    26:mark _
16      eivät   ei      VERB    V       Negative=Neg|Number=Plur|Person=3|VerbForm=Fin|Voice=Act        18      neg
     _       _
17      ole     olla    VERB    V       Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin        18      cop     _
       _
18      varmoja varma   ADJ     A       Case=Par|Degree=Pos|Number=Plur 12      advcl   _       SpaceAfter=No
19      ,       ,       PUNCT   Punct   _       20      punct   _       _
20      kuka    kuka    PRON    Pron    Case=Nom|Number=Sing|PronType=Int       18      ccomp   _       _
21      on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 20      cop
     _       _
22      se      se      PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       23      det     _       _
23      oikea   oikea   ADJ     A       Case=Nom|Degree=Pos|Number=Sing 20      nsubj:cop       _       SpaceAfter=No
24      ,       ,       PUNCT   Punct   _       18      punct   _       _
25      eivätkä ei      VERB    V       Clitic=Ka|Negative=Neg|Number=Plur|Person=3|VerbForm=Fin|Voice=Act      18
      cc      _       _
26      osaa    osata   VERB    V       Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin        18      conj    12:advcl        _
27      viestittää      viestittää      VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    26      xcomp
   _       _
28      mitään  mikään  PRON    Pron    Case=Par|Number=Sing|PronType=Ind       27      dobj    _       _
29      oikein  oikein  ADV     Adv     _       27      advmod  _       _
30      tai     tai     CONJ    C       _       29      cc      _       _
31      ollenkaan       ollenkaan       ADV     Adv     _       29      conj    27:advmod       SpaceAfter=No
32      ?       ?       PUNCT   Punct   _       3       punct   _       _
~~~

