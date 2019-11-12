---
layout: base
title:  'Statistics of appos in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `appos`

This relation is universal.

210 nodes (2%) are attached to their parents as `appos`.

210 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.46666666666667.

The following 15 pairs of parts of speech are connected with `appos`: <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (151; 72% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (30; 14% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-X.html">X</a></tt> (6; 3% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="be_hse-pos-DET.html">DET</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-SYM.html">SYM</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Закон	закон	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	Рэспублiкi	рэспублiка	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
3	Беларусь	Беларусь	PROPN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	appos	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Ідэальнае	Ідэальны	ADJ	ORD	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	_
2	месца	месца	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	для	для	ADP	IN	_	5	case	_	_
4	мускуснага	мускусны	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	пацука	пацук	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
6	—	-	PUNCT	PUNCT	_	7	punct	_	_
7	андатры	андатра	NOUN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	5	appos	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	Група	група	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	Litesound	litesound	X	X	Foreign=Yes	1	appos	_	_
3	ужо	ужо	ADV	RB	Degree=Pos	4	advmod	_	_
4	прыступіла	прыступіць	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	да	да	ADP	IN	_	6	case	_	_
6	запісу	запіс	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	obl	_	_
7	песні	песня	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
9	We	we	X	X	Foreign=Yes	7	appos	_	_
10	Are	are	X	X	Foreign=Yes	9	flat:foreign	_	_
11	The	the	X	X	Foreign=Yes	9	flat:foreign	_	_
12	Heroes	heroes	X	X	Foreign=Yes	9	flat:foreign	_	SpaceAfter=No
13	"	"	PUNCT	PUNCT	_	9	punct	_	_
14	(	(	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
15	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
16	Мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	18	nsubj	_	_
17	--	--	PUNCT	PUNCT	_	18	punct	_	_
18	героі	герой	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	9	parataxis	_	SpaceAfter=No
19	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
20	)	)	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


