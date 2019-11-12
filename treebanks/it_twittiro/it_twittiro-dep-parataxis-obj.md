---
layout: base
title:  'Statistics of parataxis:obj in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `parataxis:obj`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_twittiro-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_twittiro-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="it_twittiro-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_twittiro-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_twittiro-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>.

16 nodes (0%) are attached to their parents as `parataxis:obj`.

13 instances of `parataxis:obj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.0625.

The following 10 pairs of parts of speech are connected with `parataxis:obj`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (5; 31% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 6% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 parataxis:obj	color:blue
1	Cosa	cosa	PRON	PQ	PronType=Int	2	obj	_	_
2	intendo	intendere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	fare	fare	VERB	V	VerbForm=Inf	2	xcomp	_	_
4	per	per	ADP	E	_	6	case	_	_
5	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	poveri	povero	NOUN	S	Gender=Masc|Number=Plur	3	obl	_	_
7	ed	e	CCONJ	CC	_	9	cc	_	_
8	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	bisognosi	bisognoso	NOUN	S	Gender=Masc|Number=Plur	6	conj	_	SpaceAfter=No
10	?	?	PUNCT	FS	_	3	punct	_	_
11	Una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
12	beata	beato	ADJ	A	Gender=Fem|Number=Sing	13	amod	_	_
13	minchia	minchia	NOUN	S	Gender=Fem|Number=Sing	3	parataxis:obj	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	13	punct	_	_
15	Cetto	Cetto	PROPN	SP	_	2	parataxis	_	_
16	La	La	PROPN	SP	_	15	flat:name	_	_
17	Qualunque	Qualunque	PROPN	SP	_	15	flat:name	_	SpaceAfter=No
18	?	?	PUNCT	FS	_	15	punct	_	_
19	No	No	INTJ	I	_	20	discourse	_	_
20	Mario	mario	PROPN	SP	_	2	parataxis	_	_
21	Monti	Monti	PROPN	SP	_	20	flat:name	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 parataxis:obj	color:blue
1	#labuonascuola	#labuonascuola	SYM	SYM	_	12	parataxis:hashtag	_	_
2	di	di	ADP	E	_	3	case	_	_
3	@user	@user	SYM	SYM	_	1	nmod	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	_
5	Di	di	ADP	E	_	6	case	_	_
6	grafica	grafica	NOUN	S	Gender=Fem|Number=Sing	12	parataxis:obj	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	8	punct	_	_
8	impaginazione	impaginazione	NOUN	S	Gender=Fem|Number=Sing	6	conj	_	_
9	e	e	CCONJ	CC	_	10	cc	_	_
10	colori	colore	NOUN	S	Gender=Masc|Number=Plur	6	conj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	6	punct	_	_
12	Parliamone	Parliamone	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
13	:	:	PUNCT	FC	_	12	punct	_	_
14	http://t.co/tdEQ9nFD8P	http://t.co/tdEQ9nFD8P	SYM	X	_	12	dep	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 parataxis:obj	color:blue
1	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	Monti	Monti	PROPN	SP	_	1	nmod	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Golpe	golpe	NOUN	S	Gender=Masc	1	parataxis:appos	_	SpaceAfter=No
5	?	?	PUNCT	FS	_	4	punct	_	_
6	Alieni	alieno	NOUN	S	Gender=Masc|Number=Plur	4	conj	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	6	punct	_	_
8	Massoni	massone	NOUN	S	Gender=Masc|Number=Plur	4	conj	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	8	punct	_	SpaceAfter=No
10	:	:	PUNCT	FC	_	1	punct	_	_
11	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Tg1	Tg1	PROPN	SP	_	14	nsubj	_	_
13	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	attonito	attonito	ADJ	A	Gender=Masc|Number=Sing	1	parataxis	_	SpaceAfter=No
15	:	:	PUNCT	FC	_	14	punct	_	_
16	ma	ma	CCONJ	CC	_	19	cc	_	_
17	chi	chi	PRON	PR	PronType=Rel	19	nsubj	_	_
18	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
19	questi	questo	PRON	PD	Gender=Masc|Number=Plur|PronType=Dem	14	parataxis:obj	_	SpaceAfter=No
20	?	?	PUNCT	FS	_	19	punct	_	_
21	Perché	perché	SCONJ	CS	_	28	mark	_	_
22	fra	fra	ADP	E	_	24	case	_	_
23	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	24	det	_	_
24	donne	donna	NOUN	S	Gender=Fem|Number=Plur	28	obl	_	_
25	non	non	ADV	BN	PronType=Neg	28	advmod	_	_
26	ce	ce	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	28	expl	_	_
27	n'	ne	PRON	PC	Clitic=Yes|PronType=Prs	28	iobj	_	SpaceAfter=No
28	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
29	ne...	ne...	X	X	_	28	nsubj	_	_
30	http://t.co/0lVOZdTc	http://t.co/0lVOZdTc	SYM	X	_	1	dep	_	_

~~~


