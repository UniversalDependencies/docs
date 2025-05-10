---
layout: base
title:  'Statistics of flat in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `flat`

This relation is universal.
There are 5 language-specific subtypes of `flat`: <tt><a href="uk_parlamint-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="uk_parlamint-dep-flat-name.html">flat:name</a></tt>, <tt><a href="uk_parlamint-dep-flat-range.html">flat:range</a></tt>, <tt><a href="uk_parlamint-dep-flat-repeat.html">flat:repeat</a></tt>, <tt><a href="uk_parlamint-dep-flat-title.html">flat:title</a></tt>.

15 nodes (0%) are attached to their parents as `flat`.

15 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06666666666667.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (8; 53% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (5; 33% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Прошу	просити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	підтримати	підтримати	VERB	VERB	Aspect=Perf|VerbForm=Inf	1	xcomp	_	_
3	постанову	постанова	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
4	№	№	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	4350	4350	NUM	NUM	Case=Nom|NumType=Card	4	flat	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	10	punct	_	_
7	яку	який	DET	DET	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	10	obj	_	_
8	я	я	PRON	PRON	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
9	зараз	зараз	ADV	ADV	PronType=Dem	10	advmod	_	_
10	оголосив	оголосити	VERB	VERB	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 flat	color:blue
1	Прийняття	прийняття	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
2	Закону	закон	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	України	Україна	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	2	nmod	_	_
4	є	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	необхідним	необхідний	ADJ	ADJ	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
6	для	для	ADP	ADP	Case=Gen	7	case	_	_
7	завершення	завершення	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	obl	_	_
8	перехідного	перехідний	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing	9	amod	_	_
9	періоду	період	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
10	до	до	ADP	ADP	Case=Gen	11	case	_	_
11	надання	надання	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	9	nmod	_	_
12	послуг	послуга	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	11	nmod	_	_
13	з	з	ADP	ADP	Case=Gen	14	case	_	_
14	управління	управління	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	12	nmod	_	_
15	багатоквартирним	багатоквартирний	ADJ	ADJ	Case=Ins|Gender=Masc|Number=Sing	16	amod	_	_
16	будинком	будинок	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	31	punct	_	_
18	адже	адже	SCONJ	SCONJ	_	31	mark	_	_
19	станом	стан	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	31	obl	_	_
20	на	на	ADP	ADP	Case=Acc	21	case	_	_
21	1	1	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing|NumType=Ord	19	nmod	_	_
22	жовтня	жовтень	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	21	flat	_	_
23	2021	2021	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	24	amod	_	_
24	року	рік	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	21	nmod	_	_
25	мешканці	мешканець	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	31	nsubj	_	_
26	майже	майже	ADV	ADV	_	27	advmod:emph	_	_
27	48	48	NUM	NUM	Case=Gen|NumType=Card	28	nummod:gov	_	_
28	тисяч	тисяча	NOUN	NUM	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur|NumType=Card	30	nummod:gov	_	_
29	багатоквартирних	багатоквартирний	ADJ	ADJ	Case=Gen|Number=Plur	30	amod	_	_
30	будинків	будинок	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	25	nmod	_	_
31	живуть	жити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	advcl	_	_
32	за	за	ADP	ADP	Case=Ins	34	case	_	_
33	попереднім	попередній	ADJ	ADJ	Case=Ins|Gender=Neut|Number=Sing	34	amod	_	_
34	законодавством	законодавство	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	31	obl	_	SpaceAfter=No
35	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 flat	color:blue
1	Так	так	ADV	ADV	PronType=Dem	11	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	у	у	ADP	ADP	Case=Acc	6	case	_	_
4	попередні	попередній	ADJ	ADJ	Animacy=Inan|Case=Acc|Number=Plur	6	amod	_	_
5	чотири	чотири	NUM	NUM	Case=Acc|NumType=Card	6	nummod	_	_
6	роки	рік	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	obl	_	_
7	фіксовані	фіксований	ADJ	ADJ	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	8	amod	_	_
8	заготівлі	заготівля	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	11	nsubj	_	_
9	ліквідної	ліквідний	ADJ	ADJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
10	деревини	деревина	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
11	зросли	зрости	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
12	з	з	ADP	ADP	Case=Gen	14	case	_	_
13	638	638	NUM	NUM	Case=Gen|NumType=Card	14	nummod	_	_
14	тис.	тис.	NOUN	NUM	Abbr=Yes|Case=Gen|Gender=Fem|Number=Plur|NumType=Card	21	nummod:gov	_	_
15	до	до	ADP	ADP	Case=Gen	19	case	_	_
16	1	1	NUM	NUM	Case=Gen|Gender=Masc|Number=Sing|NumType=Card	17	nummod	_	_
17	млн.	млн	NOUN	NUM	Abbr=Yes|Case=Gen|Gender=Masc|Number=Plur|NumType=Card	21	nummod:gov	_	_
18	55	55	NUM	NUM	Case=Gen|NumType=Card	19	nummod	_	_
19	тис.	тис.	NOUN	NUM	Abbr=Yes|Case=Gen|Gender=Fem|Number=Plur|NumType=Card	17	flat	_	_
20	щільних	щільний	ADJ	ADJ	Case=Gen|Degree=Pos|Number=Plur	21	amod	_	_
21	кубометрів	кубометр	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	11	obl	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	26	punct	_	_
23	в	в	ADP	ADP	Case=Loc|ExtPos=ADV	26	orphan	_	_
24	тому	той	DET	DET	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	23	fixed	_	_
25	числі	число	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	23	fixed	_	_
26	підрубок	підрубка	NOUN	NOUN	Animacy=Inan|BadStyle=Yes|Case=Gen|Gender=Fem|Number=Plur	21	conj	_	_
27	головного	головний	ADJ	ADJ	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	28	amod	_	_
28	користування	користування	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	26	nmod	_	_
29	із	із	ADP	ADP	Case=Gen	30	case	_	_
30	395-ти	395	NUM	NUM	BadStyle=Yes|Case=Gen|NumType=Card	34	nummod	_	_
31	до	до	ADP	ADP	Case=Gen	33	case	_	_
32	531	531	NUM	NUM	Case=Gen|Gender=Fem|Number=Sing|NumType=Card	33	nummod	_	_
33	тис.	тис.	NOUN	NUM	Abbr=Yes|Case=Gen|Gender=Fem|Number=Sing|NumType=Card	34	nummod	_	_
34	кубометрів	кубометр	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	26	orphan	_	SpaceAfter=No
35	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


