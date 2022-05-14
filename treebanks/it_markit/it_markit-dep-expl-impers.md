---
layout: base
title:  'Statistics of expl:impers in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="it_markit-dep-expl-pass.html">expl:pass</a></tt>.

85 nodes (0%) are attached to their parents as `expl:impers`.

85 instances of `expl:impers` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65882352941176.

The following 3 pairs of parts of speech are connected with `expl:impers`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (83; 98% instances), <tt><a href="it_markit-pos-AUX.html">AUX</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 expl:impers	color:blue
1	Forme	forma	NOUN	S	Gender=Fem|Number=Plur	6	dislocated	_	_
2	di	di	ADP	E	_	3	case	_	_
3	massificazione	massificazione	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
4	se	se	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	6	expl:impers	_	_
5	ne	ne	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	6	obj	_	_
6	vedono	vedere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	dovunque	dovunque	ADV	B	_	6	advmod	_	_
8	.	[PUNCT]	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 expl:impers	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	_
3	sentore	sentore	NOUN	S	Gender=Masc|Number=Sing	13	dislocated	_	_
4	di	di	ADP	E	_	6	case	_	_
5	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	importanza	importanza	NOUN	S	Gender=Fem|Number=Sing	3	nmod	_	_
7	di	di	ADP	E	_	9	case	_	_
8	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	piazza	piazza	NOUN	S	Gender=Fem|Number=Sing	6	nmod	_	_
10	,	[PUNCT]	PUNCT	FF	_	3	punct	_	_
11	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
12	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	13	expl:impers	_	_
13	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	ascoltando	ascoltare	VERB	V	VerbForm=Ger	13	advcl	_	_
15	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	discorsi	discorso	NOUN	S	Gender=Masc|Number=Plur	14	obj	_	_
17	di	di	ADP	E	_	19	case	_	_
18	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	19	det	_	_
19	vecchi	vecchio	NOUN	S	Gender=Masc|Number=Plur	16	nmod	_	_
20	che	che	PRON	PR	_	27	nsubj	_	_
21	,	[PUNCT]	PUNCT	FF	_	20	punct	_	_
22	con	con	ADP	E	_	23	case	_	_
23	fare	fare	NOUN	S	Gender=Masc|Number=Sing	27	obl	_	_
24	dialettale	dialettale	ADJ	A	Gender=Masc|Number=Sing	23	amod	_	_
25	,	[PUNCT]	PUNCT	FF	_	23	punct	_	_
26	si	si	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	27	expl	_	_
27	riferiscono	riferire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	acl:relcl	_	_
28	ad	ad	ADP	E	_	29	case	_	_
29	essa	essa	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	27	obl	_	_
30	almeno	almeno	ADV	B	_	31	advmod	_	_
31	tre	tre	NUM	N	NumType=Card	34	nummod	_	_
32	o	o	CCONJ	CC	_	33	cc	_	_
33	quattro	quattro	NUM	N	NumType=Card	31	conj	_	_
34	volte	volta	NOUN	S	Gender=Fem|Number=Plur	27	obl	_	_
35	in	in	ADP	E	_	37	case	_	_
36	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	37	det	_	_
37	discorso	discorso	NOUN	S	Gender=Masc|Number=Sing	34	nmod	_	_
38	.	[PUNCT]	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 expl:impers	color:blue
1	E	e	CCONJ	CC	_	8	cc	_	_
2	poi	poi	ADV	B	_	8	advmod	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
4	proprio	proprio	ADV	B	_	8	advmod	_	_
5	quando	quando	SCONJ	CS	_	8	mark	_	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	8	expl:impers	_	_
7	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	bisogno	bisogno	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
9	di	di	ADP	E	_	10	case	_	_
10	aiuto	aiuto	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	_
11	che	che	SCONJ	CS	_	15	mark	_	_
12	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	persona	persona	NOUN	S	Gender=Fem|Number=Sing	15	nsubj	_	_
14	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	avere	avere	VERB	V	VerbForm=Inf	8	acl	_	_
16	accanto	accanto	ADV	B	_	15	advmod	_	_
17	un	uno	DET	RI	_	18	det	_	_
18	amico	amico	NOUN	S	Gender=Masc|Number=Sing	15	obj	_	_
19	e	e	CCONJ	CC	_	23	cc	_	_
20	questo	questo	PRON	PD	Gender=Masc|Number=Sing|Person=3|PronType=Dem	23	nsubj	_	_
21	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	cop	_	_
22	l'	il	DET	RD	_	23	det	_	_
23	unico	unico	NOUN	S	Gender=Masc|Number=Sing	18	conj	_	_
24	che	che	PRON	PR	_	26	nsubj	_	_
25	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	26	iobj	_	_
26	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	acl:relcl	_	_
27	vicino	vicino	ADV	B	_	26	advmod	_	_
28	senza	senza	ADP	E	_	29	case	_	_
29	giudicar	giudicare	VERB	V	VerbForm=Inf	26	advcl	_	_
30	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	29	obj	_	_
31	ma	ma	CCONJ	CC	_	32	cc	_	_
32	rispettando	rispettare	VERB	V	VerbForm=Ger	29	conj	_	_
33	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	32	obj	_	_
34	anche	anche	ADV	B	_	37	advmod	_	_
35	con	con	ADP	E	_	37	case	_	_
36	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	37	det	_	_
37	difetti	difetto	NOUN	S	Gender=Masc|Number=Plur	32	obl	_	_
38	e	e	CCONJ	CC	_	41	cc	_	_
39	con	con	ADP	E	_	41	case	_	_
40	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	41	det	_	_
41	debolezze	debolezza	NOUN	S	Gender=Fem|Number=Plur	37	conj	_	_
42	.	.	PUNCT	FS	_	8	punct	_	_

~~~


