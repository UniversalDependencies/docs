---
layout: base
title:  'Statistics of aux in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="be-dep-aux-pass.html">aux:pass</a></tt>.

32 nodes (0%) are attached to their parents as `aux`.

28 instances of `aux` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-AUX.html">AUX</a></tt> (25; 78% instances), <tt><a href="be-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be-pos-AUX.html">AUX</a></tt> (5; 16% instances), <tt><a href="be-pos-ADV.html">ADV</a></tt>-<tt><a href="be-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-PART.html">PART</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Пры	пры	ADP	IN	_	6	mark	_	_
2	чым	чым	SCONJ	IN	_	1	goeswith	_	_
3	гэтыя	гэты	DET	DT	Case=Nom|Number=Plur|PronType=Dem	4	det	_	_
4	рэкамендацыі	рэкамендацыя	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	_
5	будуць	быць	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	тычыцца	тычыцца	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	0	root	_	_
7	абодвух	абодва	NUM	CD	Case=Gen|Gender=Fem|NumType=Card	8	nummod	_	_
8	бакоў	бок	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Пры	пры	ADP	IN	_	2	case	_	_
2	гэтым	гэта	PRON	DT	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	6	obl	_	_
3	сірыйскія	сірыйскі	ADJ	JJL	Case=Nom|Degree=Pos|Number=Plur	4	amod	_	_
4	прэпараты	прэпарат	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
5	будуць	быць	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	даступныя	даступны	ADJ	JJL	Case=Nom|Degree=Pos|Number=Plur	0	root	_	_
7	ў	ў	ADP	IN	_	9	case	_	_
8	беларускіх	беларускі	ADJ	JJL	Case=Loc|Degree=Pos|Number=Plur	9	amod	_	_
9	аптэках	аптэка	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Сёння	сёння	ADV	_	Degree=Pos	4	advmod	_	_
2	мне	я	PRON	_	Case=Dat|Number=Sing|Person=1	4	iobj	_	_
3	будзе	быць	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	дастаткова	дастаткова	ADV	_	Degree=Pos	0	root	_	_
5	прызнання	прызнанне	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	nsubj	_	_
6	з	з	ADP	_	_	8	case	_	_
7	боку	бок	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	fixed	_	_
8	аўдыторыі	аўдыторыя	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	буду	быць	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
11	спяваць	спяваць	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	conj	_	_
12	кампазіцыю	кампазіцыя	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	11	obj	_	_
13	з	з	ADP	_	_	14	case	_	_
14	рэпертуару	рэпертуар	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
15	Beyonce	Beyonce	PROPN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	4	punct	_	_

~~~


