---
layout: base
title:  'Statistics of nsubj in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `nsubj`

This relation is universal.

668 nodes (6%) are attached to their parents as `nsubj`.

591 instances of `nsubj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19610778443114.

The following 10 pairs of parts of speech are connected with `nsubj`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (385; 58% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (182; 27% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt> (60; 9% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (23; 3% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj	color:blue
1	_	_	ADV	adv	_	3	advmod	_	_
2	_	_	PART	illocprt	_	1	advmod	_	_
3	_	_	VERB	vi	Person[subj]=3|Subcat=Int	0	root	_	_
4	_	_	NUM	num	_	5	nummod	_	_
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
2	_	_	PART	quantprt	_	1	clf	_	_
3	_	_	PART	discprt	_	1	amod	_	_
4	_	_	PART	illocprt	_	1	amod	_	_
5	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
6	_	_	VERB	vs	Person=3|VerbForm=Ser	5	compound:svc	_	_
7	_	_	NUM	num	_	8	nummod	_	_
8	_	_	NOUN	n	_	5	obl	_	_
9	_	_	ADP	post	_	8	case	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj	color:blue
1	_	_	NOUN	n	_	3	nsubj	_	_
2	_	_	PART	quantprt	_	1	clf	_	_
3	_	_	VERB	vi	Person[subj]=3|Subcat=Int	8	advcl	_	_
4	_	_	SCONJ	nmlzer	_	3	mark	_	_
5	_	_	ADP	post	_	3	case	_	_
6	_	_	PART	illocprt	_	3	advmod	_	_
7	_	_	PROPN	nprop	_	8	nsubj	_	_
8	_	_	VERB	vi	Person[subj]=3|Subcat=Int	0	root	_	_
9	_	_	ADV	adv	_	8	advmod	_	_
10	_	_	PART	intprt	_	8	advmod	_	_
11	_	_	PUNCT	punct	_	8	punct	_	_

~~~


