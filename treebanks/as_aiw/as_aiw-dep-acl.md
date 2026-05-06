---
layout: base
title:  'Statistics of acl in UD_Assamese-AiW'
udver: '2'
---

## Treebank Statistics: UD_Assamese-AiW: Relations: `acl`

This relation is universal.

16 nodes (2%) are attached to their parents as `acl`.

12 instances of `acl` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5625.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (12; 75% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl	color:blue
1	শহাটো	শহা	NOUN	_	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
2	বগা	বগা	ADJ	_	_	1	acl	_	_
3	।	।	PUNCT	_	_	1	punct	_	_
4	চকু	চকু	NOUN	_	Case=Nom|Number=Plur	0	root	_	_
5	দুটা	দুই	NUM	_	_	4	nummod	_	_
6	গুলপীয়া	গুলপীয়া	ADJ	_	_	4	acl	_	_
7	।	।	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl	color:blue
1	অ'	অ'	INTJ	_	_	7	discourse	_	_
2	ঠাইখনৰ	ঠাই	NOUN	_	Case=Gen|Definite=Def|Number=Sing	3	nmod:poss	_	_
3	নামটো	নাম	NOUN	_	Case=Nom|Number=Sing	7	nsubj	_	_
4	ক'ৰবাত	ক'ৰবা	NOUN	_	Case=Loc	7	obl	_	_
5	দেখোন	দেখা	PART	_	_	7	discourse	_	_
6	লিখা	লেখা	VERB	_	VerbForm=Part	7	compound:svc	_	_
7	থাকিবই	থাকা	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	0	root	_	_
8	।	।	PUNCT	_	_	7	punct	_	_
9	ম‍ই	মই	PRON	_	Gender=Fem|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	নুসুধিলেও	সোধা	VERB	_	Polarity=Neg|VerbForm=Conv	11	advcl	_	_
11	হ'ব	হওঁ	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	7	acl	_	_
12	।	।	PUNCT	_	_	11	punct	_	_
13	”	”	PUNCT	_	_	7	punct	_	_

~~~


