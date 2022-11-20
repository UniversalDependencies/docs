---
layout: base
title:  'Statistics of dep in UD_Guajajara-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Guajajara-TuDeT: Relations: `dep`

This relation is universal.

13 nodes (0%) are attached to their parents as `dep`.

13 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.30769230769231.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="gub_tudet-pos-PART.html">PART</a></tt>-<tt><a href="gub_tudet-pos-PART.html">PART</a></tt> (10; 77% instances), <tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (2; 15% instances), <tt><a href="gub_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gub_tudet-pos-PART.html">PART</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dep	color:blue
1	Xo	xo	PART	pcl	_	2	discourse	_	_
2	kok	kok	NOUN	n	_	4	nmod	_	_
3	zo	zo	PART	pcl	_	1	dep	_	_
4	heta	eta	NOUN	n	Rel=NCont	0	root	_	_
5	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dep	color:blue
1	Nan	nan	PART	pcl	Polarity=Neg	3	discourse	_	_
2	,	,	PUNCT	punct	_	1	punct	_	_
3	nuhemkwaw	hem	VERB	v	Person[subj]=3|Polarity=Neg	0	root	_	_
4	ur	zur	VERB	vi	Person[subj]=3	3	dep	_	_
5	rihi	rihi	PART	pcl	_	3	discourse	_	_
6	ʔɨ	ʔɨ	PART	pcl	Speech=Fem	3	discourse	_	_
7	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 dep	color:blue
1	Taʔe	taʔe	CCONJ	cc	_	4	cc	_	_
2	zekaipo	kwehe	ADV	adv	Evident=Nfh|Int=Yes	4	advmod	_	_
3	muite	muite	NOUN	n	Foreign=Yes	4	obl	_	_
4	ihon	ho	NOUN	n	NonFoc=Yes|Rel=NCont	0	root	_	_
5	uhɨwi	hɨ	NOUN	n	Case=Abl|Rel=Corf	4	obl	_	_
6	raʔe	raʔe	PART	pcl	Tense=Past	4	discourse	_	_
7	xe	xe	PART	pcl	Speech=MM	4	dep	_	_
8	.	.	PUNCT	punct	_	4	punct	_	_

~~~


