---
layout: base
title:  'Statistics of xcomp in UD_Latin'
udver: '2'
---

## Treebank Statistics: UD_Latin: Relations: `xcomp`

This relation is universal.

744 nodes (3%) are attached to their parents as `xcomp`.

407 instances of `xcomp` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49462365591398.

The following 20 pairs of parts of speech are connected with `xcomp`: <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (469; 63% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (105; 14% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (42; 6% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (24; 3% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (21; 3% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (19; 3% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (18; 2% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (12; 2% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="la-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="la-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="la-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	qui	qui1	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	_
2	minus	parvus	ADV	d-------c	Degree=Cmp	3	advmod	_	_
3	facile	facilis1	ADV	d--------	_	8	advmod	_	_
4	eam	is1	PRON	p-s---fa-	Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	_
5	rem	res1	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
6	imperio	imperium1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	8	advmod	_	_
7	nostro	noster	PRON	p-s---nb-	Case=Abl|Gender=Neut|Number=Sing	6	nmod	_	_
8	consequi	consequor	VERB	v--pnd---	Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	_
9	poterant	possum1	VERB	v3piia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	.	punc1	PUNCT	u--------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	me	ego1	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
2	dolor	dolor1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	et	et1	CCONJ	c--------	_	2	cc	_	_
4	lacrimae	lacrima1	NOUN	n-p---fn-	Case=Nom|Gender=Fem|Number=Plur	2	conj	_	_
5	merito	mereo	ADV	d--------	_	6	advmod	_	_
6	fecere	facio1	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	peritum	peritus1	ADJ	a-s---ma-	Case=Acc|Gender=Masc|Number=Sing	6	xcomp	_	SpaceAfter=No
8	:	punc1	PUNCT	u--------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Cynthia	Cynthia1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	prima	primus	NUM	m-s---fn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	fuit	sum1	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	SpaceAfter=No
4	,	comma1	PUNCT	u--------	_	2	punct	_	_
5	Cynthia	Cynthia1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
6	finis	finis1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	7	xcomp	_	_
7	erit	sum1	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	2	cop	_	SpaceAfter=No
8	.	punc1	PUNCT	u--------	_	2	punct	_	_

~~~


