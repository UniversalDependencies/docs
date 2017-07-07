---
layout: postag
title: 'CONJ'
shortdef: 'coordinating conjunction'
---

### Definition

A coordinating conjunction is a word that links words or larger constituents
without syntactically subordinating one to the other and expresses a semantic
relationship between them.

Some coordinating conjunctions appear in pairs or groups of more than one:
[fi] _sekä_ ... _että_ "both ... and".

#### Co-ordination and enclitic particles

Many Uralic languages have enclitic particles that are used in co-ordination
in addition to or instead of specific words. It is not clear what is the best
way to analyse this in Uralic Dependencies.

#### Examples

* [fi] _ja_ "and", _tai_ "or", _vai_ "or", _sekä_ "and", _mutta_ "but"
* [fi] _eikä_ "and not", _enkä_ "and I do not"

~̃~~ conllu
# sentence-text: Jäällä kävely avaa aina hauskoja ja erikoisia näkökulmia kaupunkiin.
1       Jäällä  jää     NOUN    N       Case=Ade|Number=Sing    2       nmod    _       _
2       kävely  kävely  NOUN    N       Case=Nom|Number=Sing    3       nsubj   _       _
3       avaa    avata   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
4       aina    aina    ADV     Adv     _       3       advmod  _       _
5       hauskoja        hauska  ADJ     A       Case=Par|Degree=Pos|Number=Plur 8       amod    _       _
6       ja      ja      CONJ    C       _       5       cc      _       _
7       erikoisia       erikoinen       ADJ     A       Case=Par|Degree=Pos|Number=Plur 5       conj    8:amod  _
8       näkökulmia      näkö#kulma      NOUN    N       Case=Par|Number=Plur    3       dobj    _       _
9       kaupunkiin      kaupunki        NOUN    N       Case=Ill|Number=Sing    8       nmod    _       SpaceAfter=No
10      .       .       PUNCT   Punct   _       3       punct   _       _
~~~
