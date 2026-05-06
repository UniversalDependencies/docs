---
layout: base
title:  'Statistics of compound in UD_Assamese-AiW'
udver: '2'
---

## Treebank Statistics: UD_Assamese-AiW: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="as_aiw-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="as_aiw-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="as_aiw-dep-compound-svc.html">compound:svc</a></tt>.

20 nodes (2%) are attached to their parents as `compound`.

20 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (18; 90% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="as_aiw-pos-NUM.html">NUM</a></tt>-<tt><a href="as_aiw-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	ৰাজহুৱা	ৰাজহুৱা	ADJ	_	_	2	amod	_	_
2	পথৰ	পথ	NOUN	_	Case=Gen|Number=Sing	3	nmod:poss	_	_
3	ওপৰত	ওপৰ	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
4	পূজা	পূজা	NOUN	_	Case=Nom|Number=Sing	5	compound	_	_
5	পেণ্ডেল	পেণ্ডেল	NOUN	_	Number=Sing	6	obj	_	_
6	সাজিব	সাজা	VERB	_	Tense=Fut|VerbForm=Inf	7	xcomp	_	_
7	নোৱাৰিব	পৰা	VERB	_	Mood=Ind|Polarity=Neg|Tense=Fut|VerbForm=Fin	0	root	_	_
8	।	।	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	ওপৰৰপৰা	ওপৰ	NOUN	_	Case=Abl	3	obl	_	_
2	ওলোমাই	ওলোমা	VERB	_	VerbForm=Conv	3	xcomp	_	_
3	থোৱা	থোৱা	VERB	_	Tense=Past|VerbForm=Part	5	acl	_	_
4	এশাৰী	এক	NUM	_	NumType=Card	5	compound	_	_
5	চাকিয়ে	চাকি	NOUN	_	Case=Erg|Number=Sing	9	nsubj	_	_
6	ঘৰটো	ঘৰ	NOUN	_	Case=Acc|Definite=Def|Number=Sing	9	obj	_	_
7	পোহৰ	পোহৰ	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	কৰি	কৰা	VERB	_	VerbForm=Conv	9	compound:svc	_	_
9	ৰাখিছিল	ৰাখা	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
10	।	।	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 compound	color:blue
1	মই	মই	PRON	_	Gender=Fem|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
2	নিশ্চয়	নিশ্চয়	ADV	_	_	5	advmod	_	_
3	পৃথিৱীৰ	পৃথিৱী	NOUN	_	Case=Gen	4	nmod:poss	_	_
4	মাজভাগমান	মাজভাগ	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
5	পাইছোঁহি	পোৱা	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	।	।	PUNCT	_	_	5	punct	_	_
7	কিমান	কিমান	DET	_	PronType=Int	8	det	_	_
8	দূৰ	দূৰ	NOUN	_	Case=Nom|Number=Sing	9	obl	_	_
9	আহিলোঁ	আহা	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	parataxis	_	_
10	,	,	PUNCT	_	_	9	punct	_	_
11	ভাবি	ভাবা	VERB	_	Tense=Pres|VerbForm=Conv	12	advcl	_	_
12	চাওঁ	চোৱা	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
13	বাৰু	বাৰু	PART	_	_	12	discourse	_	_
14	।	।	PUNCT	_	_	9	punct	_	_
15	চাৰি	চাৰি	NUM	_	_	16	compound	_	_
16	হাজাৰ	হাজাৰ	NUM	_	_	17	nummod	_	_
17	মাইলমানেই	মাইল	NOUN	_	Number=Plur	9	parataxis	_	_
18	হ’বলা	হওঁ	AUX	_	Mood=Ind|Tense=Fut|VerbForm=Fin	17	cop	_	_
19	।	।	PUNCT	_	_	17	punct	_	_
20	”	”	PUNCT	_	_	5	punct	_	_

~~~


