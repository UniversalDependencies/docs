---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

Note that in version 2.7, expletives are not annotated consistently in the French treebanks.

The table below describes the usage of `expl` and its sub relations across French treebanks:

|                      |        UD_French-GSD |    UD_French-Sequoia |        UD_French-FQB |        UD_French-PUD |     UD_French-ParTUT |        UD_French-FTB |     UD_French-Spoken |
|----------------------|:--------------------:|:--------------------:|:--------------------:|:--------------------:|:--------------------:|:--------------------:|:--------------------:|
|                 expl |      **===========** |      **===========** |      **===========** |      **===========** | [212](http://match.grew.fr/?corpus=UD_French-ParTUT@2.7&relation=expl) [0.74%] | [4112](http://match.grew.fr/?corpus=UD_French-FTB@2.7&relation=expl) [0.72%] |      **===========** |
|            expl:comp |      **===========** | [286](http://match.grew.fr/?corpus=UD_French-Sequoia@2.7&relation=expl:comp) [0.41%] | [176](http://match.grew.fr/?corpus=UD_French-FQB@2.7&relation=expl:comp) [0.73%] | [28](http://match.grew.fr/?corpus=UD_French-PUD@2.7&relation=expl:comp) [0.11%] |      **===========** |      **===========** |      **===========** |
|            expl:pass | [760](http://match.grew.fr/?corpus=UD_French-GSD@2.7&relation=expl:pass) [0.19%] | [57](http://match.grew.fr/?corpus=UD_French-Sequoia@2.7&relation=expl:pass) [0.08%] |      **===========** |      **===========** |      **===========** |      **===========** |      **===========** |
|            expl:subj | [898](http://match.grew.fr/?corpus=UD_French-GSD@2.7&relation=expl:subj) [0.22%] | [241](http://match.grew.fr/?corpus=UD_French-Sequoia@2.7&relation=expl:subj) [0.34%] | [331](http://match.grew.fr/?corpus=UD_French-FQB@2.7&relation=expl:subj) [1.37%] | [83](http://match.grew.fr/?corpus=UD_French-PUD@2.7&relation=expl:subj) [0.34%] |      **===========** |      **===========** | [366](http://match.grew.fr/?corpus=UD_French-Spoken@2.7&relation=expl:subj) [1.04%] |

Only **UD_French-ParTUT** and **UD_French-FTB** use the `expl` relations without subtype.

~~~ sdparse
Je me permets de soulever un dernier point \n I would like to raise one last point
expl(permets,me)
~~~

Other treebanks use the subtypes: [expl:comp](), [expl:pass]() and [expl:subj]().

<!-- Interlanguage links updated St lis 3 20:58:52 CET 2021 -->
