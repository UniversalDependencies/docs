---
layout: base
title:  'Statistics of expl in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_kiparlaforest-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_kiparlaforest-dep-expl-pass.html">expl:pass</a></tt>.

608 nodes (2%) are attached to their parents as `expl`.

571 instances of `expl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20065789473684.

The following 5 pairs of parts of speech are connected with `expl`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (576; 95% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (17; 3% instances), <tt><a href="it_kiparlaforest-pos-X.html">X</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (12; 2% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	eh	eh	INTJ	_	_	4	discourse	_	Begin=137.686|End=138.229|KID=59-0|OverlappingGroup=29|Prolonged=Yes
2	qualcosa	qualcosa	PRON	_	PronType=Ind	4	nsubj	_	Begin=138.295|KID=61-0|OverlappingGroup=30|Prolonged=Yes
3	c'	ci	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	4	expl	_	KID=61-1|SpaceAfter=No
4	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=61-2
5	molto	molto	ADV	_	_	7	advmod	_	KID=61-3
6	molto	molto	ADV	_	_	7	advmod	_	KID=61-4
7	poco	poco	ADV	_	_	4	advmod	_	KID=61-5
8	tendenzialmente	tendenzialmente	ADV	_	_	11	advmod	_	KID=61-6|OverlappingGroup=31
9	tutti	tutto	DET	_	Gender=Masc|Number=Plur|PronType=Tot	11	det	_	KID=61-7|OverlappingGroup=31
10	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	KID=61-8|OverlappingGroup=31
11	lav~	lav~	X	_	_	4	conj	_	End=142.668|Interrupted=Yes|KID=61-9|OverlappingGroup=31

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	ci	ci	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	2	expl	_	KID=473-2
2	vuol	volere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=473-3
3	l'	il	DET	_	Definite=Def|Number=Sing|PronType=Art	4	det	_	KID=473-4|SpaceAfter=No
4	ambulanza	ambulanza	NOUN	_	Gender=Fem|Number=Sing	2	nsubj	_	KID=473-5
5	per	per	ADP	_	_	6	case	_	KID=473-6
6	me	me	PRON	_	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	2	obl	_	End=879.55|KID=473-7

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	non	non	ADV	_	PronType=Neg	3	advmod	_	Begin=1180.744|KID=759-0|PaceFast=Yes
2	si	si	PRON	_	Clitic=Yes|Person=3|PronType=Prs	3	expl	_	KID=759-1
3	capi~	capi~	X	_	_	7	reparandum	_	Interrupted=Yes|KID=759-2
4	ma	ma	CCONJ	_	_	7	cc	_	KID=759-3
5	non	non	ADV	_	PronType=Neg	7	advmod	_	KID=759-4
6	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	KID=759-5
7	pari	pari	ADJ	_	_	0	root	_	KID=759-6
8	de	di	ADP	_	_	9	case	_	KID=759-7|Variation=Yes
9	cervello	cervello	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	KID=759-8
10	cioè	cioè	CCONJ	_	_	7	discourse	_	End=1183.244|KID=759-9|PaceFast=Yes

~~~


