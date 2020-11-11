---
layout: base
title:  'Statistics of orphan in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `orphan`

This relation is universal.

90 nodes (0%) are attached to their parents as `orphan`.

52 instances of `orphan` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14444444444444.

The following 17 pairs of parts of speech are connected with `orphan`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (22; 24% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (15; 17% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (13; 14% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (8; 9% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (5; 6% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (4; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 orphan	color:blue
1	Prügi	prügi	NOUN	S	Case=Gen|Number=Sing	3	orphan	2.1:obl	Orphan=Yes
2	eest	eest	ADP	K	AdpType=Post	1	case	1:case	_
3	vedajale	vedaja	NOUN	S	Case=All|Number=Sing	0	root	2.1:obl	_
4	ja	ja	CCONJ	J	_	7	cc	5.1:cc	_
5	pärast	pärast	ADV	D	_	7	orphan	5.1:advmod	_
6	koos	koos	ADP	K	AdpType=Prep	7	case	7:case	_
7	soojaarvega	sooja_arve	NOUN	S	Case=Com|Number=Sing	3	conj	5.1:obl	SpaceAfter=No
8	.	.	PUNCT	Z	_	3	punct	2.1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 orphan	color:blue
1	Ise	ise	ADV	D	_	2	advmod	2:advmod	_
2	kirjutadsin	kirjutama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|Typo=Yes|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|CorrectForm=kirjutasin
3	:	:	PUNCT	Z	_	5	punct	5:punct	_
4	Mõttest	mõte	NOUN	S	Case=Ela|Number=Sing	5	obl	5:obl	_
5	sünnib	sündima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	2:parataxis	_
6	tegu	tegu	NOUN	S	Case=Nom|Number=Sing	5	nsubj	5:nsubj	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	9:punct	_
8	tegudest	tegu	NOUN	S	Case=Ela|Number=Plur	9	orphan	8.1:obl	_
9	saatus	saatus	NOUN	S	Case=Nom|Number=Sing	5	conj	8.1:nsubj	SpaceAfter=No
10	,	,	PUNCT	Z	_	11	punct	11:punct	_
11	teemal	teema	NOUN	S	Case=Ade|Number=Sing	5	parataxis	5:parataxis	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 orphan	color:blue
1	Ja	ja	CCONJ	J	_	4	cc	4:cc	_
2	siis	siis	ADV	D	_	4	advmod	4:advmod	_
3	jälle	jälle	ADV	D	_	4	advmod	4:advmod	_
4	maksab	maksma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	mees	mees	NOUN	S	Case=Nom|Number=Sing	4	nsubj	4:nsubj	_
6	ja	ja	CCONJ	J	_	9	cc	7.1:cc	_
7	siis	siis	ADV	D	_	9	orphan	7.1:advmod	_
8	jälle	jälle	ADV	D	_	9	orphan	7.1:advmod	_
9	mina	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	conj	7.1:nsubj	_
10	jne	jne	ADV	Y	Abbr=Yes	4	conj	4:conj	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


