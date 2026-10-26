---
layout: base
title:  'Statistics of orphan in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	araba	araba	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	aldı	al	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	ama	ama	CCONJ	_	_	6	cc	_	_
5	erkek	erkek	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	kardeşi	kardeş	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	conj	_	_
7	sadece	sadece	ADV	_	_	8	advmod	_	_
8	bisiklet	bisiklet	NOUN	_	Case=Nom|Number=Sing	6	orphan	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 orphan	color:blue
1	Mary	Mary	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	bronz	bronz	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	kazandı	kazan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Peter	Peter	PROPN	_	Case=Nom|Number=Sing	3	conj	_	_
6	gümüş	gümüş	NOUN	_	Case=Nom|Number=Sing	3	orphan	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	Jane	Jane	PROPN	_	Case=Nom|Number=Sing	3	conj	_	_
9	altın	altın	NOUN	_	Case=Nom|Number=Sing	8	orphan	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 orphan	color:blue
1	Mary	Mary	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	bronz	bronz	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	kazandı	kazan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Peter	Peter	PROPN	_	Case=Nom|Number=Sing	3	conj	_	_
6	gümüş	gümüş	NOUN	_	Case=Nom|Number=Sing	3	orphan	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	Jane	Jane	PROPN	_	Case=Nom|Number=Sing	3	conj	_	_
9	altın	altın	NOUN	_	Case=Nom|Number=Sing	8	orphan	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


