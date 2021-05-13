---
layout: base
title:  'Statistics of expl:impers in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="it_postwita-dep-expl-pass.html">expl:pass</a></tt>.

191 nodes (0%) are attached to their parents as `expl:impers`.

188 instances of `expl:impers` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29319371727749.

The following 3 pairs of parts of speech are connected with `expl:impers`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (189; 99% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl:impers	color:blue
1	Anche	Anche	ADV	B	_	4	advmod	_	_
2	a	a	ADP	E	_	4	case	_	_
3	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	stadio	stadio	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	_
5	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	6	expl:impers	_	_
6	canta	cantare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	#Grillo	#Grillo	SYM	SYM	_	6	parataxis:obj	_	_
8	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	7	nmod	_	_
9	di	di	ADP	E	_	10	case	_	_
10	noi	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	8	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 expl:impers	color:blue
1	Si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	6	expl:impers	_	_
2	puo'	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
3	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
4	essere	essere	AUX	V	VerbForm=Inf	6	cop	_	_
5	d'	di	ADP	E	_	6	case	_	SpaceAfter=No
6	accordo	accordo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
7	con	con	ADP	E	_	8	case	_	_
8	#Grillo	#Grillo	SYM	SYM	_	6	obl	_	_
9	ma	ma	CCONJ	CC	_	12	cc	_	_
10	e'	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	6	conj	_	_
13	che	che	SCONJ	CS	_	19	mark	_	_
14	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	popolo	popolo	NOUN	S	Gender=Masc|Number=Sing	19	nsubj	_	_
16	Italiano	italiano	ADJ	A	Gender=Masc|Number=Sing	15	amod	_	_
17	e'	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
18	in	in	ADP	E	_	19	case	_	_
19	difficolta'	difficoltà	NOUN	S	Gender=Fem	12	advcl	_	_
20	e	e	CCONJ	CC	_	24	cc	_	_
21	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	classe	classe	NOUN	S	Gender=Fem|Number=Sing	24	nsubj	_	_
23	dirigente	dirigente	ADJ	A	Number=Sing	22	amod	_	_
24	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	_
25	di	di	ADP	E	_	27	case	_	_
26	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	27	det	_	_
27	grosse	grosso	ADJ	A	Gender=Fem|Number=Plur	24	obl	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:impers	color:blue
1	@user	@user	SYM	SYM	_	3	vocative:mention	_	_
2	Cosa	cosa	PRON	PQ	PronType=Int	3	obj	_	_
3	fai	fare	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	dopo	dopo	ADP	E	_	6	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	3	obl	_	_
7	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	8	expl:impers	_	_
8	cagna	cagna	X	X	_	3	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	8	punct	_	_

~~~


