---
layout: base
title:  'Statistics of dislocated in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `dislocated`

This relation is universal.

44 nodes (0%) are attached to their parents as `dislocated`.

24 instances of `dislocated` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.36363636363636.

The following 8 pairs of parts of speech are connected with `dislocated`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (20; 45% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (12; 27% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (5; 11% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt> (3; 7% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-X.html">X</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-X.html">X</a></tt>-<tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dislocated	color:blue
1	non	non	ADV	_	PronType=Neg	4	advmod	_	Begin=53.503|KID=41-0|OverlappingGroup=5
2	ce	ce	PRON	_	_	4	expl	_	KID=41-1
3	l'	lo	PRON	_	_	4	obj	_	KID=41-1bis|SpaceAfter=No
4	ha	avere	VERB	_	_	0	root	_	KID=41-1ter
5	le	il	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	KID=41-2
6	brioche	brioche	NOUN	_	Gender=Fem|Number=Sing	4	dislocated	_	KID=41-3
7	x	x	X	_	_	4	dep	_	End=55.213|KID=41-4|OverlappingGroup=6|Syllables=4|Unintelligible=Yes
8	x	x	X	_	_	12	dep	_	Begin=55.493|KID=43-0|PauseAfter=Yes|Syllables=1|Unintelligible=Yes
9	mh	mh	INTJ	_	_	12	discourse	_	KID=43-2|OverlappingGroup=7|Prolonged=Yes
10	ce	ce	PRON	_	Number=Plur|Person=1|PronType=Prs	12	expl	_	Clitic=Yes|KID=43-3
11	n'	ne	PRON	_	PronType=Prs	12	iobj	_	Clitic=Yes|KID=43-4|SpaceAfter=No
12	ha	avere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	KID=43-5
13	poche	poco	PRON	_	PronType=Ind	12	obj	_	End=57.563|KID=43-6

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 dislocated	color:blue
1	e	e	CCONJ	_	_	4	discourse	_	KID=262-28
2	chi	chi	PRON	_	PronType=Rel	4	nsubj	_	KID=262-29|OverlappingGroup
3	l'	lo	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	dep	_	Clitic=Yes|KID=262-30|OverlappingGroup|SpaceAfter=No
4	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=262-31|OverlappingGroup
5	eh	eh	INTJ	_	_	4	discourse	_	End=414.658|KID=262-32|OverlappingGroup
6	cioè	cioè	CCONJ	_	_	9	cc	_	Begin=414.828|KID=267-0|OverlappingGroup=42|PaceFast=Yes
7	io	io	PRON	_	Number=Sing|Person=1|PronType=Prs	9	dislocated	_	KID=267-1|OverlappingGroup=42
8	c'	ci	PRON	_	Number=Plur|Person=1|PronType=Prs	9	expl	_	Clitic=Yes|KID=267-2|OverlappingGroup=42|SpaceAfter=No
9	ho	avere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	conj	_	KID=267-3|OverlappingGroup=42
10	meno	meno	ADV	_	_	11	advmod	_	KID=267-4|OverlappingGroup=42
11	autorità	autorità	NOUN	_	Gender=Fem	9	obj	_	KID=267-5
12	io	io	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	Intonation=Rising|KID=267-6
13	e	e	CCONJ	_	_	15	cc	_	KID=267-7
14	che	che	PRON	_	PronType=Rel	15	nsubj	_	KID=267-8
15	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	conj	_	End=416.928|KID=267-9

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 dislocated	color:blue
1	e	e	CCONJ	_	_	7	discourse	_	Begin=436.963|KID=284-0
2	vabbè	vabbè	INTJ	_	_	7	discourse	_	KID=284-1
3	x	x	X	_	_	7	dep	_	KID=284-2|Syllables=1|Unintelligible=Yes
4	che	che	DET	_	PronType=Int	5	det	_	KID=284-3
5	cosa	cosa	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	KID=284-4
6	s'	si	PRON	_	Person=3|PronType=Prs	7	expl	_	Clitic=Yes|KID=284-5|SpaceAfter=No
7	aspettava	aspettare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=284-6
8	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	KID=284-7
9	gente	gente	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	KID=284-8
10	che	che	SCONJ	_	PronType=Rel	11	mark	_	KID=284-9
11	stavo	stare	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	7	dislocated	_	KID=284-10
12	zitto	zitto	ADJ	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	xcomp	_	End=439.335|KID=284-11

~~~


