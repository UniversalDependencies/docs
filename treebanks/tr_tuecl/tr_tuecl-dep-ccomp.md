---
layout: base
title:  'Statistics of ccomp in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `ccomp`

This relation is universal.

19 nodes (2%) are attached to their parents as `ccomp`.

19 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47368421052632.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (16; 84% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 ccomp	color:blue
1	Yağmur	yağmur	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	yağdığını	yağ	VERB	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	3	ccomp	_	_
3	zannediyorum	zannet	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 ccomp	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	tatil	tatil	NOUN	_	Case=Nom|Number=Sing	4	ccomp	_	_
3	olduğunu	ol	AUX	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	2	aux	_	_
4	unutup	unut	VERB	_	VerbForm=Conv	6	advcl	_	_
5	okula	okul	NOUN	_	Case=Dat|Number=Sing	6	obl	_	_
6	gitmiş	git	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 ccomp	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	5	nsubj	_	_
2	kendi	kendi	PRON	_	Case=Nom|Number=Sing|Person=3|Reflex=Yes	4	obl	_	_
3	kendine	kendi	PRON	_	Case=Dat|Number=Sing|Person=3|Reflex=Yes	2	fixed	_	_
4	olmayı	ol	AUX	_	Case=Acc|Number=Sing|VerbForm=Vnoun	5	ccomp	_	_
5	seviyor	sev	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


