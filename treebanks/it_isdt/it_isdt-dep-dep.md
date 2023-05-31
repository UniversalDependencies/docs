---
layout: base
title:  'Statistics of dep in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `dep`

This relation is universal.

14 nodes (0%) are attached to their parents as `dep`.

11 instances of `dep` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.78571428571429.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (3; 21% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADP.html">ADP</a></tt> (2; 14% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (2; 14% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADP.html">ADP</a></tt> (2; 14% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


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
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 dep	color:blue
1	Conformemente	conformemente	ADV	B	_	15	advmod	15:advmod	_
2	anche	anche	ADV	B	_	5	advmod	5:advmod	_
3	a	a	ADP	E	_	5	case	5:case	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	5:det	_
5	raccomandazione	raccomandazione	NOUN	S	Gender=Fem|Number=Sing	1	obl	1:obl:a	_
6	di	di	ADP	E	_	8	case	8:case	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
8	valutatore	valutatore	NOUN	S	Gender=Masc|Number=Sing	5	nmod	5:nmod:di	_
9	di	di	ADP	E	_	11	case	11:case	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	11:det	_
11	programma	programma	NOUN	S	Gender=Masc|Number=Sing	8	nmod	8:nmod:di	_
12	Pericle	Pericle	PROPN	SP	_	11	nmod	11:nmod	SpaceAfter=No
13	,	,	PUNCT	FF	_	1	punct	1:punct	_
14	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	15:cop	_
15	opportuno	opportuno	ADJ	A	Gender=Masc|Number=Sing	0	root	0:root	_
16	estendere	estendere	VERB	V	VerbForm=Inf	15	csubj	15:csubj	_
17	tale	tale	DET	DD	Number=Sing|PronType=Dem	18	det	18:det	_
18	programma	programma	NOUN	S	Gender=Masc|Number=Sing	16	obj	16:obj	_
19	vista	vedere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	15	advcl	15:advcl	_
20	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	21:det	_
21	necessità	necessità	NOUN	S	Gender=Fem	19	nsubj:pass	19:nsubj:pass	_
22	di	di	ADP	E	_	21	dep	21:dep	SpaceAfter=No
23	:	:	PUNCT	FC	_	15	punct	15:punct	_

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
9	meno	meno	ADV	B	_	12	dep	12:dep	_
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


