---
layout: base
title:  'Statistics of acl in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cy_ccg-dep-acl-relcl.html">acl:relcl</a></tt>.

280 nodes (2%) are attached to their parents as `acl`.

267 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (232; 83% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (29; 10% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl	color:blue
1	Rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
2	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	4	cop	_	_
3	yn	yn	PART	pred	_	4	case:pred	_	_
4	aelod	aelod	NOUN	noun	Gender=Masc|Number=Sing	1	nmod	_	_
5	o	o	ADP	prep	_	7	case	_	SpaceAfter=No
6	'r	y	DET	art	_	7	det	_	_
7	Urdd	urdd	NOUN	noun	Gender=Fem|Number=Sing	4	nmod	_	_
8	i	i	ADP	prep	_	9	mark	_	_
9	gystadlu	cystadlu	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	4	acl	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	oeddet	bod	VERB	verb	Mood=Ind|Number=Sing|Person=2|Tense=Imp	0	root	_	_
3	yn	yn	AUX	impf	_	4	aux	_	_
4	gofyn	gofyn	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	pryd	pryd	ADV	adv	_	7	advmod	_	_
6	y	y	PART	aff	_	7	advmod	_	_
7	byddai	bod	VERB	verb	Mood=Cnd|Number=Sing|Person=3|Tense=Imp	4	acl	_	SpaceAfter=No
8	'r	y	DET	art	_	9	det	_	_
9	cyngor	cyngor	NOUN	noun	Gender=Masc|Number=Sing	7	nsubj	_	_
10	partneriaeth	partneriaeth	NOUN	noun	Gender=Fem|Number=Sing	9	nmod	_	_
11	yn	yn	AUX	impf	_	12	aux	_	_
12	cael	cael	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	9	xcomp	_	_
13	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
14	sefydlu	sefydlu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	12	ccomp	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	2018	2018	NUM	num	_	1	nsubj	_	_
3	wedi	wedi	AUX	ante	_	6	aux	_	_
4	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	6	cop	_	_
5	yn	yn	PART	pred	_	6	case:pred	_	_
6	flwyddyn	blwyddyn	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	1	xcomp	_	_
7	gyda	gyda	ADP	prep	_	8	case	_	_
8	mwy	mawr	ADJ	cmp	Degree=Cmp	6	acl	_	_
9	na	na	ADP	prep	_	11	case	_	SpaceAfter=No
10	'i	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	siâr	siâr	NOUN	noun	Gender=Masc|Number=Sing	8	obl	_	_
12	o	o	ADP	prep	_	13	case	_	_
13	bontydd	pont	NOUN	noun	Gender=Fem|Mutation=SM|Number=Plur	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


