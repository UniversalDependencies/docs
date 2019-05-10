---
layout: base
title:  'Statistics of nmod in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="pcm_nsc-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="pcm_nsc-dep-nmod-poss.html">nmod:poss</a></tt>.

74 nodes (1%) are attached to their parents as `nmod`.

63 instances of `nmod` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97297297297297.

The following 14 pairs of parts of speech are connected with `nmod`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (52; 70% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (5; 7% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="pcm_nsc-pos-DET.html">DET</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-DET.html">DET</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	#	#	PUNCT	_	_	6	punct	_	_
2	dis	dis	DET	_	_	3	det	_	_
3	kind	kind	NOUN	_	_	6	nsubj	_	_
4	thing	thing	NOUN	_	_	3	nmod	_	_
5	no	no	ADV	PART	_	6	advmod	_	_
6	good	good	ADJ	_	_	0	root	_	_
7	o	o	ADV	PART	_	6	advmod:emph	_	_
8	//	//	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod	color:blue
1	{	{	PUNCT	_	_	3	punct	_	_
2	dem	dem	PRON	_	_	3	nsubj	_	_
3	want	want	VERB	_	_	0	root	_	_
4	||	||	PUNCT	_	_	3	punct	_	_
5	dem	dem	PRON	_	_	6	nsubj	_	_
6	want	want	VERB	_	_	3	conj:dicto	_	_
7	}	}	PUNCT	_	_	6	punct	_	_
8	just	just	ADV	_	_	9	advmod	_	_
9	spoil	spoil	VERB	_	_	6	xcomp	_	_
10	Obasanjo	Obasanjo	PROPN	_	_	11	nmod	_	_
11	government	government	NOUN	_	_	9	obj	_	_
12	//	//	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod	color:blue
1	de	de	PRON	_	_	3	nsubj	_	_
2	don	don	AUX	_	_	3	aux	_	_
3	carry	carry	VERB	_	_	0	root	_	_
4	wetin	wetin	PRON	_	_	3	obj	_	_
5	we	we	PRON	_	_	7	nsubj	_	_
6	dey	dey	AUX	_	_	7	aux	_	_
7	call	call	VERB	_	_	4	acl:relcl	_	_
8	speed	speed	NOUN	_	_	9	nmod	_	_
9	limiting	limiting	ADJ	_	_	10	amod	_	_
10	device	device	NOUN	_	_	7	obj	_	_
11	//	//	PUNCT	_	_	3	punct	_	_

~~~


