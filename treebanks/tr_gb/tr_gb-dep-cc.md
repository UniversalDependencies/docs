---
layout: base
title:  'Statistics of cc in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `cc`

This relation is universal.

169 nodes (1%) are attached to their parents as `cc`.

160 instances of `cc` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76923076923077.

The following 10 pairs of parts of speech are connected with `cc`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-CCONJ.html">CCONJ</a></tt> (52; 31% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-CCONJ.html">CCONJ</a></tt> (51; 30% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-CCONJ.html">CCONJ</a></tt> (25; 15% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-CCONJ.html">CCONJ</a></tt> (21; 12% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-CCONJ.html">CCONJ</a></tt> (10; 6% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (5; 3% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	kız	kız	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	erkek	erkek	NOUN	_	Case=Nom|Number=Sing	1	conj	_	_
4	çocuklar	çocuk	NOUN	_	Case=Nom|Number=Plur	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	Bakabilirim	bak	VERB	_	Aspect=Hab|Mood=GenPot|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	parataxis	_	_
2	de	de	CCONJ	_	_	1	cc	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	beklemesi	bekle	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	5	ccomp	_	_
5	gerek	gerek	ADJ	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	İngiliz	İngiliz	PROPN	_	Number=Sing	4	nmod	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	Alman	Alman	PROPN	_	Number=Sing	1	conj	_	_
4	sineması	sinema	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_

~~~


