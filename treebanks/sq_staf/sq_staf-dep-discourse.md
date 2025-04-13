---
layout: base
title:  'Statistics of discourse in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `discourse`

This relation is universal.

4 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADV.html">ADV</a></tt> (1; 25% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PART.html">PART</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	A	a	INTJ	_	_	3	discourse	_	end_char=347|start_char=346
2	si	si	SCONJ	_	_	3	mark	_	end_char=350|start_char=348
3	gjoksi	gjoksi	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	end_char=357|start_char=351
4	i	i	DET	_	Gender=Masc|Number=Sing	6	det	_	end_char=359|start_char=358
5	të	të	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Art	6	det:adj	_	end_char=362|start_char=360
6	dashtunës	dashtunë	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	3	nmod:poss	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse	color:blue
1	Ç'	Ç'	PRON	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	SpaceAfter=No
2	të	të	PART	_	_	4	mark	_	end_char=2460|start_char=2456
3	ketë	kam	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	aux	_	end_char=2465|start_char=2461
4	pasur	kam	VERB	_	VerbForm=Part	0	root	_	end_char=2471|start_char=2466
5	vallë	vallë	ADV	_	AdvType=Deg	4	discourse	_	end_char=2477|start_char=2472
6	midis	midis	ADP	_	_	7	case	_	end_char=2483|start_char=2478
7	tyre	tyre	PRON	_	Case=Abl|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obl	_	SpaceAfter=No
8	?	?	PUNCT	_	_	4	punct	_	end_char=2489|start_char=2488

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Ja	Ja	INTJ	_	_	4	discourse	_	end_char=2216|SpaceAfter=No|start_char=2214
2	,	,	PUNCT	_	_	1	punct	_	end_char=2217|start_char=2216
3	përsëri	përsëri	ADV	_	AdvType=Tim	4	advmod	_	end_char=2225|start_char=2218
4	rashë	ras	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Act	0	root	_	end_char=2231|start_char=2226
5	brenda	brenda	ADV	_	AdvType=Loc	4	advmod	_	end_char=2238|start_char=2232
6	me	me	ADP	_	_	7	case	_	end_char=2241|start_char=2239
7	këmbët	këmbë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	4	obl	_	end_char=2248|start_char=2242
8	e	e	DET	_	Gender=Fem|Number=Plur	9	det	_	end_char=2250|start_char=2249
9	mia	ime	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	det:poss	_	end_char=2254|SpaceAfter=No|start_char=2251
10	,	,	PUNCT	_	_	4	punct	_	end_char=2255|start_char=2254
11	siç	siç	SCONJ	_	_	12	mark	_	end_char=2259|start_char=2256
12	bie	bie	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	advcl	_	end_char=2263|start_char=2260
13	miza	mizë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	end_char=2268|start_char=2264
14	në	në	ADP	_	_	15	case	_	end_char=2271|start_char=2269
15	rrjetën	rrjetë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	12	obl	_	end_char=2279|start_char=2272
16	e	e	DET	_	Gender=Fem|Number=Sing	17	det	_	end_char=2281|start_char=2280
17	merimangës	merimangë	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod:poss	_	end_char=2292|SpaceAfter=No|start_char=2282
18	.	.	PUNCT	_	_	4	punct	_	end_char=2293|start_char=2292

~~~


