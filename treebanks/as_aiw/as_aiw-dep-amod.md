---
layout: base
title:  'Statistics of amod in UD_Assamese-AiW'
udver: '2'
---

## Treebank Statistics: UD_Assamese-AiW: Relations: `amod`

This relation is universal.

34 nodes (4%) are attached to their parents as `amod`.

34 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23529411764706.

The following 4 pairs of parts of speech are connected with `amod`: <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt> (31; 91% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="as_aiw-pos-PRON.html">PRON</a></tt>-<tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
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
# visual-style 5 4 amod	color:blue
1	ডেইজী	ডেইজী	NOUN	_	Case=Nom|Number=Sing	2	compound	_	_
2	ফুলৰ	ফুল	NOUN	_	Case=Gen|Number=Sing	3	nmod	_	_
3	মালা	মালা	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	গঁথাৰ	গাঁথা	VERB	_	VerbForm=Vnoun	5	amod	_	_
5	কথা	কথা	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
6	এবাৰ	এবাৰ	ADV	_	_	8	advmod	_	_
7	তাই	তাই	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	ভাবিলে	ভাবা	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	।	।	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 amod	color:blue
1	পিছে	পিছে	CCONJ	_	_	22	cc	_	_
2	শহাটোৱে	শহা	NOUN	_	Case=Erg|Definite=Def|Number=Sing	6	nsubj	_	_
3	যেতিয়া	যেতিয়া	SCONJ	_	_	6	mark	_	_
4	মানুহে	মানুহ	NOUN	_	Case=Erg	5	nsubj	_	_
5	কোৱাদি	কোৱা	VERB	_	VerbForm=Conv	6	advcl	_	_
6	ক'লৈ	কোৱা	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	22	advcl	_	_
7	,	,	PUNCT	_	_	6	punct	_	_
8	“	“	PUNCT	_	_	15	punct	_	_
9	ইচ্	ইচ্	INTJ	_	_	10	compound:redup	_	_
10	ইচ্	ইচ্	INTJ	_	_	15	discourse	_	_
11	,	,	PUNCT	_	_	15	punct	_	_
12	মোৰ	মই	PRON	_	Number=Sing|Person=1|PronType=Prs	14	nmod:poss	_	_
13	বৰ	বৰ	ADV	_	_	14	advmod	_	_
14	পলম	পলম	NOUN	_	Case=Nom|Number=Sing	15	nsubj	_	_
15	হ'ল	হওঁ	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	ccomp	_	_
16	হে	হে	PART	_	_	15	discourse	_	_
17	”	”	PUNCT	_	_	15	punct	_	_
18	তেতিয়াও	তেতিয়া	ADV	_	_	22	advmod	_	_
19	এলিচে	এলিচ	PROPN	_	Case=Erg|Number=Sing	22	nsubj	_	_
20	বিশেষ	বিশেষ	ADJ	_	_	21	amod	_	_
21	একো	একো	PRON	_	PronType=Ind	22	obj	_	_
22	ভবা	ভাবা	VERB	_	Tense=Past|VerbForm=Part	0	root	_	_
23	নাছিল	থাকা	AUX	_	Mood=Ind|Polarity=Neg|Tense=Past|VerbForm=Fin	22	aux	_	_
24	।	।	PUNCT	_	_	22	punct	_	_

~~~


