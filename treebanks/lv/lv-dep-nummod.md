---
layout: base
title:  'Statistics of nummod in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Relations: `nummod`

This relation is universal.

724 nodes (1%) are attached to their parents as `nummod`.

700 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46685082872928.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="lv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv-pos-NUM.html">NUM</a></tt> (564; 78% instances), <tt><a href="lv-pos-SYM.html">SYM</a></tt>-<tt><a href="lv-pos-NUM.html">NUM</a></tt> (85; 12% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-NUM.html">NUM</a></tt> (23; 3% instances), <tt><a href="lv-pos-NUM.html">NUM</a></tt>-<tt><a href="lv-pos-NUM.html">NUM</a></tt> (22; 3% instances), <tt><a href="lv-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="lv-pos-NUM.html">NUM</a></tt> (13; 2% instances), <tt><a href="lv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="lv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv-pos-NUM.html">NUM</a></tt> (8; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj	_
2	tev	tu	PRON	pp20sdn	Case=Dat|Number=Sing|Person=2|PronType=Prs	5	iobj	5:iobj	_
3	vienu	viena	NUM	mcsfsa	Case=Acc|Gender=Fem|Number=Sing|NumType=Card	4	nummod	4:nummod	_
4	daļu	daļa	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	_
5	iedevu	iedot	VERB	vmnisti1san	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	zs	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Maize	maize	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	-	-	PUNCT	zd	_	3	punct	3:punct	_
3	ķieģelītis	ķieģelītis	NOUN	ncmsn2	Case=Nom|Gender=Masc|Number=Sing	1	acl	1:acl:nom	SpaceAfter=No
4	,	,	PUNCT	zc	_	6	punct	6:punct	_
5	pieci	pieci	NUM	mcsmpn	Case=Nom|Gender=Masc|Number=Plur|NumType=Card	6	nummod	6:nummod	_
6	gab	gab	SYM	yn	Abbr=Yes	1	acl	1:acl	SpaceAfter=No
7	.	.	PUNCT	zs	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nummod	color:blue
1	Novilkt	novilkt	VERB	vmnn0t1000n	Polarity=Pos|VerbForm=Inf	9	ccomp	9:ccomp	_
2	striktu	strikta	ADJ	arfsanp	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	3:amod	_
3	robežu	robeža	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	_
4	starp	starp	ADP	spsa	_	5	case	5:case|7:case	_
5	vienu	viens	NUM	mcsmsa	Case=Acc|Gender=Masc|Number=Sing|NumType=Card	1	nummod	1:nummod	_
6	un	un	CCONJ	cc	_	7	cc	7:cc	_
7	otru	otrs	NUM	mcsmsa	Case=Acc|Gender=Masc|Number=Sing|NumType=Card	5	conj	1:nummod|5:conj	_
8	ir	būt	VERB	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
9	neiespējami	neiespējami	ADV	r0m	PronType=Neg	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	zs	_	9	punct	9:punct	_

~~~


