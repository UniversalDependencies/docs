---
layout: base
title:  'Statistics of compound:lvc in UD_Assamese-AiW'
udver: '2'
---

## Treebank Statistics: UD_Assamese-AiW: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="as_aiw-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="as_aiw-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="as_aiw-dep-compound-svc.html">compound:svc</a></tt>.

26 nodes (3%) are attached to their parents as `compound:lvc`.

26 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (20; 77% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt> (5; 19% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:lvc	color:blue
1	এইবাৰ	এইবাৰ	ADV	_	_	6	advmod	_	_
2	তাহাঁতৰ	তাহাঁত	PRON	_	Case=Gen|Number=Plur|PronType=Prs	3	nmod:poss	_	_
3	মেকুৰী	মেকুৰী	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
4	ডিনাজনীলৈ	ডিনা	PROPN	_	_	3	appos	_	_
5	মনত	মন	NOUN	_	Case=Loc|Number=Sing	6	compound:lvc	_	_
6	পৰিল	পৰা	VERB	_	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	।	।	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:lvc	color:blue
1	উৎসৱস্থলীক	উৎসৱস্থলী	NOUN	_	Case=Acc|Number=Sing	8	obj	_	_
2	সকলোধৰণৰ	সকলোধৰণ	NOUN	_	Case=Gen|Number=Sing	4	nmod	_	_
3	বিপদজনক	বিপদজনক	ADJ	_	_	4	amod	_	_
4	সামগ্ৰীৰ	সামগ্ৰী	NOUN	_	Case=Gen|Number=Plur	6	obl	_	_
5	পৰা	পৰা	ADP	_	_	4	case	_	_
6	মুক্ত	মুক্ত	ADJ	_	_	7	compound:lvc	_	_
7	কৰি	কৰা	VERB	_	VerbForm=Conv	8	compound:svc	_	_
8	ৰাখিব	ৰাখা	VERB	_	Tense=Fut|VerbForm=Inf	9	xcomp	_	_
9	লাগিব	লাগে	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	0	root	_	_
10	।	।	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:lvc	color:blue
1	পৃথিৱীৰ	পৃথিৱী	NOUN	_	Case=Gen|Number=Sing	2	nmod	_	_
2	সোঁ-মাজেদি	সোঁ-মাজ	NOUN	_	Number=Sing	7	obl	_	_
3	হয়তো	হয়তো	ADV	_	_	8	advmod	_	_
4	তাই	তাই	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
5	পাৰ	পাৰ	NOUN	_	Case=Nom|Number=Sing	7	obj	_	_
6	হৈ	হওঁ	VERB	_	VerbForm=Conv	7	compound:lvc	_	_
7	যাবগৈ	যাব	VERB	_	Tense=Fut|VerbForm=Inf	8	xcomp	_	_
8	লাগিব	লাগা	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	0	root	_	_
9	।	।	PUNCT	_	_	8	punct	_	_

~~~


