---
layout: base
title:  'Statistics of obl in UD_Assamese-AiW'
udver: '2'
---

## Treebank Statistics: UD_Assamese-AiW: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="as_aiw-dep-obl-lmod.html">obl:lmod</a></tt>.

73 nodes (8%) are attached to their parents as `obl`.

71 instances of `obl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.45205479452055.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (64; 88% instances), <tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="as_aiw-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obl	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 obl	color:blue
1	তাই	তাই	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	ক'লে	কোৱা	VERB	_	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	“	“	PUNCT	_	_	13	punct	_	_
5	আজি	আজি	ADV	_	_	6	advmod	_	_
6	ৰাতি	ৰাতি	NOUN	_	Case=Nom|Number=Sing	8	obl	_	_
7	মই	মই	PRON	_	Gender=Fem|Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	_
8	নথকা	থাকা	VERB	_	Polarity=Neg|Tense=Pres|VerbForm=Part	13	obl	_	_
9	বাবে	বাবে	ADP	_	_	8	case	_	_
10	ডিনাই	ডিনা	PROPN	_	_	13	nsubj	_	_
11	বৰ	বৰ	ADV	_	_	12	advmod	_	_
12	বেয়া	বেয়া	ADJ	_	_	13	amod	_	_
13	পাই	পোৱা	VERB	_	Aspect=Perf|VerbForm=Conv	2	ccomp	_	_
14	আছে	থাকা	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	13	aux	_	_
15	চাগৈ	চাগৈ	ADV	_	_	13	advmod	_	_
16	।	।	PUNCT	_	_	13	punct	_	_
17	"	"	PUNCT	_	_	13	punct	_	_

~~~


