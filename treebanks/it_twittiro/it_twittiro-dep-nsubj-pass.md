---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-nsubj.html">nsubj</a></tt>.

101 nodes (0%) are attached to their parents as `nsubj:pass`.

52 instances of `nsubj:pass` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68316831683168.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (67; 66% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (21; 21% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (5; 5% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (2; 2% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj:pass	color:blue
1	Super	super	ADJ	A	_	2	amod	_	_
2	SPOT	spot	NOUN	S	_	8	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	“	“	PUNCT	FB	_	8	punct	_	SpaceAfter=No
5	150mila	150mila	NUM	N	NumType=Card	6	nummod	_	_
6	precari	precario	NOUN	S	Gender=Masc|Number=Plur	8	nsubj:pass	_	_
7	saranno	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	8	aux:pass	_	_
8	assunti	assumere	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
9	“	“	PUNCT	FB	_	8	punct	_	_
10	(	(	PUNCT	FB	_	11	punct	_	SpaceAfter=No
11	cit.	citazione	NOUN	S	Gender=Fem	8	parataxis	_	SpaceAfter=No
12	)	)	PUNCT	FB	_	11	punct	_	_
13	#scuola	#scuola	SYM	SYM	_	8	parataxis:hashtag	_	_
14	#labuonascuola	#labuonascuola	SYM	SYM	_	8	parataxis:hashtag	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	Assolto	assolvere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	Berlusconi	Berlusconi	PROPN	SP	_	1	nsubj:pass	_	SpaceAfter=No
3	.	.	PUNCT	FS	_	1	punct	_	_
4	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	Italia	italia	PROPN	SP	_	7	nsubj	_	_
6	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
7	consenziente	consenziente	ADJ	A	Number=Sing	1	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_
9	[	[	PUNCT	FB	_	10	punct	_	SpaceAfter=No
10	@user	@user	SYM	SYM	_	1	vocative:mention	_	SpaceAfter=No
11	]	]	PUNCT	FB	_	10	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nsubj:pass	color:blue
1	#2011in3words	#2011in3words	SYM	SYM	_	2	parataxis:hashtag	_	_
2	precariato	precariato	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	4	punct	_	_
4	ansia	ansia	NOUN	S	Gender=Fem|Number=Sing	2	conj	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	2	punct	_	_
6	(	(	PUNCT	FB	_	11	punct	_	SpaceAfter=No
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	terza	terzo	PRON	PI	PronType=Ind	11	nsubj:pass	_	_
9	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
10	stata	essere	AUX	VA	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	11	aux:pass	_	_
11	tagliata	tagliare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	2	parataxis	_	_
12	da	da	ADP	E	_	14	case	_	_
13	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	governo	governo	NOUN	S	Gender=Masc|Number=Sing	11	obl:agent	_	_
15	Monti	Monti	PROPN	SP	_	14	nmod	_	SpaceAfter=No
16	)	)	PUNCT	FB	_	11	punct	_	_

~~~


