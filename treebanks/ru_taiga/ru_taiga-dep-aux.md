---
layout: base
title:  'Statistics of aux in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ru_taiga-dep-aux-pass.html">aux:pass</a></tt>.

55 nodes (0%) are attached to their parents as `aux`.

30 instances of `aux` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92727272727273.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (21; 38% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (20; 36% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (6; 11% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (4; 7% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 aux	color:blue
1	За	за	ADP	_	_	2	case	_	_
2	партию	партия	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
3	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	Яблоко	Яблоко	PROPN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	2	appos	_	SpaceAfter=No
5	"	"	PUNCT	_	_	4	punct	_	_
6	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	9	nsubj	_	_
7	совершенно	совершенно	ADV	_	Degree=Pos	8	advmod	_	_
8	точно	точно	ADV	_	Degree=Pos	9	advmod	_	_
9	голосовать	голосовать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	_	_
10	не	не	PART	_	Polarity=Neg	9	advmod	_	_
11	буду	быть	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux	color:blue
1	Но	но	CCONJ	_	_	2	cc	_	_
2	есть	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	мужчина	мужчина	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	которого	который	PRON	_	Case=Acc	10	obj	_	_
6	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	8	nsubj	_	_
7	не	не	PART	_	Polarity=Neg	8	advmod	_	_
8	хотела	хотеть	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
9	бы	бы	PART	_	Mood=Cnd	8	aux	_	_
10	потерять	потерять	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	xcomp	_	SpaceAfter=No
11	...	...	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Пётр	Петр	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	и	и	CCONJ	_	_	3	cc	_	_
3	Мазепа	Мазепа	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	conj	_	_
4	-	-	PUNCT	_	_	6	punct	_	_
5	давайте	давать	VERB	_	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	6	aux	_	_
6	смотреть	смотреть	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	1	parataxis	_	_
7	на	на	ADP	_	_	9	case	_	_
8	наших	наш	DET	_	Animacy=Anim|Case=Acc|Number=Plur	9	det	_	_
9	политиков	политик	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	6	obl	_	_
10	вместе	вместе	ADV	_	Degree=Pos	6	advmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


