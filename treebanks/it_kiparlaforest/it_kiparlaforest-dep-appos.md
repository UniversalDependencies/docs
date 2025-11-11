---
layout: base
title:  'Statistics of appos in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `appos`

This relation is universal.

10 nodes (0%) are attached to their parents as `appos`.

10 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 8 pairs of parts of speech are connected with `appos`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (2; 20% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-X.html">X</a></tt> (1; 10% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 appos	color:blue
1	mi	mi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	iobj	_	Begin=1409.916|Clitic=Yes|KID=913-0|OverlappingGroup=149
2	prendi	prendere	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	KID=913-1|OverlappingGroup=149
3	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	KID=913-2
4	barretta	barretta	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	KID=913-3
5	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	KID=913-4
6	attimo	attimo	NOUN	_	Gender=Masc|Number=Sing	2	obl	_	KID=913-5
7	quell'	quello	DET	_	PronType=Dem	8	det	_	KID=913-6|SpaceAfter=No
8	altra	altro	PRON	_	Gender=Fem|Number=Sing	4	appos	_	KID=913-7
9	di	di	ADP	_	_	11	case	_	KID=913-8a
10	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	KID=913-8b
11	lindt	Lindt	PROPN	_	_	8	nmod	_	End=1412.066|Intonation=Rising|KID=913-9

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	vuoi	volere	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Begin=997.8|KID=663-0|OverlappingGroup
2	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	KID=663-1
3	bracialetto	bracialetto	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	KID=663-2
4	g~	g~	X	_	_	5	reparandum	_	Interrupted=Yes|KID=663-3
5	gold	Gold	PROPN	_	_	6	amod	_	KID=663-4
6	bunny	Bunny	PROPN	_	_	3	appos	_	End=999.51|Intonation=Rising|KID=663-5

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	generalmente	generalmente	ADV	_	_	3	advmod	_	KID=230-10|Prolonged=Yes
2	non	non	ADV	_	PronType=Neg	3	advmod	_	KID=230-11|OverlappingGroup=43
3	conosco	conoscere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=230-12
4	person~	person~	X	_	_	5	reparandum	_	Interrupted=Yes|KID=230-13
5	famiglie	famiglia	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	KID=230-14|Prolonged=Yes
6	che	che	SCONJ	_	_	8	reparandum	_	KID=230-15
7	bolognesi	bolognese	ADJ	_	Gender=Masc|Number=Plur	5	appos	_	KID=230-16
8	che	che	SCONJ	_	PronType=Rel	9	nsubj	_	KID=230-17
9	abitano	abitare	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	KID=230-18
10	in	in	ADP	_	_	11	case	_	KID=230-19
11	centro	centro	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	End=896.59|Intonation=Falling|KID=230-20

~~~


