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

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (221; 71% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (78; 25% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Professor	Professor	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	Discourse=attribution-positive:89->90:0|Entity=(50-person-giv:inact-cf1-1,2-coref-Creswell_Eastman
2	Eastman	Eastman	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=50)
3	said	say	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj:pass	6:nsubj:pass	Discourse=evaluation-comment:90->91:4|Entity=(50-person-giv:act-cf1-1-ana-Creswell_Eastman)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	6:aux:pass	_
6	alarmed	alarm	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	3	ccomp	3:ccomp	_
7	by	by	ADP	IN	_	8	case	8:case	_
8	what	what	PRON	WP	PronType=Rel	6	obl:agent	6:obl:agent	_
9	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	10:nsubj	Entity=(8-person-giv:inact-cf2-1-ana)
10	found	find	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	acl:relcl	8:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


