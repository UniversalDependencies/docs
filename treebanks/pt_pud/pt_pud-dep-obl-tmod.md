---
layout: base
title:  'Statistics of obl:tmod in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-obl.html">obl</a></tt>.

26 nodes (0%) are attached to their parents as `obl:tmod`.

18 instances of `obl:tmod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.03846153846154.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (16; 62% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (3; 12% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 obl:tmod	color:blue
1	Em	em	ADP	INDT	_	3	case	_	_
2	o	o	DET	_	Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	século	século	NOUN	NN	Gender=Masc|Number=Sing	13	obl	_	_
4	XX	_	NUM	CD	_	3	appos	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	entre	_	ADP	IN	_	7	case	_	_
7	1904	_	NUM	CD	Gender=Masc	13	obl	_	_
8	e	e	CCONJ	CC	_	9	cc	_	_
9	1914	_	NUM	CD	Gender=Masc	7	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	7	punct	_	_
11	Antonio	Antonio	PROPN	NNP	Gender=Masc|Number=Sing	13	nsubj	_	_
12	Gaudí	Gaudí	PROPN	NNP	Gender=Masc|Number=Sing	11	flat:name	_	_
13	promoveu	promover	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
14	uma	um	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	reforma	reforma	NOUN	NN	Gender=Fem|Number=Sing	13	obj	_	_
16	que	_	PRON	WP	_	17	nsubj	_	_
17	durou	durar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	15	acl:relcl	_	_
18	dez	_	NUM	CD	_	19	nummod	_	_
19	anos	ano	NOUN	NN	Gender=Masc|Number=Plur	17	obl:tmod	_	SpaceAfter=No
20	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 obl:tmod	color:blue
1	De	_	ADP	IN	_	6	case	_	_
2	acordo	acordo	NOUN	NN	Gender=Masc|Number=Sing	1	fixed	_	_
3	com	_	ADP	IN	_	1	fixed	_	_
4	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	Novo	novo	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	Proper=True
6	Testamento	testamento	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	Proper=True|SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	Paulo	Paulo	PROPN	NNP	Gender=Masc|Number=Sing	9	nsubj	_	_
9	passou	passar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
10	dezoito	_	NUM	CD	_	11	nummod	_	_
11	meses	mês	NOUN	NN	Gender=Masc|Number=Plur	9	obl:tmod	_	_
12	em	em	ADP	IN	_	13	case	_	_
13	Corinto	Corinto	PROPN	NNP	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
14	,	,	PUNCT	,	_	18	punct	_	_
15	aproximadamente	aproximadamente	ADV	RB	_	16	advmod	_	_
16	dezessete	_	NUM	CD	_	17	nummod	_	_
17	anos	ano	NOUN	NN	Gender=Masc|Number=Plur	18	obl:tmod	_	_
18	depois	depois	ADV	RB	_	9	advmod	_	_
19	de	de	ADP	INDT	_	22	case	_	_
20	a	o	DET	_	Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
21	sua	_	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	22	det	_	_
22	conversão	conversão	NOUN	NN	Gender=Fem|Number=Sing	18	obl	_	SpaceAfter=No
23	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:tmod	color:blue
1	Era	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
2	30	_	NUM	CD	_	1	obl:tmod	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	agosto	agosto	NOUN	NN	Gender=Masc|Number=Sing	2	nmod	_	_
5	de	de	ADP	IN	_	6	case	_	_
6	2015	_	NUM	CD	Gender=Masc	4	nmod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	13	punct	_	_
8	quando	quando	ADV	WRB	_	13	advmod	_	_
9	um	um	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	exército	exército	NOUN	NN	Gender=Masc|Number=Sing	13	nsubj	_	_
11	de	de	ADP	IN	_	12	case	_	_
12	patos	pato	NOUN	NN	Gender=Masc|Number=Plur	10	nmod	_	_
13	conquistou	conquistar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	acl:relcl	_	_
14	a	o	DET	DT	Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	Internet	internet	NOUN	NN	Gender=Fem|Number=Sing	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	1	punct	_	_

~~~


