---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-nsubj.html">nsubj</a></tt>.

9 nodes (0%) are attached to their parents as `nsubj:pass`.

6 instances of `nsubj:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (2; 22% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-SCONJ.html">SCONJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj:pass	color:blue
1	purtroppo	purtroppo	ADV	_	_	3	advmod	_	Begin=510.264|KID=334-0
2	viene	venire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	KID=334-1
3	oscurato	oscurare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	KID=334-2
4	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	KID=334-3
5	nome	nome	NOUN	_	Gender=Masc|Number=Sing	3	nsubj:pass	_	End=512.044|KID=334-4

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 13 nsubj:pass	color:blue
1	sì	sì	INTJ	_	_	3	discourse	_	Begin=32.735|KID=12-0|Prolonged=Yes
2	ci	ci	PRON	_	PronType=Prs	3	expl	_	Clitic=Yes|KID=12-1
3	sono	essere	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=12-2|Prolonged=Yes
4	tre	tre	NUM	_	NumType=Card	5	nummod	_	KID=12-3
5	piani	piano	NOUN	_	Gender=Masc|Number=Plur	3	nsubj	_	End=34.93|Intonation=WeaklyRising|KID=12-4
6	e	e	CCONJ	_	_	12	cc	_	Begin=35.477|KID=14-0|OverlappingGroup=1
7	l'	il	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	KID=14-1|OverlappingGroup=1|SpaceAfter=No
8	ultimo	ultimo	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	9	amod	_	KID=14-2|OverlappingGroup=1
9	piano	piano	NOUN	_	Gender=Masc|Number=Sing	12	nsubj	_	KID=14-3|Prolonged=Yes
10	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	KID=14-4|Prolonged=Yes
11	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	_	KID=14-5
12	soffitta	soffitta	NOUN	_	Gender=Fem|Number=Sing	3	conj	_	KID=14-6
13	che	che	PRON	_	PronType=Rel	17	nsubj:pass	_	KID=14-7|Prolonged=Yes
14	in	in	ADP	_	_	15	case	_	KID=14-8
15	realtà	realtà	NOUN	_	Gender=Fem	17	obl	_	KID=14-9|Prolonged=Yes
16	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:pass	_	KID=14-10
17	abitata	abitare	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	12	acl:relcl	_	KID=14-11|Prolonged=Yes
18	da	da	ADP	_	_	19	case	_	KID=14-12
19	uno	uno	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	17	obl:agent	_	KID=14-13
20	di	di	ADP	_	_	23	case	_	KID=14-14a
21	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	23	det	_	KID=14-14b
22	miei	mio	ADJ	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	23	amod	_	KID=14-15
23	zii	zio	NOUN	_	Gender=Masc|Number=Plur	19	nmod	_	End=41.26|KID=14-16

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nsubj:pass	color:blue
1	testa	testa	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	Begin=1388.047|KID=899-0
2	di	di	ADP	_	_	3	case	_	KID=899-1
3	cazzo	cazzo	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	KID=899-2
4	si	si	PRON	_	Person=3|PronType=Prs	5	expl:impers	_	Clitic=Yes|KID=899-3
5	scrive	scrivere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	End=1389.531|KID=899-4
6	a~	a~	X	_	_	8	reparandum	_	Begin=1390.03|KID=902-0|OverlappingGroup=148
7	doppia	doppio	ADJ	_	Gender=Fem|Number=Sing	8	amod	_	KID=902-1|OverlappingGroup=148
8	parentesi	parentesi	NOUN	_	Gender=Fem	5	parataxis	_	KID=902-2|OverlappingGroup=148
9	testa	testa	NOUN	_	Gender=Fem|Number=Sing	8	conj	_	KID=902-3
10	di	di	ADP	_	_	11	case	_	KID=902-4
11	cazzo	cazzo	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	End=1392.197|KID=902-5
12	chiusa	chiuso	VERB	_	Gender=Fem|Number=Sing	8	conj	_	Begin=1392.242|KID=903-0
13	doppia	doppio	ADJ	_	Gender=Fem|Number=Sing	12	nsubj:pass	_	End=1395.141|KID=903-1

~~~


