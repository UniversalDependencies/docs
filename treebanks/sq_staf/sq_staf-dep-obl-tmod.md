---
layout: base
title:  'Statistics of obl:tmod in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="sq_staf-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="sq_staf-dep-obl-agent.html">obl:agent</a></tt>.

11 nodes (0%) are attached to their parents as `obl:tmod`.

8 instances of `obl:tmod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.81818181818182.

The following 3 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (8; 73% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADV.html">ADV</a></tt> (2; 18% instances), <tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 obl:tmod	color:blue
1	Nja	nja	DET	_	Definite=Ind	2	det	_	_
2	shtatë	shtatë	NUM	_	NumType=Card	5	nummod	_	_
3	-	-	PUNCT	_	_	2	punct	_	_
4	tetë	tetë	NUM	_	NumType=Card	2	compound	_	_
5	muaj	muaj	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	10	obl:tmod	_	_
6	më	më	PART	_	_	5	advmod	_	_
7	parë	parë	ADV	_	_	6	fixed	_	_
8	ne	ne	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
9	u	u	AUX	_	_	10	aux	_	_
10	grindëm	grind	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Past	0	root	_	_
11	keq	keq	ADV	_	_	10	advmod	_	_
12	,	,	PUNCT	_	_	10	punct	_	_
13	dua	duan	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	10	parataxis	_	_
14	të	të	PART	_	_	15	mark	_	_
15	them	thënë	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	13	xcomp	_	_
16	unë	unë	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	appos	_	_
17	dhe	dhe	CCONJ	_	_	19	cc	_	_
18	im	unë	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	19	det:poss	_	_
19	atë	atë	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	16	conj	_	_
20	.	_	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:tmod	color:blue
1	Një	një	DET	_	Definite=Ind	2	det	_	end_char=202|start_char=199
2	dhëmb	dhëmb	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	8	obj	_	end_char=208|start_char=203
3	të	të	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	4	det:adj	_	end_char=211|start_char=209
4	mirë	mirë	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	end_char=216|start_char=212
5	do	do	PART	_	_	8	mark	_	end_char=219|start_char=21
6	të	të	PART	_	_	8	mark	_	_
7	e	ai	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	hajë	haj	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=227|start_char=223
9	sot	sot	ADV	_	AdvType=Tim	8	obl:tmod	_	end_char=231|start_char=228
10	kapedani	kapedan	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	end_char=240|start_char=232
11	unë	unë	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	appos	_	end_char=244|SpaceAfter=No|start_char=241
12	.	.	PUNCT	_	_	8	punct	_	end_char=245|start_char=244

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 obl:tmod	color:blue
1	Sot	sot	ADV	_	AdvType=Tim	6	advmod	_	end_char=1911|start_char=1908
2	në	në	ADP	_	_	3	case	_	end_char=1914|start_char=1912
3	mëngjes	mëngje	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	6	obl:tmod	_	end_char=1922|start_char=1915
4	ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	6	cop	_	end_char=1928|start_char=1923
5	në	në	ADP	_	_	6	case	_	end_char=1931|start_char=1929
6	Tibet	Tibet	PROPN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	end_char=1938|start_char=1937
8	besoj	besoj	VERB	_	_	6	parataxis	_	end_char=1944|start_char=1939
9	të	të	PART	_	_	11	mark	_	end_char=1947|start_char=1945
10	kesh	kam	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	aux	_	end_char=1952|start_char=1948
11	dëgjuar	dëgjoj	VERB	_	VerbForm=Part	8	ccomp	_	end_char=1960|start_char=1953
12	për	për	ADP	_	_	14	case	_	end_char=1964|start_char=1961
13	atë	ai	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	14	det	_	end_char=1968|start_char=1965
14	vend	vend	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	11	obl	_	end_char=1973|SpaceAfter=No|start_char=1969
15	,	,	PUNCT	_	_	20	punct	_	end_char=1974|start_char=1973
16	ku	ku	ADV	_	AdvType=Loc	20	advmod	_	end_char=1977|start_char=1975
17	një	një	DET	_	Definite=Ind	18	det	_	end_char=1981|start_char=1978
18	njeri	njeri	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	20	nsubj	_	end_char=1987|start_char=1982
19	i	i	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	iobj	_	end_char=1989|start_char=1988
20	sundon	sundoj	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	14	acl:relcl	_	end_char=1996|start_char=1990
21	si	si	SCONJ	_	_	22	mark	_	end_char=1999|start_char=1997
22	do	dua	VERB	_	_	20	advcl	_	end_char=2002|start_char=2000
23	vetë	vetë	PRON	_	PronType=Prs|Reflex=Yes	22	nsubj	_	SpaceAfter=No
24	,	,	PUNCT	_	_	27	punct	_	end_char=2008|start_char=2007
25	të	të	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Art	26	det:pron	_	end_char=2011|start_char=2009
26	gjithë	gjithë	PRON	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	27	det	_	end_char=2018|start_char=2012
27	njerëzit	njeri	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	20	obj	_	end_char=2027|start_char=2019
28	e	e	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Art	29	det:pron	_	end_char=2029|start_char=2028
29	tjerë	tjetër	PRON	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Ind	27	det	_	SpaceAfter=No
30	,	,	PUNCT	_	_	35	punct	_	end_char=2036|start_char=2035
31	si	si	SCONJ	_	_	35	mark	_	end_char=2039|start_char=2037
32	të	të	PART	_	_	35	mark	_	end_char=2042|start_char=2040
33	mos	mos	PART	_	_	35	advmod	_	end_char=2046|start_char=2043
34	ishin	jam	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	35	cop	_	end_char=2052|start_char=2047
35	njerëz	njeri	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	20	advcl	_	end_char=2059|SpaceAfter=No|start_char=2053
36	,	,	PUNCT	_	_	37	punct	_	end_char=2060|start_char=2059
37	e	e	CCONJ	_	_	42	cc	_	end_char=2062|start_char=2061
38	sot	sot	ADV	_	AdvType=Tim	42	advmod	_	end_char=2066|start_char=2063
39	në	në	ADP	_	_	40	case	_	end_char=2069|start_char=2067
40	mbrëmje	mbrëmje	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	42	obl:tmod	_	end_char=2077|start_char=2070
41	është	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	42	aux	_	end_char=2083|start_char=2078
42	kthyer	kthej	VERB	_	VerbForm=Part	6	conj	_	end_char=2090|start_char=2084
43	në	në	ADP	_	_	44	case	_	end_char=2093|start_char=2091
44	Vajazan	Vajazan	PROPN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	42	obl	_	SpaceAfter=No
45	,	,	PUNCT	_	_	55	punct	_	end_char=2102|start_char=2101
46	ku	ku	ADV	_	AdvType=Loc	55	mark	_	end_char=2105|start_char=2103
47	disa	disa	PRON	_	PronType=Ind	48	det	_	end_char=2110|start_char=2106
48	njerëz	njeri	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	55	nsubj	_	end_char=2117|start_char=2111
49	të	të	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Art	50	det:adj	_	end_char=2120|start_char=2118
50	huaj	huaj	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	48	amod	_	end_char=2125|start_char=2121
51	e	e	DET	_	Gender=Masc|Number=Plur	53	det	_	end_char=2127|start_char=2126
52	të	të	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Art	53	det	_	end_char=2130|start_char=2128
53	vendit	vend	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	48	nmod	_	end_char=2137|start_char=2131
54	i	i	PRON	_	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	55	obj	_	end_char=2139|start_char=2138
55	sundojnë	sundoj	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	44	acl:relcl	_	end_char=2148|start_char=2140
56	njerëzit	njeri	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	55	obj	_	end_char=2157|start_char=2149
57	e	e	DET	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Art	58	det:pron	_	end_char=2159|start_char=2158
58	tjerë	tjetër	PRON	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Ind	56	det	_	SpaceAfter=No
59	,	,	PUNCT	_	_	63	punct	_	end_char=2166|start_char=2165
60	si	si	SCONJ	_	_	63	mark	_	end_char=2169|start_char=2167
61	të	të	PART	_	_	63	mark	_	end_char=2172|start_char=2170
62	ishin	jam	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	63	cop	_	end_char=2178|start_char=2173
63	rrogëtarë	rrogëtar	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	55	advcl	_	end_char=2188|start_char=2179
64	të	të	DET	_	Gender=Masc|Number=Plur	65	det	_	end_char=2191|start_char=2189
65	tyre	tyre	PRON	_	Case=Acc|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	63	det:poss	_	SpaceAfter=No
66	!	!	PUNCT	_	_	6	punct	_	end_char=2197|start_char=2196

~~~


