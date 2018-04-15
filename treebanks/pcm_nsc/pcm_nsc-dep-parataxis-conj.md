---
layout: base
title:  'Statistics of parataxis:conj in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `parataxis:conj`

This relation is a language-specific subtype of .
There are also 4 other language-specific subtypes of `parataxis`: <tt><a href="pcm_nsc-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-dislocated.html">parataxis:dislocated</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-obj.html">parataxis:obj</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

55 nodes (0%) are attached to their parents as `parataxis:conj`.

55 instances of `parataxis:conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.98181818181818.

The following 9 pairs of parts of speech are connected with `parataxis:conj`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (41; 75% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (5; 9% instances), <tt><a href="pcm_nsc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pcm_nsc-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="pcm_nsc-pos-PART.html">PART</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis:conj	color:blue
1	bring	bring	VERB	_	_	0	root	_	_
2	am	am	PRON	_	_	1	obj	_	_
3	//=	//=	PUNCT	_	_	4	punct	_	_
4	seize	seize	VERB	_	_	1	parataxis:conj	_	_
5	am	am	PRON	_	_	4	obj	_	_
6	again	again	ADV	_	_	4	advmod	_	_
7	//	//	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 parataxis:conj	color:blue
1	to	to	SCONJ	_	_	2	mark	_	_
2	rent	rent	VERB	_	_	7	csubj	_	_
3	house	house	NOUN	_	_	2	obj	_	_
4	now	now	ADV	_	_	2	advmod	_	_
5	<	<	PUNCT	_	_	2	punct	_	_
6	na	na	PART	_	_	7	cop	_	_
7	wahala	wahala	NOUN	_	_	0	root	_	_
8	//=	//=	PUNCT	_	_	13	punct	_	_
9	to	to	SCONJ	_	_	10	mark	_	_
10	feed	feed	VERB	_	_	13	csubj	_	_
11	<	<	PUNCT	_	_	10	punct	_	_
12	na	na	PART	_	_	13	cop	_	_
13	wahala	wahala	NOUN	_	_	7	parataxis:conj	_	_
14	//	//	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis:conj	color:blue
1	ah	ah	INTJ	_	_	4	discourse	_	_
2	ah	ah	INTJ	_	_	1	goeswith	_	_
3	{	{	PUNCT	_	_	4	punct	_	_
4	no	no	INTJ	_	_	0	root	_	_
5	|r	|r	PUNCT	_	_	6	punct	_	_
6	no	no	INTJ	_	_	4	parataxis:conj	_	_
7	|r	|r	PUNCT	_	_	8	punct	_	_
8	no	no	INTJ	_	_	4	parataxis:conj	_	_
9	}	}	PUNCT	_	_	4	punct	_	_
10	//	//	PUNCT	_	_	4	punct	_	_

~~~


