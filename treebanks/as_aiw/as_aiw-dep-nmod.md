---
layout: base
title:  'Statistics of nmod in UD_Assamese-AiW'
udver: '2'
---

## Treebank Statistics: UD_Assamese-AiW: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="as_aiw-dep-nmod-poss.html">nmod:poss</a></tt>.

40 nodes (5%) are attached to their parents as `nmod`.

38 instances of `nmod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (35; 88% instances), <tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="as_aiw-pos-ADP.html">ADP</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	তাই	তাই	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	আকৌ	আকৌ	ADV	_	_	3	advmod	_	_
3	ভাবিলে	ভাবা	VERB	_	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	দেশখনৰ	দেশ	NOUN	_	Case=Gen|Definite=Def|Number=Sing	6	nmod	_	_
6	নামটো	নাম	NOUN	_	Case=Nom|Definite=Def|Number=Sing	8	obj	_	_
7	সিহঁতকতো	সিহঁত	PRON	_	Number=Plur|PronType=Prs	8	iobj	_	_
8	সুধিব	সোধা	VERB	_	VerbForm=Inf	9	xcomp	_	_
9	লাগিব	লাগা	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	3	ccomp	_	_
10	!	!	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	বাদুলিবোৰ	বাদুলি	NOUN	_	Case=Nom|Number=Plur	4	nsubj	_	_
2	দেখাত	দেখা	NOUN	_	Case=Loc	4	obl	_	_
3	নিগনিৰ	নিগনি	NOUN	_	Case=Gen|Number=Sing	4	nmod	_	_
4	নিচিনাই	নিচিনা	ADJ	_	_	0	root	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	জান	জানা	VERB	_	Aspect=Perf|Mood=Ind|Tense=Pres|VerbForm=Fin	7	xcomp	_	_
7	নহয়	হওঁ	VERB	_	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
8	তই	তই	PRON	_	Number=Sing|Person=2|PronType=Prs	7	nsubj	_	_
9	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod	color:blue
1	পূজা	পূজা	NOUN	_	Case=Nom|Number=Sing	2	compound	_	_
2	মণ্ডপৰ	মণ্ডপ	NOUN	_	Case=Gen|Number=Sing	5	nmod	_	_
3	আশে	আশে	ADP	_	_	5	compound:redup	_	_
4	-	-	PUNCT	_	_	5	punct	_	_
5	পাশে	পাশে	ADP	_	_	9	obl	_	_
6	বিশুদ্ধ	বিশুদ্ধ	ADJ	_	_	7	amod	_	_
7	খোৱাপানীৰ	খোৱাপানী	NOUN	_	Case=Gen|Number=Sing	8	nmod:poss	_	_
8	ব্যৱস্থা	ব্যৱস্থা	NOUN	_	Case=Acc|Number=Sing	9	obj	_	_
9	ৰাখিব	ৰাখা	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	0	root	_	_
10	।	।	PUNCT	_	_	9	punct	_	_

~~~


