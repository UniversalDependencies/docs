---
layout: base
title:  'Statistics of amod in UD_Japanese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-GSD: Relations: `amod`

This relation is universal.

798 nodes (0%) are attached to their parents as `amod`.

798 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32456140350877.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt> (618; 77% instances), <tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt> (111; 14% instances), <tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt> (27; 3% instances), <tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="ja_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="ja_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ja_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ja_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ja_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ja_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 amod	color:blue
1	元	元	ADJ	JR	_	4	amod	_	SpaceAfter=No
2	広島	広島	PROPN	NNP	_	4	compound	_	SpaceAfter=No
3	県議会	県議会	NOUN	NN	_	4	compound	_	SpaceAfter=No
4	議員	議員	NOUN	NN	_	0	root	_	SpaceAfter=No
5	。	。	PUNCT	SYM	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	サイト	サイト	NOUN	NN	_	5	nmod	_	SpaceAfter=No
2	の	の	ADP	PN	_	1	case	_	SpaceAfter=No
3	新しい	新しい	ADJ	JJ	_	5	acl	_	SpaceAfter=No
4	楽しみ	楽しみ	NOUN	NN	_	5	compound	_	SpaceAfter=No
5	方	方	NOUN	XS	_	12	nmod	_	SpaceAfter=No
6	「	「	PUNCT	SYM	_	8	punct	_	SpaceAfter=No
7	屋上	屋上	NOUN	NN	_	8	compound	_	SpaceAfter=No
8	会議室	会議室	NOUN	NN	_	12	nmod	_	SpaceAfter=No
9	」	」	PUNCT	SYM	_	8	punct	_	SpaceAfter=No
10	好評	好評	ADJ	JN	_	12	amod	_	SpaceAfter=No
11	公開	公開	VERB	VV	_	12	amod	_	SpaceAfter=No
12	中	中	NOUN	XS	_	0	root	_	SpaceAfter=No
13	!	!	PUNCT	SYM	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 amod	color:blue
1	でも	でも	CCONJ	CC	_	17	advmod	_	SpaceAfter=No
2	、	、	PUNCT	SYM	_	1	punct	_	SpaceAfter=No
3	まずは	まずは	CCONJ	CC	_	17	advmod	_	SpaceAfter=No
4	ハーフ	ハーフ	NOUN	NN	_	5	compound	_	SpaceAfter=No
5	ドリア	ドリア	NOUN	NN	_	17	advcl	_	SpaceAfter=No
6	で	だ	AUX	AV	_	5	cop	_	SpaceAfter=No
7	は	は	ADP	PK	_	5	case	_	SpaceAfter=No
8	なく	ない	AUX	AV	_	5	aux	_	SpaceAfter=No
9	1	1	NUM	CD	NumType=Card	11	nummod	_	SpaceAfter=No
10	人	人	NOUN	XSC	_	11	compound	_	SpaceAfter=No
11	前	前	NOUN	NR	_	13	nmod	_	SpaceAfter=No
12	の	の	ADP	PN	_	11	case	_	SpaceAfter=No
13	ドリア	ドリア	NOUN	NN	_	17	obj	_	SpaceAfter=No
14	を	を	ADP	PS	_	13	case	_	SpaceAfter=No
15	お	お	NOUN	XP	_	17	compound	_	SpaceAfter=No
16	試し	試す	VERB	VV	_	17	amod	_	SpaceAfter=No
17	下さい	下さる	VERB	VV	_	0	root	_	SpaceAfter=No
18	。	。	PUNCT	SYM	_	17	punct	_	SpaceAfter=No

~~~


