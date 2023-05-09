---
layout: base
title:  'Statistics of cc in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `cc`

This relation is universal.

972 nodes (10%) are attached to their parents as `cc`.

959 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2798353909465.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (417; 43% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (413; 42% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (42; 4% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (41; 4% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (18; 2% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (12; 1% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (9; 1% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="orv_ruthenian-pos-ADP.html">ADP</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 cc	color:blue
1	А	а	CCONJ	CC	_	9	cc	_	_
2	естли	естли	SCONJ	IN	_	4	mark	_	_
3	не	не	PART	NEG	Polarity=Neg	4	advmod	_	_
4	справедъливе	справедливе	ADV	VBC	Degree=Pos	9	advcl	_	_
5	-	-	PUNCT	PUNCT	_	4	punct	_	_
6	боже	богъ	NOUN	VBC	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	9	vocative	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	6	punct	_	_
8	ме	я	PRON	PRP	Case=Acc|Clitic=Yes|Number=Sing|Person=1|PronType=Prs	9	obj	_	_
9	убий	убити	VERB	VBC	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	9	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc	color:blue
1	О	о	ADP	IN	_	2	case	_	_
2	судьях	судья	NOUN	NN	Animacy=Anim|Case=Loc|Gender=Masc|Number=Plur	0	root	_	_
3	и	и	CCONJ	CC	_	5	cc	_	_
4	о	о	ADP	IN	_	5	case	_	_
5	судех	судъ	NOUN	NN	Case=Loc|Gender=Masc|Number=Plur	2	conj	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	А	а	CCONJ	_	_	7	cc	_	wf="А"
2	воли	воля	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	7	obl	_	wf="воли"
3	есми	быти	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	wf="есми"
4	Б(о)жии	божий	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	wf="Божии"
5	и	и	PART	_	_	7	advmod	_	wf="и"
6	въ	въ	ADP	_	_	7	case	_	wf="въ"
7	Молшелгове	Молшелговъ	PROPN	_	Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	0	root	_	wf="Молшелгове"|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


