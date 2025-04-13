---
layout: base
title:  'Statistics of flat in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `flat`

This relation is universal.
There are 5 language-specific subtypes of `flat`: <tt><a href="uk_parlamint-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="uk_parlamint-dep-flat-name.html">flat:name</a></tt>, <tt><a href="uk_parlamint-dep-flat-range.html">flat:range</a></tt>, <tt><a href="uk_parlamint-dep-flat-repeat.html">flat:repeat</a></tt>, <tt><a href="uk_parlamint-dep-flat-title.html">flat:title</a></tt>.

12 nodes (0%) are attached to their parents as `flat`.

12 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `flat`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (6; 50% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (5; 42% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


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
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 flat	color:blue
1	В	в	ADP	ADP	Case=Acc	3	case	_	_
2	незаконний	незаконний	ADJ	ADJ	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	amod	_	_
3	спосіб	спосіб	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obl	_	_
4	закриті	закритий	ADJ	ADJ	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
5	п'ять	п'ять	NUM	NUM	Case=Acc|NumType=Card	8	nummod:gov	_	_
6	незалежних	незалежний	ADJ	ADJ	Case=Gen|Degree=Pos|Number=Plur	8	amod	_	_
7	інформаційних	інформаційний	ADJ	ADJ	Case=Gen|Number=Plur	8	amod	_	_
8	телеканалів	телеканал	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No
9	:	:	PUNCT	PUNCT	_	10	punct	_	_
10	NewsOne	NewsOne	X	X	Foreign=Yes	8	appos	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	12	punct	_	_
12	ZIK	ZIK	X	X	Foreign=Yes	10	conj	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	15	punct	_	_
14	"	"	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No
15	112	112	NUM	NUM	Case=Nom|NumType=Card	10	conj	_	_
16	Україна	Україна	PROPN	PROPN	Animacy=Inan|Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	15	flat	_	SpaceAfter=No
17	"	"	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	19	punct	_	_
19	UKRLIFE	UKRLIFE	X	X	Foreign=Yes	10	conj	_	_
20	і	і	CCONJ	CCONJ	_	23	cc	_	_
21	"	"	PUNCT	PUNCT	_	23	punct	_	SpaceAfter=No
22	Перший	перший	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	23	amod	_	_
23	Незалежний	незалежний	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	10	conj	_	SpaceAfter=No
24	"	"	PUNCT	PUNCT	_	23	punct	_	SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


