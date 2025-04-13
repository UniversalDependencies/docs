---
layout: base
title:  'Statistics of nummod:gov in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-nummod.html">nummod</a></tt>.

150 nodes (0%) are attached to their parents as `nummod:gov`.

149 instances of `nummod:gov` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17333333333333.

The following 3 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (122; 81% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (26; 17% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod:gov	color:blue
1	Земельна	земельний	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	2	amod	_	_
2	реформа	реформа	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	вже	вже	ADV	ADV	_	4	advmod	_	_
4	діє	діяти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	вступила	вступити	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	4	conj	_	_
7	в	в	ADP	ADP	Case=Acc	8	case	_	_
8	силу	сила	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	obl:arg	_	_
9	більше	більше	ADV	ADV	Degree=Cmp	12	advmod	_	_
10	як	як	SCONJ	SCONJ	_	9	fixed	_	_
11	пів	пів	NUM	NUM	Case=Acc|NumType=Card|Uninflect=Yes	12	nummod:gov	_	_
12	року	рік	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod:gov	color:blue
1	Двосторонній	двосторонній	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
2	товарообіг	товарообіг	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	більше	більше	ADV	ADV	Degree=Cmp	4	advmod	_	_
4	8,5	8,5	NUM	NUM	Case=Gen|NumType=Card	5	nummod	_	_
5	мільярда	мільярд	NOUN	NUM	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Card	6	nummod:gov	_	_
6	доларів	долар	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 50	bgColor:blue
# visual-style 50	fgColor:white
# visual-style 51	bgColor:blue
# visual-style 51	fgColor:white
# visual-style 51 50 nummod:gov	color:blue
1	І	і	CCONJ	CCONJ	_	4	cc	_	_
2	вчора	вчора	ADV	ADV	_	4	advmod	_	_
3	мені	я	PRON	PRON	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	4	iobj	_	_
4	жалілися	жалітися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Reflex=Yes|Tense=Past|VerbForm=Fin	0	root	_	_
5	ваші	ваш	DET	DET	Case=Nom|Number=Plur|Person=2|Poss=Yes|PronType=Prs	7	det	_	_
6	ж	ж	PART	PART	_	5	discourse	_	_
7	робітники	робітник	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	9	punct	_	_
9	звертаються	звертатися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
10	до	до	ADP	ADP	Case=Gen	11	case	_	_
11	мене	я	PRON	PRON	Animacy=Anim|Case=Gen|Number=Sing|Person=1|PronType=Prs	9	obl	_	_
12	і	і	CCONJ	CCONJ	_	13	cc	_	_
13	кажуть	казати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	conj	_	SpaceAfter=No
14	:	:	PUNCT	PUNCT	_	16	punct	_	_
15	20	20	NUM	NUM	Case=Nom|NumType=Card	16	nummod:gov	_	_
16	тис.	тис.	NUM	NUM	Abbr=Yes|Case=Gen|Number=Plur|NumType=Card	13	parataxis	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	19	punct	_	_
18	30	30	NUM	NUM	Case=Nom|NumType=Card	19	nsubj	_	_
19	було	бути	VERB	VERB	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	16	parataxis	_	_
20	на	на	ADP	ADP	Case=Acc	22	case	_	_
21	відбіркові	відбірковий	ADJ	ADJ	Animacy=Inan|Case=Acc|Number=Plur	22	amod	_	_
22	ігри	гра	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	19	obl	_	_
23	до	до	ADP	ADP	Case=Gen	24	case	_	_
24	олімпіади	олімпіада	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	22	nmod	_	SpaceAfter=No
25	,	,	PUNCT	PUNCT	_	29	punct	_	_
26	але	але	CCONJ	CCONJ	_	29	cc	_	_
27	у	у	ADP	ADP	Case=Gen	28	case	_	_
28	нас	ми	PRON	PRON	Animacy=Anim|Case=Gen|Number=Plur|Person=1|PronType=Prs	29	orphan	_	_
29	Олена	Олена	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv|Number=Sing	19	parataxis	_	_
30	Ковтун	Ковтун	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Fem|InflClass=Ind|NameType=Sur|Number=Sing	29	flat:name	_	SpaceAfter=No
31	,	,	PUNCT	PUNCT	_	32	punct	_	_
32	Тетяна	Тетяна	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv|Number=Sing	29	conj	_	_
33	Сарачинська	Сарачинська	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Sur|Number=Sing	32	flat:name	_	_
34	і	і	CCONJ	CCONJ	_	35	cc	_	_
35	Олександр	Олександр	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	29	conj	_	_
36	Дідух	Дідух	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	35	flat:name	_	_
37	є	бути	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	conj	_	_
38	умови	умова	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	37	nsubj	_	SpaceAfter=No
39	,	,	PUNCT	PUNCT	_	42	punct	_	_
40	що	що	SCONJ	SCONJ	_	42	mark	_	_
41	вони	вони	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	42	nsubj	_	_
42	пройдуть	пройти	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	38	acl	_	SpaceAfter=No
43	,	,	PUNCT	PUNCT	_	45	punct	_	_
44	і	і	CCONJ	CCONJ	_	45	cc	_	_
45	кажуть	казати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	conj	_	SpaceAfter=No
46	,	,	PUNCT	PUNCT	_	49	punct	_	_
47	що	що	SCONJ	SCONJ	_	49	mark	_	_
48	ви	ви	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=2|PronType=Prs	49	nsubj	_	_
49	знімаєте	знімати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	45	ccomp	_	_
50	10	10	NUM	NUM	Case=Acc|NumType=Card	51	nummod:gov	_	_
51	тис.	тис.	NUM	NUM	Abbr=Yes|Case=Gen|Number=Plur|NumType=Card	49	obj	_	SpaceAfter=No
52	,	,	PUNCT	PUNCT	_	53	punct	_	_
53	залишаєте	залишати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	49	conj	_	_
54	20	20	NUM	NUM	Case=Acc|NumType=Card	53	obj	_	SpaceAfter=No
55	.	.	PUNCT	PUNCT	_	19	punct	_	_

~~~


