---
layout: base
title:  'Statistics of parataxis:rel in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `parataxis:rel`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-parataxis.html">parataxis</a></tt>.

4 nodes (0%) are attached to their parents as `parataxis:rel`.

4 instances of `parataxis:rel` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.75.

The following 3 pairs of parts of speech are connected with `parataxis:rel`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 parataxis:rel	color:blue
1	Лише	лише	PART	PART	_	5	advmod:emph	_	_
2	в	в	ADP	ADP	Case=Loc	5	case	_	_
3	цьому	цей	DET	DET	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
4	2003	2003	ADJ	ADJ	Case=Loc|Gender=Masc|Number=Sing|NumType=Ord	5	amod	_	_
5	році	рік	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
6	Держкомспорт	Держкомспорт	PROPN	PROPN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	отримує	отримувати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	100	100	NUM	NUM	Case=Acc|NumType=Card	9	nummod:gov	_	_
9	відсотків	відсоток	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	obj	_	_
10	бюджетних	бюджетний	ADJ	ADJ	Case=Gen|Number=Plur	11	amod	_	_
11	призначень	призначення	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	9	nmod	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	14	punct	_	_
13	що	що	SCONJ	PRON	PronType=Rel	14	nsubj	_	_
14	дозволяє	дозволяти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis:rel	_	_
15	нам	ми	PRON	PRON	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	14	iobj	_	_
16	в	в	ADP	ADP	Case=Loc	17	case	_	_
17	межах	межа	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	14	obl	_	_
18	цих	цей	DET	DET	Case=Gen|Number=Plur|PronType=Dem	20	det	_	_
19	невеликих	невеликий	ADJ	ADJ	Case=Gen|Number=Plur	20	amod	_	_
20	коштів	кошти	NOUN	NOUN	Animacy=Inan|Case=Gen|Number=Ptan	17	nmod	_	_
21	планово	планово	ADV	ADV	_	22	advmod	_	_
22	вести	вести	VERB	VERB	Aspect=Imp|VerbForm=Inf	14	xcomp	_	_
23	підготовку	підготовка	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	22	obj	_	_
24	і	і	CCONJ	CCONJ	_	25	cc	_	_
25	забезпечити	забезпечити	VERB	VERB	Aspect=Perf|VerbForm=Inf	22	conj	_	_
26	участь	участь	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	25	obj	_	_
27	наших	наш	DET	DET	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	28	det	_	_
28	спортсменів	спортсмен	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	26	nmod	_	_
29	у	у	ADP	ADP	Case=Loc	31	case	_	_
30	відбіркових	відбірковий	ADJ	ADJ	Case=Loc|Number=Plur	31	amod	_	_
31	змаганнях	змагання	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Plur	26	nmod	_	_
32	до	до	ADP	ADP	Case=Gen	33	case	_	_
33	олімпіади	олімпіада	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	31	nmod	_	SpaceAfter=No
34	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 14 parataxis:rel	color:blue
1	Для	для	ADP	ADP	Case=Gen	2	case	_	_
2	цього	це	PRON	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	4	obl	_	_
3	вкрай	вкрай	ADV	ADV	_	4	advmod	_	_
4	важливо	важливо	ADV	ADV	Degree=Pos	0	root	_	_
5	продемонструвати	продемонструвати	VERB	VERB	Aspect=Perf|VerbForm=Inf	4	csubj	_	_
6	реалізм	реалізм	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
7	в	а	CCONJ	CCONJ	_	9	case	_	_
8	кадровій	кадровий	ADJ	ADJ	Case=Loc|Gender=Fem|Number=Sing	9	amod	_	_
9	роботі	робота	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	14	punct	_	_
11	про	про	ADP	ADP	Case=Acc	12	case	_	_
12	що	що	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	14	obl	_	_
13	вже	вже	ADV	ADV	_	14	advmod	_	_
14	говорили	говорити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	parataxis:rel	_	_
15	наші	наш	DET	DET	Case=Nom|Number=Plur|Person=1|Poss=Yes|PronType=Prs	16	det	_	_
16	колеги	колега	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Fem,Masc|Number=Plur	14	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	19	punct	_	_
18	зокрема	зокрема	ADV	ADV	_	19	advmod	_	_
19	Ірина	Ірина	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv|Number=Sing	16	appos	_	_
20	Геращенко	Геращенко	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Fem|InflClass=Ind|NameType=Sur|Number=Sing	19	flat:name	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 parataxis:rel	color:blue
1	Прийняття	прийняття	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	закону	закон	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	про	про	ADP	ADP	Case=Acc	6	case	_	_
4	вільну	вільний	ADJ	ADJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
5	економічну	економічний	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	6	amod	_	_
6	зону	зона	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	nmod	_	_
7	в	в	ADP	ADP	Case=Loc	8	case	_	_
8	Криму	Крим	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	11	punct	_	_
10	що	що	SCONJ	SCONJ	_	11	mark	_	_
11	заспокоїть	заспокоїти	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	1	parataxis:rel	_	_
12	людей	людина	NOUN	NOUN	Animacy=Anim|Case=Acc|Gender=Fem|Number=Plur	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


