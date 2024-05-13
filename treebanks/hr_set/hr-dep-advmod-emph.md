---
layout: base
title:  'Statistics of advmod:emph in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="hr-dep-advmod.html">advmod</a></tt>.

43 nodes (0%) are attached to their parents as `advmod:emph`.

43 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02325581395349.

The following 3 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="hr-pos-NUM.html">NUM</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (40; 93% instances), <tt><a href="hr-pos-ADV.html">ADV</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="hr-pos-SYM.html">SYM</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:emph	color:blue
1	Zemlja	zemla	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	bila	biti	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	5	cop	_	_
4	bez	bez	ADP	_	Case=Gen	5	case	_	_
5	čelnika	čelnik	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	0	root	_	_
6	gotovo	gotovo	ADV	_	Degree=Pos	7	advmod:emph	_	_
7	tri	tri	NUM	_	Number=Plur|NumType=Card	8	nummod	_	_
8	godine	godina	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	5	nmod	_	SpaceAfter=No|ToDo=nmod
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:emph	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Već	već	ADV	_	Degree=Pos	3	advmod:emph	_	_
3	mnogo	mnogo	ADV	_	Degree=Pos|NumType=Card|PronType=Ind	4	det	_	_
4	godina	godina	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	5	obl	_	_
5	imamo	imati	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
6	takav	takav	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	sporazum	sporazum	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
8	sa	s	ADP	_	Case=Ins	9	case	_	_
9	Srbijom	Srbija	PROPN	_	Case=Ins|Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:emph	color:blue
1	Oko	oko	ADV	_	Degree=Pos	2	advmod:emph	_	_
2	30%	30%	SYM	_	NumType=Mult	17	obj	_	_
3	cijene	cijena	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	ToDo=nmod
4	izgradnje	izgradnja	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
5	muzeja	muzej	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
6	i	i	CCONJ	_	_	4	cc	_	ToDo=cc-without-conj
7	transporta	transport	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	case	_	_
8	izložaka	izložak	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
9	-	-	PUNCT	_	_	12	punct	_	_
10	što	što	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Int,Rel	12	nsubj	_	_
11	ukupno	ukupno	ADV	_	Degree=Pos	12	advmod	_	_
12	iznosi	iznositi	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
13	129	129	NUM	_	NumType=Card	14	compound	_	_
14	milijuna	milijun	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	12	obl	_	_
15	eura	euro	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	14	nmod	_	_
16	-	-	PUNCT	_	_	12	punct	_	_
17	pokriva	pokrivati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
18	EU	EU	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	17	nsubj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	17	punct	_	_

~~~


