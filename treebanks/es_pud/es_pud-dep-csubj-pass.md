---
layout: base
title:  'Statistics of csubj:pass in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-csubj.html">csubj</a></tt>.

16 nodes (0%) are attached to their parents as `csubj:pass`.

16 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.125.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (12; 75% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj:pass	color:blue
1	No	no	ADV	RB	Polarity=Neg	3	advmod	_	_
2	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:pass	_	_
3	sabe	saber	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	IN	_	6	case	_	_
5	que	que	DET	WDT	Gender=Masc|Number=Sing|PronType=Rel	6	det	_	_
6	modo	modo	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	_
7	han	haber	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	aux	_	_
8	trabajado	trabajar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	csubj:pass	_	_
9	juntos	junto	ADJ	JJ	Gender=Masc|Number=Plur	11	acl	_	_
10	ambos	ambo	DET	DT	Gender=Masc|Number=Plur|NumType=Card|PronType=Tot	11	det	_	_
11	dramaturgos	dramaturgo	NOUN	NN	Gender=Masc|Number=Plur	8	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj:pass	color:blue
1	En	en	ADP	IN	_	3	case	_	_
2	una	uno	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	ocasión	ocasión	NOUN	NN	Gender=Fem|Number=Sing	5	obl	_	_
4	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	expl:pass	_	_
5	insinúa	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	que	que	SCONJ	IN	_	9	mark	_	_
7	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	agente	agente	NOUN	NN	Gender=Masc|Number=Sing	5	csubj:pass	_	_
10	encubierto	encubierto	ADJ	JJ	Gender=Masc|Number=Sing	9	amod	_	_
11	cuyo	cuyo	DET	DTP$	Gender=Masc|Number=Sing|Poss=Yes|PronType=Rel	12	det	_	_
12	objetivo	objetivo	NOUN	NN	Gender=Masc|Number=Sing	9	acl:relcl	_	_
13	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
14	Homero	Homero	PROPN	NNP	Gender=Masc|Number=Sing	12	nsubj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj:pass	color:blue
1	Se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	2	expl:pass	_	_
2	predijo	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	IN	_	8	mark	_	_
4	él	él	PRON	PRP	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
5	o	o	CCONJ	CC	_	8	cc:preconj	_	_
6	bien	bien	ADV	RB	_	5	fixed	_	_
7	moriría	_	AUX	VBC	Mood=Cnd|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	viejo	viejo	ADJ	JJ	Gender=Masc|Number=Sing	2	csubj:pass	_	_
9	después	después	ADV	RB	_	8	advmod	_	_
10	de	de	ADP	IN	_	12	case	_	_
11	una	uno	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	vida	vida	NOUN	NN	Gender=Fem|Number=Sing	9	obl	_	_
13	poco	poco	ADV	RB	_	14	advmod	_	_
14	emocionante	_	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	SpaceAfter=No
15	,	,	PUNCT	,	_	17	punct	_	_
16	o	o	CCONJ	CC	_	17	cc	_	_
17	joven	joven	ADJ	JJ	Gender=Masc|Number=Sing	8	conj	_	_
18	en	en	ADP	IN	_	20	case	_	_
19	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	campo	campo	NOUN	NN	Gender=Masc|Number=Sing	17	obl	_	_
21	de	de	ADP	IN	_	22	case	_	_
22	batalla	batalla	NOUN	NN	Gender=Fem|Number=Sing	20	nmod	_	_
23	y	y	CCONJ	CC	_	24	cc	_	_
24	ganando	ganar	VERB	VBG	VerbForm=Ger	20	conj	_	_
25	inmortalidad	inmortalidad	NOUN	NN	Gender=Fem|Number=Sing	24	obj	_	_
26	a	a	ADP	IN	_	30	case	_	_
27	través	través	NOUN	NN	Gender=Masc|Number=Sing	26	fixed	_	_
28	de	de	ADP	IN	_	26	fixed	_	_
29	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	poesía	poesía	NOUN	NN	Gender=Fem|Number=Sing	24	obl	_	SpaceAfter=No
31	.	.	PUNCT	.	_	2	punct	_	_

~~~


