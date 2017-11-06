---
layout: base
title:  'Statistics of det:predet in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_postwita-dep-det-poss.html">det:poss</a></tt>.

31 nodes (0%) are attached to their parents as `det:predet`.

31 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12903225806452.

The following 3 pairs of parts of speech are connected with `det:predet`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (29; 94% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 det:predet	color:blue
1	Ho	avere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	risposta	risposta	NOUN	S	Gender=Fem|Number=Sing	1	obj	_	_
4	a	a	ADP	E	_	8	case	_	_
5	tutte	tutto	DET	DI	PronType=Ind	8	det:predet	_	_
6	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
7	vostre	vostro	DET	AP	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	8	det:poss	_	_
8	domande	domanda	NOUN	S	Gender=Fem|Number=Plur	3	nmod	_	SpaceAfter=No
9	:	:	PUNCT	FC	_	1	punct	_	_
10	Si	sì	INTJ	I	_	1	discourse	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 det:predet	color:blue
1	Auguri	augurio	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
2	di	di	ADP	E	_	4	case	_	_
3	buon	buono	ADJ	A	Gender=Masc|Number=Sing	4	amod	_	_
4	lavoro	lavoro	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
5	a	a	ADP	E	_	8	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	neo	neo	ADJ	A	_	8	amod	_	_
8	Presidente	presidente	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
9	di	di	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Consiglio	Consiglio	PROPN	SP	_	8	nmod	_	_
12	di	di	ADP	E	_	14	case	_	_
13	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	14	det	_	_
14	Ministri	Ministri	PROPN	SP	_	11	nmod	_	_
15	Mario	mario	PROPN	SP	_	8	nmod	_	_
16	Monti	Monti	PROPN	SP	_	15	flat:name	_	_
17	ed	e	CCONJ	CC	_	21	cc	_	_
18	a	a	ADP	E	_	21	case	_	_
19	tutto	tutto	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	21	det:predet	_	_
20	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	8	conj	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	1	punct	_	_
23	Good	good	X	SW	_	1	discourse	_	_
24	Luck	luck	X	SW	_	23	flat:foreign	_	_
25	Italia	italia	PROPN	SP	_	1	vocative	_	_
26	#oramonti	#oramonti	SYM	SYM	_	1	parataxis:hashtag	_	_
27	#italia	#italia	SYM	SYM	_	1	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det:predet	color:blue
1	Ma	ma	CCONJ	CC	_	15	cc	_	_
2	se	se	SCONJ	CS	_	7	mark	_	_
3	tutte	tutto	DET	DI	PronType=Ind	5	det:predet	_	_
4	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	#riforme	#riforme	SYM	SYM	_	7	dislocated	_	_
6	le	le	PRON	PC	Clitic=Yes|Gender=Fem|Person=3|PronType=Prs	7	obj	_	_
7	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	advcl	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	#Governo	#Governo	SYM	SYM	_	7	nsubj	_	_
10	#Monti	#Monti	SYM	SYM	_	9	nmod	_	_
11	a	a	ADP	E	_	14	case	_	_
12	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	_
13	prossime	prossimo	ADJ	A	Gender=Fem|Number=Plur	14	amod	_	_
14	elezioni	elezione	NOUN	S	Gender=Fem|Number=Plur	15	obl	_	_
15	quale	quale	PRON	PQ	Number=Sing|PronType=Int	0	root	_	_
16	sarà	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	15	cop	_	_
17	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	programma	programma	NOUN	S	Gender=Masc|Number=Sing	15	nsubj	_	_
19	di	di	ADP	E	_	20	case	_	_
20	#pd	#pd	SYM	SYM	_	18	nmod	_	_
21	e	e	CCONJ	CC	_	22	cc	_	_
22	#pdl	#pdl	SYM	SYM	_	20	conj	_	SpaceAfter=No
23	?	?	PUNCT	FS	_	15	punct	_	_
24	Grosso	grosso	ADJ	A	Gender=Masc|Number=Sing	25	amod	_	_
25	problema	problema	NOUN	S	Gender=Masc|Number=Sing	15	parataxis	_	_
26	...	...	PUNCT	FS	_	25	punct	_	_

~~~


