---
layout: base
title:  'Statistics of xcomp in UD_Nanai-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Nanai-GDUD: Relations: `xcomp`

This relation is universal.

10 nodes (1%) are attached to their parents as `xcomp`.

6 instances of `xcomp` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="gld_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="gld_gdud-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="gld_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="gld_gdud-pos-ADJ.html">ADJ</a></tt> (3; 30% instances), <tt><a href="gld_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gld_gdud-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="gld_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="gld_gdud-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="gld_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="gld_gdud-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	mii	mii	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	mora-jč-i	mora	VERB	_	Number=Sing|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
3	=təni	=təni	PART	_	_	2	discourse	_	SpaceAfter=No
4	=da	=da	PART	_	_	2	discourse	_	_
5	mora-jč-i	mora	VERB	_	VerbForm=Inf	2	xcomp	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	a	a	CCONJ	_	_	4	cc	_	_
2	təj	təj	DET	_	PronType=Dem	3	det	_	_
3	naonǯokan=də	naonǯokan	NOUN	_	_	4	nsubj	_	_
4	un-ǯi	un	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	mii=də	mii	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
6	daai	daai	ADJ	_	Degree=Pos	7	xcomp	_	_
7	ose-xam-bi	ose	VERB	_	Number=Sing|Person=1|Tense=Past	4	ccomp	_	_
8	un-ǯi-nʲ	un	VERB	_	Number=Sing|Person=3|Tense=Pres	4	parataxis	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	mama-ni	mama	PRON	_	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	un-ǯi-ni	un-ǯi	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	basa	basa	ADV	_	_	2	advmod	_	_
4	ajŋani-wa	ajŋani	ADV	_	_	2	obl	_	CaseOrig=Obl
5	mii=dəə	mii	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
6	sin-ǯi	sin-ǯi	PRON	_	Number=Sing|Person=2|PronType=Prs	9	nmod	_	_
7	gəsə	gəsə	ADV	_	_	9	advmod	_	_
8	ənu-u-ri	ənu-u	VERB	_	Mood=Imp|Tense=Pres|VerbForm=Fin	9	xcomp	_	_
9	piktə-i	piktə	NOUN	_	Case=Acc	2	ccomp	_	_
10	ičə-ndə-mi	ičə	VERB	_	VerbForm=Conv	9	acl	_	Purpose=Prs

~~~


