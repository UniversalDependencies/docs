---
layout: base
title:  'Statistics of compound:lvc in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="az_tuecl-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="az_tuecl-dep-compound-redup.html">compound:redup</a></tt>.

14 nodes (2%) are attached to their parents as `compound:lvc`.

14 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14285714285714.

The following 4 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (9; 64% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="az_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:lvc	color:blue
1	Fikr	fikr	NOUN	_	_	2	compound:lvc	_	_
2	elirәm	el	VERB	_	_	0	root	_	_
3	yağış	yağış	NOUN	_	_	4	nsubj	_	_
4	yağır	yağ	VERB	_	_	2	ccomp	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:lvc	color:blue
1	Mərasim	Mərasim	NOUN	_	_	4	nsubj	_	_
2	büyün	büyün	ADV	_	_	4	advmod	_	_
3	bərgüzar	bərgüzar	VERB	_	_	4	compound:lvc	_	_
4	olacax	ol	VERB	_	_	0	root	_	SpaceAfter=No
5	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:lvc	color:blue
1	Cələsə	cələsə	NOUN	_	_	3	nsubj	_	_
2	elam	elam	NOUN	_	_	3	compound:lvc	_	_
3	olanda	ol	AUX	_	_	7	advcl	_	_
4	o	o	PRON	_	_	7	obl	_	_
5	qədər	qədər	ADP	_	_	4	case	_	_
6	təəccüb	təəccüb	NOUN	_	_	7	compound:lvc	_	_
7	eləmişdi	elə	VERB	_	_	0	root	_	_
8	ki	ki	SCONJ	_	_	14	mark	_	_
9	mənə	mən	NOUN	_	_	14	obl	_	_
10	elə	elə	ADV	_	_	14	advmod	_	_
11	mat	mat	ADV	_	_	14	advmod	_	SpaceAfter=No
12	-	-	PUNCT	_	_	11	punct	_	SpaceAfter=No
13	mat	mat	ADV	_	_	11	compound:redup	_	_
14	baxırdı	bax	VERB	_	_	7	advcl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	7	punct	_	_

~~~


