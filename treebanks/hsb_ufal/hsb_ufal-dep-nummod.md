---
layout: base
title:  'Statistics of nummod in UD_Upper_Sorbian-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Upper_Sorbian-UFAL: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="hsb_ufal-dep-nummod-gov.html">nummod:gov</a></tt>.

193 nodes (2%) are attached to their parents as `nummod`.

127 instances of `nummod` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19689119170984.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="hsb_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hsb_ufal-pos-NUM.html">NUM</a></tt> (137; 71% instances), <tt><a href="hsb_ufal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hsb_ufal-pos-NUM.html">NUM</a></tt> (18; 9% instances), <tt><a href="hsb_ufal-pos-SYM.html">SYM</a></tt>-<tt><a href="hsb_ufal-pos-NUM.html">NUM</a></tt> (15; 8% instances), <tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb_ufal-pos-NUM.html">NUM</a></tt> (11; 6% instances), <tt><a href="hsb_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hsb_ufal-pos-NUM.html">NUM</a></tt> (5; 3% instances), <tt><a href="hsb_ufal-pos-X.html">X</a></tt>-<tt><a href="hsb_ufal-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="hsb_ufal-pos-NUM.html">NUM</a></tt>-<tt><a href="hsb_ufal-pos-NUM.html">NUM</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	W	w	ADP	_	_	4	case	_	_
2	14	14	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	_
4	lětstotku	lětstotk	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	obl	_	_
5	př	před	ADP	_	Abbr=Yes	9	case	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_
7	n	naš	DET	_	Abbr=Yes|Case=Ins|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	9	det	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_
9	l	lětoličba	NOUN	_	Abbr=Yes|Case=Ins|Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_
11	Assyriska	Assyriska	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	_
12	zaso	zaso	ADV	_	_	15	advmod	_	_
13	na	na	ADP	_	_	14	case	_	_
14	mocy	moc	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	15	obl	_	_
15	naby	nabyć	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	932	932	NUM	_	NumType=Card	5	obl	_	_
2	Heinrich	Heinrich	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
3	I	I	NUM	_	NumType=Card	2	nummod	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_
5	podćisnje	podćisnyć	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	serbskej	serbski	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Dual	7	amod	_	_
7	kmjenaj	kmjen	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Dual	5	obj	_	_
8	Łužičanow	Łužičan	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
9	a	a	CCONJ	_	_	10	cc	_	_
10	Milčanow	Milčan	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 nummod	color:blue
1	Nuhel	nuhel	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	16	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	_	_	10	punct	_	_
3	kotryž	kotryž	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	10	obj	_	_
4	dwaj	dwaj	NUM	_	Case=Nom|Gender=Fem|Number=Dual|NumType=Card	9	nummod	_	_
5	O	o	X	_	_	9	nmod	_	SpaceAfter=No
6	-	-	PUNCT	_	_	9	punct	_	SpaceAfter=No
7	H	h	X	_	_	9	nmod	_	SpaceAfter=No
8	-	-	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	wjazbaj	wjazba	NOUN	_	Case=Nom|Gender=Fem|Number=Dual	10	nsubj	_	_
10	začinitej	začinić	VERB	_	Mood=Ind|Number=Dual|Person=3|Tense=Pres|VerbForm=Fin	1	acl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	je	być	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	_
13	104	104	NUM	_	NumType=Card	16	nummod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	SpaceAfter=No
15	45	45	NUM	_	NumType=Card	13	compound	_	SpaceAfter=No
16	°	°	SYM	_	_	0	root	_	SpaceAfter=No
17	.	.	PUNCT	_	_	16	punct	_	_

~~~


