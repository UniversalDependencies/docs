---
layout: base
title:  'Statistics of acl in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ru_taiga-dep-acl-relcl.html">acl:relcl</a></tt>.

93 nodes (0%) are attached to their parents as `acl`.

68 instances of `acl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.49462365591398.

The following 16 pairs of parts of speech are connected with `acl`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (51; 55% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (16; 17% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (6; 6% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	Счастье	счастье	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
2	это	это	PART	_	_	3	cop	_	_
3	качество	качество	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	не	не	PART	_	Polarity=Neg	6	advmod	_	_
6	имеющее	иметь	VERB	_	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	3	acl	_	_
7	будущего	будущее	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	obj	_	_
8	и	и	CCONJ	_	_	9	cc	_	_
9	прошлого	прошлое	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 acl	color:blue
1	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
2	Кто	кто	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	голосует	голосовать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl	_	_
4	за	за	ADP	_	_	5	case	_	_
5	ПАРНАС	ПАРНАС	PROPN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obl	_	_
6	-	-	PUNCT	_	_	3	punct	_	_
7	Тому	тот	PRON	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	10	iobj	_	_
8	любая	любой	DET	_	Case=Nom|Gender=Fem|Number=Sing	9	det	_	_
9	баба	баба	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
10	даст	дать	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	!	!	PUNCT	_	_	10	punct	_	SpaceAfter=No
12	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
13	")))	")))	SYM	_	_	10	discourse	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	4	nsubj	_	_
2	за	за	ADP	_	_	3	case	_	_
3	деньги	деньги	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	4	obl	_	_
4	готов	готовый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	_
5	получать	получать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	xcomp	_	_
6	сам	сам	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	acl	_	_
7	и	и	CCONJ	_	_	8	cc	_	_
8	раздавать	раздавать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	5	conj	_	_
9	другим	другой	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	8	iobj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


