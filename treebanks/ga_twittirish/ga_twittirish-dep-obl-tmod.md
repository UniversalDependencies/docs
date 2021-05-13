---
layout: base
title:  'Statistics of obl:tmod in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ga_twittirish-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ga_twittirish-dep-obl-prep.html">obl:prep</a></tt>.

134 nodes (1%) are attached to their parents as `obl:tmod`.

125 instances of `obl:tmod` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.70149253731343.

The following 17 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (35; 26% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (33; 25% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt> (19; 14% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt> (17; 13% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt> (6; 4% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-X.html">X</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-X.html">X</a></tt>-<tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:tmod	color:blue
1	#ff	#ff	X	_	_	3	parataxis:hashtag	_	Lang=ga
2	mo	mo	DET	_	_	3	nmod:poss	_	Lang=ga
3	boss	boss	NOUN	_	_	0	root	_	CSType=Intra|Lang=en
4	don	do	ADP	_	_	5	case	_	Lang=ga
5	bhliain	bliain	NOUN	_	_	3	obl:tmod	_	Lang=ga
6	seo	seo	DET	_	_	5	det	_	Lang=ga
7	chugainn	chuig	ADP	_	_	6	fixed	_	Lang=ga
8	@ShaneHennessy	@ShaneHennessy	PROPN	_	_	3	appos	_	_
9	nó	nó	CCONJ	_	_	10	cc	_	Lang=ga
10	@ShaneOhAonghusa	@ShaneOhAonghusa	PROPN	_	_	8	conj	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 obl:tmod	color:blue
1	Bígí	bí	VERB	_	_	0	root	_	Lang=ga
2	linn	le	ADP	_	_	1	obl:prep	_	Lang=ga
3	ag	ag	ADP	_	_	4	case	_	Lang=ga
4	@GaelGAIRI	@GaelGAIRI	PROPN	_	_	1	obl	_	_
5	do	do	ADP	_	_	6	case	_	Lang=ga
6	@SnaGaeilge	@SnaGaeilge	PROPN	_	_	1	obl	_	_
7	oíche	oíche	NOUN	_	_	1	obl:tmod	_	Lang=ga
8	amárach	amárach	NOUN	_	_	7	nmod	_	Lang=ga|SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	óna	ó	ADP	_	_	11	case	_	Lang=ga
11	21.30	21.30	NUM	_	_	1	obl:tmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl:tmod	color:blue
1	An	an	DET	_	_	2	det	_	Lang=ga
2	Aimsir	aimsir	NOUN	_	_	0	root	_	Lang=ga
3	Láithreach	láithreach	ADJ	_	_	2	amod	_	Lang=ga
4	@TG4TV	@TG4TV	PROPN	_	_	2	nmod	_	Lang=ga
5	@	@	ADP	_	_	6	case	_	_
6	22:40	22:40	NUM	_	_	2	obl:tmod	_	_

~~~


