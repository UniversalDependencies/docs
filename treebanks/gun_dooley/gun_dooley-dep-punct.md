---
layout: base
title:  'Statistics of punct in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `punct`

This relation is universal.

1878 nodes (16%) are attached to their parents as `punct`.

1486 instances of `punct` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.88711395101171.

The following 7 pairs of parts of speech are connected with `punct`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (1763; 94% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (74; 4% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="gun_dooley-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (15; 1% instances), <tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="gun_dooley-pos-X.html">X</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 punct	color:blue
1	_	_	ADV	adv	_	3	advmod	_	_
2	_	_	PART	illocprt	_	1	advmod	_	_
3	_	_	VERB	vi	Person[subj]=3|Subcat=Int	0	root	_	_
4	_	_	NUM	num	_	5	nummod	_	_
5	_	_	NOUN	n	Number=Plur	3	nsubj	_	_
6	_	_	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 punct	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	SCONJ	rel	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	PART	illocprt	_	1	advmod	_	_
5	_	_	NOUN	n	_	0	root	_	_
6	_	_	NOUN	n	_	5	compound	_	_
7	_	_	PART	intprt	_	5	amod	_	_
8	_	_	PART	aspprt	_	5	amod	_	_
9	_	_	PART	illocprt	_	5	amod	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	_	_	PUNCT	punct	_	2	punct	_	_
2	_	_	PRON	interpron	PronType=Int	5	parataxis:rep	_	_
3	_	_	ADJ	vi	Subcat=Int	2	amod	_	_
4	_	_	PUNCT	punct	_	2	punct	_	_
5	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	8	advcl	_	_
6	_	_	SCONJ	subordconn	_	5	mark	_	_
7	_	_	PART	illocprt	_	5	advmod	_	_
8	_	_	VERB	vt	Person[subj]=3|Polarity=Neg|Subcat=Tran	0	root	_	_
9	_	_	VERB	vpos	Polarity=Neg|VerbForm=Post	8	compound:svc	_	_
10	_	_	PART	illocprt	_	8	advmod	_	_
11	_	_	PUNCT	punct	_	12	punct	_	_
12	_	_	VERB	vi	Person[subj]=3|Subcat=Int	8	conj	_	_
13	_	_	PART	focprt	_	12	advmod	_	_
14	_	_	PUNCT	punct	_	8	punct	_	_

~~~


