---
layout: base
title:  'Statistics of xcomp in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="fi_ftb-dep-xcomp-ds.html">xcomp:ds</a></tt>.

1505 nodes (1%) are attached to their parents as `xcomp`.

1471 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5514950166113.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (1246; 83% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (147; 10% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (89; 6% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	2	nsubj	_	_
2	meni	mennä	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	uimaa	uida	VERB	V,Act,InfMa,Ill	Case=Ill|InfForm=3|Style=Coll|VerbForm=Inf|Voice=Act	2	xcomp	_	Alt=xcomp

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Lapseni	lapsi	NOUN	N,Sg,Gen,PxSg1	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nmod	_	_
2	paras	paras	ADJ	A,Sup,Sg,Nom	Case=Nom|Degree=Sup|Number=Sing	3	amod	_	_
3	ystävä	ystävä	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
4	täytti	täyttää	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	kolme	kolme	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	vuotta	vuosi	NOUN	N,Sg,Par	Case=Par|Number=Sing	4	xcomp	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	3	nsubj	_	_
2	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	tullunna	tulla	VERB	V,Act,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|Style=Coll|VerbForm=Part|Voice=Act	0	root	_	_
4	harmmoopäeseks	harmaapäinen	ADJ	A,Sg,Tra	Case=Tra|Number=Sing|Style=Coll	3	xcomp	_	_

~~~


