---
layout: base
title:  'Statistics of aux in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="uk_parlamint-dep-aux-pass.html">aux:pass</a></tt>.

372 nodes (0%) are attached to their parents as `aux`.

273 instances of `aux` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29838709677419.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (357; 96% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Шановні	шановний	ADJ	ADJ	Case=Voc|Degree=Pos|Number=Plur	2	amod	_	_
2	колеги	колега	NOUN	NOUN	Animacy=Anim|Case=Voc|Gender=Fem,Masc|Number=Plur	8	vocative	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	ще	ще	ADV	ADV	_	5	advmod	_	_
5	раз	раз	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	будемо	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	8	aux	_	_
8	обговорювати	обговорювати	VERB	VERB	Aspect=Imp|VerbForm=Inf	0	root	_	_
9	це	цей	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	det	_	_
10	питання	питання	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	8	obj	_	SpaceAfter=No
11	?	?	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Це	це	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
2	було	бути	AUX	AUX	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	4	cop	_	_
3	б	б	AUX	AUX	Mood=Cnd	4	aux	_	_
4	логічно	логічно	ADV	ADV	Degree=Pos	0	root	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 aux	color:blue
1	Наші	наш	DET	DET	Case=Nom|Number=Plur|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
2	стратегічні	стратегічний	ADJ	ADJ	Case=Nom|Number=Plur	3	amod	_	_
3	партнери	партнер	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
4	мають	мати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	потужний	потужний	ADJ	ADJ	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
6	військовий	військовий	ADJ	ADJ	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	amod	_	_
7	потенціал	потенціал	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	_
8	і	і	CCONJ	CCONJ	_	17	cc	_	_
9	їхня	їхній	DET	DET	Case=Nom|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	_	_
10	присутність	присутність	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	17	nsubj	_	_
11	в	в	ADP	ADP	Case=Loc	13	case	_	_
12	Чорному	чорний	ADJ	ADJ	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	морі	море	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	10	nmod	_	_
14	була	бути	AUX	AUX	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	17	cop	_	_
15	би	би	AUX	AUX	Mood=Cnd	17	aux	_	_
16	стабілізуючим	стабілізуючий	ADJ	ADJ	Aspect=Imp|BadStyle=Yes|Case=Ins|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	17	amod	_	_
17	фактором	фактор	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	conj	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


