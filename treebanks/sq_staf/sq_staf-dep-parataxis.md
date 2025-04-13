---
layout: base
title:  'Statistics of parataxis in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `parataxis`

This relation is universal.

36 nodes (1%) are attached to their parents as `parataxis`.

34 instances of `parataxis` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.97222222222222.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (20; 56% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (5; 14% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (4; 11% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 parataxis	color:blue
1	-	-	PUNCT	_	_	7	punct	_	end_char=2612|start_char=2611
2	Ndoshta	ndoshtë	ADV	_	_	7	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	end_char=2621|start_char=2620
4	do	do	PART	_	_	7	mark	_	end_char=2624|start_char=2622
5	të	të	PART	_	_	7	mark	_	_
6	e	aj	PRON	_	_	7	obj	_	_
7	gjejmë	gjej	VERB	_	Mood=Sub|Number=Plur|Person=1|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	end_char=2635|start_char=2634
9	-	-	PUNCT	_	_	7	punct	_	end_char=2637|start_char=2636
10	tha	them	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	7	parataxis	_	end_char=2641|start_char=2638
11	prifti	prift	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	10	nsubj	_	end_char=2648|start_char=2642
12	dhe	dhe	CCONJ	_	_	13	cc	_	end_char=2652|start_char=2649
13	uli	ulem	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	10	conj	_	end_char=2656|start_char=2653
14	sytë	sytë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	13	obj	_	SpaceAfter=No
15	.	.	PUNCT	_	_	7	punct	_	end_char=2662|start_char=2661

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Më	unë	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	_	end_char=889|start_char=887
2	rrethojnë	rrethoj	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=899|start_char=890
3	dy	dy	NUM	_	NumType=Card	4	nummod	_	end_char=902|start_char=900
4	gjëra	gjë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	2	nsubj	_	end_char=908|SpaceAfter=No|start_char=903
5	,	,	PUNCT	_	_	2	punct	_	end_char=909|start_char=908
6	përkujdesjet	përkujdesje	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	2	parataxis	_	end_char=922|start_char=910
7	dhe	dhe	CCONJ	_	_	8	cc	_	end_char=926|start_char=923
8	heshtja	heshtje	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	conj	_	end_char=934|SpaceAfter=No|start_char=927
9	.	.	PUNCT	_	_	2	punct	_	end_char=935|start_char=934

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 parataxis	color:blue
1	Është	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	cop	_	end_char=2106|start_char=2101
2	i	i	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	3	det:adj	_	end_char=2108|start_char=2107
3	bukur	bukur	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	end_char=2115|start_char=2114
5	mendoi	mendoj	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	end_char=2122|start_char=2116
6	gjenerali	gjeneral	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	end_char=2133|start_char=2132
8	tek	tek	SCONJ	_	_	9	mark	_	end_char=2137|start_char=2134
9	vështronte	vështroj	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	5	advcl	_	end_char=2148|start_char=2138
10	vjedhurazi	vjedhuraz	VERB	_	VerbForm=Part	9	advcl	_	end_char=2159|start_char=2149
11	profilin	profil	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	9	obj	_	end_char=2168|start_char=2160
12	e	e	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	13	det:adj	_	end_char=2170|start_char=2169
13	ngurtë	ngurtë	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	end_char=2177|start_char=2171
14	dhe	dhe	CCONJ	_	_	16	cc	_	end_char=2181|start_char=2178
15	të	të	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	16	det:adj	_	end_char=2184|start_char=2182
16	palëvizshëm	palëvizshëm	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	13	conj	_	end_char=2196|start_char=2185
17	të	të	DET	_	Gender=Masc|Number=Sing	18	det	_	end_char=2199|start_char=2197
18	tjetrit	tjetr	PRON	_	Case=Gen|Gender=Masc|Number=Plur|PronType=Ind	11	nmod:poss	_	SpaceAfter=No
19	.	.	PUNCT	_	_	5	punct	_	end_char=2208|start_char=2207

~~~


