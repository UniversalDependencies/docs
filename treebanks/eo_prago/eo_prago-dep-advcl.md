---
layout: base
title:  'Statistics of advcl in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="eo_prago-dep-advcl-relcl.html">advcl:relcl</a></tt>.

39 nodes (1%) are attached to their parents as `advcl`.

21 instances of `advcl` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 21.2820512820513.

The following 5 pairs of parts of speech are connected with `advcl`: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (30; 77% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt> (5; 13% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl	color:blue
1	Sed	sed	ADV	_	_	3	advmod	_	_
2	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	forĵetis	forĵeti	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	tiun	tiu	DET	_	Case=Acc|Number=Sing|PronType=Dem	5	det	_	_
5	intencon	intenco	NOUN	_	Case=Acc|Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	ĉar	ĉar	SCONJ	_	_	9	mark	_	_
8	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
9	trovis	trovi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	advcl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	15	punct	_	_
11	ke	ke	SCONJ	_	_	15	mark	_	_
12	tio	tio	PRON	_	Case=Nom|Number=Sing|PronType=Dem	15	nsubj	_	_
13	estus	esti	AUX	_	Mood=Sub|VerbForm=Fin	15	aux	_	_
14	nepardoninda	nepardoni	VERB	_	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	15	amod	_	_
15	senkuraĝeco	senkuraĝeco	NOUN	_	Case=Nom|Number=Sing	9	ccomp	_	SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advcl	color:blue
1	Sed	sed	SCONJ	_	_	9	mark	_	_
2	kia	kia	ADJ	_	Case=Nom|ExtPos=ADV|Number=Sing|PronType=Rel	9	advcl	_	_
3	ajn	ajn	PART	_	_	2	fixed	_	_
4	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	aux	_	_
5	mia	mia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	religio	religio	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
9	konfesas	konfesi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
10	ĝin	ĝi	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
11	laŭ	laŭ	ADP	_	_	14	case	_	_
12	la	la	DET	_	Definite=Def|PronType=Art	14	det	_	_
13	neŭtrale-homaj	neŭtrale-homa	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	14	amod	_	_
14	principoj	principo	NOUN	_	Case=Nom|Number=Plur	9	nmod	_	_
15	«	«	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	homaranaj	homarana	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	14	amod	_	SpaceAfter=No
17	»	»	PUNCT	_	_	16	punct	_	SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	_
19	kiuj	kiu	PRON	_	Case=Nom|Number=Sing|PronType=Rel	20	nsubj	_	_
20	konsistas	konsisti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	14	acl:relcl	_	_
21	en	en	ADP	_	_	22	case	_	_
22	jeno	jeno	NOUN	_	Case=Nom|Number=Sing	20	nmod	_	SpaceAfter=No
23	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 35 advcl	color:blue
1	Ĉar	ĉar	SCONJ	_	_	3	mark	_	_
2	oni	oni	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
3	konas	koni	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	14	advcl	_	_
4	min	mi	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
5	kiel	kiel	ADP	_	_	6	case	_	_
6	aŭtoron	aŭtoro	NOUN	_	Case=Acc|Number=Sing	3	obl	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	14	punct	_	_
10	tial	tial	ADV	_	_	11	advmod	_	_
11	multaj	multa	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	12	amod	_	_
12	personoj	persono	NOUN	_	Case=Nom|Number=Plur	14	nsubj	_	_
13	eble	eble	ADV	_	_	14	advmod	_	_
14	identigos	identigi	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	0	root	_	_
15	la	la	DET	_	Definite=Def|PronType=Art	16	det	_	_
16	Homaranismon	Homaranismo	PROPN	_	Case=Acc|Number=Sing	14	obj	_	_
17	kun	kun	ADP	_	_	18	case	_	_
18	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	14	obl	_	_
19	aŭ	aŭ	CCONJ	_	_	26	cc	_	_
20	kun	kun	ADP	_	_	26	case	_	_
21	la	la	DET	_	Definite=Def|PronType=Art	26	det	_	_
22	tiel	tiel	ADV	_	_	23	advmod	_	_
23	nomata	nomi	VERB	_	Case=Nom|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	26	amod	_	_
24	«	«	PUNCT	_	_	25	punct	_	SpaceAfter=No
25	interna	interna	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	26	amod	_	_
26	ideo	ideo	NOUN	_	Case=Nom|Number=Sing	18	conj	_	_
27	de	de	ADP	_	_	29	case	_	_
28	la	la	DET	_	Definite=Def|PronType=Art	29	det	_	_
29	Esperantismo	Esperantismo	NOUN	_	Case=Nom|Number=Sing	26	nmod	_	SpaceAfter=No
30	»	»	PUNCT	_	_	29	punct	_	SpaceAfter=No
31	;	;	PUNCT	_	_	35	punct	_	_
32	tio	tio	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	35	nsubj	_	_
33	tamen	tamen	ADV	_	_	35	advmod	_	_
34	estus	esti	AUX	_	Mood=Sub|VerbForm=Fin	35	aux	_	_
35	eraro	eraro	NOUN	_	Case=Nom|Number=Sing	14	advcl	_	SpaceAfter=No
36	.	.	PUNCT	_	_	14	punct	_	_

~~~


