---
layout: base
title:  'Statistics of cop in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `cop`

This relation is universal.

2826 nodes (2%) are attached to their parents as `cop`.

2540 instances of `cop` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53113941967445.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (1911; 68% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (798; 28% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (56; 2% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (25; 1% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (20; 1% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (16; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 cop	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Dep=6|Rel=Sb
2	in	in	CCONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Dep=1|Rel=Coord
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
6	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	Dep=0|Rel=Root
7	med	med	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	Dep=10|Rel=Atr
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
11	.	.	PUNCT	Z	_	10	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Toda	toda	CCONJ	Cc	_	4	cc	_	Dep=3|Rel=Conj
2	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	4	nsubj	_	Dep=3|Rel=Sb
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	Dep=0|Rel=Root
4	energija	energija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	Dep=3|Rel=Atr
5	"	"	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root
6	nacionalizma	nacionalizem	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No|Dep=4|Rel=Atr
7	"	"	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root
8	?	?	PUNCT	Z	_	4	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Kakšno	kakšen	DET	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	0	root	_	Dep=2|Rel=Atr
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Dep=0|Rel=Root
3	sploh	sploh	PART	Q	_	1	advmod	_	Dep=0|Rel=Root
4	mariborsko	mariborski	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	stališče	stališče	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	Dep=2|Rel=Sb
6	ob	ob	ADP	Sl	Case=Loc	7	case	_	Dep=7|Rel=Atr
7	tem	ta	DET	Pd-nsl	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	1	obl	_	SpaceAfter=No|Dep=2|Rel=AdvO
8	,	,	PUNCT	Z	_	11	punct	_	Dep=0|Rel=Root
9	ga	on	PRON	Pp3msa--y	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	11	obj	_	Dep=11|Rel=Obj
10	sploh	sploh	PART	Q	_	11	advmod	_	Dep=0|Rel=Root
11	imamo	imeti	VERB	Vmpr1p-n	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No|Dep=0|Rel=Root
12	!	!	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


