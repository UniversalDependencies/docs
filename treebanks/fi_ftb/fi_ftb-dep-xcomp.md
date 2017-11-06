---
layout: base
title:  'Statistics of xcomp in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="fi_ftb-dep-xcomp-ds.html">xcomp:ds</a></tt>.

1268 nodes (1%) are attached to their parents as `xcomp`.

1253 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44085173501577.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (1241; 98% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (12; 1% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
1	Lupaan	luvata	VERB	V,Act,Ind,Pres,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	olla	olla	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	1	ccomp	_	_
3	seuraavat	seuraava	ADJ	A,Pl,Nom	Case=Nom|Number=Plur	4	amod	_	_
4	25	25	NUM	Num,Card	NumType=Card	5	nummod	_	_
5	vuotta	vuosi	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	nmod	_	_
6	varovaisempi	varovainen	ADJ	A,Cmp,Sg,Nom	Case=Nom|Degree=Cmp|Number=Sing	1	xcomp	_	Alt=1_xcomp
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Mika	mika	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	luulee	luulla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	olevansa	olla	VERB	V,Act,PcpVa,Sg,Gen,Px3	Case=Gen|Number=Sing|PartForm=Pres|Person[psor]=3|VerbForm=Part|Voice=Act	2	ccomp	_	_
4	uhri	uhri	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	xcomp	_	Alt=2_xcomp
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


