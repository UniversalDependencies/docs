---
layout: base
title:  'Tokenization'
permalink: urj/overview/tokenization.html
---

# Tokenization

Uralic languages are based on latin or cyrillic alphabets, and use most
commonly a white-space-based tokenization with usual punctuation conventions.
Multiword tokens are generally avoided, some considerations are described in
the [Multiword tokens section](#Multiword_tokens). As a general guideline,
current Uralic annotations avoid tokens with spaces in them and avoid using
multiple tokens per word.

## Multiword tokens

There are some cases in current Uralic tokenisations that can raise questions:
compounds with multiple content words in them and contraction-like stuff for
example as well as some enclitic particles.

## Some corner-cases with compounding

Sometimes compound forms in Uralic languages are like contractions, and can be
encoded as multiple tokens per word. For example Finnish conjunctions form such
compound with negation verb as in Finnish FTB UD:

~~~ conllu
#15601
1       Smokki  smokki  NOUN    N,Sg,Nom        Case=Nom|Number=Sing    4       dobj    _       _
2       minulla minä    PRON    Pron,Pers,Sg1,Ade       Case=Ade|Number=Sing|Person=1|PronType=Prs      4       nsubj
   _       _
3       kyllä   kyllä   ADV     Pcle    _       4       advmod  _       _
4       oli     olla    VERB    V,Act,Ind,Past,Sg3      Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act      0
       root    _       _
5       ,       ,       PUNCT   Pun     _       4       punct   _       _
6-7     muttei  _       _       _       _       _       _       _       _
6       mutt    mutta   CONJ    Pcle,CC _       4       cc      _       SpaceAfter=No|Style=Dialectal
7       ei      ei      VERB    V,Neg,Act,Sg3   Negative=Neg|Number=Sing|Person=3|Voice=Act     4       conj    _
       _
8       siistejä        siisti  ADJ     A,Pl,Par        Case=Par|Number=Plur    9       amod    _       _
9       hiihtokamppeita hiihtokampe     NOUN    N,Pl,Par        Case=Par|Number=Plur    7       dobj    _       _
10      .       .       PUNCT   Pun     _       9       punct   _       _
~~~

Also possible to use just compound token like in Finnish UD:

~~~ conllu
# sentence-text: Mieheni katsoi kauhuissaan muttei yllättyneenä kun latasin koriin puolitoista kiloa erilaista spelttejä, rouheita ja epäilyttävän nimisiä teepusseja.
1       Mieheni mies    NOUN    N       Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1   2       nsubj   _
       _
2       katsoi  katsoa  VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
3       kauhuissaan     kauhu   NOUN    N       Case=Ine|Number=Plur|Person[psor]=3     2       nmod    _       _
4       muttei  mutta#ei        VERB    V       Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act        3
       cc      _       _
5       yllättyneenä    yllättyä        VERB    V       Case=Ess|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act   3       conj    2:advcl _
6       kun     kun     SCONJ   C       _       7       mark    _       _
7       latasin ladata  VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 2       advcl
   _       _
8       koriin  kori    NOUN    N       Case=Ill|Number=Sing    7       nmod    _       _
9       puolitoista     puolitoista     NUM     Num     Case=Nom|Number=Sing|NumType=Card       10      nummod  _
       _
10      kiloa   kilo    NOUN    N       Case=Par|Number=Sing    7       dobj    _       _
11      erilaista       erilainen       ADJ     A       Case=Par|Degree=Pos|Number=Plur|Typo=Yes        12      amod
    14:amod|18:amod _
12      spelttejä       speltti NOUN    N       Case=Par|Number=Plur    10      nmod    _       SpaceAfter=No
13      ,       ,       PUNCT   Punct   _       12      punct   _       _
14      rouheita        rouhe   NOUN    N       Case=Par|Number=Plur    12      conj    _       _
15      ja      ja      CONJ    C       _       12      cc      _       _
16      epäilyttävän    epäilyttävä     ADJ     A       Case=Gen|Degree=Pos|Number=Sing 17      amod    _       _
17      nimisiä niminen ADJ     A       Case=Par|Degree=Pos|Number=Plur 18      amod    _       _
18      teepusseja      tee#pussi       NOUN    N       Case=Par|Number=Plur    12      conj    _       SpaceAfter=No
19      .       .       PUNCT   Punct   _       2       punct   _       _
~~~

## Enclitic particles

Enclitic particles are common in Uralic languages. They are not separate lexical
units but could be treated as such in future revisions. Currently it is advised
to encode enclitic particles as a part of token as usual, as in Finnish UD:

~~~ conllu
# sentence-text: Mietin, jaksaako vanhuksia ihan oikeasti meidän pienessä kämpässä, varsinkin jos tutkimusjakso on useita päiviä kerrallaan.
1       Mietin  miettiä VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       SpaceAfter=No
2       ,       ,       PUNCT   Punct   _       3       punct   _       _
3       jaksaako        jaksaa  VERB    V       Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act       1       ccomp   _       _
4       vanhuksia       vanhus  NOUN    N       Case=Par|Number=Plur    3       dobj    _       _
5       ihan    ihan    ADV     Adv     _       6       advmod  _       _
6       oikeasti        oikeasti        ADV     Adv     _       3       advmod  _       _
7       meidän  minä    PRON    Pron    Case=Gen|Number=Plur|Person=1|PronType=Prs      9       nmod:poss       _
       _
8       pienessä        pieni   ADJ     A       Case=Ine|Degree=Pos|Number=Sing 9       amod    _       _
9       kämpässä        kämppä  NOUN    N       Case=Ine|Number=Sing|Number[psor]=Plur|Person[psor]=1|Style=Coll
        3       nmod    _       SpaceAfter=No
10      ,       ,       PUNCT   Punct   _       16      punct   _       _
11      varsinkin       varsinkin       ADV     Adv     _       12      advmod  _       _
12      jos     jos     SCONJ   C       _       16      mark    _       _
13      tutkimusjakso   tutkimus#jakso  NOUN    N       Case=Nom|Number=Sing    16      nsubj:cop       _       _
14      on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 16      cop
     _       _
15      useita  usea    ADJ     A       Case=Par|Degree=Pos|Number=Plur 16      amod    _       _
16      päiviä  päivä   NOUN    N       Case=Par|Number=Plur    3       advcl   _       _
17      kerrallaan      kerta   NOUN    N       Case=Ade|Number=Sing|Person[psor]=3     16      nmod    _       SpaceAfter=No
18      .       .       PUNCT   Punct   _       1       punct   _       _
~~~


## References

* [Open issue #125 about Turkish tokenization in UD docs
   github](https://github.com/UniversalDependencies/docs/issues/125#issuecomment-102994717)
