---
layout: base
title:  'Statistics of dep in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `dep`

This relation is universal.

11 nodes (0%) are attached to their parents as `dep`.

8 instances of `dep` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.18181818181818.

The following 7 pairs of parts of speech are connected with `dep`: <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-ADP.html">ADP</a></tt> (2; 18% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (2; 18% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (2; 18% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADP.html">ADP</a></tt> (2; 18% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-ADP.html">ADP</a></tt> (1; 9% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-SCONJ.html">SCONJ</a></tt> (1; 9% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 dep	color:blue
1	Conformemente	conformemente	ADV	B	_	15	advmod	_	_
2	anche	anche	ADV	B	_	5	advmod	_	_
3	a	a	ADP	E	_	5	case	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	raccomandazione	raccomandazione	NOUN	S	Gender=Fem|Number=Sing	1	obl	_	_
6	di	di	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	valutatore	valutatore	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
9	di	di	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	programma	programma	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	_
12	Pericle	Pericle	PROPN	SP	_	11	nmod	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	1	punct	_	_
14	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	opportuno	opportuno	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
16	estendere	estendere	VERB	V	VerbForm=Inf	15	csubj	_	_
17	tale	tale	DET	DD	Number=Sing|PronType=Dem	18	det	_	_
18	programma	programma	NOUN	S	Gender=Masc|Number=Sing	16	obj	_	_
19	vista	vedere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	15	advcl	_	_
20	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	necessità	necessità	NOUN	S	Gender=Fem	19	nsubj:pass	_	_
22	di	di	ADP	E	_	21	dep	_	SpaceAfter=No
23	:	:	PUNCT	FC	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 dep	color:blue
1	Se	se	SCONJ	CS	_	5	mark	_	_
2	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	Camere	camera	NOUN	S	Gender=Fem|Number=Plur	5	nsubj:pass	_	_
4	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	sciolte	sciogliere	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	20	advcl	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	8	punct	_	_
7	o	o	CCONJ	CC	_	8	cc	_	_
8	manca	mancare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
9	meno	meno	ADV	B	_	12	dep	_	_
10	di	di	ADP	E	_	9	fixed	_	_
11	tre	tre	NUM	N	NumType=Card	12	nummod	_	_
12	mesi	mese	NOUN	S	Gender=Masc|Number=Plur	8	nsubj	_	_
13	a	a	ADP	E	_	16	case	_	_
14	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
15	loro	loro	DET	AP	Poss=Yes|PronType=Prs	16	det:poss	_	_
16	cessazione	cessazione	NOUN	S	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	5	punct	_	_
18	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	elezione	elezione	NOUN	S	Gender=Fem|Number=Sing	20	nsubj	_	_
20	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
21	luogo	luogo	NOUN	S	Gender=Masc|Number=Sing	20	obj	_	_
22	entro	entro	ADP	E	_	24	case	_	_
23	quindici	quindici	NUM	N	NumType=Card	24	nummod	_	_
24	giorni	giorno	NOUN	S	Gender=Masc|Number=Plur	21	nmod	_	_
25	da	da	ADP	E	_	27	case	_	_
26	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	_
27	riunione	riunione	NOUN	S	Gender=Fem|Number=Sing	24	nmod	_	_
28	di	di	ADP	E	_	30	case	_	_
29	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	30	det	_	_
30	Camere	camera	NOUN	S	Gender=Fem|Number=Plur	27	nmod	_	_
31	nuove	nuovo	ADJ	A	Gender=Fem|Number=Plur	30	amod	_	SpaceAfter=No
32	.	.	PUNCT	FS	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 dep	color:blue
1	Alcune	alcuno	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	2	det	_	_
2	attribuzioni	attribuzione	NOUN	S	Gender=Fem|Number=Plur	13	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	come	come	ADP	E	_	5	case	_	_
5	Tito	Tito	PROPN	SP	_	2	nmod	_	_
6	Andronico	Andronico	PROPN	SP	_	5	flat:name	_	_
7	e	e	CCONJ	CC	_	10	cc	_	_
8	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
9	primi	primo	ADJ	NO	Gender=Masc|Number=Plur|NumType=Ord	10	amod	_	_
10	drammi	dramma	NOUN	S	Gender=Masc|Number=Plur	5	conj	_	_
11	storici	storico	ADJ	A	Gender=Masc|Number=Plur	10	amod	_	SpaceAfter=No
12	,	,	PUNCT	FF	_	2	punct	_	_
13	restano	restare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	controverse	controverso	ADJ	A	Gender=Fem|Number=Plur	13	xcomp	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	27	punct	_	_
16	mentre	mentre	SCONJ	CS	_	27	mark	_	_
17	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	dep	_	_
18	due	due	NUM	N	NumType=Card	20	nummod	_	_
19	nobili	nobile	ADJ	A	Number=Plur	20	amod	_	_
20	congiunti	congiunto	NOUN	S	Gender=Masc|Number=Plur	27	nsubj	_	_
21	e	e	CCONJ	CC	_	23	cc	_	_
22	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	23	det	_	SpaceAfter=No
23	opera	opera	NOUN	S	Gender=Fem|Number=Sing	20	conj	_	_
24	andata	andare	AUX	VA	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	25	aux	_	_
25	perduta	perdere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	23	acl	_	_
26	Cardenio	Cardenio	PROPN	SP	_	23	nmod	_	_
27	hanno	avere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	conj	_	_
28	una	uno	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	27	obj	_	_
29	ben	bene	ADV	B	_	30	advmod	_	_
30	attestata	attestare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	31	acl	_	_
31	documentazione	documentazione	NOUN	S	Gender=Fem|Number=Sing	28	advcl	_	_
32	contemporanea	contemporaneo	ADJ	A	Gender=Fem|Number=Sing	31	amod	_	SpaceAfter=No
33	.	.	PUNCT	FS	_	13	punct	_	_

~~~


