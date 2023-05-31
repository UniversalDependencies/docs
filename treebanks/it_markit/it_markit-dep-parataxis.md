---
layout: base
title:  'Statistics of parataxis in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `parataxis`

This relation is universal.

67 nodes (0%) are attached to their parents as `parataxis`.

47 instances of `parataxis` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.3134328358209.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (18; 27% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (17; 25% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (8; 12% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (5; 7% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 parataxis	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	condizione	condizione	NOUN	S	Gender=Fem|Number=Plur	12	parataxis	_	_
3	per	per	ADP	E	_	5	case	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	quale	quale	PRON	PR	Number=Plur|Person=3|PronType=Rel	7	obl	_	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	7	expl	_	_
7	genera	generare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
8	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	crisi	crisi	NOUN	S	Gender=Fem|Number=Sing	7	nsubj	_	_
10	economica	economico	ADJ	A	Gender=Fem|Number=Sing	9	amod	_	_
11	,	,	PUNCT	FF	_	2	punct	_	_
12	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
13	quando	quando	SCONJ	CS	_	14	mark	_	_
14	viene	venire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	advcl	_	_
15	meno	meno	ADV	B	_	14	compound	_	_
16	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	17	det	_	_
17	equilibrio	equilibrio	NOUN	S	Gender=Masc|Number=Sing	14	nsubj	_	_
18	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 3 parataxis	color:blue
1	Nessun	nessuno	DET	DI	Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	musicista	musicista	NOUN	S	Gender=Masc|Number=Sing	15	parataxis	_	_
3	dicevamo	dire	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	15	parataxis	_	_
4	,	[PUNCT]	PUNCT	FF	_	15	punct	_	_
5	eppure	eppure	CCONJ	CC	_	15	cc	_	_
6	Ricky	Ricky	PROPN	SP	_	15	nsubj	_	_
7	Martin	Martin	PROPN	SP	_	6	flat:name	_	_
8	,	[PUNCT]	PUNCT	FF	_	6	punct	_	_
9	come	come	ADP	E	_	13	case	_	_
10	di	di	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	resto	resto	NOUN	S	Gender=Masc|Number=Sing	13	nmod	_	_
13	Madonna	Madonna	PROPN	SP	_	6	nmod	_	_
14	,	[PUNCT]	PUNCT	FF	_	13	punct	_	_
15	vende	vendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
16	più	più	ADV	B	_	19	advmod	_	_
17	di	di	ADP	E	_	19	case	_	_
18	15	15	NUM	N	_	19	nummod	_	_
19	milioni	milione	NOUN	S	Gender=Masc|Number=Plur	21	nmod	_	_
20	di	di	ADP	E	_	21	case	_	_
21	dischi	disco	NOUN	S	Gender=Masc|Number=Plur	15	obj	_	_
22	a	a	ADP	E	_	24	case	_	_
23	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	24	det	_	_
24	anno	anno	NOUN	S	Gender=Masc|Number=Sing	15	obl	_	_
25	.	[PUNCT]	PUNCT	FS	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 1 parataxis	color:blue
1	bambini	bambino	NOUN	S	Gender=Masc|Number=Plur	22	parataxis	_	_
2	che	che	PRON	PR	_	3	nsubj	_	_
3	corrono	correre	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
4	,	,	PUNCT	FF	_	1	punct	_	_
5	mercanti	mercante	NOUN	S	Gender=Masc|Number=Plur	1	conj	_	_
6	(	(	PUNCT	FB	_	8	punct	_	_
7	oggi	oggi	ADV	B	_	8	advmod	_	_
8	negozianti	negoziante	NOUN	S	Gender=Masc|Number=Plur	5	appos	_	_
9	)	)	PUNCT	FB	_	8	punct	_	_
10	,	,	PUNCT	FF	_	1	punct	_	_
11	adulti	adulto	ADJ	A	Gender=Masc|Number=Plur	1	conj	_	_
12	che	che	PRON	PR	_	13	nsubj	_	_
13	discutono	discutono	NOUN	S	Gender=Masc|Number=Sing	11	acl:relcl	_	_
14	,	,	PUNCT	FF	_	15	punct	_	_
15	voli	volo	NOUN	S	Gender=Masc|Number=Plur	1	conj	_	_
16	di	di	ADP	E	_	17	case	_	_
17	colombi	colombo	NOUN	S	Gender=Masc|Number=Plur	15	nmod	_	_
18	eppure	eppure	CCONJ	CC	_	22	cc	_	_
19	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	_
20	proprio	proprio	ADV	B	_	22	advmod	_	_
21	questi	questo	DET	DD	Gender=Masc|Number=Plur|PronType=Dem	22	det	_	_
22	elementi	elemento	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
23	"	"	PUNCT	FB	_	24	punct	_	_
24	umili	umile	ADJ	A	Gender=Masc|Number=Plur	22	amod	_	_
25	"	"	PUNCT	FB	_	24	punct	_	_
26	,	,	PUNCT	FF	_	24	punct	_	_
27	quotidiani	quotidiano	ADJ	A	Gender=Masc|Number=Plur	24	conj	_	_
28	che	che	PRON	PR	_	29	nsubj	_	_
29	muovono	muovere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	22	acl:relcl	_	_
30	l'	il	DET	RD	_	31	det	_	_
31	animo	animo	NOUN	S	Gender=Masc|Number=Sing	29	obj	_	_
32	di	di	ADP	E	_	34	case	_	_
33	l'	il	DET	RD	_	34	det	_	_
34	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	31	nmod	_	_
35	.	.	PUNCT	FS	_	22	punct	_	_

~~~


