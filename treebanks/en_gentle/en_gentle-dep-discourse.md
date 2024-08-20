---
layout: base
title:  'Statistics of discourse in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `discourse`

This relation is universal.

284 nodes (2%) are attached to their parents as `discourse`.

279 instances of `discourse` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.90140845070423.

The following 19 pairs of parts of speech are connected with `discourse`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (127; 45% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (49; 17% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (45; 16% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (24; 8% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (13; 5% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (6; 2% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (5; 2% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	1.	1.	X	LS	_	2	discourse	2:discourse	Discourse=organization-heading:12->13:4:_|XML=<hi rend:::"bold">
2	Services	service	NOUN	NNS	Number=Plur	0	root	0:root	Entity=(4-abstract-giv:act-cf1*-1-coref-Service_%28business%29)|XML=</hi>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	2.	2.	X	LS	_	3	discourse	3:discourse	Discourse=joint-list_m:45->41:4:_
2	Roe	Roe	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	Entity=(58-person-new-cf3-1-coref-Norma_McCorvey)
3	has	have	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=ha-s
4	standing	standing	NOUN	NN	Number=Sing	3	obj	3:obj	MSeg=stand-ing
5	to	to	PART	TO	_	6	mark	6:mark	_
6	sue	sue	VERB	VB	VerbForm=Inf	4	acl	4:acl:to	SpaceAfter=No
7	;	;	PUNCT	:	_	12	punct	12:punct	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Discourse=adversative-contrast_m:46->45:0:_|Entity=(22-person-giv:inact-cf1-2-coref
9	Does	Doe	PROPN	NNPS	Number=Plur	12	nsubj	12:nsubj	Entity=22)
10	and	and	CCONJ	CC	_	11	cc	11:cc	_
11	Hallford	Hallford	PROPN	NNP	Number=Sing	9	conj	9:conj:and|12:nsubj	Entity=(20-person-giv:inact-cf2-1-coref)
12	do	do	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	3:parataxis	_
13	not	not	PART	RB	Polarity=Neg	12	advmod	12:advmod	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	5.	5.	X	LS	_	2	discourse	2:discourse	Discourse=organization-heading:126->127:4:_|XML=<hi rend:::"bold">
2	Term	Term	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(157-abstract-new-cf1-1-sgl-Contractual_term)
3	and	and	CCONJ	CC	_	4	cc	4:cc	_
4	Survival	Survival	NOUN	NN	Number=Sing	2	conj	2:conj:and	Entity=(158-abstract-new-cf2-1-sgl)|XML=</hi>

~~~


