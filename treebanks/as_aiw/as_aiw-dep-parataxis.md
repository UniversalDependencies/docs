---
layout: base
title:  'Statistics of parataxis in UD_Assamese-AiW'
udver: '2'
---

## Treebank Statistics: UD_Assamese-AiW: Relations: `parataxis`

This relation is universal.

10 nodes (1%) are attached to their parents as `parataxis`.

9 instances of `parataxis` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.2.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (6; 60% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 parataxis	color:blue
1	কি	কি	DET	_	PronType=Int	2	det	_	_
2	উপায়েৰে	উপায়	NOUN	_	Number=Sing	6	obl	_	_
3	নো	নো	PART	_	_	2	discourse	_	_
4	গাঁতটোৰপৰা	গাঁত	NOUN	_	Case=Abl|Number=Sing	5	obl	_	_
5	ওলাই	ওলোৱা	VERB	_	Person=3|Tense=Fut|VerbForm=Conv	6	compound:svc	_	_
6	আহিবপৰা	আহা	VERB	_	Person=3|Tense=Fut|VerbForm=Part	7	xcomp	_	_
7	হ'ব	হওঁ	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	12	parataxis	_	_
8	,	,	PUNCT	_	_	7	punct	_	_
9	এবাৰো	এবাৰ	ADV	_	_	12	advmod	_	_
10	তাই	তাই	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
11	ভাবিকে	ভাবা	VERB	_	Tense=Past|VerbForm=Conv	12	obj	_	_
12	নাচালে	চোৱা	VERB	_	Aspect=Perf|Mood=Ind|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
13	।	।	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 parataxis	color:blue
1	এনেদৰে	এনে	ADV	_	_	2	advmod	_	_
2	সোধাৰ	সোধা	VERB	_	Tense=Past|VerbForm=Vnoun	7	acl	_	_
3	বাবে	বাবে	ADP	_	_	2	case	_	_
4	মোক	মই	PRON	_	Gender=Fem|Number=Sing|Person=1|PronType=Prs	7	obj	_	_
5	চাগৈ	চাগৈ	ADV	_	_	7	advmod	_	_
6	মানুহগৰাকীয়ে	মানুহ	NOUN	_	Case=Erg|Number=Sing	7	nsubj	_	_
7	ভাবিব	ভাবা	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	0	root	_	_
8	"	"	PUNCT	_	_	7	punct	_	_
9	কিনো	কিনো	INTJ	_	_	12	discourse	_	_
10	আকৰী	আকৰী	ADJ	_	_	12	amod	_	_
11	অকণমান	অকণমান	ADJ	_	_	12	amod	_	_
12	ছোৱালী	ছোৱালী	NOUN	_	Case=Nom|Number=Sing	7	parataxis	_	_
13	অ'	অ'	PART	_	_	12	discourse	_	_
14	এইজনী	এইজন	PRON	_	PronType=Dem	12	nsubj	_	_
15	!	!	PUNCT	_	_	12	punct	_	_
16	,	,	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
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


