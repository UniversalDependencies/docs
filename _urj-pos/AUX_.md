---
layout: postag
title: 'AUX'
shortdef: 'auxiliary verb'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "urj/pos/AUX.html"
---

### Description

Auxiliary verb is a verb carrying some of the verb phrase's features or
categories. It has not been very systematically dealt with in traditional
Uralic grammars. Most languages have selected a closed sub-set of verbs. For
example verbs that have infinitive complements, verbs for syntactic tense
constructions, verbs used in possessive structures, etc.

Negation verbs are not currently marked as `AUX`, even when they carry the main
verb's inflectional features (only in Finnish of current tree-banks).

#### Examples

* [fi] _<b>on</b> tullut_ "<b>has</b> come", _<b>olisi</b> vienyt_ 
  "<b>would’ve</b> taken"
* [fi] _<b>pitää</b> olla_ "<b>must</b> be"

~~~ conllu
# sentence-text: Käsikirjoittaja Suvi Kanniainen oli mielestäni onnistunut paitsi ohjauksessaan, myös käsikirjoitukses
sa.
1       Käsikirjoittaja käsikirjoittaa  NOUN    N       Case=Nom|Derivation=Ja|Number=Sing      2       compound:nn
     _       _
2       Suvi    Suvi    PROPN   N       Case=Nom|Number=Sing    6       nsubj   _       _
3       Kanniainen      Kanniainen      PROPN   N       Case=Nom|Number=Sing    2       name    _       _
4       oli     olla    AUX     V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 6       aux
     _       _
5       mielestäni      mieli   NOUN    N       Case=Ela|Number=Sing|Number[psor]=Sing|Person[psor]=1   6       nmod
    _       _
6       onnistunut      onnistua        VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act   0       root    _       _
7       paitsi  paitsi  ADV     Adv     _       8       cc:preconj      _       _
8       ohjauksessaan   ohjaus  NOUN    N       Case=Ine|Number=Sing|Person[psor]=3     6       nmod    _       SpaceAfter=No
9       ,       ,       PUNCT   Punct   _       8       punct   _       _
10      myös    myös    ADV     Adv     _       8       cc      _       _
11      käsikirjoituksessa      käsi#kirjoitus  NOUN    N       Case=Ine|Number=Sing    8       conj    6:nmod  SpaceAfter=No
12      .       .       PUNCT   Punct   _       6       punct   _       _
~~~


~~~ conllu
# sentence-text: Grande finalen pitää olla grande, eikä pienestä lurituksesta tule muuta kuin kiukkuiseksi.
1       Grande  Grande  X       Foreign Foreign=Foreign 5       nsubj:cop       _       _
2       finalen finale  X       Foreign Foreign=Foreign 1       foreign _       _
3       pitää   pitää   AUX     V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 5       aux
     _       _
4       olla    olla    VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    5       cop     _       _
5       grande  grande  X       Foreign Foreign=Foreign 0       root    _       SpaceAfter=No
6       ,       ,       PUNCT   Punct   _       5       punct   _       _
7       eikä    ei      VERB    V       Clitic=Ka|Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act      5
       cc      _       _
8       pienestä        pieni   ADJ     A       Case=Ela|Degree=Pos|Number=Sing 9       amod    _       _
9       lurituksesta    luritus NOUN    N       Case=Ela|Number=Sing    10      nmod    _       _
10      tule    tulla   VERB    V       Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin        5       conj    _
       _
11      muuta   muu     PRON    Pron    Case=Par|Number=Sing|PronType=Ind       10      xcomp   _       _
12      kuin    kuin    SCONJ   C       _       13      mark    _       _
13      kiukkuiseksi    kiukkuinen      ADJ     A       Case=Tra|Degree=Pos|Number=Sing 11      advcl   _       SpaceAfter=No
14      .       .       PUNCT   Punct   _       5       punct   _       _
~̃~~
