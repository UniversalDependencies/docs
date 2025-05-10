---
layout: base
title:  'Statistics of nsubj:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_gum-dep-nsubj-outer.html">nsubj:outer</a></tt>.

1575 nodes (1%) are attached to their parents as `nsubj:pass`.

1567 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.76825396825397.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (832; 53% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (562; 36% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (147; 9% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	His	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=organization-preparation:20->21:4:sem-synym-146,157|Entity=(34-abstract-new-nnnnn-cf2-2-sgl(3-person-giv:act-sssss-cf1*-1-ana-Lord_Byron)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	7:nsubj:pass	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(35-abstract-new-nnnnn-cf3-1-sgl)34)|MSeg=moderat-ion
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	Negation=Yes
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=restrict-ed
8	to	to	ADP	IN	_	10	case	10:case	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(36-event-new-nnnnn-cf4-2-sgl|MSeg=physic-al
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	7:obl:to	Entity=36)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	But	but	CCONJ	CC	_	4	cc	4:cc	Discourse=adversative-contrast_m:70->69:1:dm-but-365|PDTB=Explicit:Comparison.Contrast:but:365:356-364:366-374
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj:pass	4:nsubj:pass|6:nsubj:xsubj	Entity=(10-person-giv:act-sssss-cf1*-1-ana)
3	'm	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	supposed	suppose	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=suppos-ed
5	to	to	PART	TO	_	6	mark	6:mark	_
6	call	call	VERB	VB	VerbForm=Inf	4	xcomp	4:xcomp	_
7	Melanie	Melanie	PROPN	NNP	Number=Sing	9	nmod:poss	9:nmod:poss	Entity=(25-person-giv:inact-nnnnn-cf3-3-coref(26-person-giv:act-nnnnn-cf2-1-coref
8	's	's	PART	POS	_	7	case	7:case	Entity=26)
9	mom	mom	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=25)|SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nsubj:pass	color:blue
1	encl	enclose	VERB	VBN	Abbr=Yes|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	Discourse=organization-preparation:119->121:1:_|SpaceAfter=No
2	:	:	PUNCT	:	_	5	punct	5:punct	_
3	U.S.G.	U.S.G.	PROPN	NNP	Number=Sing	5	compound	5:compound	Discourse=organization-preparation:120->121:0:_|Entity=(1-organization-giv:act-nnnns-cf1*-1-coref)
4	Joint	Joint	ADJ	NNP	Degree=Pos	5	amod	5:amod	Entity=(156-abstract-new-nnnnn-cf5-1,2-sgl|MSeg=Join-t
5	Resolution	Resolution	PROPN	NNP	Number=Sing	1	nsubj:pass	1:nsubj:pass	MSeg=Resolu-tion
6	36-01	36-01	NUM	CD	NumForm=Digit|NumType=Card	5	dep	5:dep	Entity=156)|SpaceAfter=No
7	:	:	PUNCT	:	_	10	punct	10:punct	_
8	Penn	Penn	PROPN	NNP	Number=Sing	9	compound	9:compound	Discourse=context-background:121->100:11:_|Entity=(22-abstract-giv:inact-snsss-cf3-1,2,3-coref(3-organization-giv:act-sssss-cf2-1,2-coref-Pennsylvania_State_University(4-place-giv:inact-sssss-cf4-1-coref-Pennsylvania)
9	State	State	PROPN	NNP	Number=Sing	10	compound	10:compound	Entity=3)
10	Wiki	Wiki	PROPN	NNP	Number=Sing	5	appos	5:appos	Entity=22)

~~~


