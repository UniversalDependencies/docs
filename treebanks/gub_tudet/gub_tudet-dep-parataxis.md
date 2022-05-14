---
layout: base
title:  'Statistics of parataxis in UD_Guajajara-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Guajajara-TuDeT: Relations: `parataxis`

This relation is universal.

45 nodes (1%) are attached to their parents as `parataxis`.

45 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.91111111111111.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (20; 44% instances), <tt><a href="gub_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gub_tudet-pos-NOUN.html">NOUN</a></tt> (7; 16% instances), <tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gub_tudet-pos-NOUN.html">NOUN</a></tt> (6; 13% instances), <tt><a href="gub_tudet-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (4; 9% instances), <tt><a href="gub_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (4; 9% instances), <tt><a href="gub_tudet-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gub_tudet-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="gub_tudet-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gub_tudet-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="gub_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gub_tudet-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 parataxis	color:blue
1	Taz	taz	NOUN	n	_	5	obl:subj	_	_
2	ahu	hu	NOUN	n	_	1	nmod	_	_
3	aʔe	aʔe	PRON	pro	Person=3|PronType=Dem	1	discourse	_	_
4	,	,	PUNCT	punct	_	1	punct	_	_
5	oʔok	ʔok	VERB	vt	Person[subj]=3	0	root	_	_
6	kara	kara	NOUN	n	_	5	obj	_	_
7	oho	ho	AUX	aux	Person[subj]=3	5	aux	_	_
8	iko	iko	AUX	aux	Aspect=Prog|Person[subj]=3	5	aux	_	_
9	aʔe	aʔe	PRON	pro	Person=3|PronType=Dem	5	obl:subj	_	_
10	,	,	PUNCT	punct	_	5	punct	_	_
11	uzurupopok	zurupopok	VERB	vi	_	5	parataxis	_	_
12	oho	ho	AUX	aux	Person[subj]=3	11	aux	_	_
13	iko	iko	AUX	aux	Aspect=Prog|Person[subj]=3	11	aux	_	_
14	.	.	PUNCT	punct	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	Iʔi	ʔi	NOUN	n	Rel=NCont	0	root	_	_
2	zekaipo	kwehe	ADV	adv	_	1	advmod	_	_
3	wɨkɨʔɨrpe	ɨkɨʔɨr	NOUN	n	Case=Dat|Rel=Corf	1	obl	_	_
4	:	:	PUNCT	punct	_	5	punct	_	_
5	ikatuahɨ	katu	NOUN	n	Emph=Yes|Rel=NCont	1	parataxis	_	_
6	tuwe	tuwe	ADV	adv	Emph=Yes	5	advmod	_	_
7	aipo	aipo	ADV	adv	_	5	advmod	_	_
8	nerukaz	ukaz	NOUN	n	Number=Sing|Person[psor]=2|Poss=Yes|Rel=Cont	5	nmod	_	_
9	aipo	aipo	ADV	adv	_	8	advmod	_	_
10	nepa	ne	PRON	pro	Case=Dat|PronType=Prs	5	obl	_	_
11	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 parataxis	color:blue
1	Nahetakwaw	eta	NOUN	n	Polarity=Neg|Rel=NCont	0	root	_	_
2	zutɨw	zutɨw	NOUN	n	_	1	obl	_	_
3	rupi	upi	ADP	posp	Rel=Cont	2	case	_	_
4	,	,	PUNCT	punct	_	1	punct	_	_
5	xo	xo	PART	pcl	_	6	discourse	_	_
6	ur	zur	VERB	vi	Person[subj]=3	1	parataxis	_	_
7	ɨ	ʔɨ	NOUN	n	_	6	obl:subj	_	_
8	tɨ	ʔɨ	NOUN	n	_	6	obl	_	_
9	hɨ	wɨ	ADP	posp	Rel=Cont	8	case	_	_
10	mehe	mehe	ADP	posp	Rel=Cont	6	case	_	_
11	,	,	PUNCT	punct	_	6	punct	_	_
12	xo	xo	PART	pcl	_	15	discourse	_	_
13	aʔe	aʔe	PRON	pro	Person=3	15	obl	_	_
14	mehe	mehe	ADP	posp	Rel=Cont	13	case	_	_
15	heta	eta	NOUN	n	Rel=NCont	6	parataxis	_	_
16	.	.	PUNCT	punct	_	15	punct	_	_

~~~


