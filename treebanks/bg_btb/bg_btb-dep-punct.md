---
layout: base
title:  'Statistics of punct in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `punct`

This relation is universal.

22058 nodes (14%) are attached to their parents as `punct`.

13499 instances of `punct` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.79136821107988.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (13072; 59% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (3542; 16% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (2356; 11% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (1266; 6% instances), <tt><a href="bg_btb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (578; 3% instances), <tt><a href="bg_btb-pos-ADV.html">ADV</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (503; 2% instances), <tt><a href="bg_btb-pos-AUX.html">AUX</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (278; 1% instances), <tt><a href="bg_btb-pos-PART.html">PART</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (146; 1% instances), <tt><a href="bg_btb-pos-PRON.html">PRON</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (108; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (101; 0% instances), <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (67; 0% instances), <tt><a href="bg_btb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (33; 0% instances), <tt><a href="bg_btb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="bg_btb-pos-X.html">X</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="bg_btb-pos-ADP.html">ADP</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Щом	щом	SCONJ	Cs	_	3	mark	3:mark	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	3:expl	_
3	наям	наям-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	5:advcl:щом	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	3:punct	_
5	ставам	ставам	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	punct	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Страх	страх	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	0:root	_
2	ли	ли	PART	Ti	_	1	discourse	1:discourse	_
3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	obj	1:obj	_
4	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	SpaceAfter=No
5	?	?	PUNCT	punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 punct	color:blue
1	Отговор	отговор	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	0:root	_
2	на	на	ADP	R	_	3	case	3:case	_
3	Габриел	габриел	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	1:nmod:на	_
4	Марсел	марсел	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	3	nmod	3:nmod	SpaceAfter=No
5	,	,	PUNCT	punct	_	7	punct	7:punct	_
6	"	"	PUNCT	punct	_	7	punct	7:punct	SpaceAfter=No
7	Комба	комба	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	1	nmod	1:nmod	SpaceAfter=No
8	"	"	PUNCT	punct	_	7	punct	7:punct	SpaceAfter=No
9	,	,	PUNCT	punct	_	10	punct	10:punct	_
10	декември	декември	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	7:nmod	_
11	1948	1948	ADJ	Mofsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	12	amod	12:amod	_
12	г.	година	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	10	nmod	10:nmod	_

~~~


