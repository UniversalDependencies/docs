---
layout: base
title:  'Statistics of flat:foreign in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it-dep-flat-name.html">flat:name</a></tt>.

114 nodes (0%) are attached to their parents as `flat:foreign`.

114 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64912280701754.

The following 5 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (107; 94% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (4; 4% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Dulcis	dulcis	X	SW	Foreign=Yes	6	nmod	_	_
2	in	in	X	SW	Foreign=Yes	1	flat:foreign	_	_
3	fundo	fundo	X	SW	Foreign=Yes	1	flat:foreign	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	portamento	portamento	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	:	:	PUNCT	FC	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 flat:foreign	color:blue
1	“	“	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	Sembravano	sembrare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	tornati	tornare	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	xcomp	_	_
4	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
5	bei	bello	ADJ	A	Gender=Masc|Number=Plur	6	amod	_	_
6	tempi	tempo	NOUN	S	Gender=Masc|Number=Plur	2	nsubj	_	_
7	di	di	ADP	E	_	9	case	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Gialappa	Gialappa	PROPN	SP	_	6	nmod	_	SpaceAfter=No
10	's	's	PART	PART	_	9	case	_	_
11	Band	Band	X	SW	Foreign=Yes	9	flat:foreign	_	_
12	a	a	ADP	E	_	13	mark	_	_
13	commentare	commentare	VERB	V	VerbForm=Inf	6	acl	_	_
14	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	15	det	_	_
15	partite	partita	NOUN	S	Gender=Fem|Number=Plur	13	obj	_	_
16	di	di	ADP	E	_	17	case	_	_
17	calcio	calcio	NOUN	S	Gender=Masc|Number=Sing	15	nmod	_	SpaceAfter=No
18	”	”	PUNCT	FB	_	2	punct	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	2	punct	_	_
20	continua	continuare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
21	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	post	post	NOUN	S	_	20	nsubj	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 flat:foreign	color:blue
1	In	in	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	2003	2003	NUM	N	NumType=Card	4	obl	_	_
4	esce	uscire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	DVD	dvd	NOUN	S	Gender=Masc	4	nsubj	_	_
7	live	live	ADJ	A	_	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	6	punct	_	_
9	Live	live	X	SW	Foreign=Yes	6	nmod	_	_
10	Damage	damage	X	SW	Foreign=Yes	6	flat:foreign	_	_
11	che	che	PRON	PR	PronType=Rel	12	nsubj	_	_
12	comprende	comprendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
13	più	più	PRON	PI	PronType=Ind	12	obj	_	_
14	di	di	ADP	E	_	16	case	_	_
15	3	3	NUM	N	NumType=Card	16	nummod	_	_
16	ore	ora	NOUN	S	Gender=Fem|Number=Plur	13	nmod	_	_
17	di	di	ADP	E	_	18	case	_	_
18	live	live	NOUN	S	Gender=Masc	16	nmod	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	20	punct	_	_
20	interviste	intervista	NOUN	S	Gender=Fem|Number=Plur	18	conj	_	SpaceAfter=No
21	,	,	PUNCT	FF	_	22	punct	_	_
22	videoclip	videoclip	NOUN	S	Gender=Masc	18	conj	_	SpaceAfter=No
23	,	,	PUNCT	FF	_	24	punct	_	_
24	etc.	eccetera	ADV	B	_	18	conj	_	SpaceAfter=No
25	.	.	PUNCT	FS	_	4	punct	_	_

~~~


