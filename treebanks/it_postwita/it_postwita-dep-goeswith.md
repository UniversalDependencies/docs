---
layout: base
title:  'Statistics of goeswith in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `goeswith`

This relation is universal.

10 nodes (0%) are attached to their parents as `goeswith`.

10 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1.

The following 9 pairs of parts of speech are connected with `goeswith`: <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 20% instances), <tt><a href="it_postwita-pos-ADP.html">ADP</a></tt>-<tt><a href="it_postwita-pos-ADP.html">ADP</a></tt> (1; 10% instances), <tt><a href="it_postwita-pos-ADP.html">ADP</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 10% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="it_postwita-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_postwita-pos-SCONJ.html">SCONJ</a></tt> (1; 10% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 goeswith	color:blue
1	Mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	2	iobj	_	_
2	fanno	fare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	morì	morire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	ccomp	_	_
4	sti	questo	DET	DD	Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	anonimi	anonimo	ADJ	A	Gender=Masc|Number=Plur	2	nsubj	_	_
6	AHAHAHAH	AHAHAHAH	INTJ	I	_	2	discourse	_	_
7	—	—	PUNCT	FF	_	2	punct	_	_
8	Non	non	ADV	BN	PronType=Neg	9	advmod	_	_
9	usare	usare	VERB	V	VerbForm=Inf	2	parataxis	_	_
10	'	'	PUNCT	FB	_	11	punct	_	_
11	morire	morire	VERB	V	VerbForm=Inf	9	ccomp	_	_
12	'	'	PUNCT	FB	_	11	punct	_	_
13	in	in	X	X	_	9	advmod	_	_
14	vano	vano	X	X	_	13	goeswith	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	18	punct	_	_
16	non	non	ADV	BN	PronType=Neg	17	advmod	_	_
17	qua	qua	ADV	B	_	18	advmod	_	_
18	dentro	dentro	ADV	B	_	9	advmod	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	18	punct	_	_
20	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	21	expl	_	SpaceAfter=No
21	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	advcl	_	_
22	già	già	ADV	B	_	21	advmod	_	_
23	gente	gente	NOUN	S	Gender=Fem|Number=Sing	21	nsubj	_	_
24	che	che	PRON	PR	PronType=Rel	26	nsubj	_	_
25	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	26	obj	_	_
26	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	acl:relcl	_	_
27	troppo	troppo	ADV	B	_	26	advmod	_	SpaceAfter=No
28	.	.	PUNCT	FS	_	26	punct	_	_
29	http://t.co/Fk7pGaTrRY	http://t.co/Fk7pGaTrRY	SYM	X	_	2	dep	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	@user1	@user1	SYM	SYM	_	7	vocative:mention	_	_
2	@user2	@user2	SYM	SYM	_	7	vocative:mention	_	_
3	dopo	dopo	ADP	E	_	7	mark	_	_
4	di	di	ADP	E	_	3	goeswith	_	_
5	che	che	PRON	PR	PronType=Rel	3	goeswith	_	_
6	cosa	cosa	PRON	PQ	PronType=Int	7	nsubj	_	_
7	succederebbe	succedere	VERB	V	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	?	?	PUNCT	FS	_	7	punct	_	_
9	Avremmo	avere	VERB	V	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
10	#Grillo	#Grillo	SYM	SYM	_	9	obj	_	_
11	e	e	CCONJ	CC	_	12	cc	_	_
12	#DiPietro	#DiPietro	SYM	SYM	_	10	conj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_
14	Sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	17	cop	_	_
15	con	con	ADP	E	_	17	case	_	_
16	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
17	parole	parola	NOUN	S	Gender=Fem|Number=Plur	7	parataxis	_	_
18	di	di	ADP	E	_	19	case	_	_
19	oggi	oggi	ADV	B	_	17	advmod	_	_
20	di	di	ADP	E	_	22	case	_	_
21	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	presidente	presidente	NOUN	S	Gender=Masc|Number=Sing	17	nmod	_	_
23	Napolitano	Napolitano	PROPN	SP	_	22	flat	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 goeswith	color:blue
1	@user1	@user1	SYM	SYM	_	7	vocative:mention	_	_
2	@user2	@user2	SYM	SYM	_	7	vocative:mention	_	_
3	dopo	dopo	ADP	E	_	7	mark	_	_
4	di	di	ADP	E	_	3	goeswith	_	_
5	che	che	PRON	PR	PronType=Rel	3	goeswith	_	_
6	cosa	cosa	PRON	PQ	PronType=Int	7	nsubj	_	_
7	succederebbe	succedere	VERB	V	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	?	?	PUNCT	FS	_	7	punct	_	_
9	Avremmo	avere	VERB	V	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
10	#Grillo	#Grillo	SYM	SYM	_	9	obj	_	_
11	e	e	CCONJ	CC	_	12	cc	_	_
12	#DiPietro	#DiPietro	SYM	SYM	_	10	conj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_
14	Sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	17	cop	_	_
15	con	con	ADP	E	_	17	case	_	_
16	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
17	parole	parola	NOUN	S	Gender=Fem|Number=Plur	7	parataxis	_	_
18	di	di	ADP	E	_	19	case	_	_
19	oggi	oggi	ADV	B	_	17	advmod	_	_
20	di	di	ADP	E	_	22	case	_	_
21	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	presidente	presidente	NOUN	S	Gender=Masc|Number=Sing	17	nmod	_	_
23	Napolitano	Napolitano	PROPN	SP	_	22	flat	_	_

~~~


