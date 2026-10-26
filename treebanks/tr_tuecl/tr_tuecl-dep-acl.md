---
layout: base
title:  'Statistics of acl in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `acl`

This relation is universal.

6 nodes (1%) are attached to their parents as `acl`.

6 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (5; 83% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 acl	color:blue
1	Gençlere	genç	NOUN	_	Case=Dat|Number=Plur	6	obl	_	_
2	erişilebilir	eriş	VERB	_	Aspect=Hab|Evident=Fh|Mood=GenPot|VerbForm=Part|Voice=Pass	4	acl	_	_
3	olmayan	ol	AUX	_	Polarity=Neg|Tense=Pres|VerbForm=Part	2	aux	_	_
4	hedefleri	hedef	NOUN	_	Case=Acc|Number=Plur	6	obj	_	_
5	terk	terk	NOUN	_	Case=Nom|Number=Sing	6	compound:lvc	_	_
6	ettirmeliyiz	et	VERB	_	Aspect=Imp|Evident=Fh|Mood=Nec|Number=Plur|Person=1|Tense=Pres|Voice=Cau	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl	color:blue
1	Öğretmen	öğretmen	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
2	kitabı	kitap	NOUN	_	Case=Acc|Number=Sing	3	obj	_	_
3	alıp	al	VERB	_	Mood=Ind|VerbForm=Conv	5	acl	_	_
4	okula	okul	NOUN	_	Case=Dat|Number=Sing	5	obl	_	_
5	gitti	git	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


