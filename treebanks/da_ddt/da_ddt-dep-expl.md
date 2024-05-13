---
layout: base
title:  'Statistics of expl in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `expl`

This relation is universal.

441 nodes (0%) are attached to their parents as `expl`.

343 instances of `expl` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90929705215419.

The following 5 pairs of parts of speech are connected with `expl`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (429; 97% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	Der	der	PRON	_	_	2	expl	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	5	det	_	_
4	god	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	_	_
5	stemning	stemning	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
6	på	på	ADP	_	AdpType=Prep	9	case	_	_
7	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	9	det	_	_
8	danske	dansk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	9	amod	_	_
9	hold	hold	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	2	obl	_	_
10	inden	inden	ADP	_	AdpType=Prep	11	case	_	_
11	kampen	kamp	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 expl	color:blue
1	Hvis	hvis	SCONJ	_	_	7	mark	_	_
2	der	der	PRON	_	_	7	expl	_	_
3	overhovedet	overhovedet	ADV	_	_	7	advmod	_	_
4	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
5	nogen	nogen	DET	_	Gender=Com|Number=Sing|PronType=Ind	6	det	_	_
6	energi	energi	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	7	obj	_	_
7	tilbage	tilbage	ADV	_	_	0	root	_	_
8	i	i	ADP	_	AdpType=Prep	9	case	_	_
9	dig	du	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=2|PronType=Prs	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 3 expl	color:blue
1	"	"	PUNCT	_	_	33	punct	_	SpaceAfter=No
2	Hvis	hvis	SCONJ	_	_	33	mark	_	_
3	der	der	PRON	_	_	33	expl	_	_
4	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	33	advcl	_	_
5	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	8	det	_	_
6	nødvendige	nødvendig	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	8	amod	_	_
7	politiske	politisk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	8	amod	_	_
8	vilje	vilje	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	33	obj	_	_
9	til	til	ADP	_	AdpType=Prep	12	mark	_	_
10	både	både	ADV	_	_	12	advmod	_	_
11	at	at	PART	_	PartType=Inf	12	mark	_	_
12	bygge	bygge	VERB	_	VerbForm=Inf|Voice=Act	8	advcl	_	_
13	nyt	ny	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	12	obj	_	_
14	og	og	CCONJ	_	_	16	cc	_	_
15	at	at	PART	_	PartType=Inf	16	mark	_	_
16	bevilge	bevilge	VERB	_	VerbForm=Inf|Voice=Act	11	conj	_	_
17	penge	penge	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	16	obj	_	_
18	til	til	ADP	_	AdpType=Prep	19	case	_	_
19	driften	drift	NOUN	_	Definite=Def|Gender=Com|Number=Sing	16	obl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	8	punct	_	_
21	så	så	ADV	_	_	33	advmod	_	_
22	vil	ville	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	33	aux	_	_
23	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	24	det	_	_
24	udskillelse	udskillelse	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	33	nsubj	_	_
25	af	af	ADP	_	AdpType=Prep	26	case	_	_
26	skuespilafdelingen	skuespilafdeling	NOUN	_	Definite=Def|Gender=Com|Number=Sing	24	nmod	_	_
27	fra	fra	ADP	_	AdpType=Prep	28	case	_	_
28	Kgs.	Kongens	PROPN	_	_	24	nmod	_	_
29	Nytorv	Nytorv	PROPN	_	_	28	nmod:poss	_	_
30	være	være	AUX	_	VerbForm=Inf|Voice=Act	33	cop	_	_
31	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	33	det	_	_
32	naturlig	naturlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	33	amod	_	_
33	følge	følge	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
34	.	.	PUNCT	_	_	33	punct	_	SpaceAfter=No
35	"	"	PUNCT	_	_	33	punct	_	_

~~~


