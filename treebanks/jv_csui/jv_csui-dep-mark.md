---
layout: base
title:  'Statistics of mark in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `mark`

This relation is universal.

23 nodes (1%) are attached to their parents as `mark`.

23 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.65217391304348.

The following 4 pairs of parts of speech are connected with `mark`: <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-SCONJ.html">SCONJ</a></tt> (19; 83% instances), <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="jv_csui-pos-SCONJ.html">SCONJ</a></tt> (2; 9% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	Ing	Ing	ADP	_	_	2	case	_	_
2	taun	taun	NOUN	_	Number=Sing	5	obl:tmod	_	_
3	kapitu	kapitu	ADJ	_	NumType=Ord|Polite=Form	2	amod	_	Level=Krama
4	kudu	kudu	AUX	_	Polite=Infm	5	aux	_	Level=Ngoko
5	diluwari	diluwari	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
6	tanpa	tanpa	SCONJ	_	_	7	mark	_	_
7	mbayar	mbayar	VERB	_	Mood=Ind|Voice=Act	5	advcl	_	_
8	tebusan	tebus	NOUN	_	Number=Sing	7	obj	_	_
9	apa-apa	apa	PRON	_	PronType=Rel	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 mark	color:blue
1	Perusahaan	usaha	NOUN	_	Number=Sing	5	nsubj	_	_
2	Dodge	Dodge	PROPN	_	_	1	nmod	_	_
3	Bersaudara	saudara	PROPN	_	_	2	flat:name	_	_
4	pun	pun	PART	_	_	1	advmod:emph	_	_
5	ngerembag	rembag	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
6	sukses	sukses	NOUN	_	Number=Sing	5	obj	_	_
7	amargi	amargi	SCONJ	_	_	9	mark	_	_
8	kualitas	kualitas	NOUN	_	Number=Sing	10	nsubj	_	_
9	ipun	ipun	PRON	_	Number=Sing|Person=3|Polite=Form|PronType=Prs	8	nmod:poss	_	Level=Krama
10	saé	saé	ADJ	_	_	5	advcl	_	_
11	,	,	PUNCT	_	_	16	punct	_	_
12	lan	lan	CCONJ	_	Polite=Infm	16	cc	_	Level=Ngoko
13	perusahaan	usaha	NOUN	_	Number=Sing	16	nsubj	_	_
14	punika	punika	DET	_	Polite=Form|PronType=Dem	13	det	_	Level=Krama
15	enggal	enggal	ADV	_	_	16	advmod	_	_
16	dados	dados	VERB	_	Mood=Ind|Polite=Form|Voice=Act	5	conj	_	Level=Krama
17	perusahaan	usaha	NOUN	_	Number=Sing	16	obl	_	_
18	ingkang	ingkang	PRON	_	Polite=Form|PronType=Rel	21	obl	_	Level=Krama
19	penjualan	jual	NOUN	_	Number=Sing	21	nsubj	_	_
20	ipun	ipun	PRON	_	Number=Sing|Person=3|Polite=Form|PronType=Prs	19	nmod:poss	_	Level=Krama
21	ageng	ageng	ADJ	_	Polite=Form	17	acl:relcl	_	Level=Krama
22	ing	ing	ADP	_	_	23	case	_	_
23	pasar	pasar	NOUN	_	Number=Sing	21	obl	_	_
24	AS	AS	PROPN	_	_	23	nmod	_	_
25	taun	taun	NOUN	_	_	21	obl:tmod	_	_
26	1916	1916	NUM	_	NumType=Card	25	nummod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 13 mark	color:blue
1	Dados	dados	ADV	_	Polite=Form	7	advmod	_	Level=Krama
2	ing	ing	ADP	_	_	3	case	_	_
3	dalu	dalu	NOUN	_	Number=Sing	7	obl:tmod	_	_
4	punika	punika	DET	_	Polite=Form|PronType=Dem	3	det	_	Level=Krama
5	3	3	NUM	_	NumType=Card	6	nummod	_	_
6	rookie	rookie	X	_	Foreign=Yes	7	nsubj:pass	_	_
7	dipuneliminasi	eliminasi	VERB	_	Mood=Ind|Polite=Form|Voice=Pass	0	root	_	Level=Krama|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	kaliyan	kaliyan	SCONJ	_	Polite=Form	12	mark	_	Level=Krama
10	Skip	Skip	PROPN	_	_	12	nsubj:pass	_	_
11	Sheffield	Sheffield	PROPN	_	_	10	flat:name	_	_
12	dipuneliminasi	eliminasi	VERB	_	Mood=Ind|Polite=Form|Voice=Pass	7	advcl	_	Level=Krama
13	amargi	amargi	SCONJ	_	_	21	mark	_	_
14	ing	ing	ADP	_	_	15	case	_	_
15	pertandhingan	tandhing	NOUN	_	Number=Sing	21	nmod	_	_
16	pro	pro	X	_	Foreign=Yes	15	amod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	21	punct	_	_
18	urutan	urutan	NOUN	_	_	21	nsubj	_	_
19	é	é	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	18	nmod:poss	_	_
20	sing	sing	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	pungkasan	pungkas	ADJ	_	Polite=Form	12	advcl	_	Level=Krama
22	pertandhingan	tandhing	NOUN	_	_	21	obl	_	_
23	iku	iku	DET	_	Polite=Infm|PronType=Dem	22	det	_	Level=Ngoko|SpaceAfter=No
24	.	.	PUNCT	_	_	7	punct	_	_

~~~


