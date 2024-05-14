---
layout: base
title:  'Statistics of acl in UD_Latin'
udver: '2'
---

## Treebank Statistics: UD_Latin: Relations: `acl`

This relation is universal.

302 nodes (1%) are attached to their parents as `acl`.

268 instances of `acl` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.62913907284768.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (203; 67% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (67; 22% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (16; 5% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la-pos-X.html">X</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la-pos-X.html">X</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 acl	color:blue
1	Loci	locus1	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
2	natura	natura1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	erat	sum1	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
4	haec	hic1	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	,	comma1	PUNCT	u--------	_	10	punct	_	_
6	quem	qui1	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	_
7	locum	locus1	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	_
8	nostri	noster	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
9	castris	castrum	NOUN	n-p---nd-	Case=Dat|Gender=Neut|Number=Plur	10	advmod	_	_
10	delegerant	deligo1	VERB	v3plia---	Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	1	acl	_	SpaceAfter=No
11	.	punc1	PUNCT	u--------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 acl	color:blue
1	num	num1	ADV	d--------	_	2	advmod	_	_
2	dubitas	dubito1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	id	is1	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
4	me	ego1	PRON	p-s---mb-	Case=Abl|Gender=Masc|Number=Sing	5	nsubj	_	_
5	imperante	impero	VERB	v-spp-mb-	Case=Abl|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part	2	advcl	_	_
6	facere	facio1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	2	xcomp	_	_
7	quod	qui1	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	11	obj	_	_
8	iam	jam1	ADV	d--------	_	11	advmod	_	_
9	tua	tuus	PRON	p-s---fb-	Case=Abl|Gender=Fem|Number=Sing	10	nmod	_	_
10	sponte	sponte1	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	11	advmod	_	_
11	faciebas	facio1	VERB	v2siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	3	acl	_	SpaceAfter=No
12	?	punc1	PUNCT	u--------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 acl	color:blue
1	et	et1	CCONJ	c--------	_	3	advmod	_	_
2	qui	qui1	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
3	fecere	facio1	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	acl	_	_
4	et	et1	CCONJ	c--------	_	3	cc	_	_
5	qui	qui1	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	_
6	facta	factum1	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	8	obj	_	_
7	aliorum	alius2	ADJ	a-p---mg-	Case=Gen|Gender=Masc|Number=Plur	6	amod	_	_
8	scripsere	scribo1	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
9	,	comma1	PUNCT	u--------	_	3	punct	_	_
10	multi	multi1	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	_
11	laudantur	laudo1	VERB	v3ppip---	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
12	.	punc1	PUNCT	u--------	_	11	punct	_	_

~~~


