---
layout: base
title:  'Statistics of cop in UD_Laz-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Laz-BOUN: Relations: `cop`

This relation is universal.

38 nodes (2%) are attached to their parents as `cop`.

36 instances of `cop` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02631578947368.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="lzz_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lzz_boun-pos-AUX.html">AUX</a></tt> (24; 63% instances), <tt><a href="lzz_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="lzz_boun-pos-AUX.html">AUX</a></tt> (7; 18% instances), <tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzz_boun-pos-AUX.html">AUX</a></tt> (3; 8% instances), <tt><a href="lzz_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="lzz_boun-pos-AUX.html">AUX</a></tt> (2; 5% instances), <tt><a href="lzz_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="lzz_boun-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="lzz_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzz_boun-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	bee	bee	NOUN	noun	_	5	obl	_	_
2	muši	mu	PRON	pronoun	_	1	nmod:poss	_	_
3	na	na	SCONJ	Prop	_	1	case	_	_
4	tʼu	ortʼu	AUX	cop	_	5	cop	_	_
5	axelen	axel	ADJ	adv	_	0	root	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Bereepe	Bere	NOUN	Noun	_	2	nsubj	_	_
2	doğuru	ğur	VERB	Verb	_	0	root	_	_
3	dortʼu	ortʼu	AUX	Verb	_	2	cop	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Berepek	Berepek	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
2	noseri	noser	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	ccomp	_	_
3	voret	ortʼu	AUX	_	Case=Nom|Number=Sing|Person=3	2	cop	_	_
4	ya	ya	SCONJ	_	_	2	mark	_	_
5	t'k'u	t'k'	VERB	_	Case=Acc|Number=Sing|Person=3	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	SpacesAfter=\n

~~~


