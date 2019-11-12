---
layout: base
title:  'Statistics of list in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `list`

This relation is universal.

5 nodes (0%) are attached to their parents as `list`.

5 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.8.

The following 3 pairs of parts of speech are connected with `list`: <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 24 list	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	7	nsubj	_	_
3	di	di	ADP	E	_	5	case	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	futuro	futuro	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	sarà	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	cop	_	_
7	così	così	ADV	B	_	0	root	_	_
8	:	:	PUNCT	FC	_	7	punct	_	_
9	-	_	PUNCT	FB	_	10	punct	_	_
10	Elementari	elementare	ADJ	A	Number=Plur	7	parataxis:appos	_	_
11	fino	fino	ADV	B	_	15	case	_	_
12	a	a	ADP	E	_	11	fixed	_	_
13	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
14	15	15	NUM	N	NumType=Card	15	nummod	_	_
15	anni	anno	NOUN	S	Gender=Masc|Number=Plur	10	obl	_	_
16	-	-	PUNCT	FB	_	17	punct	_	_
17	Medie	media	NOUN	S	_	10	list	_	_
18	fino	fino	ADV	B	_	22	case	_	_
19	a	a	ADP	E	_	18	fixed	_	_
20	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	22	det	_	_
21	25	25	NUM	N	NumType=Card	22	nummod	_	_
22	anni	anno	NOUN	S	Gender=Masc|Number=Plur	17	nmod	_	_
23	-	-	PUNCT	FB	_	24	punct	_	_
24	Superiori	superiore	NOUN	S	Number=Plur	10	list	_	_
25	fino	fino	ADV	B	_	29	case	_	_
26	a	a	ADP	E	_	25	fixed	_	_
27	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	29	det	_	_
28	40	40	NUM	N	NumType=Card	29	nummod	_	_
29	anni	anno	NOUN	S	Gender=Masc|Number=Plur	24	nmod	_	_
30	#labuonascuola	#labuonascuola	SYM	SYM	_	10	parataxis:hashtag	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 31 list	color:blue
1	RT	retweet	NOUN	S	_	7	dep	_	_
2	@user	@user	SYM	SYM	_	7	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Facebook	Facebook	PROPN	SP	_	7	obl	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	expl	_	_
7	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	3	3	NUM	N	NumType=Card	9	nummod	_	_
9	tipi	tipo	NOUN	S	Gender=Masc|Number=Plur	7	nsubj	_	_
10	di	di	ADP	E	_	11	case	_	_
11	foto	foto	NOUN	S	Gender=Fem	9	nmod	_	_
12	profilo	profilo	NOUN	S	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
13	:	:	PUNCT	FC	_	12	punct	_	_
14	1	1	NUM	N	NumType=Card	16	nummod	_	SpaceAfter=No
15	)	)	PUNCT	FB	_	14	punct	_	_
16	tette	tetta	NOUN	S	Gender=Fem|Number=Plur	7	parataxis:appos	_	_
17	-	-	PUNCT	FB	_	18	punct	_	_
18	culo	culo	NOUN	S	Gender=Masc|Number=Sing	16	compound	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	16	punct	_	_
20	2	2	NUM	N	NumType=Card	22	nummod	_	SpaceAfter=No
21	)	)	PUNCT	FB	_	20	punct	_	_
22	riga	riga	NOUN	S	Gender=Fem|Number=Sing	16	list	_	_
23	laterale	laterale	ADJ	A	Number=Sing	22	amod	_	_
24	tattica	tattico	ADJ	A	Gender=Fem|Number=Sing	22	amod	_	_
25	che	che	PRON	PR	PronType=Rel	26	nsubj	_	_
26	copre	coprire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	acl:relcl	_	_
27	tutta	tutto	DET	DI	PronType=Ind	29	det:predet	_	_
28	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	faccia	faccia	NOUN	S	Gender=Fem|Number=Sing	26	obj	_	_
30	3)	3)	NUM	N	_	31	nummod	_	_
31	foto	foto	NOUN	S	Gender=Fem	16	list	_	_
32	occhio	occhio	NOUN	S	Gender=Masc|Number=Sing	31	compound	_	_
33	(	(	PUNCT	FB	_	34	punct	_	SpaceAfter=No
34	ri…	ri…	X	X	_	31	dep	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 list	color:blue
1	@user	@user	SYM	SYM	_	4	vocative:mention	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	http://t.co/Ep0Mdu0bXk	http://t.co/Ep0Mdu0bXk	SYM	X	_	4	dep	_	_
4	legge	legge	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	stabilità	stabilità	NOUN	S	Gender=Fem	4	nmod	_	_
6	#tagli	#tagli	SYM	SYM	_	4	list	_	_
7	#scuola	#scuola	SYM	SYM	_	6	nmod	_	_
8	bravo	bravo	ADJ	A	Gender=Masc|Number=Sing	12	discourse	_	_
9	#Renzi	#Renzi	SYM	SYM	_	12	vocative	_	_
10	questa	questo	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	12	nsubj	_	_
11	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	#labuonascuola	#labuonascuola	SYM	SYM	_	4	parataxis	_	_
13	?	?	PUNCT	FS	_	12	punct	_	SpaceAfter=\n

~~~


