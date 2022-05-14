---
layout: base
title:  'Statistics of obl:agent in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>, <tt><a href="en_gum-dep-obl-tmod.html">obl:tmod</a></tt>.

313 nodes (0%) are attached to their parents as `obl:agent`.

313 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.75079872204473.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (223; 71% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (78; 25% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:agent	color:blue
1	This	this	PRON	DT	Number=Sing|PronType=Dem	3	nsubj:pass	3:nsubj:pass	Discourse=joint-sequence_m:78->77:1|Entity=(49-abstract-giv:act-cf1*-1-ana)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	followed	follow	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	by	by	ADP	IN	_	6	case	6:case	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(100-event-new-cf4-2-sgl
6	repetition	repetition	NOUN	NN	Number=Sing	3	obl:agent	3:obl:agent	_
7	of	of	ADP	IN	_	10	case	10:case	_
8	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(98-abstract-giv:act-cf2-3-coref
9	original	original	ADJ	JJ	Degree=Pos	10	amod	10:amod	_
10	statement	statement	NOUN	NN	Number=Sing	6	nmod	6:nmod:of	Entity=98)
11	by	by	ADP	IN	_	12	case	12:case	_
12	G	G	PROPN	NNP	Number=Sing	6	nmod	6:nmod:by	Entity=(97-person-giv:act-cf3-1-coref)100)|SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl:agent	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Discourse=elaboration-additional:112->111:0|Entity=(106-abstract-giv:act-cf1*-1-ana)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	like	like	ADP	IN	_	5	case	5:case	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(111-animal-new-cf4-2-coref
5	horse	horse	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	,	_	7	punct	7:punct	_
7	ridden	ride	VERB	VBN	Tense=Past|VerbForm=Part	5	acl	5:acl	Discourse=elaboration-attribute:113->112:0
8	by	by	ADP	IN	_	9	case	9:case	_
9	God	God	PROPN	NNP	Number=Sing	7	obl:agent	7:obl:agent	Entity=(79-person-giv:inact-cf3-1-coref-God_in_Christianity)
10	or	or	CCONJ	CC	_	12	cc	12:cc	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(108-person-giv:inact-cf2-2-coref-Devil_in_Christianity
12	Devil	Devil	PROPN	NNP	Number=Sing	9	conj	7:obl:agent|9:conj:or	Entity=108)111)|SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Replication	replication	NOUN	NN	Number=Sing	2	compound	2:compound	Discourse=context-background:3->73:4|Entity=(6-abstract-new-cf1-2-coref(7-abstract-new-cf5-1-coref)
2	studies	study	NOUN	NNS	Number=Plur	4	nsubj:pass	4:nsubj:pass|8:nsubj:xsubj	Entity=6)
3	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	considered	consider	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	by	by	ADP	IN	_	6	case	6:case	_
6	many	many	ADJ	JJ	Degree=Pos	4	obl:agent	4:obl:agent	Entity=(8-person-new-cf4-1-sgl)
7	to	to	PART	TO	_	8	mark	8:mark	_
8	play	play	VERB	VB	VerbForm=Inf	4	xcomp	4:xcomp	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(9-abstract-new-cf2-3-sgl
10	fundamental	fundamental	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	role	role	NOUN	NN	Number=Sing	8	obj	8:obj	Entity=9)
12	in	in	ADP	IN	_	15	case	15:case	_
13	any	any	DET	DT	PronType=Ind	15	det	15:det	Entity=(10-abstract-new-cf3-3-sgl
14	scientific	scientific	ADJ	JJ	Degree=Pos	15	amod	15:amod	_
15	endeavor	endeavor	NOUN	NN	Number=Sing	8	obl	8:obl:in	Entity=10)|SpaceAfter=No
16	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


