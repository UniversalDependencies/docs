---
layout: base
title:  'Statistics of obl:float in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_syntagrus-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_syntagrus-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_syntagrus-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_syntagrus-dep-obl-tmod.html">obl:tmod</a></tt>.

16 nodes (0%) are attached to their parents as `obl:float`.

11 instances of `obl:float` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6875.

The following 4 pairs of parts of speech are connected with `obl:float`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (10; 63% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (4; 25% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (1; 6% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 obl:float	color:blue
1	Ноги	нога	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj	6:nsubj	_
2	у	у	ADP	_	_	3	case	3:case	_
3	него	он	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl	6:obl:у:gen	_
4	были	быть	AUX	_	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
5	уже	уже	ADV	_	Degree=Pos	6	advmod	6:advmod	_
6	горячие	горячий	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	11:punct	_
8	и	и	CCONJ	_	_	11	cc	11:cc	_
9	скоро	скоро	ADV	_	Degree=Pos	11	advmod	11:advmod	_
10	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	11:nsubj	_
11	согрелся	согреться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	6	conj	0:root|6:conj	_
12	весь	весь	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	11	obl:float	11:obl:nom	SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 obl:float	color:blue
1	И	и	CCONJ	_	_	3	cc	3:cc	_
2	Ушаков	Ушаков	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	3	nsubj	3:nsubj	_
3	полз	ползти	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	по	по	ADP	_	_	5	case	5:case	_
5	снегу	снег	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	3	obl	3:obl:по:dat	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	7:punct	_
7	приподымался	приподниматься	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	3	conj	0:root|3:conj	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	9:punct	_
9	падал	падать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	12:punct	_
11	опять	опять	ADV	_	Degree=Pos	12	advmod	12:advmod	_
12	полз	ползти	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	SpaceAfter=No
13	,	,	PUNCT	_	_	16	punct	16:punct	_
14	весь	весь	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	16	obl:float	16:obl:nom	_
15	в	в	ADP	_	_	16	case	16:case	_
16	снегу	снег	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	12	obl	12:obl:в:loc	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	18:punct	_
18	оставляя	оставлять	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	12	advcl	12:advcl	_
19	за	за	ADP	_	_	20	case	20:case	_
20	собой	себя	PRON	_	Case=Ins|PronType=Prs|Reflex=Yes	18	obl	18:obl:за:ins	_
21	широкий	широкий	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	23	amod	23:amod	_
22	кровавый	кровавый	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	23	amod	23:amod	_
23	след	след	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	18	obj	18:obj	SpaceAfter=No
24	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:float	color:blue
1	Монахов	Монахов	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	2	nsubj	2:nsubj	_
2	видел	видеть	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	его	он	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	2:obj	_
4	всего	весь	DET	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	3	obl:float	3:obl:acc	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	7:punct	_
6	но	но	CCONJ	_	_	7	cc	7:cc	_
7	воспринимал	воспринимать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
8	не	не	PART	_	_	9	advmod	9:advmod	_
9	все	всё	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	7	obj	7:obj	SpaceAfter=No
10	:	:	PUNCT	_	_	13	punct	7:punct	_
11	пока	пока	ADV	_	Degree=Pos	13	orphan	12.1:advmod	_
12	-	-	PUNCT	_	_	11	punct	11:punct	_
13	чемоданчик	чемоданчик	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	parataxis	12.1:obj	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


