---
layout: base
title:  'Statistics of nsubj:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_gum-dep-nsubj-outer.html">nsubj:outer</a></tt>.

1147 nodes (1%) are attached to their parents as `nsubj:pass`.

1144 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.87009590235397.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (629; 55% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (368; 32% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (124; 11% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (11; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	His	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=organization-preparation:20->21:4|Entity=(34-abstract-new-cf2-2-sgl(3-person-giv:act-cf1*-1-ana-Lord_Byron)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	7:nsubj:pass	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(35-abstract-new-cf3-1-sgl)34)
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	_
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
8	to	to	ADP	IN	_	10	case	10:case	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(36-event-new-cf4-2-sgl
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	7:obl:to	Entity=36)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	But	but	CCONJ	CC	_	4	cc	4:cc	Discourse=adversative-contrast_m:70->69:1
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj:pass	4:nsubj:pass|6:nsubj:xsubj	Entity=(10-person-giv:act-cf1*-1-ana)
3	'm	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	supposed	suppose	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	to	to	PART	TO	_	6	mark	6:mark	_
6	call	call	VERB	VB	VerbForm=Inf	4	xcomp	4:xcomp	_
7	Melanie	Melanie	PROPN	NNP	Number=Sing	9	nmod:poss	9:nmod:poss	Entity=(25-person-giv:inact-cf3-3-coref(26-person-giv:act-cf2-1-coref
8	's	's	PART	POS	_	7	case	7:case	Entity=26)
9	mom	mom	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=25)|SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	His	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Discourse=elaboration-additional:49->45:2|Entity=(1-person-giv:act-cf1*-1-ana-Antonín_Dvořák)
2	Seventh	Seventh	ADJ	NNP	Degree=Pos|Number=Sing|NumType=Ord	3	amod	3:amod	Entity=(80-abstract-new-cf3-1,2-sgl-Symphony_No._7_%28Dvořák%29|XML=<ref target:::"https://en.wikipedia.org/wiki/Symphony_No._7_(Dvo%C5%99%C3%A1k)">
3	Symphony	Symphony	PROPN	NNP	Number=Sing	5	nsubj:pass	5:nsubj:pass	Entity=80)|XML=</ref>
4	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	5:aux:pass	_
5	written	write	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	for	for	ADP	IN	_	7	case	7:case	_
7	London	London	PROPN	NNP	Number=Sing	5	obl	5:obl:for	Entity=(70-place-giv:inact-cf2-1-coref-London)|SpaceAfter=No
8	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


