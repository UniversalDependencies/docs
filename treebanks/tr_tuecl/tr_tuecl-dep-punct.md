---
layout: base
title:  'Statistics of punct in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `punct`

This relation is universal.

168 nodes (19%) are attached to their parents as `punct`.

162 instances of `punct` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89880952380952.

The following 6 pairs of parts of speech are connected with `punct`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PUNCT.html">PUNCT</a></tt> (119; 71% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-PUNCT.html">PUNCT</a></tt> (22; 13% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-PUNCT.html">PUNCT</a></tt> (19; 11% instances), <tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_tuecl-pos-PUNCT.html">PUNCT</a></tt> (4; 2% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-PUNCT.html">PUNCT</a></tt> (3; 2% instances), <tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tuecl-pos-PUNCT.html">PUNCT</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 punct	color:blue
1	Kız	kız	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	arkadaşına	arkadaş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	mektup	mektup	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	yazdı	yaz	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 punct	color:blue
1	Benim	ben	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	_
2	babam	baba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	_
3	senin	sen	PRON	_	Case=Abl|Number=Sing|Person=2|PronType=Prs	4	nmod	_	_
4	kinden	ki	PRON	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	6	obl	_	_
5	daha	daha	ADV	_	_	6	advmod	_	_
6	harika	harika	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 punct	color:blue
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


