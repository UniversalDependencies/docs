---
layout: base
title:  'Statistics of obl:agent in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-obl.html">obl</a></tt>.

30 nodes (0%) are attached to their parents as `obl:agent`.

30 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.86666666666667.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (22; 73% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (7; 23% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl:agent	color:blue
1	se	se	SCONJ	CS	_	5	mark	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	governo	governo	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
4	Monti	Monti	PROPN	SP	_	3	nmod	_	_
5	fallisce	fallire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
6	verrà	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	aux:pass	_	_
7	rimpiazzato	rimpiazzare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	da	da	ADP	E	_	10	case	_	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	metronomo	metronomo	NOUN	S	Gender=Masc|Number=Sing	7	obl:agent	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:agent	color:blue
1	Salvini	Salvini	PROPN	SP	_	2	nsubj:pass	_	_
2	cacciato	cacciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	da	da	ADP	E	_	4	case	_	_
4	Napoli	napoli	PROPN	SP	_	2	obl:agent	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	2	punct	_	_
6	Ora	ora	ADV	B	_	7	advmod	_	_
7	proviamo	provire	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
8	con	con	ADP	E	_	9	case	_	_
9	Giovanardi	Giovanardi	PROPN	SP	_	7	obl	_	_
10	a	a	ADP	E	_	11	case	_	_
11	Mykonos	Mykonos	PROPN	SP	_	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	_	_
13	[	[	PUNCT	FB	_	14	punct	_	SpaceAfter=No
14	@user	@user	SYM	SYM	_	2	vocative:mention	_	SpaceAfter=No
15	]	]	PUNCT	FB	_	14	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 obl:agent	color:blue
1	Scajola	Scajola	PROPN	SP	_	2	nsubj:pass	_	_
2	messo	mettere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	a	a	ADP	E	_	5	case	_	_
4	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	strette	stretta	NOUN	S	Gender=Fem|Number=Plur	2	obl	_	_
6	da	da	ADP	E	_	8	case	_	_
7	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	inquirenti	inquirente	ADJ	A	Number=Plur	2	obl:agent	_	SpaceAfter=No
9	:	:	PUNCT	FC	_	2	punct	_	_
10	“	“	PUNCT	FB	_	11	punct	_	SpaceAfter=No
11	Luogo	luogo	NOUN	S	Gender=Masc|Number=Sing	2	parataxis	_	_
12	di	di	ADP	E	_	13	case	_	_
13	residenza	residenza	NOUN	S	Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
14	?	?	PUNCT	FS	_	11	punct	_	SpaceAfter=No
15	”	”	PUNCT	FB	_	11	punct	_	_
16	[	[	PUNCT	FB	_	17	punct	_	SpaceAfter=No
17	CONTINUA	continuare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
18	su	su	ADP	E	_	19	case	_	_
19	http://t.co/oDPUtxkMK3	http://t.co/oDPUtxkMK3	SYM	X	_	17	nmod	_	SpaceAfter=No
20	]	]	PUNCT	FB	_	17	punct	_	SpaceAfter=\n

~~~


