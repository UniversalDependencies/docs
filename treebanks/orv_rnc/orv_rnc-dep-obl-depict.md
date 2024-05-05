---
layout: base
title:  'Statistics of obl:depict in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:depict`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_rnc-dep-obl-float.html">obl:float</a></tt>, <tt><a href="orv_rnc-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="orv_rnc-dep-obl-tmod.html">obl:tmod</a></tt>.

43 nodes (0%) are attached to their parents as `obl:depict`.

25 instances of `obl:depict` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.34883720930233.

The following 7 pairs of parts of speech are connected with `obl:depict`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (24; 56% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (11; 26% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:depict	color:blue
1	А	а	CCONJ	_	_	5	cc	_	_
2	жены	жена	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	_
3	деи	деи	PART	_	_	5	discourse	_	_
4	ваши	вашъ	DET	_	Case=Nom|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	2	det	_	_
5	ходят	ходити	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	простовласы	простовласый	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Variant=Short	5	obl:depict	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	непокровеными	непокровеный	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	_
9	главами	глава	NOUN	_	Case=Ins|Gender=Fem|Number=Plur	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 obl:depict	color:blue
1	Сынъ	сынъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	Norm="Сынъ"
2	же	же	PART	_	_	1	advmod	_	Norm="же"
3	его	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	det	_	Norm="его"
4	Владимеръ	Владимиръ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	1	appos	_	Norm="Владимеръ"
5	и	и	CCONJ	_	_	7	cc	_	Norm="и"
6	ко	къ	ADP	_	_	7	case	_	Norm="ко"
7	Царюграду	Царьградъ	PROPN	_	Case=Dat|Gender=Masc|NameType=Geo|Number=Sing	8	obl	_	Norm="Царюграду"
8	ходи	ходити	VERB	Tense=Aor	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Norm="ходи"
9	ратію	рать	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	8	iobj	_	Norm="ратію"|SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	Norm=","
11	отьцемъ	отецъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	12	obl:agent	_	Norm="отьцемъ"
12	посланъ	послати	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	8	obl:depict	_	Norm="посланъ"|SpaceAfter=No
13	.	.	PUNCT	_	_	8	punct	_	Norm="."

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 29 obl:depict	color:blue
1	И	и	CCONJ	_	_	30	cc	_	_
2	как	какъ	SCONJ	_	_	5	mark	_	_
3	божья	божий	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	4	amod	_	_
4	воля	воля	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
5	ссталася	состатися	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Mid	30	advcl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	13	punct	_	_
7	великого	великий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	князя	князь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	13	nsubj	_	_
9	Василия	Василий	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	8	appos	_	_
10	в	въ	ADP	_	_	11	case	_	_
11	животѣ	животъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	13	obl	_	_
12	не	не	PART	_	Polarity=Neg	13	advmod	_	_
13	стало	стати	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	5	conj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	5	punct	_	_
15	и	и	CCONJ	_	_	30	cc	_	_
16	божьею	божий	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	_
17	милостью	милость	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	30	obl	_	_
18	и	и	CCONJ	_	_	25	cc	_	_
19	великого	великий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	20	amod	_	_
20	государя	государь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
21	Василия	Василий	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	20	appos	_	_
22	Ивановича	Ивановичь	PROPN	_	Case=Gen|Gender=Masc|NameType=Pat|Number=Sing	21	flat:name	_	_
23	всеа	весь	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Tot	24	det	_	_
24	Русии	Русия	PROPN	_	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	21	nmod	_	_
25	благословением	благословение	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	17	conj	_	_
26	на	на	ADP	_	_	28	case	_	_
27	тѣх	тотъ	DET	_	Case=Loc|Gender=Neut|Number=Plur|PronType=Dem	28	det	_	_
28	государствех	государство	NOUN	_	Case=Loc|Gender=Neut|Number=Plur	30	obl	_	_
29	государемъ	государь	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	30	obl:depict	_	_
30	сѣл	сѣсти	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	_
31	сынъ	сынъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	30	nsubj	_	_
32	его	и	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	31	det	_	_
33	большои	большой	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	31	amod	_	_
34	князь	князь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	31	appos	_	_
35	великии	великий	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	34	amod	_	_
36	Иван	Иванъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	34	appos	_	_
37	Василиевич	Василиевичь	PROPN	_	Case=Nom|Gender=Masc|NameType=Pat|Number=Sing	36	flat:name	_	_
38	всеа	весь	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Tot	39	det	_	_
39	Русии	Русия	PROPN	_	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	36	nmod	_	_
40	и	и	CCONJ	_	_	41	cc	_	_
41	велѣлъ	велѣти	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	30	conj	_	_
42	быти	быти	VERB	_	VerbForm=Inf|Voice=Act	41	xcomp	_	_
43	у	у	ADP	_	_	44	case	_	_
44	собя	себя	PRON	_	Case=Gen|PronType=Prs|Reflex=Yes	42	obl	_	_
45	цареву	царевъ	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	47	amod	_	_
46	Саип-Гирѣеву	саипъ-гирѣевъ	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	47	amod	_	_
47	человѣку	человѣкъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	41	iobj	_	_
48	и	и	CCONJ	_	_	50	cc	_	_
49	Исламову	исламовъ	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	50	amod	_	_
50	человѣку	человѣкъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	47	conj	_	_
51	и	и	CCONJ	_	_	53	cc	_	_
52	их	и	PRON	_	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	53	obj	_	_
53	жаловал	жаловати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	41	conj	_	SpaceAfter=No
54	.	.	PUNCT	_	_	30	punct	_	_

~~~


