---
layout: base
title:  'Statistics of xcomp in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `xcomp`

This relation is universal.

10 nodes (1%) are attached to their parents as `xcomp`.

10 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> (9; 90% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Kjo	kjo	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	dispozitë	dispozitë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
3	duhet	duhem	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	0:root	_
4	të	të	PART	_	_	5	mark	5:mark	_
5	zbatohet	zbatoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	3	xcomp	3:xcomp	_
6	në	në	ADP	_	_	7	case	7:case	_
7	mënyrë	mënyrë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	5	obl	5:obl	_
8	të	i	DET	_	Gender=Fem	9	det:adj	9:det:adj	_
9	plotë	plotë	ADJ	_	Gender=Fem|Number=Sing	7	amod	7:amod	_
10	ndaj	ndaj	ADP	_	_	12	case	12:case	_
11	cilitdo	cilido	PRON	_	Gender=Masc|Number=Sing|PronType=Tot	12	det	12:det	_
12	person	person	NOUN	_	Case=Abl|Definite=Ind|Gender=Masc|Number=Sing	5	obl	5:obl	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Dashuria	dashuri	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	5:nsubj|7:nsubj	_
2	mendohet	mendoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	0:root	_
3	zakonisht	zakonisht	ADV	_	_	2	advmod	2:advmod	_
4	e	i	DET	_	Gender=Fem	5	det:adj	5:det:adj	_
5	pamundshme	pamundshëm	ADJ	_	Gender=Fem|Number=Sing	2	ccomp	2:csubj	_
6	të	të	PART	_	_	7	mark	7:mark	_
7	përkufizohet	përkufizoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	5	xcomp	5:xcomp	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


