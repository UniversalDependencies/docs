---
layout: base
title:  'Statistics of nsubj:outer in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="uk_parlamint-dep-nsubj-pass.html">nsubj:pass</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:outer`.

5 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.6.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	Інше	інший	DET	DET	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	2	det	_	_
2	питання	питання	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	6	nsubj:outer	_	_
3	—	—	PUNCT	PUNCT	_	6	punct	_	_
4	коли	коли	ADV	ADV	PronType=Int	6	advmod	_	_
5	це	це	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	obj	_	_
6	робити	робити	VERB	VERB	Aspect=Imp|VerbForm=Inf	0	root	_	SpaceAfter=No
7	?	?	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:outer	color:blue
1	Основна	основний	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	2	amod	_	_
2	мета	мета	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj:outer	_	_
3	-	-	PUNCT	PUNCT	_	5	punct	_	_
4	тариф	тариф	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	повинен	повинний	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	0	root	_	_
6	бути	бути	AUX	AUX	Aspect=Imp|VerbForm=Inf	8	cop	_	_
7	економічно	економічно	ADV	ADV	_	8	advmod	_	_
8	обгрунтований	обгрунтований	ADJ	ADJ	Aspect=Perf|BadStyle=Yes|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	5	xcomp	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	11	punct	_	_
10	тариф	тариф	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
11	повинен	повинний	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	5	conj	_	_
12	бути	бути	AUX	AUX	Aspect=Imp|VerbForm=Inf	13	cop	_	_
13	прозорий	прозорий	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	xcomp	_	_
14	і	і	CCONJ	CCONJ	_	15	cc	_	_
15	головне	головне	NOUN	ADJ	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	conj	_	_
16	-	-	PUNCT	PUNCT	_	19	punct	_	_
17	ці	цей	DET	DET	Case=Nom|Number=Plur|PronType=Dem	18	det	_	_
18	порядки	порядок	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	19	nsubj	_	_
19	передбачають	передбачати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	parataxis	_	SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	26	punct	_	_
21	що	що	SCONJ	SCONJ	_	26	mark	_	_
22	підприємства	підприємство	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	26	nsubj	_	_
23	на	на	ADP	ADP	Case=Loc	24	case	_	_
24	місцях	місце	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Plur	22	nmod	_	_
25	не	не	PART	PART	Polarity=Neg	26	advmod:neg	_	_
26	мають	мати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	ccomp	_	_
27	права	право	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	26	obj	_	_
28	включати	включати	VERB	VERB	Aspect=Imp|VerbForm=Inf	27	acl	_	_
29	в	в	ADP	ADP	Case=Acc	30	case	_	_
30	собівартість	собівартість	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	28	obl	_	_
31	витрати	витрата	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	28	obj	_	SpaceAfter=No
32	,	,	PUNCT	PUNCT	_	35	punct	_	_
33	які	який	DET	DET	Case=Nom|Number=Plur|PronType=Rel	35	nsubj:pass	_	_
34	не	не	PART	PART	Polarity=Neg	35	advmod:neg	_	_
35	пов'язані	пов'язаний	ADJ	ADJ	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	31	acl:relcl	_	_
36	з	з	ADP	ADP	Case=Ins	37	case	_	_
37	виробництвом	виробництво	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	35	obl	_	_
38	основної	основний	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	39	amod	_	_
39	продукції	продукція	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	37	nmod	_	SpaceAfter=No
40	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 2 nsubj:outer	color:blue
1	І	і	CCONJ	CCONJ	_	17	cc	_	_
2	те	те	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	17	nsubj:outer	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	6	punct	_	_
4	що	що	SCONJ	SCONJ	_	6	mark	_	_
5	вони	вони	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	хочуть	хотіти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
7	зробити	зробити	VERB	VERB	Aspect=Perf|VerbForm=Inf	6	xcomp	_	_
8	зараз	зараз	ADV	ADV	PronType=Dem	7	advmod	_	_
9	в	в	ADP	ADP	Case=Loc	10	case	_	_
10	Україні	Україна	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	7	obl	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	6	punct	_	_
12	-	-	PUNCT	PUNCT	_	17	punct	_	_
13	це	це	PRON	PRON	PronType=Dem	17	expl	_	_
14	шляхом	шляхом	ADP	ADP	Case=Gen	15	case	_	_
15	шантажу	шантаж	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	17	obl	_	_
16	вони	вони	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	17	nsubj	_	_
17	хочуть	хотіти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
18	вирішити	вирішити	VERB	VERB	Aspect=Perf|VerbForm=Inf	17	xcomp	_	_
19	свої	свій	DET	DET	Animacy=Inan|Case=Acc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	21	det	_	_
20	стратегічні	стратегічний	ADJ	ADJ	Animacy=Inan|Case=Acc|Number=Plur	21	amod	_	_
21	питання	питання	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	18	obj	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	31	punct	_	_
23	на	на	ADP	ADP	Case=Acc	24	case	_	_
24	які	який	DET	DET	Animacy=Inan|Case=Acc|Number=Plur|PronType=Rel	32	obl	_	_
25	нам	ми	PRON	PRON	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	32	iobj	_	_
26	ні	ні	PART	PART	Polarity=Neg	29	advmod:neg	_	_
27	в	в	ADP	ADP	Case=Loc	29	case	_	_
28	якому	який	DET	DET	Case=Loc|Gender=Masc|Number=Sing|PronType=Ind	29	det	_	_
29	випадку	випадок	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	32	obl	_	_
30	не	не	PART	PART	Polarity=Neg	31	advmod:neg	_	_
31	можна	можна	ADV	ADV	_	21	acl:relcl	_	_
32	піддаватися	піддаватися	VERB	VERB	Aspect=Imp|Reflex=Yes|VerbForm=Inf	31	csubj	_	SpaceAfter=No
33	.	.	PUNCT	PUNCT	_	17	punct	_	_

~~~


