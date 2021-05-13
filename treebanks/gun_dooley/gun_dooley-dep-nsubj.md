---
layout: base
title:  'Statistics of nsubj in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `nsubj`

This relation is universal.

674 nodes (6%) are attached to their parents as `nsubj`.

593 instances of `nsubj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18694362017804.

The following 8 pairs of parts of speech are connected with `nsubj`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (387; 57% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (187; 28% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt> (63; 9% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (29; 4% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj	color:blue
1	_	_	ADV	inact	_	3	advmod	_	_
2	_	_	PART	illocprt	_	1	dep:mod	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
4	_	_	NUM	num	NumType=Card	5	nummod	_	_
5	_	_	NOUN	n	Number=Plur	3	nsubj	_	_
6	_	_	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	PART	quantprt	_	1	dep:mod	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
6	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	5	compound:svc	_	_
7	_	_	NUM	num	NumType=Card	8	nummod	_	_
8	_	_	NOUN	n	_	5	obl	_	_
9	_	_	ADP	post	_	8	case	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj	color:blue
1	_	_	NUM	num	NumType=Card	2	nummod	_	_
2	_	_	VERB	inact	Mood=Ind|Subcat=Intr|VerbForm=Inf	6	dislocated	_	_
3	_	_	SCONJ	rel	_	2	mark	_	_
4	_	_	PART	discprt	_	2	dep:mod	_	_
5	_	_	PART	illocprt	_	2	dep:mod	_	_
6	_	_	VERB	n:pred	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Vnoun	0	root	_	_
7	_	_	PROPN	nprop	_	6	nsubj	_	_
8	_	_	PUNCT	punct	_	6	punct	_	_

~~~


