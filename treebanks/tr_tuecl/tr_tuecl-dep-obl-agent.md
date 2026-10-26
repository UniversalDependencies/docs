---
layout: base
title:  'Statistics of obl:agent in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="tr_tuecl-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tr_tuecl-dep-obl-tmod.html">obl:tmod</a></tt>.

1 nodes (0%) are attached to their parents as `obl:agent`.

1 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `obl:agent`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:agent	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	kocasına	koca	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl:agent	_	_
3	arabayı	araba	NOUN	_	Case=Acc|Number=Sing	4	obj	_	_
4	yıkattırdı	yıka	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=CauCau	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


