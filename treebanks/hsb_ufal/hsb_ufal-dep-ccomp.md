---
layout: base
title:  'Statistics of ccomp in UD_Upper_Sorbian-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Upper_Sorbian-UFAL: Relations: `ccomp`

This relation is universal.

15 nodes (0%) are attached to their parents as `ccomp`.

14 instances of `ccomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.2.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt> (13; 87% instances), <tt><a href="hsb_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb_ufal-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	Potom	potom	ADV	_	PronType=Dem	2	advmod	_	_
2	narysowa	narysować	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	kruh	kruh	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
4	prajo	prajić	VERB	_	Tense=Pres|VerbForm=Conv	2	advcl	_	SpaceAfter=No
5	:	:	PUNCT	_	_	10	punct	_	_
6	»	»	PUNCT	_	_	10	punct	_	SpaceAfter=No
7	W	w	ADP	_	_	9	case	_	_
8	tutym	tutón	DET	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	kruhu	kruh	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	11	obl	_	_
10	dyrbiš	dyrbjeć	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|VerbType=Mod	4	ccomp	_	_
11	wostać	wostać	VERB	_	VerbForm=Inf	10	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 24 ccomp	color:blue
1	To	to	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	_
2	so	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	5	expl:pass	_	_
3	přez	přez	ADP	_	_	4	case	_	_
4	fakt	fakt	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	_
5	wujasni	wujasnić	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	24	punct	_	_
7	zo	zo	SCONJ	_	_	24	mark	_	_
8	Germanojo	German	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	24	nsubj	_	_
9	ale	ale	CCONJ	_	_	11	cc	_	_
10	tež	tež	ADV	_	_	9	fixed	_	_
11	Keltojo	Kelt	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	8	conj	_	_
12	su	być	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	aux	_	_
13	prěni	prěni	ADJ	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|NumType=Ord	14	amod	_	_
14	raz	raz	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	24	obl	_	_
15	přez	přez	ADP	_	_	16	case	_	_
16	Romjanow	Romjan	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	24	obl	_	_
17	we	w	ADP	_	_	19	case	_	_
18	wjetšim	wulki	ADJ	_	Case=Loc|Degree=Cmp|Gender=Masc|Number=Sing	19	amod	_	_
19	rozměrje	rozměr	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	24	obl	_	_
20	z	z	ADP	_	_	21	case	_	_
21	winje	wino	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	24	obl	_	_
22	do	do	ADP	_	_	23	case	_	_
23	dótknjenja	dótknjenje	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	24	obl	_	_
24	přišli	přińć	VERB	_	Animacy=Anim|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	4	ccomp	_	_
25	a	a	CCONJ	_	_	30	cc	_	_
26	z	z	ADP	_	_	27	case	_	_
27	tym	to	PRON	_	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	30	obl	_	_
28	łaćonske	łaćonski	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	29	amod	_	_
29	słowo	słowo	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	30	obj	_	_
30	přewzali	přewzać	VERB	_	Animacy=Anim|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	24	conj	_	SpaceAfter=No
31	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 36 ccomp	color:blue
1	Po	po	ADP	_	_	2	case	_	_
2	Gasche	Gasche	PROPN	_	_	20	obl	_	_
3	et	et	CCONJ	_	_	4	cc	_	_
4	al	al	X	_	_	2	conj	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_
6	(	(	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	1998	1998	NUM	_	NumType=Card	2	nummod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	7	7	NUM	_	NumType=Card	7	conj	_	SpaceAfter=No
10	)	)	PUNCT	_	_	7	punct	_	_
11	je	być	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
12	so	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	20	expl:pv	_	_
13	tutón	tutón	DET	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	14	det	_	_
14	proces	proces	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	20	nsubj	_	_
15	wšak	wšak	CCONJ	_	_	20	cc	_	_
16	hižo	hižo	ADV	_	_	18	advmod:emph	_	_
17	před	před	ADP	_	_	18	case	_	_
18	padom	pad	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	20	obl	_	_
19	Babylona	Babylon	PROPN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	18	nmod	_	_
20	započał	započeć	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
21	a	a	CCONJ	_	_	22	cc	_	_
22	zda	zdać	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	conj	_	_
23	so	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	22	expl:pv	_	SpaceAfter=No
24	,	,	PUNCT	_	_	36	punct	_	_
25	zo	zo	SCONJ	_	_	36	mark	_	_
26	to	to	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	36	nsubj	_	_
27	bě	być	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	36	cop	_	_
28	ze	z	ADP	_	_	29	case	_	_
29	změnu	změna	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	36	nmod	_	_
30	hydrologiskeho	hydrologiski	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	31	amod	_	_
31	systema	system	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	29	nmod	_	_
32	w	w	ADP	_	_	29	nmod	_	_
33	času	čas	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	32	fixed	_	_
34	knjejstwa	knjejstwo	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	32	nmod	_	_
35	Samsuiluny	Samsuiluna	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	34	nmod	_	_
36	zwjazane	zwjazany	ADJ	_	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	22	ccomp	_	SpaceAfter=No
37	.	.	PUNCT	_	_	20	punct	_	_

~~~


