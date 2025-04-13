---
layout: base
title:  'Statistics of obl:agent in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="uk_parlamint-dep-obl-arg.html">obl:arg</a></tt>.

67 nodes (0%) are attached to their parents as `obl:agent`.

50 instances of `obl:agent` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17910447761194.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (30; 45% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (25; 37% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (5; 7% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (2; 3% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:agent	color:blue
1	Комітетом	комітет	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obl:agent	_	_
2	вона	вона	PRON	PRON	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
3	відхилена	відхилений	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 obl:agent	color:blue
1	В	в	ADP	ADP	Case=Loc	2	case	_	_
2	Одесі	Одеса	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	17	obl	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	наприклад	наприклад	ADV	ADV	_	17	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	дуже	дуже	ADV	ADV	Degree=Pos	7	advmod	_	_
7	велика	великий	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	частина	частина	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	17	nsubj	_	_
9	послуг	послуга	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	8	nmod	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	12	punct	_	_
11	які	який	DET	DET	Case=Nom|Number=Plur|PronType=Rel	12	nsubj	_	_
12	надаються	надаватися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
13	колишніми	колишній	ADJ	ADJ	Case=Ins|Number=Plur	14	amod	_	_
14	ЖКС	ЖКС	NOUN	PROPN	Abbr=Yes|Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	12	obl:agent	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	12	punct	_	_
16	зовсім	зовсім	ADV	ADV	_	17	advmod	_	_
17	неякісні	неякісний	ADJ	ADJ	Case=Nom|Number=Plur	0	root	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:agent	color:blue
1	Мною	я	PRON	PRON	Animacy=Anim|Case=Ins|Number=Sing|Person=1|PronType=Prs	3	obl:agent	_	_
2	було	бути	AUX	AUX	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	направлено	направити	VERB	VERB	Aspect=Perf|Mood=Ind|Person=0|VerbForm=Fin	0	root	_	_
4	листи	лист	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	3	obj	_	_
5	про	про	ADP	ADP	Case=Acc	6	case	_	_
6	створення	створення	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	4	nmod	_	_
7	ТСК	ТСК	PROPN	PROPN	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Fem|InflClass=Ind|Number=Sing	6	nmod	_	_
8	до	до	ADP	ADP	Case=Gen	11	case	_	_
9	усіх	увесь	DET	DET	Case=Gen|Number=Plur|PronType=Tot	11	det	_	_
10	депутатських	депутатський	ADJ	ADJ	Case=Gen|Number=Plur	11	amod	_	_
11	фракцій	фракція	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	_
12	та	та	CCONJ	CCONJ	_	13	cc	_	_
13	груп	група	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	11	conj	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	19	punct	_	_
15	проте	проте	CCONJ	CCONJ	_	19	cc	_	_
16	пропозиції	пропозиція	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	19	nsubj	_	_
17	щодо	щодо	ADP	ADP	Case=Gen	18	case	_	_
18	участі	участь	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
19	надійшли	надійти	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	3	conj	_	_
20	тільки	тільки	PART	PART	_	22	advmod:emph	_	_
21	від	від	ADP	ADP	Case=Gen	22	case	_	_
22	фракцій	фракція	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	19	obl	_	_
23	"	"	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No
24	Слуга	слуга	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Fem,Masc|Number=Sing	22	appos	_	_
25	народу	народ	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	24	nmod	_	SpaceAfter=No
26	"	"	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No
27	,	,	PUNCT	PUNCT	_	29	punct	_	_
28	"	"	PUNCT	PUNCT	_	29	punct	_	SpaceAfter=No
29	Батьківщина	Батьківщина	PROPN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	24	conj	_	SpaceAfter=No
30	"	"	PUNCT	PUNCT	_	29	punct	_	SpaceAfter=No
31	,	,	PUNCT	PUNCT	_	34	punct	_	_
32	від	від	ADP	ADP	Case=Gen	34	case	_	_
33	депутатської	депутатський	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	34	amod	_	_
34	групи	група	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	22	conj	_	_
35	"	"	PUNCT	PUNCT	_	36	punct	_	SpaceAfter=No
36	Довіра	Довіра	PROPN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	34	appos	_	SpaceAfter=No
37	"	"	PUNCT	PUNCT	_	36	punct	_	SpaceAfter=No
38	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


