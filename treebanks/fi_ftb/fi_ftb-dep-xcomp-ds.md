---
layout: base
title:  'Statistics of xcomp:ds in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `xcomp:ds`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-xcomp.html">xcomp</a></tt>.

369 nodes (0%) are attached to their parents as `xcomp:ds`.

367 instances of `xcomp:ds` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68563685636856.

The following 5 pairs of parts of speech are connected with `xcomp:ds`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (165; 45% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (117; 32% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (84; 23% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp:ds	color:blue
1	Pahoinvointi	pahoinvointi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	humahti	humahtaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ylitse	ylitse	ADV	Adv	_	2	advmod	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	_
5	laittoi	laittaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
6	nieleskelemään	nieleskellä	VERB	V,Act,InfMa,Ill	Case=Ill|InfForm=3|VerbForm=Inf|Voice=Act	5	xcomp:ds	_	Alt=xcomp:ds
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp:ds	color:blue
1	pankkitoiminnassa	pankkitoiminta	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	3	nmod	_	Alt=3_nmod
2	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	Alt=3_cop
3	tärkeätä	tärkeä	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	Alt=0_root|FTB-Rel=modal
4	tavata	tavata	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	3	xcomp:ds	_	Alt=3_xcomp:ds
5	kasvotusten	kasvotusten	ADV	Adv	_	4	advmod	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp:ds	color:blue
1	Olisi	olla	AUX	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	cop	_	Alt=2_cop
2	aika	aika	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	Alt=0_root|FTB-Rel=modal
3	keittää	keittää	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	2	xcomp:ds	_	Alt=2_xcomp:ds
4	kahvit	kahvi	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	3	obj	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


