---
layout: base
title:  'Statistics of ccomp in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `ccomp`

This relation is universal.

426 nodes (1%) are attached to their parents as `ccomp`.

409 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.68075117370892.

The following 17 pairs of parts of speech are connected with `ccomp`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (337; 79% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (20; 5% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (18; 4% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (17; 4% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-INTJ.html">INTJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Prezidentūra	prezidentūra	NOUN	dkt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	aiškina	aiškinti	VERB	vksm.asm.tiesiog.es.vns.3.	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	8	punct	8:punct	_
4	kad	kad	SCONJ	jng.	_	8	mark	8:mark	_
5	V	V.	X	sutr.	Abbr=Yes	7	nmod	7:nmod	SpaceAfter=No
6	.	.	PUNCT	skyr.	_	5	punct	5:punct	_
7	Adamkus	Adamkus	PROPN	dkt.tikr.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	8:nsubj	_
8	siūlė	siūlyti	VERB	vksm.asm.tiesiog.būt-k.vns.3.	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	2	ccomp	2:ccomp	_
9	ne	ne	PART	dll.	_	10	advmod:emph	10:advmod:emph	_
10	tai	tas	DET	įv.bev.	Definite=Ind|Gender=Neut|PronType=Dem	8	obj	8:obj	SpaceAfter=No
11	.	.	PUNCT	skyr.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 17 ccomp	color:blue
1	O	o	CCONJ	jng.	_	3	cc	3:cc	_
2	krikščionys	krikščionis	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	3:nsubj|5:nsubj	_
3	nepaklausė	nepaklausyti	VERB	vksm.asm.neig.tiesiog.būt-k.dgs.3.	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	ir	ir	CCONJ	jng.	_	5	cc	5:cc	_
5	prisidarė	prisidaryti	VERB	vksm.asm.sngr.tiesiog.būt-k.dgs.3.	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Fin	3	conj	0:root|3:conj	_
6	daiktų	daiktas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	5	obl:arg	5:obl:arg:gen	_
7	tiek	tiek	ADV	prv.nelygin.	Degree=Pos	6	advmod	6:advmod	SpaceAfter=No
8	,	,	PUNCT	skyr.	_	11	punct	11:punct	_
9	kad	kad	SCONJ	jng.	_	11	mark	11:mark	_
10	dabar	dabar	ADV	prv.nelygin.	Degree=Pos	11	advmod	11:advmod	_
11	nebežino	nebežinoti	VERB	vksm.asm.neig.tiesiog.es.dgs.3.	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	advcl	7:advcl:kad	SpaceAfter=No
12	,	,	PUNCT	skyr.	_	17	punct	17:punct	_
13	kuris	kuris	DET	įv.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Int,Rel	17	nsubj	17:nsubj	_
14	iš	iš	ADP	prl.K.	AdpType=Prep|Case=Gen	15	case	15:case	_
15	jų	jis	PRON	įv.vyr.dgs.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	obl:arg	17:obl:arg:iš:gen	_
16	buvo	būti	AUX	vksm.asm.tiesiog.būt-k.vns.3.	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	17	cop	17:cop	_
17	svarbiausias	svarbus	ADJ	bdv.aukšč.vyr.vns.V.	Case=Nom|Definite=Ind|Degree=Sup|Gender=Masc|Number=Sing	11	ccomp	11:ccomp	SpaceAfter=No
18	.	.	PUNCT	skyr.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Nesijauskite	nesijausti	VERB	vksm.asm.neig.sngr.liep.dgs.2.	Mood=Imp|Number=Plur|Person=2|Polarity=Neg|Reflex=Yes|VerbForm=Fin	0	root	0:root	_
2	blogai	blogai	ADV	prv.nelygin.	Degree=Pos	1	advmod	1:advmod	_
3	dėl	dėl	ADP	prl.K.	AdpType=Prep|Case=Gen	4	case	4:case	_
4	to	tas	DET	įv.vyr.vns.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	1	obl:arg	1:obl:arg:dėl:gen	SpaceAfter=No
5	,	,	PUNCT	skyr.	_	7	punct	7:punct	_
6	kad	kad	SCONJ	jng.	_	7	mark	7:mark	_
7	neturite	neturėti	VERB	vksm.asm.neig.tiesiog.es.dgs.2.	Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	ccomp	4:ccomp	_
8	už	už	ADP	prl.G.	AdpType=Prep|Case=Acc	9	case	9:case	_
9	ką	kas	PRON	įv.G.	Case=Acc|Definite=Ind|PronType=Int,Rel	10	obl:arg	10:obl:arg:už:acc	_
10	nupirkti	nupirkti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	7	xcomp	7:xcomp	_
11	vaikų	vaikas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	12	obl:arg	12:obl:arg:gen	_
12	trokštamų	trokšti	VERB	vksm.dlv.neveik.es.mot.dgs.K.	Case=Gen|Definite=Ind|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	13	acl	13:acl	_
13	dovanų	dovana	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	10	obl:arg	10:obl:arg:gen	SpaceAfter=No
14	.	.	PUNCT	skyr.	_	1	punct	1:punct	_

~~~


