---
layout: base
title:  'Statistics of cc:preconj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-cc.html">cc</a></tt>.

86 nodes (0%) are attached to their parents as `cc:preconj`.

86 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95348837209302.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (43; 50% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (16; 19% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (14; 16% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (11; 13% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cc:preconj	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj|9:nsubj	Discourse=elaboration-additional:2->1:0:ref-prs-1,20+sem-lxchn-9,28|Entity=(1-place-giv:act-cf1*-1-ana-Vavaʻu)
2	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
3	either	either	CCONJ	CC	_	6	cc:preconj	6:cc:preconj	Entity=(1-place-giv:act-cf1*-4,7-pred-Vavaʻu
4	raised	raise	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	6	amod	6:amod	Entity=(5-substance-new-cf2-3-sgl|MSeg=rais-ed
5	coral	coral	NOUN	NN	Number=Sing	6	compound	6:compound	_
6	limestone	limestone	NOUN	NN	Number=Sing	0	root	0:root	Entity=5)
7	or	or	CCONJ	CC	_	9	cc	9:cc	_
8	coral	coral	NOUN	NN	Number=Sing	9	compound	9:compound	Entity=(6-substance-new-cf3-1-sgl)
9	atolls	atoll	NOUN	NNS	Number=Plur	6	conj	6:conj:or	Entity=1)|MSeg=atoll-s|SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	These	this	DET	DT	Number=Plur|PronType=Dem	2	det	2:det	Discourse=elaboration-additional:109->106:2:ref-dem-871-879,889-890+sem-lxchn-882-883,899-900|Entity=(158-abstract-giv:act-cf1*-2-coref
2	names	name	NOUN	NNS	Number=Plur	4	nsubj:pass	4:nsubj:pass	Entity=158)|MSeg=name-s
3	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	given	give	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=giv-en
5	either	either	CCONJ	CC	_	7	cc:preconj	7:cc:preconj	_
6	in	in	ADP	IN	_	7	case	7:case	_
7	Eegimaa	Eegimaa	PROPN	NNP	Number=Sing	4	obl	4:obl:in	Entity=(1-abstract-giv:act-cf2-1-coref-Bandial_language)
8	or	or	CCONJ	CC	_	12	cc	12:cc	_
9	in	in	ADP	IN	_	12	case	12:case	_
10	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	Entity=(162-abstract-new-cf3-3-sgl
11	different	different	ADJ	JJ	Degree=Pos	12	amod	12:amod	MSeg=differ-ent
12	language	language	NOUN	NN	Number=Sing	7	conj	4:obl:in|7:conj:or	Entity=162)|SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	And	and	CCONJ	CC	_	4	cc	4:cc	Discourse=joint-sequence_m:107->106:0:dm-and-840+dm-afterwards-841
2	afterwards	afterwards	ADV	RB	Degree=Pos	4	advmod	4:advmod	MSeg=after-wards
3	either	either	CCONJ	CC	_	4	cc:preconj	4:cc:preconj	_
4	infected	infect	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	MSeg=infect-ed
5	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	4	obj	4:obj	Entity=(144-animal-giv:act-cf1*-1-ana)
6	or	or	CCONJ	CC	_	7	cc	7:cc	_
7	not	not	PART	RB	Polarity=Neg	4	conj	4:conj:or	SpaceAfter=No
8	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


