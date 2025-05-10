---
layout: base
title:  'Statistics of dep in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `dep`

This relation is universal.

12 nodes (0%) are attached to their parents as `dep`.

8 instances of `dep` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.25.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (3; 25% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (2; 17% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADP.html">ADP</a></tt> (2; 17% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-ADP.html">ADP</a></tt> (1; 8% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADP.html">ADP</a></tt> (1; 8% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (1; 8% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 dep	color:blue
1	Shakespeare	Shakespeare	PROPN	SP	_	2	nsubj	2:nsubj	_
2	collaborò	collaborare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	ad	a	ADP	E	_	6	case	6:case	_
4	altre	altro	ADJ	A	Gender=Fem|Number=Plur	6	amod	6:amod	_
5	due	due	NUM	N	NumType=Card	6	nummod	6:nummod	_
6	opere	opera	NOUN	S	Gender=Fem|Number=Plur	2	obl	2:obl:a	_
7	ancora	ancora	ADV	B	_	8	advmod	8:advmod	_
8	oggi	oggi	ADV	B	_	9	advmod	9:advmod	_
9	conosciute	conosciuto	ADJ	A	Gender=Fem|Number=Plur	6	amod	6:amod	SpaceAfter=No
10	,	,	PUNCT	FF	_	6	punct	6:punct	_
11	Enrico	Enrico	PROPN	SP	_	6	nmod	6:nmod	_
12	VIII	ottavo	ADJ	NO	Number=Sing|NumType=Ord	11	amod	11:amod	_
13	e	e	CCONJ	CC	_	17	cc	17:cc	_
14	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	dep	17:dep	_
15	due	due	NUM	N	NumType=Card	17	nummod	17:nummod	_
16	nobili	nobile	ADJ	A	Gender=Masc|Number=Plur	17	amod	17:amod	_
17	congiunti	congiunto	NOUN	S	Number=Plur	11	conj	11:conj:e	SpaceAfter=No
18	,	,	PUNCT	FF	_	2	punct	2:punct	_
19	probabilmente	probabilmente	ADV	B	_	21	advmod	21:advmod	_
20	con	con	ADP	E	_	21	case	21:case	_
21	John	John	PROPN	SP	_	2	obl	2:obl:con	_
22	Fletcher	Fletcher	PROPN	SP	_	21	flat:name	21:flat:name	SpaceAfter=No
23	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 dep	color:blue
1	Se	se	SCONJ	CS	_	5	mark	5:mark	_
2	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	3:det	_
3	Camere	camera	NOUN	S	Gender=Fem|Number=Plur	5	nsubj:pass	5:nsubj:pass	_
4	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	5:aux:pass	_
5	sciolte	sciogliere	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	20	advcl	20:advcl:se	SpaceAfter=No
6	,	,	PUNCT	FF	_	8	punct	8:punct	_
7	o	o	CCONJ	CC	_	8	cc	8:cc	_
8	manca	mancare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj	5:conj:o|20:advcl:se	_
9	meno	meno	ADV	B	ExtPos=ADP	12	dep	12:dep	_
10	di	di	ADP	E	_	9	fixed	9:fixed	_
11	tre	tre	NUM	N	NumType=Card	12	nummod	12:nummod	_
12	mesi	mese	NOUN	S	Gender=Masc|Number=Plur	8	nsubj	8:nsubj	_
13	a	a	ADP	E	_	16	case	16:case	_
14	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	16:det	_
15	loro	loro	DET	AP	Poss=Yes|PronType=Prs	16	det:poss	16:det:poss	_
16	cessazione	cessazione	NOUN	S	Gender=Fem|Number=Sing	8	obl	8:obl:a	SpaceAfter=No
17	,	,	PUNCT	FF	_	5	punct	5:punct	_
18	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	19:det	_
19	elezione	elezione	NOUN	S	Gender=Fem|Number=Sing	20	nsubj	20:nsubj	_
20	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
21	luogo	luogo	NOUN	S	Gender=Masc|Number=Sing	20	obj	20:obj	_
22	entro	entro	ADP	E	_	24	case	24:case	_
23	quindici	quindici	NUM	N	NumType=Card	24	nummod	24:nummod	_
24	giorni	giorno	NOUN	S	Gender=Masc|Number=Plur	21	nmod	21:nmod:entro	_
25	da	da	ADP	E	_	27	case	27:case	_
26	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	27:det	_
27	riunione	riunione	NOUN	S	Gender=Fem|Number=Sing	24	nmod	24:nmod:da	_
28	di	di	ADP	E	_	30	case	30:case	_
29	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	30	det	30:det	_
30	Camere	camera	NOUN	S	Gender=Fem|Number=Plur	27	nmod	27:nmod:di	_
31	nuove	nuovo	ADJ	A	Gender=Fem|Number=Plur	30	amod	30:amod	SpaceAfter=No
32	.	.	PUNCT	FS	_	20	punct	20:punct	_

~~~


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 37 dep	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	2:det	SpaceAfter=No
2	eroe	eroe	NOUN	S	Gender=Masc|Number=Sing	21	nsubj:pass	21:nsubj:pass	_
3	di	di	ADP	E	_	5	case	5:case	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	_
5	titolo	titolo	NOUN	S	Gender=Masc|Number=Sing	2	nmod	2:nmod:di	_
6	di	di	ADP	E	_	7	case	7:case	_
7	una	uno	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	5	nmod	5:nmod:di	_
8	di	di	ADP	E	_	10	case	10:case	_
9	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	10:det	_
10	tragedie	tragedia	NOUN	S	Gender=Fem|Number=Plur	7	nmod	7:nmod:di	_
11	più	più	ADV	B	_	12	advmod	12:advmod	_
12	famose	famoso	ADJ	A	Gender=Fem|Number=Plur	10	amod	10:amod	_
13	di	di	ADP	E	_	14	case	14:case	_
14	Shakespeare	Shakespeare	PROPN	SP	_	10	nmod	10:nmod:di	SpaceAfter=No
15	,	,	PUNCT	FF	_	7	punct	7:punct	_
16	Amleto	Amleto	PROPN	SP	_	7	appos	7:appos	SpaceAfter=No
17	,	,	PUNCT	FF	_	2	punct	2:punct	_
18	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	aux	21:aux	_
19	stato	essere	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	21	aux:pass	21:aux:pass	_
20	forse	forse	ADV	B	_	21	advmod	21:advmod	_
21	trattato	trattare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
22	più	più	ADV	B	_	21	advmod	21:advmod	_
23	di	di	ADP	E	_	26	case	26:case	_
24	qualsiasi	qualsiasi	DET	DI	Number=Sing|PronType=Ind	26	det	26:det	_
25	altro	altro	ADJ	A	Gender=Masc|Number=Sing	26	amod	26:amod	_
26	personaggio	personaggio	NOUN	S	Gender=Masc|Number=Sing	22	obl	22:obl:di	_
27	shakespeariano	shakespeariano	ADJ	A	Gender=Masc|Number=Sing	26	amod	26:amod	SpaceAfter=No
28	,	,	PUNCT	FF	_	21	punct	21:punct	_
29	specialmente	specialmente	ADV	B	_	34	advmod	34:advmod	_
30	per	per	ADP	E	_	34	case	34:case	_
31	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	34:det	_
32	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	34	det:poss	34:det:poss	_
33	famoso	famoso	ADJ	A	Gender=Masc|Number=Sing	34	amod	34:amod	_
34	monologo	monologo	NOUN	S	Gender=Masc|Number=Sing	21	obl	21:obl:per|36:nsubj	_
35	che	che	PRON	PR	PronType=Rel	36	nsubj	34:ref	_
36	inizia	iniziare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	acl:relcl	34:acl:relcl	_
37	con	con	ADP	E	_	36	dep	36:dep	SpaceAfter=No
38	:	:	PUNCT	FC	_	21	punct	21:punct	_

~~~


