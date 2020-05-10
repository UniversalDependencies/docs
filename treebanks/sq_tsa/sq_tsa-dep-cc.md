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

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (22; 61% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (7; 19% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (4; 11% instances), <tt><a href="sq_tsa-pos-ADV.html">ADV</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_tsa-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Buka	bukë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
2	dhe	dhe	CCONJ	_	_	3	cc	3:cc	_
3	bulmeti	bulmet	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	conj	1:conj	_
4	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	6	cop	6:cop	_
5	të	i	DET	_	Gender=Fem	6	det:adj	6:det:adj	_
6	rëndësishme	rëndësishëm	ADJ	_	Gender=Fem|Number=Plur	0	root	0:root	_
7	në	në	ADP	_	_	8	case	8:case	_
8	kuzhinën	kuzhinë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	6	obl	6:obl	_
9	kosovare	kosovar	ADJ	_	Gender=Fem|Number=Sing	8	amod	8:amod	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Shpesh	shpesh	ADV	_	_	5	advmod	5:advmod	_
2	këto	kjo	PRON	_	Gender=Fem|Number=Plur|PronType=Dem	3	det	3:det	_
3	rryma	rrym	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	_
4	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	5	aux	5:aux	_
5	krijuar	krijoj	VERB	_	VerbForm=Part	0	root	0:root	_
6	dhe	dhe	CCONJ	_	_	7	cc	7:cc	_
7	bartur	bart	VERB	_	VerbForm=Part	5	conj	5:conj	_
8	nga	na	ADP	_	_	9	case	9:case	_
9	misionarët	misionar	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	5	obl	5:obl	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 cc	color:blue
1	Kjo	kjo	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
2	u	ata	PRON	_	Number=Plur|Person=3|PronType=Prs	3	expl	3:expl	_
3	lejon	lejoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	0:root	_
4	atyre	ata	PRON	_	Gender=Masc|Number=Plur|PronType=Emp	3	iobj	3:iobj	_
5	të	të	PART	_	_	6	mark	6:mark	_
6	ndërtojnë	ndërtoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	3	ccomp	3:ccomp	_
7	fshatra	fshat	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|NounType=Het|Number=Plur	6	obj	6:obj	_
8	moderne	modern	ADJ	_	Gender=Fem|Number=Plur	7	amod	7:amod	_
9	dhe	dhe	CCONJ	_	_	11	cc	11:cc	_
10	të	i	DET	_	Gender=Fem	11	det:adj	11:det:adj	_
11	përhershme	përhershëm	ADJ	_	Gender=Fem|Number=Plur	8	conj	8:conj	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


