---
layout: base
title:  'Statistics of acl:relcl in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ru-dep-acl.html">acl</a></tt>.

627 nodes (1%) are attached to their parents as `acl:relcl`.

625 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.08452950558214.

The following 22 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (463; 74% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (57; 9% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (22; 4% instances), <tt><a href="ru-pos-PRON.html">PRON</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (19; 3% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="ru-pos-DET.html">DET</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (12; 2% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru-pos-PRON.html">PRON</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru-pos-ADP.html">ADP</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-DET.html">DET</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ru-pos-PRON.html">PRON</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Дун	ДУН	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	захвачен	ЗАХВАТИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	якобитами	ЯКОБИТ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	3	obl:agent	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	которые	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Nom|Number=Plur	7	nsubj	_	_
7	устроили	УСТРОИТЬ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
8	в	В	ADP	IN	_	9	case	_	_
9	замке	ЗАМОК	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
10	тюрьму	ТЮРЬМА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 acl:relcl	color:blue
1	Аминта	АМИНТА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	cop	_	_
3	сыном	СЫН	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
4	царя	ЦАРЬ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	галатов	ГАЛАТ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	_
6	и	И	CCONJ	CC	_	7	cc	_	_
7	дочери	ДОЧЬ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	4	conj	_	_
8	Дейотара	ДЕЙОТАР	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	_	_
10	которому	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	12	iobj	_	_
11	Аминта	АМИНТА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
12	наследовал	НАСЛЕДОВАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 acl:relcl	color:blue
1	В	В	ADP	IN	_	3	case	_	_
2	последнем	ПОСЛЕДНИЙ	ADJ	JJL	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	amod	_	_
3	куплете	КУПЛЕТ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
4	рассказывается	РАССКАЗЫВАТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
5	про	ПРО	ADP	IN	_	6	case	_	_
6	женщину	ЖЕНЩИНА	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	,	_	13	punct	_	_
8	у	У	ADP	IN	_	9	case	_	_
9	которой	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	_
10	все	ВЕСЬ	DET	DT	Animacy=Anim|Case=Nom|Number=Plur	11	det	_	_
11	любовники	ЛЮБОВНИК	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	13	nsubj	_	_
12	были	БЫТЬ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	13	cop	_	_
13	несовершеннолетними	НЕСОВЕРШЕННОЛЕТНИЙ	ADJ	JJL	Animacy=Anim|Case=Ins|Number=Plur	6	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


