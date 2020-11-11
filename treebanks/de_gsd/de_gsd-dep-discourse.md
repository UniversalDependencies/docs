---
layout: base
title:  'Statistics of discourse in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `discourse`

This relation is universal.

5 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-INTJ.html">INTJ</a></tt> (2; 40% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-SYM.html">SYM</a></tt> (1; 20% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-PART.html">PART</a></tt> (1; 20% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 discourse	color:blue
1	Ok	Ok	INTJ	ITJ	_	10	discourse	_	SpaceAfter=No
2	,	,	PUNCT	$,	_	1	punct	_	_
3	da	da	ADV	ADV	_	10	advmod	_	_
4	hätte	haben	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
5	uns	wir	PRON	PPER	Case=Dat|Number=Plur|Person=1|PronType=Prs	10	iobj	_	_
6	eigentlich	eigentlich	ADV	ADV	_	7	advmod	_	_
7	schon	schon	ADV	ADV	_	10	advmod	_	_
8	was	was	PRON	PIS	Definite=Ind|PronType=Ind	10	nsubj	_	_
9	komisch	komisch	ADJ	ADJD	_	10	xcomp	_	_
10	vorkommen	vorkommen	VERB	VVINF	VerbForm=Inf	0	root	_	_
11	müssen	müssen	AUX	VMINF	VerbForm=Inf	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 discourse	color:blue
1	Besonders	besonders	ADV	ADV	_	2	advmod	_	_
2	lecker	lecker	ADJ	ADJD	_	0	root	_	_
3	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Tzatziki	Tzatziki	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
6	;	;	PUNCT	$.	_	7	punct	_	_
7	o	o	SYM	NE	Case=Nom|Gender=Masc|Number=Sing	2	discourse	_	SpaceAfter=No
8	)	)	PUNCT	$(	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 discourse	color:blue
1	Leider	leider	ADV	ADV	_	21	advmod	_	SpaceAfter=No
2	,	,	PUNCT	$,	_	5	punct	_	_
3	ja	ja	PART	ADV	_	5	discourse	_	_
4	wirklich	wirklich	ADV	ADV	_	5	advmod	_	_
5	leider	leider	ADV	ADV	_	1	conj	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	5	punct	_	_
7	sind	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	21	aux	_	_
8	meine	mein	DET	PPOSAT	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	9	det:poss	_	_
9	Frau	Frau	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	21	nsubj:pass	_	_
10	und	und	CCONJ	KON	_	11	cc	_	_
11	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	conj	_	SpaceAfter=No
12	,	,	PUNCT	$,	_	18	punct	_	_
13	die	der	PRON	PRELS	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	18	nsubj	_	_
14	wir	wir	PRON	PPER	Case=Nom|Number=Plur|Person=1|PronType=Prs	18	expl	_	_
15	um	um	ADP	APPR	_	17	case	_	_
16	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	Ecke	Ecke	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	18	obl	_	_
18	wohnen	wohnen	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	SpaceAfter=No
19	,	,	PUNCT	$,	_	9	punct	_	_
20	bereits	bereits	ADV	ADV	_	21	advmod	_	_
21	endtäuscht	endtäuscht	VERB	VVPP	VerbForm=Part	0	root	_	_
22	worden	werden	AUX	VAPP	VerbForm=Part|Voice=Pass	21	aux:pass	_	SpaceAfter=No
23	.	.	PUNCT	$.	_	21	punct	_	_

~~~


