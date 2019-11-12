---
layout: base
title:  'Statistics of parataxis:insert in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_twittiro-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_twittiro-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="it_twittiro-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_twittiro-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>, <tt><a href="it_twittiro-dep-parataxis-obj.html">parataxis:obj</a></tt>.

6 nodes (0%) are attached to their parents as `parataxis:insert`.

6 instances of `parataxis:insert` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.33333333333333.

The following 3 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (3; 50% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (2; 33% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 21 parataxis:insert	color:blue
1	Mario	mario	PROPN	SP	_	8	nsubj	_	_
2	Monti	Monti	PROPN	SP	_	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	membro	membro	NOUN	S	Gender=Masc|Number=Sing	1	appos	_	_
5	di	di	ADP	E	_	7	case	_	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	commissione	commissione	NOUN	S	Gender=Fem|Number=Sing	4	nmod	_	_
8	Spaventa	spaventare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	su	su	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	debito	debito	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
12	pubblico	pubblico	ADJ	A	Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	8	punct	_	_
14	A	a	ADP	E	_	15	case	_	_
15	me	me	PRON	PE	Number=Sing|Person=1|PronType=Prs	16	obl	_	_
16	spaventa	spaventare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	parataxis	_	_
17	più	più	ADV	B	_	16	advmod	_	_
18	lui	egli	PRON	PE	Number=Sing|Person=3|PronType=Prs	16	nsubj	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	16	punct	_	_
20	a	a	ADP	E	_	21	mark	_	_
21	dire	dire	VERB	V	VerbForm=Inf	16	parataxis:insert	_	_
22	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	vero	vero	NOUN	S	Gender=Masc|Number=Sing	21	obj	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 parataxis:insert	color:blue
1	*	*	SYM	SYM	_	11	dep	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	"	"	PUNCT	FB	_	11	punct	_	_
4	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	governo	governo	NOUN	S	Gender=Masc|Number=Sing	11	parataxis:nsubj	_	_
6	Monti	Monti	PROPN	SP	_	5	nmod	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	5	punct	_	_
8	E'	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
9	in	in	ADP	E	_	11	case	_	_
10	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	mani	mano	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
12	di	di	ADP	E	_	13	case	_	_
13	Berlusconi	Berlusconi	PROPN	SP	_	11	nmod	_	_
14	"	"	PUNCT	FB	_	11	punct	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	16	punct	_	_
16	dicono	dire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	parataxis:insert	_	_
17	a	a	ADP	E	_	19	case	_	_
18	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	Pd	Pd	PROPN	SP	_	16	obl	_	_
20	http://t.co/i41Ytkl9	http://t.co/i41Ytkl9	SYM	X	_	11	dep	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 16 parataxis:insert	color:blue
1	@user	@user	SYM	SYM	_	10	vocative:mention	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	Perché	perché	ADV	B	_	10	advmod	_	_
4	Patroni	Patroni	PROPN	SP	_	10	nsubj	_	_
5	Griffi	Griffi	PROPN	SP	_	4	flat:name	_	_
6	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
7	ancora	ancora	ADV	B	_	10	advmod	_	_
8	in	in	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
11	#Monti	#Monti	SYM	SYM	_	10	nmod	_	SpaceAfter=No
12	?	?	PUNCT	FS	_	10	punct	_	_
13	[	[	PUNCT	FB	_	16	punct	_	_
14	a	a	ADP	E	_	16	case	_	_
15	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	16	det:poss	_	_
16	insaputa	insaputa	NOUN	S	Gender=Fem	10	parataxis:insert	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	19	punct	_	_
18	I	i	X	SW	_	19	nsubj	_	_
19	presume	presumere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	parataxis:insert	_	_
20	]	]	PUNCT	FB	_	16	punct	_	_

~~~


