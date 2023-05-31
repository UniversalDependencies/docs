---
layout: base
title:  'Statistics of nsubj:pass in UD_Upper_Sorbian'
udver: '2'
---

## Treebank Statistics: UD_Upper_Sorbian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hsb-dep-nsubj.html">nsubj</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:pass`.

1 instances of `nsubj:pass` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hsb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hsb-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	Klinowe	klinowy	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	2	amod	_	_
2	pismo	pismo	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	8	nsubj:pass	_	_
3	bu	być	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	8	aux:pass	_	_
4	2500	2500	NUM	_	NumType=Card	5	nummod:gov	_	_
5	lět	lěto	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	8	nmod	_	_
6	w	w	ADP	_	_	7	case	_	_
7	Mezopotamiskej	Mezopotamiska	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	8	nmod	_	_
8	nałožene	nałoženy	ADJ	_	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
9	a	a	CCONJ	_	_	10	cc	_	_
10	namaka	namakać	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	_
11	so	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	10	expl:pass	_	_
12	tež	tež	ADV	_	_	10	advmod	_	_
13	w	w	ADP	_	_	14	case	_	_
14	Syriskej	Syriska	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	10	obl	_	_
15	a	a	CCONJ	_	_	17	cc	_	_
16	pola	pola	ADP	_	_	17	case	_	_
17	Hetitow	Hetit	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	14	conj	_	_
18	kaž	kaž	SCONJ	_	_	22	cc	_	_
19	tež	tež	ADV	_	_	18	fixed	_	_
20	w	w	ADP	_	_	22	case	_	_
21	diplomatiskich	diplomatiski	ADJ	_	Case=Loc|Gender=Masc|Number=Plur	22	amod	_	_
22	archiwach	archiw	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	14	conj	_	_
23	Egyptowskeje	Egyptowska	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	22	nmod	_	SpaceAfter=No
24	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nsubj:pass	color:blue
1	W	w	ADP	_	_	2	case	_	_
2	lěće	lěto	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	5	obl	_	_
3	2006	2006	NUM	_	NumType=Card	2	nummod	_	_
4	bu	być	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	5	aux:pass	_	_
5	wunamakował	wunamakować	VERB	_	Animacy=Inan|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	nowy	nowy	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
7	šleski	šleski	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	alfabet	alfabet	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	kotryž	kotryž	DET	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	_
11	bazuje	bazować	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl	_	_
12	na	na	ADP	_	_	13	case	_	_
13	wšěch	wšě	DET	_	Case=Loc|Gender=Neut|Number=Plur|PronType=Tot	11	obj	_	_
14	ze	z	ADP	_	_	16	case	_	_
15	šleskich	šleski	ADJ	_	Case=Gen|Gender=Neut|Number=Plur	16	amod	_	_
16	pismow	pismo	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	13	nmod	_	_
17	(	(	PUNCT	_	_	18	punct	_	SpaceAfter=No
18	je	być	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	parataxis	_	_
19	10	10	NUM	_	NumType=Card	20	nummod:gov	_	_
20	pismow	pismo	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	18	nsubj	_	SpaceAfter=No
21	)	)	PUNCT	_	_	18	punct	_	SpaceAfter=No
22	.	.	PUNCT	_	_	5	punct	_	_

~~~


