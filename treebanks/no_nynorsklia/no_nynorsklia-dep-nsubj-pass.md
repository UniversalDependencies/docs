---
layout: base
title:  'Statistics of nsubj:pass in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="no_nynorsklia-dep-nsubj.html">nsubj</a></tt>.

57 nodes (0%) are attached to their parents as `nsubj:pass`.

56 instances of `nsubj:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (49; 86% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (8; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	seien	sei	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
2	den	den	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj:pass	_	_
3	blir	bli	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
4	em	em	X	_	_	6	discourse:filler	_	_
5	#	#	PUNCT	_	_	4	punct	_	_
6	levert	levere	VERB	_	VerbForm=Part	0	root	_	_
7	til	til	ADP	_	_	10	case	_	_
8	e	e	X	_	_	10	discourse:filler	_	_
9	#	#	PUNCT	_	_	8	punct	_	_
10	fisketilverkarar	fisketilverkar	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	6	obl	_	_
11	.	$.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
1	ja	ja	INTJ	_	_	7	discourse	_	_
2	og	og	CCONJ	_	_	7	cc	_	_
3	så	så	ADV	_	_	7	advmod	_	_
4	tankane	tank	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	7	nsubj:pass	_	_
5	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	jo	jo	ADV	_	_	7	advmod	_	_
7	gjerast	gjere	VERB	_	VerbForm=Inf|Voice=Pass	0	root	_	_
8	reine	rein	ADJ	_	Degree=Pos|Number=Plur	7	xcomp	_	_
9	og	og	CCONJ	_	_	7	cc	_	_
10	.	$.	PUNCT	_	_	7	punct	_	_

~~~


