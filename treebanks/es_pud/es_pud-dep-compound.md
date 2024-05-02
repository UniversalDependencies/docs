---
layout: base
title:  'Statistics of compound in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="es_pud-dep-compound-prt.html">compound:prt</a></tt>.

4 nodes (0%) are attached to their parents as `compound`.

4 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (2; 50% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 compound	color:blue
1	En	en	ADP	IN	_	2	case	_	_
2	julio	julio	NOUN	NN	Gender=Masc|Number=Sing	12	obl	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	1918	1918	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	2	punct	_	_
6	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	tratado	tratado	NOUN	NN	Gender=Masc|Number=Sing	12	nsubj:pass	_	_
8	franco	franco	ADJ	AFX	Hyph=Yes	10	compound	_	SpaceAfter=No|Proper=True
9	-	-	PUNCT	-	_	8	punct	_	SpaceAfter=No
10	monegasco	monegasco	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	Proper=True
11	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	aux:pass	_	_
12	firmado	firmar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
13	,	,	PUNCT	,	_	14	punct	_	_
14	ofreciendo	ofrecer	VERB	VBG	VerbForm=Ger	12	advcl	_	_
15	limitada	_	ADJ	JJ	Gender=Fem|Number=Sing	16	amod	_	_
16	protección	protección	NOUN	NN	Gender=Fem|Number=Sing	14	obj	_	_
17	francesa	_	ADJ	JJ	Gender=Fem|Number=Sing	16	amod	_	Proper=True
18	sobre	sobre	ADP	IN	_	19	case	_	_
19	Mónaco	Mónaco	PROPN	NNP	Number=Sing	16	nmod	_	SpaceAfter=No
20	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 compound	color:blue
1	Fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	aux:pass	_	_
2	seguido	_	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	por	por	ADP	IN	_	5	case	_	_
4	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	fondos	_	NOUN	NN	Gender=Masc|Number=Plur	2	obl:agent	_	_
6	de	de	ADP	IN	_	7	case	_	_
7	renta	renta	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
8	y	y	CCONJ	CC	_	11	cc	_	_
9	multi	multi	ADJ	AFX	Hyph=Yes	11	compound	_	SpaceAfter=No
10	-	-	PUNCT	-	_	9	punct	_	SpaceAfter=No
11	estrategia	estrategia	NOUN	NN	Gender=Fem|Number=Sing	7	conj	_	_
12	con	con	ADP	IN	_	14	case	_	_
13	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	objetivo	objetivo	NOUN	NN	Gender=Masc|Number=Sing	5	nmod	_	_
15	de	de	ADP	IN	_	16	case	_	_
16	rentabilidad	rentabilidad	NOUN	NN	Gender=Fem|Number=Sing	14	nmod	_	_
17	para	para	ADP	IN	_	18	case	_	_
18	inversores	_	NOUN	NN	Gender=Masc|Number=Plur	14	nmod	_	_
19	de	de	ADP	IN	_	20	case	_	_
20	Aviva	Aviva	PROPN	NNP	Number=Sing	18	nmod	_	SpaceAfter=No
21	,	,	PUNCT	,	_	27	punct	_	_
22	en	en	ADP	IN	_	24	case	_	_
23	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	24	det	_	_
24	que	que	PRON	REL	Gender=Masc|Number=Plur|PronType=Rel	27	obl	_	_
25	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	26	det	_	_
26	inversores	_	NOUN	NN	Gender=Masc|Number=Plur	27	nsubj	_	_
27	depositaron	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
28	2	2	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	29	nummod	_	_
29	mil	mil	NUM	CD	Gender=Masc|NumForm=Word|NumType=Card	30	nummod	_	_
30	millones	_	NOUN	NN	Gender=Masc|Number=Plur	27	obj	_	_
31	y	y	CCONJ	CC	_	34	cc	_	_
32	1,4	1,4	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	33	nummod	_	_
33	mil	mil	NUM	CD	Gender=Masc|NumForm=Word|NumType=Card	34	nummod	_	_
34	millones	_	NOUN	NN	Gender=Masc|Number=Plur	30	conj	_	_
35	de	de	ADP	IN	_	36	case	_	_
36	libras	_	NOUN	NN	Gender=Fem|Number=Plur	34	nmod	_	_
37	respectivamente	respectivamente	ADV	RB	_	27	advmod	_	SpaceAfter=No
38	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 24 compound	color:blue
1	En	en	ADP	IN	_	2	case	_	_
2	enero	enero	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	2011	2011	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	2	punct	_	_
6	Blunt	Blunt	PROPN	NNP	Gender=Fem|Number=Sing	9	nsubj	_	_
7	comenzó	comenzar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	a	a	ADP	IN	_	9	mark	_	_
9	rodar	rodar	VERB	VB	VerbForm=Inf	7	xcomp	_	_
10	una	uno	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	película	película	NOUN	NN	Gender=Fem|Number=Sing	9	obj	_	_
12	de	de	ADP	IN	_	13	case	_	_
13	ciencia	ciencia	NOUN	NN	Gender=Fem|Number=Sing	11	nmod	_	_
14	ficción	ficción	NOUN	NN	Gender=Fem|Number=Sing	13	nmod	_	_
15	estadounidense	_	ADJ	JJ	Gender=Fem|Number=Sing	11	amod	_	Proper=True
16	llamada	llamar	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	11	acl	_	_
17	Looper	Looper	PROPN	NNP	Number=Sing	16	xcomp	_	SpaceAfter=No
18	,	,	PUNCT	,	_	19	punct	_	_
19	dirigida	dirigir	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	11	acl	_	_
20	por	por	ADP	IN	_	21	case	_	_
21	Rian	Rian	PROPN	NNP	Gender=Masc|Number=Sing	19	obl:agent	_	_
22	Johnson	Johnson	PROPN	NNP	Gender=Masc|Number=Sing	21	flat:name	_	_
23	y	y	CCONJ	CC	_	26	cc	_	_
24	co	co	ADJ	AFX	Hyph=Yes	26	compound	_	SpaceAfter=No
25	-	-	PUNCT	-	_	24	punct	_	SpaceAfter=No
26	protagonizada	protagonizar	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	19	conj	_	_
27	por	por	ADP	IN	_	28	case	_	_
28	Bruce	Bruce	PROPN	NNP	Gender=Masc|Number=Sing	26	obl:agent	_	_
29	Willis	Willis	PROPN	NNP	Gender=Masc|Number=Sing	28	flat:name	_	_
30	y	y	CCONJ	CC	_	31	cc	_	_
31	Joseph	Joseph	PROPN	NNP	Gender=Masc|Number=Sing	28	conj	_	_
32	Gordon	Gordon	PROPN	NNP	Gender=Masc|Number=Sing	31	flat:name	_	SpaceAfter=No
33	-	-	PUNCT	-	_	34	punct	_	SpaceAfter=No|Proper=True
34	Levitt	Levitt	PROPN	NNP	Gender=Masc|Number=Sing	32	flat:name	_	SpaceAfter=No
35	;	;	PUNCT	:	_	39	punct	_	_
36	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	37	det	_	_
37	película	película	NOUN	NN	Gender=Fem|Number=Sing	39	nsubj:pass	_	_
38	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	39	expl:pass	_	_
39	lanzó	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	parataxis	_	_
40	en	en	ADP	IN	_	41	case	_	_
41	septiembre	septiembre	NOUN	NN	Gender=Masc|Number=Sing	39	obl	_	_
42	de	de	ADP	IN	_	43	case	_	_
43	2012	2012	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	41	nmod	_	SpaceAfter=No
44	.	.	PUNCT	.	_	7	punct	_	_

~~~


