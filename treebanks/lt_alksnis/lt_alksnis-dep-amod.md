---
layout: base
title:  'Statistics of amod in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `amod`

This relation is universal.

3782 nodes (5%) are attached to their parents as `amod`.

3715 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74616604970915.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (3670; 97% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (43; 1% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (14; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (14; 0% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (12; 0% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="lt_alksnis-pos-X.html">X</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	„	„	PUNCT	skyr.	_	2	punct	2:punct	SpaceAfter=No
2	Žalia	žalias	ADJ	bdv.nelygin.mot.vns.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
3	“	“	PUNCT	skyr.	_	2	punct	2:punct	SpaceAfter=No
4	tendencija	tendencija	NOUN	dkt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 amod	color:blue
1	Tai	tas	DET	įv.bev.	Definite=Ind|Gender=Neut|PronType=Dem	4	nsubj	4:nsubj	_
2	yra	būti	AUX	vksm.asm.tiesiog.es.dgs.3.	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	lėtiniai	lėtinis	ADJ	bdv.nelygin.vyr.dgs.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	4	amod	4:amod	_
4	susirgimai	susirgimas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	skyr.	_	9	punct	9:punct	_
6	kurių	kuris	DET	įv.vyr.dgs.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur|PronType=Int,Rel	8	amod	8:amod	_
7	inkubacinis	inkubacinis	ADJ	bdv.nelygin.vyr.vns.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	_
8	periodas	periodas	NOUN	dkt.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	9:nsubj|10:nsubj:xsubj	_
9	gali	galėti	VERB	vksm.asm.tiesiog.es.vns.3.	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	acl	4:acl	_
10	trukti	trukti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	9	xcomp	9:xcomp	_
11	nuo	nuo	ADP	prl.K.	AdpType=Prep|Case=Gen	13	case	13:case	_
12	kelių	kelis	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	13	nmod	13:nmod:gen	_
13	mėnesių	mėnuo	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	10	obl	10:obl:nuo:gen	_
14	iki	iki	ADP	prl.K.	AdpType=Prep|Case=Gen	15	case	15:case	_
15	5	5	NUM	sktv.arab.	Definite=Ind|NumForm=Digit	10	obl	10:obl:iki:gen	_
16	-	-	PUNCT	skyr.	_	17	punct	17:punct	_
17	15	15	NUM	sktv.arab.	Definite=Ind|NumForm=Digit	15	conj	10:obl:iki:gen|15:conj	_
18	metų	metai	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	15	nmod	15:nmod:gen|17:nmod:gen	SpaceAfter=No
19	.	.	PUNCT	skyr.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	VSAT	VSAT	X	akr.	Abbr=Yes	2	nmod	2:nmod	_
2	pareigūnai	pareigūnas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	7:nsubj	_
3	apžiūrėję	apžiūrėti	VERB	vksm.dlv.veik.būt-k.vyr.dgs.V.	Aspect=Perf|Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	advcl	7:advcl	_
4	vietovę	vietovė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	_
5	nieko	niekas	PRON	įv.K.	Case=Gen|Definite=Ind|PronType=Neg	7	obl:arg	7:obl:arg:gen	_
6	įtartino	įtartinas	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
7	neaptiko	neaptikti	VERB	vksm.asm.neig.tiesiog.būt-k.dgs.3.	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	7	punct	7:punct	_

~~~


