---
layout: base
title:  'Statistics of punct in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `punct`

This relation is universal.

21883 nodes (14%) are attached to their parents as `punct`.

13490 instances of `punct` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.83069049033496.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (13174; 60% instances), <tt><a href="bg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (3542; 16% instances), <tt><a href="bg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (2356; 11% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (1265; 6% instances), <tt><a href="bg-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (579; 3% instances), <tt><a href="bg-pos-ADV.html">ADV</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (504; 2% instances), <tt><a href="bg-pos-PRON.html">PRON</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (108; 0% instances), <tt><a href="bg-pos-DET.html">DET</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (101; 0% instances), <tt><a href="bg-pos-INTJ.html">INTJ</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (98; 0% instances), <tt><a href="bg-pos-PART.html">PART</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (81; 0% instances), <tt><a href="bg-pos-NUM.html">NUM</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (67; 0% instances), <tt><a href="bg-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="bg-pos-X.html">X</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="bg-pos-ADP.html">ADP</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Щом	щом	SCONJ	Cs	_	3	mark	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	_
3	наям	наям-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	_	_
5	ставам	ставам	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Страх	страх	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
2	ли	ли	PART	Ti	_	1	discourse	_	_
3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	obj	_	_
4	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	SpaceAfter=No
5	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 punct	color:blue
1	Отговор	отговор	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
2	на	на	ADP	R	_	3	case	_	_
3	Габриел	габриел	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	_
4	Марсел	марсел	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	7	punct	_	_
6	"	"	PUNCT	punct	_	7	punct	_	SpaceAfter=No
7	Комба	комба	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
8	"	"	PUNCT	punct	_	7	punct	_	SpaceAfter=No
9	,	,	PUNCT	punct	_	10	punct	_	_
10	декември	декември	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	_
11	1948	1948	ADJ	Mofsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	12	amod	_	_
12	г.	година	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	_

~~~


