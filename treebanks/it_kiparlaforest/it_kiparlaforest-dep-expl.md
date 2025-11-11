---
layout: base
title:  'Statistics of expl in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_kiparlaforest-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_kiparlaforest-dep-expl-pass.html">expl:pass</a></tt>.

251 nodes (3%) are attached to their parents as `expl`.

232 instances of `expl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20318725099602.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (242; 96% instances), <tt><a href="it_kiparlaforest-pos-X.html">X</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl	color:blue
1	già	già	ADV	_	_	5	advmod	_	Begin=7.79|KID=6-0
2	x	x	X	_	_	5	dep	_	KID=6-1|Syllables=4|Unintelligible=Yes
3	mi	mi	PRON	_	Number=Sing|Person=1|PronType=Prs	5	expl	_	Clitic=Yes|KID=6-2
4	sono	essere	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	KID=6-3
5	emozionato	emozionare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	End=9.33|KID=6-4|OverlappingGroup=0

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	non	non	ADV	_	PronType=Neg	3	advmod	_	Begin=1180.744|KID=759-0|PaceFast=Yes
2	si	si	PRON	_	Person=3|PronType=Prs	3	expl	_	Clitic=Yes|KID=759-1
3	capi~	capi~	X	_	_	7	reparandum	_	Interrupted=Yes|KID=759-2
4	ma	ma	CCONJ	_	_	7	cc	_	KID=759-3
5	non	non	ADV	_	PronType=Neg	7	advmod	_	KID=759-4
6	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	KID=759-5
7	pari	pari	ADJ	_	Number=Plur	0	root	_	KID=759-6
8	de	di	ADP	_	_	9	case	_	KID=759-7|Variation=Yes
9	cervello	cervello	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	KID=759-8
10	cioè	cioè	CCONJ	_	_	7	discourse	_	End=1183.244|KID=759-9|PaceFast=Yes

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl	color:blue
1	e	e	CCONJ	_	_	10	discourse	_	Begin=1631.03|KID=431-0|Prolonged=Yes
2	poi	poi	ADV	_	_	10	discourse	_	KID=431-1
3	per	per	ADP	_	_	5	case	_	KID=431-2
4	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	KID=431-3
5	resto	resto	NOUN	_	Gender=Masc|Number=Sing	10	obl	_	KID=431-4
6	di	di	ADP	_	_	7	case	_	KID=431-5
7	edifici	edificio	NOUN	_	Gender=Masc|Number=Plur	10	obl	_	KID=431-6
8	storici	storico	ADJ	_	Gender=Masc|Number=Plur	7	amod	_	KID=431-7
9	non	non	ADV	_	PronType=Neg	10	advmod	_	KID=431-8
10	penso	pensare	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=431-9
11	ci	ci	PRON	_	PronType=Prs	12	expl	_	Clitic=Yes|KID=431-10
12	sia	essere	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	KID=431-11|Prolonged=Yes
13	niente	niente	PRON	_	Number=Sing|PronType=Ind	12	obj	_	KID=431-12
14	di	di	ADP	_	_	15	case	_	KID=431-13
15	che	che	PRON	_	PronType=Rel	13	amod	_	End=1635.81|KID=431-14

~~~


