---
layout: base
title:  'Statistics of ccomp in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="pt_portjur-dep-ccomp-speech.html">ccomp:speech</a></tt>.

236 nodes (0%) are attached to their parents as `ccomp`.

236 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.1483050847458.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (196; 83% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (22; 9% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (12; 5% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Subsidiariamente	subsidiariamente	ADV	_	_	3	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	requer	requerer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	_	_	8	mark	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	pena	pena	NOUN	_	Gender=Fem|Number=Sing	8	nsubj:pass	_	_
7	seja	ser	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
8	minorada	minorar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	3	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Confessou	confessar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	que	que	SCONJ	_	_	4	mark	_	_
3	estava	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
4	embriagado	embriagado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	1	ccomp	_	_
5	e	e	CCONJ	_	_	7	cc	_	_
6	que	que	SCONJ	_	_	7	mark	_	_
7	forçou	forçar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	conj	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	porta	porta	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	_
10	de	de	ADP	_	_	12	case	_	_
11	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	casa	casa	NOUN	_	Gender=Fem|Number=Sing	9	nmod	_	_
13	para	para	ADP	_	_	14	mark	_	_
14	entrar	entrar	VERB	_	VerbForm=Inf	7	advcl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 31 ccomp	color:blue
1	Importante	importante	ADJ	_	Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	ainda	ainda	ADV	_	_	1	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	salientar	salientar	VERB	_	VerbForm=Inf	1	csubj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	a	a	ADP	_	_	8	case	_	_
8	respeito	respeito	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_
9	de	de	ADP	_	_	11	case	_	_
10	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	Lei	Lei	PROPN	_	_	8	nmod	_	_
12	12.850/2013	12.850/2013	NUM	_	NumType=Card	11	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	8	punct	_	_
14	que	que	SCONJ	_	_	26	mark	_	_
15	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	inciso	inciso	NOUN	_	Gender=Masc|Number=Sing	26	nsubj	_	_
17	I	I	NUM	_	NumType=Card	16	nmod	_	_
18	de	de	ADP	_	_	20	case	_	_
19	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	art.	artigo	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	16	nmod	_	_
21	3º	3º	NUM	_	NumType=Ord	20	nmod	_	_
22	de	de	ADP	_	_	24	case	_	_
23	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	capítulo	capítulo	NOUN	_	Gender=Masc|Number=Sing	20	nmod	_	_
25	II	II	NUM	_	NumType=Card	24	nmod	_	_
26	estatui	estatuir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
27	ser	ser	AUX	_	VerbForm=Inf	31	cop	_	_
28	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	colaboração	colaboração	NOUN	_	Gender=Fem|Number=Sing	31	nsubj	_	_
30	premiada	premiado	ADJ	_	Gender=Fem|Number=Sing|VerbForm=Part	29	amod	_	_
31	meio	meio	NOUN	_	Gender=Masc|Number=Sing	26	ccomp	_	_
32	de	de	ADP	_	_	33	case	_	_
33	obtenção	obtenção	NOUN	_	Gender=Fem|Number=Sing	31	nmod	_	_
34	de	de	ADP	_	_	35	case	_	_
35	prova	prova	NOUN	_	Gender=Fem|Number=Sing	33	nmod	_	SpaceAfter=No
36	.	.	PUNCT	_	_	1	punct	_	_

~~~


