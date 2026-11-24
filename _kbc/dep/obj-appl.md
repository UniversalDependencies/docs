---
layout: relation
title: 'obj:appl'
shortdef: 'applied direct object'
udver: '2'
---

Kadiwéu uses  applicative suffixes to license indirect internal verb arguments (Sandalo and Galves 2023:5). When the applicative verb has no other object, this dependent is `obj:appl`. With *pegi* ‘be near’, for example, the applicative suffix licenses the nominal denoting the location. The verb is tagged `VBAPL` in the source annotation and `Voice=Appl` in UD.

~~~ sdparse
iGeladi aGipegitegi weiigi . \n 1SG.GEN:house NEG:3.ERG:be.near:APPL:3.M river .
obj:appl(ipegitegi, weiigi)
obj:appl(be.near, river)
~~~

The example is from the DONE sentence `ped-gramm-37` in *Corpus Kadiwéu – Gramática Pedagógica* (Sandalo et al. 2024). The CoNLL-U analysis treats `weiigi` ‘river’ as the applied object of `ipegitegi` (*pegi* ‘be near’), which bears `Voice=Appl` and indexes the object with `Person[obj]=3` and `Gender[obj]=Masc`.
