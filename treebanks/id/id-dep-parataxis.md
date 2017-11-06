---
layout: base
title:  'Statistics of parataxis in UD_Indonesian'
udver: '2'
---

## Treebank Statistics: UD_Indonesian: Relations: `parataxis`

This relation is universal.

404 nodes (0%) are attached to their parents as `parataxis`.

356 instances of `parataxis` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.9207920792079.

The following 23 pairs of parts of speech are connected with `parataxis`: <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (250; 62% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (41; 10% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (39; 10% instances), <tt><a href="id-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (15; 4% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-PROPN.html">PROPN</a></tt> (14; 3% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="id-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="id-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="id-pos-PRON.html">PRON</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="id-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="id-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="id-pos-NUM.html">NUM</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="id-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	Tuh	_	PART	_	_	4	advmod	_	SpaceAfter=No
2	,	_	PUNCT	_	_	4	punct	_	_
3	kamu	_	PRON	_	_	4	nsubj	_	_
4	lupa	_	VERB	_	_	0	root	_	_
5	lagi	_	ADV	_	_	4	advmod	_	_
6	kan	_	PART	_	_	4	amod	_	SpaceAfter=No
7	?	_	PUNCT	_	_	4	punct	_	_
8	-	_	PUNCT	_	_	4	punct	_	_
9	Lihat	_	VERB	_	_	4	parataxis	_	SpaceAfter=No
10	,	_	PUNCT	_	_	4	punct	_	_
11	kamu	_	PRON	_	_	12	nsubj	_	_
12	lupa	_	VERB	_	_	4	parataxis	_	_
13	lagi	_	ADV	_	_	12	advmod	_	_
14	bukan	_	PART	_	Polarity=Neg	12	advmod	_	SpaceAfter=No
15	?	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	apakah	_	ADV	_	_	0	root	_	_
2	artinya	_	NOUN	_	_	1	acl	_	_
3	tidak	_	PART	_	Polarity=Neg	4	advmod	_	_
4	beroperasi	_	VERB	_	_	2	parataxis	_	_
5	hari	_	NOUN	_	_	4	obj	_	_
6	sabtu	_	PROPN	_	_	5	flat	_	SpaceAfter=No
7	,	_	PUNCT	_	_	8	punct	_	_
8	minggu	_	PROPN	_	_	5	conj	_	_
9	/	_	SYM	_	_	10	punct	_	_
10	libur	_	NOUN	_	_	5	conj	_	SpaceAfter=No
11	?	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis	color:blue
1	Sebuah	_	DET	_	_	2	det	_	_
2	pertanyaan	_	NOUN	_	_	5	parataxis	_	SpaceAfter=No
3	,	_	PUNCT	_	_	2	punct	_	_
4	mengapa	_	ADV	_	_	5	advmod	_	_
5	dipahatkan	_	VERB	_	_	0	root	_	_
6	relief	_	NOUN	_	_	5	obj	_	_
7	Garudeya	_	PROPN	_	_	6	flat	_	SpaceAfter=No
8	?	_	PUNCT	_	_	5	punct	_	_

~~~


