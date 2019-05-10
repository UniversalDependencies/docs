---
layout: base
title:  'Statistics of acl:relcl in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-acl.html">acl</a></tt>.

54 nodes (0%) are attached to their parents as `acl:relcl`.

44 instances of `acl:relcl` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.90740740740741.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (27; 50% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (5; 9% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	[...]	[...]	PUNCT	_	_	13	punct	_	_
2	свѣтлица	свѣтлица	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	казенки	казенка	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	2	conj	_	_
5	и	и	CCONJ	_	_	6	cc	_	_
6	суды	судъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	conj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	изъ	изъ	ADP	_	_	9	case	_	_
9	чево	что	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Rel	10	obl	_	_
10	пьютъ	пити	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	всѣ	весь	DET	_	Case=Nom|Gender=Masc|Number=Plur	13	acl	_	_
13	серебряные	серебреный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	0	root	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	золочены	золоченый	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Variant=Short	13	conj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Разумѣй	разумѣти	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	же	же	PART	_	_	9	advmod	_	_
3	сие	сей	DET	_	Case=Acc|Gender=Neut|Number=Sing	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	_	_
5	к	къ	ADP	_	_	6	case	_	_
6	чему	что	PRON	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Rel	9	obl	_	_
7	тебя	ты	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	9	obj	_	_
8	Курбской	Курбской	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
9	претворил	претворити	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	3	acl:relcl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	чтоб	чтобы	SCONJ	_	Mood=Cnd	13	mark	_	_
12	нас	мы	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	13	obj	_	_
13	погубити	погубити	VERB	_	Aspect=Perf|VerbForm=Inf	9	advcl	_	SpaceAfter=No
14	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 39 acl:relcl	color:blue
1	А	а	CCONJ	_	_	7	cc	_	_
2	межи	межи	ADP	_	_	3	case	_	_
3	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	4	nmod	_	_
4	рѡздѣл	роздѣлъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
5	землѣ	земля	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	4	nmod	_	_
6	по	по	ADP	_	_	7	case	_	_
7	рекꙋ	рѣка	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	0	root	_	_
8	по	по	ADP	_	_	9	case	_	_
9	Ѡкꙋ	Ока	PROPN	_	Case=Acc|Gender=Fem|Number=Sing	7	appos	_	SpaceAfter=No
10	,	,	PUNCT	_	_	43	punct	_	_
11	ѡт	отъ	ADP	_	_	12	case	_	_
12	Коломны	Коломна	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	41	acl	_	_
13	вверхъ	вверхъ	ADV	_	Degree=Pos	12	advmod	_	_
14	по	по	ADP	_	_	15	case	_	_
15	Ѡцѣ	Ока	PROPN	_	Case=Dat|Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	19	punct	_	_
17	на	на	ADP	_	_	19	case	_	_
18	Московскои	московский	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	19	amod	_	_
19	сторонѣ	сторона	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	12	conj	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	почен	поченъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	conj	_	_
22	Нѡвгородѡк	Новгородокъ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	21	appos	_	SpaceAfter=No
23	,	,	PUNCT	_	_	24	punct	_	_
24	Лужа	Лужа	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	12	conj	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	Вереа	Верея	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	12	conj	_	SpaceAfter=No
27	,	,	PUNCT	_	_	28	punct	_	_
28	Боровескъ	Боровьскъ/Боровскъ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	12	conj	_	SpaceAfter=No
29	,	,	PUNCT	_	_	31	punct	_	_
30	инаа	иной	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Variant=Long	31	amod	_	_
31	мѣста	мѣсто	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	12	conj	_	_
32	Резанскаа	резанский	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|Variant=Long	31	amod	_	SpaceAfter=No
33	,	,	PUNCT	_	_	39	punct	_	_
34	котораа	который	PRON	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Rel	39	nsubj	_	_
35	ни	ни	PART	_	Polarity=Neg	39	advmod	_	_
36	бꙋдꙋт	быти	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	39	cop	_	_
37	на	на	ADP	_	_	39	case	_	_
38	тои	тотъ	DET	_	Case=Loc|Gender=Fem|Number=Sing	39	det	_	_
39	сторонѣ	сторона	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	31	acl:relcl	_	SpaceAfter=No
40	,	,	PUNCT	_	_	39	punct	_	_
41	то	тотъ	DET	_	Case=Nom|Gender=Neut|Number=Sing	43	nsubj	_	_
42	к	къ	ADP	_	_	43	case	_	_
43	Москвѣ	Москва	PROPN	_	Case=Dat|Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
44	.	.	PUNCT	_	_	7	punct	_	_

~~~


