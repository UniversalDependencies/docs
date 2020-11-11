---
layout: base
title:  'Statistics of advmod in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="tr_boun-dep-advmod-emph.html">advmod:emph</a></tt>.

5291 nodes (4%) are attached to their parents as `advmod`.

5063 instances of `advmod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.83991683991684.

The following 13 pairs of parts of speech are connected with `advmod`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (2826; 53% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1032; 20% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (917; 17% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (374; 7% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (39; 1% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (32; 1% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (32; 1% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (19; 0% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (13; 0% instances), <tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	Fakülteyi	fakülte	NOUN	Noun	Case=Acc|Number=Sing|Person=3	2	obj	_	_
2	bitirenler	bitir	VERB	Verb	Case=Nom|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	6	csubj	_	_
3	en	en	ADV	Adverb	_	4	advmod	_	_
4	uçtan	uç	VERB	Verb	Case=Abl|Number=Sing|Person=3	6	obl	_	_
5	göreve	görev	NOUN	Noun	Case=Dat|Number=Sing|Person=3	6	obj	_	_
6	başlıyorlarmış	başla	VERB	Verb	Aspect=Prog|Evident=Nfh|Number=Plur|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advmod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Tam	tam	ADV	Adverb	_	2	advmod	_	_
2	arkanda	arka	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	4	obj	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	4	punct	_	_
4	dedi	de	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
5	kadın	kadın	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	4	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	SpacesAfter=\n

~~~


