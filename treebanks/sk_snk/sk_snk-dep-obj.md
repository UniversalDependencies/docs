---
layout: base
title:  'Statistics of obj in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `obj`

This relation is universal.

5270 nodes (5%) are attached to their parents as `obj`.

3674 instances of `obj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.90664136622391.

The following 22 pairs of parts of speech are connected with `obj`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (3336; 63% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (1190; 23% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (342; 6% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (248; 5% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (60; 1% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (33; 1% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (31; 1% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-X.html">X</a></tt> (7; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-PART.html">PART</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-SYM.html">SYM</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Koštunica	koštunica	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	nemá	mať	VERB	VKesc-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	čas	čas	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obj	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	2:case	_
2	prípade	prípad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	9:obl:v:loc	SpaceAfter=No
3	,	,	PUNCT	ZIP	_	5	punct	5:punct	_
4	že	že	SCONJ	O	_	5	mark	5:mark	_
5	nebudú	byť	VERB	VBepc-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin	2	acl	2:acl:že	_
6	ani	ani	PART	T	_	7	advmod:emph	7:advmod:emph	_
7	dedičia	dedič	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	5:nsubj	SpaceAfter=No
8	,	,	PUNCT	ZIP	_	5	punct	5:punct	_
9	nahradia	nahradiť	VERB	VKdpc+	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
10	ich	on	PRON	PFmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	9	obj	9:obj	_
11	univerzity	univerzita	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	9:nsubj	SpaceAfter=No
12	.	.	PUNCT	ZIP	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obj	color:blue
1	Môžete	môcť	VERB	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
2	to	to	DET	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	4:obj	_
3	ďaleko	ďaleko	ADV	Dx	Degree=Pos	4	advmod	4:advmod	_
4	dotiahnuť	dotiahnuť	VERB	VId+	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	SpaceAfter=No
5	.	.	PUNCT	ZIP	_	1	punct	1:punct	_

~~~


