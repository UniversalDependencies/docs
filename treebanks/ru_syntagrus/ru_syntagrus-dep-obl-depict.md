---
layout: base
title:  'Statistics of obl:depict in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `obl:depict`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_syntagrus-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_syntagrus-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_syntagrus-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_syntagrus-dep-obl-tmod.html">obl:tmod</a></tt>.

3 nodes (0%) are attached to their parents as `obl:depict`.

3 instances of `obl:depict` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `obl:depict`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (2; 67% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:depict	color:blue
1	Молочные	молочный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	4	nsubj	4:nsubj	_
2	у	у	ADP	_	_	3	case	3:case	_
3	него	он	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obl	4:obl:у:gen	_
4	сменились	смениться	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	0:root	_
5	поздно	поздно	ADV	_	Degree=Pos	4	advmod	4:advmod	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	9:punct	_
7	а	а	CCONJ	_	_	9	cc	9:cc	_
8	новые	новый	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	9	nsubj	9:nsubj	_
9	выросли	вырасти	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	_
10	какие-то	какой-то	DET	_	Case=Nom|Number=Plur|PronType=Ind	12	det	12:det	_
11	не	не	PART	_	_	12	advmod	12:advmod	_
12	такие	такой	DET	_	Case=Nom|Number=Plur|PronType=Dem	9	obl:depict	9:obl:nom	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	14:punct	_
14	бахромчатые	бахромчатый	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	12	conj	9:det|12:conj	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	17:punct	_
16	с	с	ADP	_	_	17	case	17:case	_
17	зазубринами	зазубрина	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	12	conj	9:det|12:conj	SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	20:punct	_
19	вроде	вроде	ADP	_	_	20	case	20:case	_
20	пилы	пила	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	12	conj	9:det|12:conj	SpaceAfter=No
21	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:depict	color:blue
1	Он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	лежал	лежать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	аккуратный	аккуратный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	obl:depict	2:obl:nom	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	6:punct	_
5	где	где	ADV	_	Degree=Pos|PronType=Rel	6	advmod	6:advmod	pos="ADVPRO"|_
6	положено	положенный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	2	advcl	2:advcl	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	8:punct	_
8	готовый	готовый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	conj	2:obl:nom|3:conj	_
9	исчезнуть	исчезнуть	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	xcomp	8:xcomp	_
10	под	под	ADP	_	_	11	case	11:case	_
11	землей	земля	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	9	obl	9:obl:под:ins	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	15:punct	_
13	а	а	CCONJ	_	_	15	cc	15:cc	_
14	рядом	рядом	ADV	_	Degree=Pos	15	advmod	15:advmod	_
15	стоял	стоять	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
16	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	15	nsubj	15:nsubj	_
17	и	и	CCONJ	_	_	19	cc	19:cc	_
18	три	три	NUM	_	Case=Nom|NumForm=Word|NumType=Card	19	nummod:gov	19:nummod:gov	_
19	собаки	собака	NOUN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	16	conj	15:nsubj|16:conj	SpaceAfter=No
20	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


