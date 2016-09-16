---
layout: feature
title: 'Voice'
shortdef: 'voice'
---

### Description

For most Uralic languages, voice means mainly the active-passive distinction.
Voice is a main feature of verb. The Uralic impersonal are marked as passive
voice and other forms as active. Infinite verb forms that are not clearly either
should not have a voice feature.

### `Act`: Active voice

The subject of the verb is the doer of the action (agent), the object is
affected by the action (patient).

#### Active examples

* [fi] _juoksen_ "I run", _kuuleva_ "hearing"

~̃~~ conllu
# sentence-text: Kuinka paljon ihmiset oikeasti sitten olisivat valmiita maksamaan tästä huvista?
1       Kuinka  kuinka  ADV     Adv     _       2       advmod  _       _
2       paljon  paljon  ADV     Adv     _       8       advmod  _       _
3       ihmiset ihminen NOUN    N       Case=Nom|Number=Plur    7       nsubj:cop       8:nsubj _
4       oikeasti        oikeasti        ADV     Adv     _       7       advmod  _       _
5       sitten  sitten  ADV     Adv     _       7       advmod  _       _
6       olisivat        olla    VERB    V       Mood=Cnd|Number=Plur|Person=3|VerbForm=Fin|Voice=Act    7       cop
     _       _
7       valmiita        valmis  ADJ     A       Case=Par|Degree=Pos|Number=Plur 0       root    _       _
8       maksamaan       maksaa  VERB    V       Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act   7       xcomp
   _       _
9       tästä   tämä    PRON    Pron    Case=Ela|Number=Sing|PronType=Dem       10      det     _       _
10      huvista huvi    NOUN    N       Case=Ela|Number=Sing    8       nmod    _       SpaceAfter=No
11      ?       ?       PUNCT   Punct   _       7       punct   _       _
~̃~~

### `Pass`: Passive voice

The subject of the verb is affected by the action (patient). The doer (agent)
is either unexpressed or it appears as an object of the verb.

#### Passive examples

* [fi] _jossain <b>juostaan</b>_ "<b>running</b> is going on somewhere",
  _nähty_ "that has been <b>seen</b>"

~~~ conllu
# sentence-text: Yahoo lupaa yhdestä ip:stä 5000 kyselyä / per päivä, mutta minut bannattiin sieltä aina 300 kyselyn jälkeen.
1       Yahoo   Yahoo   PROPN   N       Case=Nom|Number=Sing    2       nsubj   _       _
2       lupaa   luvata  VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
3       yhdestä yksi    NUM     Num     Case=Ela|Number=Sing|NumType=Card       4       nummod  _       _
4       ip:stä  ip      NOUN    N       Abbr=Yes|Case=Ela|Number=Sing   6       nmod    _       _
5       5000    5000    NUM     Num     NumType=Card    6       nummod  _       _
6       kyselyä kysely  NOUN    N       Case=Par|Number=Sing    2       dobj    _       _
7       /       /       PUNCT   Punct   _       6       punct   _       _
8       per     per     ADP     Adp     AdpType=Post    9       case    _       _
9       päivä   päivä   NOUN    N       Case=Nom|Number=Sing    6       nmod    _       SpaceAfter=No
10      ,       ,       PUNCT   Punct   _       2       punct   _       _
11      mutta   mutta   CONJ    C       _       2       cc      _       _
12      minut   minä    PRON    Pron    Case=Acc|Number=Sing|Person=1|PronType=Prs      13      dobj    _       _
13      bannattiin      bannata VERB    V       Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass     2       conj    _
       _
14      sieltä  sieltä  ADV     Adv     _       13      advmod  _       _
15      aina    aina    ADV     Adv     _       17      advmod  _       _
16      300     300     NUM     Num     NumType=Card    17      nummod  _       _
17      kyselyn kysely  NOUN    N       Case=Gen|Number=Sing    13      nmod    _       _
18      jälkeen jälkeen ADP     Adp     AdpType=Post    17      case    _       SpaceAfter=No
19      .       .       PUNCT   Punct   _       2       punct   _       _
~̃~~
