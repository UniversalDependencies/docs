---
layout: base
title:  'Statistics of cc in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="koi_uh-dep-cc-preconj.html">cc:preconj</a></tt>.

38 nodes (5%) are attached to their parents as `cc`.

38 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.60526315789474.

The following 4 pairs of parts of speech are connected with `cc`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (23; 61% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (9; 24% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (5; 13% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	пондыліс	пондывны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	чапкыны	чапкыны	VERB	_	VerbForm=Inf	2	xcomp	_	GTtags=Inf
4	куритны	куритны	VERB	_	VerbForm=Inf	3	xcomp	_	GTtags=Inf
5	да	да	CCONJ	_	_	6	cc	_	_
6	юны	юны	VERB	_	VerbForm=Inf	4	conj	_	GTtags=Inf|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Игаузу	Игаузу	PROPN	_	Case=Nom|NameType=Geo|Number=Sing	4	dislocated	_	GTtags=Prop,Sg,Nom
2	-	-	PUNCT	_	_	1	punct	_	_
3	этӧ	эта	PRON	_	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	_	GTtags=Dem,Sg,Nom
4	ыджыт	ыджыт	ADJ	_	_	0	root	_	_
5	али	али	CCONJ	_	_	7	cc	_	_
6	учӧт	учӧт	ADJ	_	_	7	amod	_	_
7	страна	страна	NOUN	_	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom|SpaceAfter=No
8	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	Мери	Мери	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Prop,Sg,Nom
2	босьтіс	босьтны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	бронза	бронза	NOUN	_	Case=Nom|Number=Sing	2	obj	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	Питер	Питер	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sg,Nom
6	–	–	PUNCT	_	_	5	punct	_	_
7	эзысь	эзысь	NOUN	_	Case=Nom|Number=Sing	5	orphan	_	GTtags=Sg,Nom|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	а	а	CCONJ	_	_	10	cc	_	_
10	Джейн	Джейн	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sg,Nom
11	–	–	PUNCT	_	_	10	punct	_	_
12	зарни	зарни	NOUN	_	Case=Nom|Number=Sing	10	orphan	_	GTtags=Sg,Nom|SpaceAfter=No
13	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


