---
layout: base
title:  'Statistics of acl:relcl in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-acl.html">acl</a></tt>.

354 nodes (1%) are attached to their parents as `acl:relcl`.

348 instances of `acl:relcl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.29661016949153.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (278; 79% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (38; 11% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-X.html">X</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	„	„	PUNCT	skyr.	_	2	punct	2:punct	SpaceAfter=No
2	Suprantu	suprasti	VERB	vksm.asm.tiesiog.es.vns.1.	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	tų	tas	DET	įv.mot.dgs.K.	Case=Gen|Definite=Ind|Gender=Fem|Number=Plur|PronType=Dem	4	det	4:det	_
4	įstaigų	įstaiga	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	5	nmod	5:nmod:gen	_
5	vadovus	vadovas	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	2	obj	2:obj|8:nsubj	SpaceAfter=No
6	,	,	PUNCT	skyr.	_	8	punct	8:punct	_
7	kurie	kuris	DET	įv.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|PronType=Int,Rel	8	nsubj	5:ref	_
8	dėkoja	dėkoti	VERB	vksm.asm.tiesiog.es.dgs.3.	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	acl:relcl	5:acl:relcl	_
9	iš	iš	ADV	sampl.prv.nelygin.	Degree=Pos|Hyph=Yes	8	advmod	8:advmod	_
10	anksto	anksto	X	tęs.	Hyph=Yes	9	nmod	9:nmod	SpaceAfter=No
11	.	.	PUNCT	skyr.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	O	o	CCONJ	jng.	_	8	cc	8:cc	_
2	tie	tas	DET	įv.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|PronType=Dem	8	nsubj	5:nsubj|8:nsubj	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	5	punct	5:punct	_
4	kurie	kuris	DET	įv.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|PronType=Int,Rel	5	nsubj	2:ref	_
5	liko	likti	VERB	vksm.asm.tiesiog.būt-k.dgs.3.	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	2	acl:relcl	2:acl:relcl	SpaceAfter=No
6	,	,	PUNCT	skyr.	_	5	punct	5:punct	_
7	apstulbinti	apstulbinti	VERB	vksm.dlv.neveik.būt.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	8	advcl	8:advcl	_
8	žvelgė	žvelgti	VERB	vksm.asm.tiesiog.būt-k.dgs.3.	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	0:root	_
9	į	į	ADP	prl.G.	AdpType=Prep|Case=Acc	12	case	12:case	_
10	mano	aš	PRON	įv.vns.K.	Case=Gen|Definite=Ind|Number=Sing|Person=1|PronType=Prs	12	nmod	12:nmod:gen	_
11	pusplikę	pusplikis	ADJ	bdv.nelygin.mot.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	12:amod	_
12	galvą	galva	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	8	obl:arg	8:obl:arg:į:acc	SpaceAfter=No
13	.	.	PUNCT	skyr.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 acl:relcl	color:blue
1	Pvz	pvz.	X	sutr.	Abbr=Yes	8	parataxis	8:parataxis	SpaceAfter=No
2	.	.	PUNCT	skyr.	_	1	punct	1:punct	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	1	punct	1:punct	_
4	vietoj	vietoj	ADP	prl.K.	AdpType=Prep|Case=Gen	7	case	7:case	_
5	brangaus	brangus	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
6	alyvuogių	alyvuogė	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	7	nmod	7:nmod:gen	_
7	aliejaus	aliejus	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	8	obl:arg	8:obl:arg:vietoj:gen	_
8	pirkti	pirkti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	0	root	0:root	_
9	saulėgrąžų	saulėgrąža	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	8	dep	8:dep|14:nsubj	SpaceAfter=No
10	,	,	PUNCT	skyr.	_	14	punct	14:punct	_
11	kuris	kuris	DET	įv.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Int,Rel	14	nsubj	9:ref	_
12	yra	būti	AUX	vksm.asm.tiesiog.es.vns.3.	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	cop	14:cop	_
13	ne	ne	PART	dll.	_	14	advmod:emph	14:advmod:emph	_
14	prastesnis	prastas	ADJ	bdv.aukšt.vyr.vns.V.	Case=Nom|Definite=Ind|Degree=Cmp|Gender=Masc|Number=Sing	9	acl:relcl	9:acl:relcl	SpaceAfter=No
15	.	.	PUNCT	skyr.	_	8	punct	8:punct	_

~~~


