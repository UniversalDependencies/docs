---
layout: base
title:  'Statistics of nsubj in UD_Assamese-AiW'
udver: '2'
---

## Treebank Statistics: UD_Assamese-AiW: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="as_aiw-dep-nsubj-pass.html">nsubj:pass</a></tt>.

79 nodes (9%) are attached to their parents as `nsubj`.

76 instances of `nsubj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.17721518987342.

The following 7 pairs of parts of speech are connected with `nsubj`: <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (34; 43% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-PRON.html">PRON</a></tt> (30; 38% instances), <tt><a href="as_aiw-pos-VERB.html">VERB</a></tt>-<tt><a href="as_aiw-pos-PROPN.html">PROPN</a></tt> (7; 9% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-PRON.html">PRON</a></tt> (4; 5% instances), <tt><a href="as_aiw-pos-ADJ.html">ADJ</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="as_aiw-pos-NOUN.html">NOUN</a></tt>-<tt><a href="as_aiw-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 nsubj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	তথাপি	তথাপি	CCONJ	_	_	7	cc	_	_
2	ওচৰত	ওচৰ	NOUN	_	Case=Loc|Number=Sing	3	obl	_	_
3	যে	যে	SCONJ	_	_	5	mark	_	_
4	কোনো	কোনো	PRON	_	PronType=Ind	5	nsubj	_	_
5	নাই	থাকা	VERB	_	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	advcl	_	_
6	শুনিবলৈ	শুনা	VERB	_	VerbForm=Inf	5	advcl	_	_
7	ৰক্ষা	ৰক্ষা	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
8	তেওঁ	তেওঁ	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	।	।	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 nsubj	color:blue
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


