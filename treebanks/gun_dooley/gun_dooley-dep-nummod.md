---
layout: base
title:  'Statistics of nummod in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `nummod`

This relation is universal.

93 nodes (1%) are attached to their parents as `nummod`.

88 instances of `nummod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20430107526882.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (85; 91% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (6; 6% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	_	_	ADV	inact	_	3	advmod	_	_
2	_	_	PART	illocprt	_	1	dep:mod	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	0	root	_	_
4	_	_	NUM	num	NumType=Card	5	nummod	_	_
5	_	_	NOUN	n	Number=Plur	3	nsubj	_	_
6	_	_	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	_	_	NUM	num	NumType=Card	2	nummod	_	_
2	_	_	VERB	inact	Mood=Ind|Subcat=Int|VerbForm=Inf	6	dislocated	_	_
3	_	_	SCONJ	rel	_	2	mark	_	_
4	_	_	PART	discprt	_	2	dep:mod	_	_
5	_	_	PART	illocprt	_	2	dep:mod	_	_
6	_	_	VERB	n:pred	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Vnoun	0	root	_	_
7	_	_	PROPN	nprop	_	6	nsubj	_	_
8	_	_	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nummod	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	7	nsubj	_	_
2	_	_	SCONJ	rel	_	1	mark	_	_
3	_	_	PART	quantprt	_	1	dep:mod	_	_
4	_	_	NUM	num	NumType=Card	1	nummod	_	_
5	_	_	PART	illocprt	_	1	dep:mod	_	_
6	_	_	ADV	tempquant	_	7	advmod	_	_
7	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Polarity=Neg|Subcat=Int|VerbForm=Fin	0	root	_	_
8	_	_	ADV	inact	Polarity=Neg	7	advmod	_	_
9	_	_	PRON	num	PronType=Ind	7	dislocated	_	_
10	_	_	PART	intprt	_	9	dep:mod	_	_
11	_	_	PUNCT	punct	_	7	punct	_	_

~~~


