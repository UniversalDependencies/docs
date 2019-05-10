---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_isdt-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_isdt-dep-flat-name.html">flat:name</a></tt>.

145 nodes (0%) are attached to their parents as `flat:foreign`.

145 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.86206896551724.

The following 5 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (136; 94% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (6; 4% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Dulcis	dulcis	X	SW	Foreign=Yes	6	nmod	6:nmod	_
2	in	in	X	SW	Foreign=Yes	1	flat:foreign	1:flat:foreign	_
3	fundo	fundo	X	SW	Foreign=Yes	1	flat:foreign	1:flat:foreign	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	1:punct	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	portamento	portamento	NOUN	S	Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
7	:	:	PUNCT	FC	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 flat:foreign	color:blue
1	Infatti	infatti	ADV	B	_	14	advmod	14:advmod	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	1:punct	_
3	tra	tra	ADP	E	_	5	case	5:case	_
4	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	_
5	ciclisti	ciclista	NOUN	S	Gender=Masc|Number=Plur	14	obl	14:obl:tra	_
6	italiani	italiano	ADJ	A	Gender=Masc|Number=Plur	5	amod	5:amod	SpaceAfter=No
7	,	,	PUNCT	FF	_	5	punct	5:punct	_
8	solo	solo	ADV	B	_	10	advmod	10:advmod	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	10:det	_
10	ciclista	ciclista	NOUN	S	Number=Sing	14	nsubj	14:nsubj	_
11	Felice	Felice	PROPN	SP	_	10	nmod	10:nmod	_
12	Gimondi	Gimondi	PROPN	SP	_	11	flat:name	11:flat:name	_
13	aveva	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	14	aux	14:aux	_
14	vinto	vincere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
15	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	16:det	_
16	Giro	Giro	PROPN	SP	_	14	obj	14:obj	_
17	d’	di	ADP	E	_	18	case	18:case	SpaceAfter=No
18	Italia	Italia	PROPN	SP	_	16	nmod	16:nmod:di	_
19	e	e	CCONJ	CC	_	21	cc	21:cc	_
20	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	21:det	_
21	Tour	Tour	PROPN	SP	_	16	conj	14:obj|16:conj:e	_
22	de	de	X	SW	Foreign=Yes	21	flat:foreign	21:flat:foreign	_
23	France	France	X	SW	Foreign=Yes	22	flat:foreign	22:flat:foreign	_
24	in	in	ADP	E	_	26	case	26:case	_
25	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	26:det	_
26	1965	1965	NUM	N	NumType=Card	14	nummod	14:nummod	SpaceAfter=No
27	.	.	PUNCT	FS	_	14	punct	14:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 flat:foreign	color:blue
1	In	in	ADP	E	_	3	case	3:case	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	_
3	2003	2003	NUM	N	NumType=Card	4	obl	4:obl:in	_
4	esce	uscire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	DVD	dvd	NOUN	S	Gender=Masc	4	nsubj	4:nsubj|12:nsubj	_
7	live	live	ADJ	A	_	6	amod	6:amod	SpaceAfter=No
8	,	,	PUNCT	FF	_	6	punct	6:punct	_
9	Live	live	X	SW	Foreign=Yes	6	nmod	6:nmod	_
10	Damage	damage	X	SW	Foreign=Yes	6	flat:foreign	6:flat:foreign	_
11	che	che	PRON	PR	PronType=Rel	12	nsubj	6:ref	_
12	comprende	comprendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	6:acl:relcl	_
13	più	più	PRON	PI	PronType=Ind	12	obj	12:obj	_
14	di	di	ADP	E	_	16	case	16:case	_
15	3	3	NUM	N	NumType=Card	16	nummod	16:nummod	_
16	ore	ora	NOUN	S	Gender=Fem|Number=Plur	13	nmod	13:nmod:di	_
17	di	di	ADP	E	_	18	case	18:case	_
18	live	live	NOUN	S	Gender=Masc	16	nmod	16:nmod:di	SpaceAfter=No
19	,	,	PUNCT	FF	_	20	punct	20:punct	_
20	interviste	intervista	NOUN	S	Gender=Fem|Number=Plur	18	conj	16:nmod:di|18:conj	SpaceAfter=No
21	,	,	PUNCT	FF	_	22	punct	22:punct	_
22	videoclip	videoclip	NOUN	S	Gender=Masc	18	conj	16:nmod:di|18:conj	SpaceAfter=No
23	,	,	PUNCT	FF	_	24	punct	24:punct	_
24	etc.	eccetera	ADV	B	_	18	conj	16:nmod:di|18:conj	SpaceAfter=No
25	.	.	PUNCT	FS	_	4	punct	4:punct	_

~~~


