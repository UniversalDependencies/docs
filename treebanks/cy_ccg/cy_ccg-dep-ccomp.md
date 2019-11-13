---
layout: base
title:  'Statistics of ccomp in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `ccomp`

This relation is universal.

283 nodes (2%) are attached to their parents as `ccomp`.

273 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.49116607773852.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (126; 45% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (77; 27% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (22; 8% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (21; 7% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (12; 4% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 ccomp	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	Aled	Aled	PROPN	person	_	1	nsubj	_	_
3	yn	yn	AUX	impf	_	4	aux	_	_
4	credu	credu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
5	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	4	ccomp	_	_
6	Elen	Elen	PROPN	person	_	5	nsubj	_	_
7	yn	yn	AUX	impf	_	8	aux	_	_
8	darllen	darllen	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	xcomp	_	_
9	llyfr	llyfr	NOUN	noun	Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	5	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Mi	mi	PART	aff	_	2	advmod	_	_
2	gefais	cael	VERB	verb	Mood=Ind|Mutation=SM|Number=Sing|Person=1|Tense=Past	0	root	_	_
3	i	i	PRON	indep	Number=Sing|Person=1	2	nsubj	_	_
4	fy	fy	PRON	dep	Number=Sing|Person=1|PronType=Prs	5	obj	_	_
5	ngheni	ceni	NOUN	verbnoun	Mutation=NM|Number=Sing|VerbForm=Vnoun	2	ccomp	_	_
6	yng	yn	ADP	prep	_	7	case	_	_
7	Nghaerdydd	Caerdydd	PROPN	place	Mutation=NM	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 ccomp	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	SpaceAfter=No
3	'n	yn	AUX	impf	_	4	aux	_	_
4	gwybod	gwybod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
5	y	y	PART	aff	_	6	advmod	_	_
6	bydd	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Fut	4	ccomp	_	_
7	hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	SpaceAfter=No
8	'n	yn	AUX	impf	_	9	aux	_	_
9	dod	dod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	6	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


