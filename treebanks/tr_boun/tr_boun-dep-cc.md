---
layout: base
title:  'Statistics of cc in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="tr_boun-dep-cc-preconj.html">cc:preconj</a></tt>.

2934 nodes (2%) are attached to their parents as `cc`.

2890 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.30811179277437.

The following 16 pairs of parts of speech are connected with `cc`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (1351; 46% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (968; 33% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (342; 12% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (173; 6% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (39; 1% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (18; 1% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (18; 1% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Ancak	ancak	CCONJ	Conj	_	4	cc	_	_
2	bu	bu	DET	Det	_	4	nsubj	_	_
3	bir	bir	DET	ANum	NumType=Card	4	det	_	_
4	teferruat	teferruat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	gayet	gayet	ADV	Adverb	_	6	advmod	_	_
6	tabii	tabii	ADV	Adj	_	4	advmod	_	_
7	ki	ki	CCONJ	Conj	_	6	compound	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 cc	color:blue
1	Ama	ama	CCONJ	Conj	_	9	cc	_	_
2	Ada	ada	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	_
3	vapuruna	vapur	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	obl	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	9	punct	_	_
5	üç	üç	NUM	ANum	NumType=Card	9	nummod	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	dört	dört	NUM	ANum	NumType=Card	5	conj	_	_
8	saat	saat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	vardı	var	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Domatesli	domates	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	amod	_	_
2	ve	ve	CCONJ	Conj	_	3	cc	_	_
3	yumurtalı	yumurta	ADJ	Adj	Case=Nom|Number=Sing|Person=3	1	conj	_	_
4	çavdar	çavdar	ADP	PCNom	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	ekmeği	ekmek	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	SpaceAfter=No
6	:	:	PUNCT	Punc	_	5	punct	_	SpacesAfter=\n

~~~


