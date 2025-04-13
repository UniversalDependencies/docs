---
layout: base
title:  'Statistics of advcl in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `advcl`

This relation is universal.

80 nodes (2%) are attached to their parents as `advcl`.

55 instances of `advcl` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.125.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (63; 79% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advcl	color:blue
1	Profeti	profet	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	end_char=1484|start_char=1477
2	përgjigjet	përgjigjem	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Mid	0	root	_	end_char=1495|start_char=1485
3	pa	pa	SCONJ	_	_	4	mark	_	end_char=1498|start_char=1496
4	shikuar	shikoj	VERB	_	VerbForm=Part	2	advcl	_	end_char=1506|start_char=1499
5	kënd	kënd	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
6	:	:	PUNCT	_	_	2	punct	_	end_char=1512|start_char=1511

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 19 advcl	color:blue
1	Dëgjojmë	dëgjoj	VERB	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	_	0	root	_	_
2	ofshamën	ofshamë	NOUN	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	_	1	obj	_	_
3	e	e	PART	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	_	4	case	_	_
4	babait	baba	NOUN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	_	2	nmod:poss	_	_
5	,	,	PUNCT	_	_	8	punct	_	_
6	një	një	DET	Definite=Ind	_	8	det	_	_
7	aso	aso	PRON	PronType=Ind	_	8	det	_	_
8	ofshame	ofshamë	NOUN	Case=Abl|Definite=Ind|Gender=Fem|Number=Sing	_	2	appos	_	_
9	që	që	PRON	PronType=Rel	_	11	obj	_	_
10	ishim	jam	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Past|Voice=Act	_	11	aux	_	_
11	mësuar	mësoj	VERB	VerbForm=Part	_	8	acl:relcl	_	_
12	të	të	PART	_	_	13	mark	_	_
13	dëgjonim	dëgjoj	VERB	Mood=Ind|Number=Plur|Person=1|Tense=Past|Voice=Act	_	11	advcl	_	_
14	vetëm	vetëm	ADV	AdvType=Man	_	13	advmod	_	_
15	kur	kur	SCONJ	_	_	19	mark	_	_
16	nuk	nuk	PART	_	_	19	advmod	_	_
17	ishte	jam	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	19	cop	_	_
18	në	në	ADP	_	_	19	case	_	_
19	gjendje	gjendje	NOUN	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	_	13	advcl	_	_
20	të	të	PART	_	_	23	mark	_	_
21	u	u	AUX	_	_	23	aux	_	_
22	e	e	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	_	23	obj	_	_
23	gjente	gjej	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	19	xcomp	_	_
24	as	as	CCONJ	_	_	25	cc	_	_
25	fillin	fill	NOUN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	_	23	obj	_	_
26	,	,	PUNCT	_	_	25	punct	_	_
27	as	as	CCONJ	_	_	28	cc	_	_
28	fundin	fund	NOUN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	_	25	conj	_	_
29	punëve	punë	NOUN	Case=Abl|Definite=Def|Gender=Fem|Number=Plur	_	28	nmod	_	_
30	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advcl	color:blue
1	Në	në	ADP	_	_	3	case	_	_
2	këtë	ky	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	pikë	pikë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	5	obl	_	_
4	e	e	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
5	shoh	shoj	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	_
6	të	ë	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	7	det:adj	_	_
7	nevojshme	nevojshëm	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	xcomp	_	_
8	të	të	PART	_	_	9	mark	_	_
9	hap	hap	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	7	advcl	_	_
10	parantezën	parantezë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	9	obj	_	_
11	e	e	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	12	det:adj	_	_
12	parë	parë	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No
13	.	_	PUNCT	_	_	5	punct	_	_

~~~


