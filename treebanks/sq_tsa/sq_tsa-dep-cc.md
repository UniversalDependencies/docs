---
layout: base
title:  'Statistics of cc in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `cc`

This relation is universal.

36 nodes (4%) are attached to their parents as `cc`.

36 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (21; 58% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (8; 22% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (4; 11% instances), <tt><a href="sq_tsa-pos-ADV.html">ADV</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Buka	bukë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	nsubj	_	_
2	dhe	dhe	CCONJ	_	_	3	cc	_	_
3	bulmeti	bulmet	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	conj	_	_
4	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	6	cop	_	_
5	të	i	DET	_	Gender=Fem	6	det:adj	_	_
6	rëndësishme	rëndësishëm	ADJ	_	Gender=Fem|Number=Plur	0	root	_	_
7	në	në	ADP	_	_	8	case	_	_
8	kuzhinën	kuzhinë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	6	obl	_	_
9	kosovare	kosovar	ADJ	_	Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Shpesh	shpesh	ADV	_	_	5	advmod	_	_
2	këto	kjo	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	3	det	_	_
3	rryma	rrym	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	5	nsubj	_	_
4	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	5	aux	_	_
5	krijuar	krijoj	VERB	_	VerbForm=Part	0	root	_	_
6	dhe	dhe	CCONJ	_	_	7	cc	_	_
7	bartur	bart	VERB	_	VerbForm=Part	5	conj	_	_
8	nga	na	ADP	_	_	9	case	_	_
9	misionarët	misionar	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 cc	color:blue
1	Kjo	kjo	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	nsubj	_	_
2	u	ata	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	3	expl	_	_
3	lejon	lejoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	atyre	ata	PRON	_	Case=Dat|Gender=Masc|Number=Plur|PronType=Emp	3	iobj	_	_
5	të	të	PART	_	_	6	mark	_	_
6	ndërtojnë	ndërtoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	3	ccomp	_	_
7	fshatra	fshat	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|NounType=Het|Number=Plur	6	obj	_	_
8	moderne	modern	ADJ	_	Gender=Fem|Number=Plur	7	amod	_	_
9	dhe	dhe	CCONJ	_	_	11	cc	_	_
10	të	i	DET	_	Gender=Fem	11	det:adj	_	_
11	përhershme	përhershëm	ADJ	_	Gender=Fem|Number=Plur	8	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


