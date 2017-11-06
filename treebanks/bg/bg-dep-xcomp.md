---
layout: base
title:  'Statistics of xcomp in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `xcomp`

This relation is universal.

733 nodes (0%) are attached to their parents as `xcomp`.

723 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.59345156889495.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (667; 91% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (31; 4% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-ADJ.html">ADJ</a></tt> (19; 3% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-ADV.html">ADV</a></tt> (9; 1% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Да	да	AUX	Tx	_	3	aux	_	_
2	бях	съм	AUX	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	по-млад	млад	ADJ	Amsi	Definite=Ind|Degree=Cmp|Gender=Masc|Number=Sing	5	advcl	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	_	_
5	щях	ща	VERB	Vpitf-m1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
6	да	да	AUX	Tx	_	7	aux	_	_
7	отида	отида-(си)	VERB	Vppif-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	xcomp	_	_
8	в	в	ADP	R	_	9	case	_	_
9	гората	гора	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	7	iobj	_	_
10	да	да	AUX	Tx	_	12	aux	_	_
11	ти	аз	PRON	Ppetds2	Case=Dat|Number=Sing|Person=2|PronType=Prs	12	iobj	_	_
12	уловя	уловя-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	_
13	едно	един	DET	Pfe-os-ni	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	14	det	_	_
14	славейче	славейче	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	12	obj	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Правя	правя-(се)	VERB	Vpitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	obj	_	_
3	бан	бан	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	1	xcomp	_	_
4	на	на	ADP	R	_	6	case	_	_
5	Търновската	търновски	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	област	област	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Емоциите	емоция	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	2	nsubj	_	_
2	щяха	ща	VERB	Vpitf-m3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	да	да	AUX	Tx	_	5	aux	_	_
4	го	аз	PRON	Ppetas3m	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
5	правят	правя-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
6	уязвим	уязвим	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	_	_

~~~


