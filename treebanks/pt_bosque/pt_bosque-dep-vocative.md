---
layout: base
title:  'Statistics of vocative in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `vocative`

This relation is universal.

16 nodes (0%) are attached to their parents as `vocative`.

8 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.875.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (7; 44% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (3; 19% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="pt_bosque-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="pt_bosque-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 vocative	color:blue
1	Eu	eu	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	precisava	precisar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
3	de	de	ADP	_	_	5	case	_	_
4	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	ajuda	ajuda	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	_
6	de	de	ADP	_	_	8	case	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	senhor	senhor	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	2	punct	_	_
10	deputado	deputado	NOUN	_	Gender=Masc|Number=Sing	2	vocative	_	_
11	...	...	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Alec	Alec	PROPN	_	Gender=Fem|Number=Sing	3	vocative	_	_
2	Eu	eu	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	quero	querer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	viver	viver	VERB	_	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	eu	eu	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	quero	querer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
8	não	não	ADV	_	Polarity=Neg	9	advmod	_	_
9	fazer	fazer	VERB	_	VerbForm=Inf	7	xcomp	_	_
10	nada	nada	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Gente	gente	NOUN	_	Gender=Fem|Number=Sing	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	cada	cada	DET	_	Gender=Masc|Number=Sing|PronType=Tot	5	det	_	_
5	piranhão	piranhão	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	!	!	PUNCT	_	_	5	punct	_	_

~~~


