---
layout: base
title:  'Statistics of det:poss in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_markit-dep-det-predet.html">det:predet</a></tt>.

403 nodes (1%) are attached to their parents as `det:poss`.

396 instances of `det:poss` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11414392059553.

The following 8 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (387; 96% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (8; 2% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det:poss	color:blue
1	siamo	essere	AUX	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	noi	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	0	root	_	_
3	,	[PUNCT]	PUNCT	FF	_	2	punct	_	_
4	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	2	appos	_	_
5	umani	umano	ADJ	A	Gender=Masc|Number=Plur	4	amod	_	_
6	,	[PUNCT]	PUNCT	FF	_	2	punct	_	_
7	che	che	PRON	PR	_	8	nsubj	_	_
8	produciamo	produrre	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
9	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
10	nostra	nostro	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det:poss	_	_
11	felicità	felicità	NOUN	S	Gender=Fem|Number=Sing	8	obj	_	_
12	.	[PUNCT]	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 det:poss	color:blue
1	Posso	potere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	solo	solo	ADV	B	_	3	advmod	_	_
3	dire	dire	VERB	V	VerbForm=Inf	0	root	_	_
4	che	che	SCONJ	CS	_	8	mark	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	tempo	tempo	NOUN	S	Gender=Masc|Number=Sing	8	dislocated	_	_
7	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	vivo	vivere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
9	ogni	ogni	DET	DI	Gender=Masc|Number=Sing|PronType=Ind	10	det	_	_
10	giorno	giorno	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
11	consapevole	consapevole	ADJ	A	Number=Sing	8	xcomp	_	_
12	che	che	SCONJ	CS	_	21	mark	_	_
13	prima	prima	ADV	B	_	21	advmod	_	_
14	o	o	CCONJ	CC	_	15	cc	_	_
15	poi	poi	ADV	B	_	13	conj	_	_
16	a	a	ADP	E	_	18	case	_	_
17	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	posto	posto	NOUN	S	Gender=Masc|Number=Sing	21	obl	_	_
19	mio	mio	PRON	PP	PronType=Prs	18	det:poss	_	_
20	ci	ci	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=1|PronType=Prs	21	expl	_	_
21	sarà	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	11	acl	_	_
22	qualcun	qualcuno	DET	DI	Gender=Masc|Number=Sing|PronType=Ind	23	det	_	_
23	altro	altro	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	21	nsubj	_	_
24	a	a	ADP	E	_	25	mark	_	_
25	viver	vivere	VERB	V	VerbForm=Inf	23	acl	_	_
26	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	25	obj	_	_
27	.	[PUNCT]	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 33 det:poss	color:blue
1	In	in	ADP	E	_	3	case	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	letteratura	letteratura	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
4	,	,	PUNCT	FF	_	3	punct	_	_
5	di	di	ADP	E	_	6	case	_	_
6	quanto	quanto	PRON	PR	Number=Sing|Person=3|PronType=Rel	12	dislocated	_	_
7	appena	appena	ADV	B	_	8	advmod	_	_
8	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	_
9	,	,	PUNCT	FF	_	6	punct	_	_
10	ne	ne	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	12	iobj	_	_
11	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	testimonianza	testimonianza	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
13	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Manzoni	Manzoni	PROPN	SP	_	12	nsubj	_	_
15	in	in	ADP	E	_	18	case	_	_
16	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	18	det	_	_
17	"	"	PUNCT	FB	_	18	punct	_	_
18	Promessi	Promessi	PROPN	SP	_	12	nmod	_	_
19	Sposi	Sposi	PROPN	SP	_	18	flat:name	_	_
20	"	"	PUNCT	FB	_	18	punct	_	_
21	quando	quando	SCONJ	CS	_	22	mark	_	_
22	descrive	descrivere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	advcl	_	_
23	in	in	ADP	E	_	25	case	_	_
24	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	capitolo	capitolo	NOUN	S	Gender=Masc|Number=Sing	22	obl	_	_
26	XXXIII	XXXIII	PROPN	SP	_	25	nmod	_	_
27	l'	il	DET	RD	_	28	det	_	_
28	incontro	incontro	NOUN	S	Gender=Masc|Number=Sing	22	obj	_	_
29	di	di	ADP	E	_	30	case	_	_
30	Renzo	Renzo	PROPN	SP	_	28	nmod	_	_
31	con	con	ADP	E	_	35	case	_	_
32	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
33	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	35	det:poss	_	_
34	caro	caro	ADJ	A	Gender=Masc|Number=Sing	35	amod	_	_
35	amico	amico	ADJ	A	Gender=Masc|Number=Sing	28	nmod	_	_
36	che	che	PRON	PR	_	38	obl	_	_
37	non	non	ADV	BN	PronType=Neg	38	advmod	_	_
38	rivedeva	rivedere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	35	acl:relcl	_	_
39	da	da	ADP	E	_	41	case	_	_
40	due	due	NUM	N	NumType=Card	41	nummod	_	_
41	anni	anno	NOUN	S	Gender=Masc|Number=Plur	38	obl	_	_
42	.	.	PUNCT	FS	_	12	punct	_	_

~~~


