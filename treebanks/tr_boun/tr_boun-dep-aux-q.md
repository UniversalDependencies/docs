---
layout: base
title:  'Statistics of aux:q in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-aux.html">aux</a></tt>.

4 nodes (0%) are attached to their parents as `aux:q`.

4 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (2; 50% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 25% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux:q	color:blue
1	"	"	PUNCT	Punc	_	2	punct	_	SpaceAfter=No
2	Niçin	Niçin	ADV	_	_	4	advmod	_	_
3	ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	söyleyecek	söyle	VERB	Ptcp	Aspect=Prosp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Part	10	ccomp	_	_
5	mişim	i	AUX	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	4	aux:q	_	SpaceAfter=No
6	?	?	PUNCT	Ques	_	4	punct	_	_
7	Sen	sen	PRON	Pers	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
8	söyle	söyle	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos	4	conj	_	SpaceAfter=No
9	."	."	PUNCT	Punc	_	4	punct	_	_
10	dedi	de	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Stop	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux:q	color:blue
1	"	"	PUNCT	Punc	_	2	punct	_	SpaceAfter=No
2	Kızım	Kızım	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	4	discourse	_	_
3	sen	sen	PRON	Pers	Case=Nom|Number=Sing|Person=2	4	nsubj	_	_
4	deli	deli	NOUN	_	_	0	root	_	_
5	misin	mi	AUX	_	Aspect=Imp|Number=Sing|Person=2|Tense=Pres	4	aux:q	_	_
6	.	.	PUNCT	Stop	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 aux:q	color:blue
1	Sonra	sonra	ADP	PCAbl	_	15	case	_	_
2	bir	bir	DET	Indef	_	3	det	_	_
3	gün	gün	NOUN	_	Case=Nom|Number=Sing|Person=3	10	obl	_	_
4	durgun	durgun	ADJ	Adj	_	5	amod	_	_
5	suda	su	NOUN	_	Case=Loc|Number=Sing|Person=3	6	obl	_	_
6	yatmış	yat	VERB	_	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	10	obj	_	_
7	keyifli	keyifli	ADV	_	_	10	advmod	_	DerivedFrom=keyif
8	keyifli	keyifli	ADV	_	_	7	compound:redup	_	DerivedFrom=keyif
9	etrafı	etraf	NOUN	_	Case=Acc|Number=Sing|Person=3	10	obj	_	_
10	seyrederken	seyret	VERB	_	Aspect=Hab|Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Conv	12	nmod	_	_
11	bir	bir	DET	Indef	_	12	det	_	_
12	bakmışım	bak	VERB	_	Evident=Nfh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	15	obj	_	SpaceAfter=No
13	,	,	PUNCT	Comma	_	12	punct	_	_
14	sen	sen	PRON	Pers	Case=Nom|Number=Sing|Person=2	15	nsubj	_	_
15	oraday	ora	PRON	Demons	Case=Loc|Number=Sing|Person=3|PronType=Loc	0	root	_	_
16	mışsın	i	AUX	Zero	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=2|Tense=Past	15	aux:q	_	_
17	,	,	PUNCT	Comma	_	19	punct	_	_
18	beni	ben	PRON	Pers	Case=Acc|Number=Sing|Person=1	19	obj	_	_
19	bekliyormuşsun	bekle	VERB	_	Aspect=Prog|Evident=Nfh|Number=Sing|Person=2|Polarity=Pos|Tense=Past	15	conj	_	SpaceAfter=No
20	.	.	PUNCT	Stop	_	19	punct	_	SpacesAfter=\r\n

~~~


