---
layout: base
title:  'Statistics of cc:preconj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-cc.html">cc</a></tt>.

112 nodes (0%) are attached to their parents as `cc:preconj`.

112 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95535714285714.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (53; 47% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (24; 21% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (18; 16% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (13; 12% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cc:preconj	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj|9:nsubj	Discourse=elaboration-additional:2->1:0:ref-prs-1,20-_+sem-lxchn-9,28-_|Entity=(1-place-giv:act-sssss-cf1*-1-ana-Vavaʻu)|PDTB=Implicit:Expansion.Level-of-detail.Arg2-as-detail:in particular:_:1-19:20-29
2	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
3	either	either	CCONJ	CC	_	6	cc:preconj	6:cc:preconj	Entity=(1-place-giv:act-sssss-cf1*-4,7-pred-Vavaʻu
4	raised	raise	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	6	amod	6:amod	Entity=(5-substance-new-nnnnn-cf2-3-sgl|MSeg=rais-ed
5	coral	coral	NOUN	NN	Number=Sing	6	compound	6:compound	_
6	limestone	limestone	NOUN	NN	Number=Sing	0	root	0:root	Entity=5)|MSeg=lime-stone
7	or	or	CCONJ	CC	_	9	cc	9:cc	_
8	coral	coral	NOUN	NN	Number=Sing	9	compound	9:compound	Entity=(6-substance-new-nnnns-cf3-1-sgl)
9	atolls	atoll	NOUN	NNS	Number=Plur	6	conj	6:conj:or	Entity=1)|MSeg=atoll-s|SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	Discourse=organization-phatic:64->65:0:_|Entity=(21-event-giv:act-snnnn-cf1*-1-ana)|PDTB=EntRel:EntRel:_:_:460-468:469-472
2	both	both	CCONJ	CC	_	3	cc:preconj	3:cc:preconj	_
3	removed	remove	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	MSeg=re-mov-ed
4	--	-	PUNCT	:	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	These	this	DET	DT	Number=Plur|PronType=Dem	2	det	2:det	Discourse=elaboration-additional:110->107:2:ref-dem-871-879,889-890-_+sem-lxchn-882-883,899-900-_|Entity=(157-abstract-giv:act-nnnnn-cf1*-2-coref|PDTB=Implicit:Expansion.Level-of-detail.Arg2-as-detail:specifically:_:859-888:889-901
2	names	name	NOUN	NNS	Number=Plur	4	nsubj:pass	4:nsubj:pass	Entity=157)|MSeg=name-s
3	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	given	give	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=giv-en
5	either	either	CCONJ	CC	_	7	cc:preconj	7:cc:preconj	_
6	in	in	ADP	IN	_	7	case	7:case	_
7	Eegimaa	Eegimaa	PROPN	NNP	Number=Sing	4	obl	4:obl:in	Entity=(1-abstract-giv:act-sssss-cf2-1-coref-Bandial_language)
8	or	or	CCONJ	CC	_	12	cc	12:cc	_
9	in	in	ADP	IN	_	12	case	12:case	_
10	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	Bridge=1<161:comparison-relative|Entity=(161-abstract-acc:inf-nnnnn-cf3-3-sgl
11	different	different	ADJ	JJ	Degree=Pos	12	amod	12:amod	MSeg=differ-ent
12	language	language	NOUN	NN	Number=Sing	7	conj	4:obl:in|7:conj:or	Entity=161)|SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


