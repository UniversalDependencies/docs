---
layout: base
title:  'Statistics of discourse:emo in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `discourse:emo`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-discourse.html">discourse</a></tt>.

733 nodes (1%) are attached to their parents as `discourse:emo`.

660 instances of `discourse:emo` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.92633015006821.

The following 15 pairs of parts of speech are connected with `discourse:emo`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (399; 54% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (119; 16% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (74; 10% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (51; 7% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (30; 4% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (17; 2% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (12; 2% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (12; 2% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (8; 1% instances), <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (5; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 discourse:emo	color:blue
1	@user	@user	SYM	SYM	_	8	vocative:mention	_	_
2	ok	ok	INTJ	I	_	8	discourse	_	_
3	grazie	grazie	INTJ	I	_	8	discourse	_	_
4	mille	mille	NUM	N	NumType=Card	3	nummod	_	_
5	c:	c:	SYM	SYM	_	8	discourse:emo	_	_
6	te	te	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	8	expl	_	_
7	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	do	dare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
9	dopo	dopo	ADV	B	_	8	advmod	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	foto	foto	NOUN	S	Gender=Fem	8	dislocated	_	SpaceAfter=No
12	?	?	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 discourse:emo	color:blue
1	@user	@user	SYM	SYM	_	4	vocative:mention	_	_
2	Era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
3	anche	anche	ADV	B	_	4	advmod	_	_
4	ora	ora	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	!	!	PUNCT	FS	_	4	punct	_	_
6	:)	:)	SYM	X	_	4	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse:emo	color:blue
1	@user	@user	SYM	SYM	_	2	vocative:mention	_	_
2	grazie	grazie	INTJ	I	_	0	root	_	_
3	!!	!!	PUNCT	FS	_	2	punct	_	_
4	:D	:D	SYM	SYM	_	2	discourse:emo	_	_

~~~


