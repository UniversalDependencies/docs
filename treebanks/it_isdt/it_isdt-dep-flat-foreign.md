---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_isdt-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_isdt-dep-flat-name.html">flat:name</a></tt>.

141 nodes (0%) are attached to their parents as `flat:foreign`.

141 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84397163120567.

The following 5 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (132; 94% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (6; 4% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


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
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 flat:foreign	color:blue
1	Infatti	infatti	ADV	B	_	14	advmod	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	tra	tra	ADP	E	_	5	case	_	_
4	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	ciclisti	ciclista	NOUN	S	Gender=Masc|Number=Plur	14	obl	_	_
6	italiani	italiano	ADJ	A	Gender=Masc|Number=Plur	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	5	punct	_	_
8	solo	solo	ADV	B	_	10	advmod	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	ciclista	ciclista	NOUN	S	Number=Sing	14	nsubj	_	_
11	Felice	Felice	PROPN	SP	_	10	nmod	_	_
12	Gimondi	Gimondi	PROPN	SP	_	11	flat:name	_	_
13	aveva	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	14	aux	_	_
14	vinto	vincere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
15	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	Giro	Giro	PROPN	SP	_	14	obj	_	_
17	d’	di	ADP	E	_	18	case	_	SpaceAfter=No
18	Italia	Italia	PROPN	SP	_	16	nmod	_	_
19	e	e	CCONJ	CC	_	21	cc	_	_
20	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	Tour	Tour	PROPN	SP	_	16	conj	_	_
22	de	de	X	SW	Foreign=Yes	21	flat:foreign	_	_
23	France	France	X	SW	Foreign=Yes	22	flat:foreign	_	_
24	in	in	ADP	E	_	26	case	_	_
25	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	1965	1965	NUM	N	NumType=Card	14	nummod	_	SpaceAfter=No
27	.	.	PUNCT	FS	_	14	punct	_	_

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


