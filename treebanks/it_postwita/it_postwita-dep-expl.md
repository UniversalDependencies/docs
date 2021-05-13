---
layout: base
title:  'Statistics of expl in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_postwita-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_postwita-dep-expl-pass.html">expl:pass</a></tt>.

1058 nodes (1%) are attached to their parents as `expl`.

893 instances of `expl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25425330812854.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1051; 99% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 expl	color:blue
1	@user	@user	SYM	SYM	_	8	vocative:mention	_	_
2	si	sì	INTJ	I	_	8	discourse	_	CorrectForm=sì
3	cazzo	cazzo	INTJ	I	_	8	discourse	_	_
4	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	8	expl	_	SpaceAfter=No
5	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	dep	_	_
6	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	devo	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	fare	fare	VERB	V	VerbForm=Inf	0	root	_	_
9	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	13	expl	_	SpaceAfter=No
10	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	dep	_	_
11	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
12	posso	potere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	fare	fare	VERB	V	VerbForm=Inf	8	conj	_	SpaceAfter=No
14	!	!	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 expl	color:blue
1	RT	retweet	NOUN	S	_	2	dep	_	_
2	@user	@user	SYM	SYM	_	8	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Va	Va	INTJ	I	_	8	discourse	_	_
5	boh	boh	INTJ	I	_	4	discourse	_	_
6	me	me	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	8	expl	_	_
7	ne	ne	PRON	PC	Clitic=Yes|PronType=Prs	8	expl	_	_
8	vó	vó	X	SW	_	0	root	_	_
9	in	in	ADP	E	_	10	case	_	_
10	palestra	palestra	NOUN	S	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	14	punct	_	_
12	a	a	ADP	E	_	14	case	_	_
13	più	più	ADV	B	_	14	advmod	_	_
14	tardi	tardi	ADV	B	_	8	discourse	_	SpaceAfter=No
15	!	!	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 expl	color:blue
1	#Renzi	#Renzi	SYM	SYM	_	5	parataxis:hashtag	_	_
2	«	«	PUNCT	FB	_	5	punct	_	_
3	#Grillo	#Grillo	SYM	SYM	_	5	nsubj	_	_
4	come	come	ADP	E	_	5	case	_	_
5	Savonarola	Savonarola	PROPN	SP	_	0	root	_	SpaceAfter=No
6	?	?	PUNCT	FS	_	5	punct	_	_
7	Ne	ne	PRON	PC	Clitic=Yes|PronType=Prs	8	iobj	_	_
8	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	_
9	di	di	ADP	E	_	10	case	_	_
10	strada	strada	NOUN	S	Gender=Fem|Number=Sing	8	dislocated	_	_
11	da	da	ADP	E	_	12	mark	_	_
12	fare	fare	VERB	V	VerbForm=Inf	10	acl	_	_
13	»	»	PUNCT	FB	_	10	punct	_	_
14	http://t.co/ch6X2WcD	http://t.co/ch6X2WcD	SYM	X	_	5	dep	_	_
15	Intanto	intanto	ADV	B	_	20	advmod	_	_
16	lui	lui	PRON	PE	Number=Sing|Person=3|PronType=Prs	20	nsubj	_	_
17	l'	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	expl	_	SpaceAfter=No
18	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
19	"	"	PUNCT	FB	_	20	punct	_	_
20	bugiardino	bugiardino	NOUN	S	Gender=Masc|Number=Sing	5	parataxis	_	_
21	storico	storico	ADJ	A	Gender=Masc|Number=Sing	20	amod	_	_
22	"	"	PUNCT	FB	_	20	punct	_	_
23	però	però	ADV	B	_	20	advmod	_	_
24	:)	:)	SYM	SYM	_	20	discourse:emo	_	_
25	...	...	PUNCT	FS	_	20	punct	_	_

~~~


