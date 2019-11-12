---
layout: base
title:  'Statistics of parataxis:discourse in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_twittiro-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_twittiro-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_twittiro-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_twittiro-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>, <tt><a href="it_twittiro-dep-parataxis-obj.html">parataxis:obj</a></tt>.

9 nodes (0%) are attached to their parents as `parataxis:discourse`.

5 instances of `parataxis:discourse` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.44444444444444.

The following 6 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (4; 44% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 parataxis:discourse	color:blue
1	Un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	operaio	operaio	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
3	di	di	ADP	E	_	4	case	_	_
4	Terni	Terni	PROPN	SP	_	2	nmod	_	_
5	scrive	scrivere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	a	a	ADP	E	_	7	case	_	_
7	Civati	Civati	PROPN	SP	_	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	5	punct	_	_
9	“	“	PUNCT	FB	_	12	punct	_	SpaceAfter=No
10	Dai	dare	VERB	V	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	12	parataxis:discourse	_	SpaceAfter=No
11	,	,	PUNCT	FB	_	10	punct	_	_
12	fat	fare	VERB	V	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	5	parataxis	_	_
13	ti	ti	PRON	PC	Clitic=Yes|PronType=Prs	12	expl	_	_
14	forza	forza	NOUN	S	Gender=Fem|Number=Sing	12	obj	_	SpaceAfter=No
15	“	“	PUNCT	FB	_	12	punct	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	12	punct	_	_
17	[	[	PUNCT	FB	_	18	punct	_	SpaceAfter=No
18	@user	@user	SYM	SYM	_	5	vocative:mention	_	SpaceAfter=No
19	]	]	PUNCT	FB	_	18	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis:discourse	color:blue
1	Lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	so	sapere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	parataxis:discourse	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	cattivo	cattivo	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
6	e	e	CCONJ	CC	_	7	cc	_	_
7	ininfluente	ininfluente	ADJ	A	Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	14	punct	_	_
9	ma	ma	CCONJ	CC	_	14	cc	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	governo	governo	NOUN	S	Gender=Masc|Number=Sing	14	nsubj	_	_
12	Monti	Monti	PROPN	SP	_	11	nmod	_	_
13	é	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	composto	compostare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	conj	_	_
15	da	da	ADP	E	_	17	case	_	_
16	brutta	brutto	ADJ	A	Gender=Fem|Number=Sing	17	amod	_	_
17	gente	gente	NOUN	S	Gender=Fem|Number=Sing	14	obl	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	17	punct	_	_
19	brutti	brutto	ADJ	A	Gender=Masc|Number=Plur	17	amod	_	_
20	più	più	ADV	B	_	19	advmod	_	_
21	di	di	ADP	E	_	23	case	_	_
22	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	malattia	malattia	NOUN	S	Gender=Fem|Number=Sing	20	obl	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	14	punct	_	_
25	Saranno	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	26	cop	_	_
26	bravi	bravo	ADJ	A	Gender=Masc|Number=Plur	5	parataxis	_	_
27	eh	eh	INTJ	I	_	26	discourse	_	SpaceAfter=No
28	,	,	PUNCT	FF	_	30	punct	_	_
29	ma	ma	CCONJ	CC	_	30	cc	_	_
30	brutti	brutto	ADJ	A	Gender=Masc|Number=Plur	26	conj	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 parataxis:discourse	color:blue
1	Tra	tra	ADP	E	_	3	case	_	_
2	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	motivi	motivo	NOUN	S	Gender=Masc|Number=Plur	13	nmod	_	_
4	di	di	ADP	E	_	6	case	_	_
5	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	inefficienza	inefficienza	NOUN	S	Gender=Fem|Number=Sing	3	nmod	_	_
7	di	di	ADP	E	_	9	case	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	6	nmod	_	_
10	italiana	italiano	ADJ	A	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	3	punct	_	_
12	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	_
13	classi	classe	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
14	pollaio	pollaio	NOUN	S	Gender=Masc|Number=Sing	13	compound	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	17	punct	_	_
16	ma	ma	CCONJ	CC	_	17	discourse	_	_
17	va	andare	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin	13	parataxis:discourse	_	SpaceAfter=No
18	?!	?!	PUNCT	FS	_	17	punct	_	_
19	http://t.co/uPLyp7Phhy	http://t.co/uPLyp7Phhy	SYM	X	_	13	dep	_	_
20	#labuonascuola	#labuonascuola	SYM	SYM	_	13	parataxis:hashtag	_	_
21	#scuolapubblica	#scuolapubblica	SYM	SYM	_	13	parataxis:hashtag	_	_
22	#m5s	#m5s	SYM	SYM	_	13	parataxis:hashtag	_	SpaceAfter=\n

~~~


