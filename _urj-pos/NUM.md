---
layout: postag
title: 'NUM'
shortdef: 'numeral'
---

### Description

A numeral is a word, functioning most typically as a determiner, adjective or
pronoun, that expresses a number and a relation to the number, such as
quantity, sequence, frequency or fraction.

Ordinal numerals are classified as adjectives `ADJ` if they act like adjectives
in syntax. 

#### Examples

* [fi] _yksi_ "one", _kaksi_ "two", _pari_ "few"
* [fi] _3_, _20_, _3.14_

~~~ conllu
# sentence-text: Muuten hauskaa, mutta muut ryhmän jäsenet ovat vähintään kymmenen vuotta nuorempia.
1       Muuten  muuten  ADV     Adv     _       2       advmod  _       _
2       hauskaa hauska  ADJ     A       Case=Par|Degree=Pos|Number=Sing 0       root    _       SpaceAfter=No
3       ,       ,       PUNCT   Punct   _       2       punct   _       _
4       mutta   mutta   CONJ    C       _       2       cc      _       _
5       muut    muu     PRON    Pron    Case=Nom|Number=Plur|PronType=Ind       7       det     _       _
6       ryhmän  ryhmä   NOUN    N       Case=Gen|Number=Sing    7       nmod:poss       _       _
7       jäsenet jäsen   NOUN    N       Case=Nom|Number=Plur    12      nsubj:cop       _       _
8       ovat    olla    VERB    V       Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 12      cop
     _       _
9       vähintään       vähintään       ADV     Adv     _       10      advmod  _       _
10      kymmenen        kymmenen        NUM     Num     Case=Nom|Number=Sing|NumType=Card       11      nummod  _
       _
11      vuotta  vuosi   NOUN    N       Case=Par|Number=Sing    12      nmod    _       _
12      nuorempia       nuori   ADJ     A       Case=Par|Degree=Cmp|Number=Plur 2       conj    _       SpaceAfter=No
13      .       .       PUNCT   Punct   _       2       punct   _       _
~~~

~~~ conllu
# sentence-text: Voitelin pari leipää ja söin aamiaisen vuoteessa takkatulen loisteessa lukien mielenkiintoista kirjaa
 suomalaisten talonpoikaislevottomuuksista 1050-luvulla.
1       Voitelin        voidella        VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Ac
t 0       root    _       _
2       pari    pari    NUM     Num     Case=Nom|Number=Sing|NumType=Card       3       nummod  _       _
3       leipää  leipä   NOUN    N       Case=Par|Number=Sing    1       dobj    _       _
4       ja      ja      CONJ    C       _       1       cc      _       _
5       söin    syödä   VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 1       conj
    _       _
6       aamiaisen       aamiainen       NOUN    N       Case=Gen|Number=Sing    5       dobj    _       _
7       vuoteessa       vuode   NOUN    N       Case=Ine|Number=Sing    5       nmod    _       _
8       takkatulen      takka#tuli      NOUN    N       Case=Gen|Number=Sing    9       nmod:poss       _       _
9       loisteessa      loiste  NOUN    N       Case=Ine|Number=Sing    5       nmod    _       _
10      lukien  lukea   VERB    V       Case=Ins|InfForm=2|Number=Sing|VerbForm=Inf|Voice=Act   5       advcl   _
       _
11      mielenkiintoista        mielenkiintoinen        ADJ     A       Case=Par|Degree=Pos|Number=Sing 12      amod
    _       _
12      kirjaa  kirja   NOUN    N       Case=Par|Number=Sing    10      dobj    _       _
13      suomalaisten    suomalainen     NOUN    N       Case=Gen|Number=Plur    14      nmod:poss       _       _
14      talonpoikaislevottomuuksista    talon#poikainen#levottomuus     NOUN    N       Case=Ela|Number=Plur    12
      nmod    _       _
15      1050-luvulla    1050#luku       NOUN    N       Case=Ade|Number=Sing    14      nmod    _       SpaceAfter=No
16      .       .       PUNCT   Punct   _       1       punct   _       _
~~~

