---
layout: base
title:  'Statistics of csubj:cleft in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `csubj:cleft`

This relation is a language-specific subtype of <tt><a href="ga_twittirish-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_twittirish-dep-csubj-cop.html">csubj:cop</a></tt>.

36 nodes (0%) are attached to their parents as `csubj:cleft`.

36 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.86111111111111.

The following 11 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (18; 50% instances), <tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ga_twittirish-pos-PART.html">PART</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 csubj:cleft	color:blue
1	Fós	fós	ADV	_	_	3	advmod	_	Lang=ga
2	ag	ag	ADP	_	_	3	case	_	Lang=ga
3	dearadh	dearadh	NOUN	_	_	0	root	_	Lang=ga
4	le	le	ADP	_	_	5	case	_	Lang=ga
5	siopa	siopa	NOUN	_	_	3	obl	_	Lang=ga
6	ghriangraf	griangraf	NOUN	_	_	5	nmod	_	Lang=ga
7	#photoshop	#photoshop	X	_	_	5	parataxis:hashtag	_	SpaceAfter=No
8	-	-	PUNCT	_	_	9	punct	_	_
9	oiche	oíche	NOUN	_	_	5	amod	_	Lang=ga
10	déanach	déanach	ADJ	_	_	9	advmod	_	CorrectForm=dhéanach|Lang=ga
11	a	a	PART	_	_	12	mark:prt	_	Lang=ga
12	bheidh	bí	VERB	_	_	5	csubj:cleft	_	Lang=ga
13	ann	i	ADP	_	_	12	xcomp:pred	_	SpaceAfter=No
14	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:cleft	color:blue
1	@BrighidBB	@BrighidBB	PROPN	_	_	3	vocative:mention	_	_
2	hahah	hahah	INTJ	_	_	3	discourse	_	_
3	Anois	anois	ADV	_	_	0	root	_	Lang=ga
4	a	a	PART	_	_	5	mark:prt	_	Lang=ga
5	chonaic	feic	VERB	_	_	3	csubj:cleft	_	Lang=ga
6	mé	mé	PRON	_	_	5	nsubj	_	Lang=ga
7	é	é	PRON	_	_	5	obj	_	Lang=ga
8	seo	seo	PRON	_	_	7	det	_	Lang=ga|SpaceAfter=No
9	!!!!	!!!!	PUNCT	_	_	10	punct	_	_
10	Wtf	wtf	INTJ	_	_	3	parataxis:sentence	_	Lang=en|SpaceAfter=No
11	!	!	PUNCT	_	_	10	punct	_	_
12	Aisteach	aisteach	ADJ	_	_	10	parataxis:sentence	_	Lang=ga
13	an	an	DET	_	_	14	det	_	Lang=ga
14	bealach	bealach	NOUN	_	_	12	nsubj	_	Lang=ga
15	atá	bí	VERB	_	_	14	acl:relcl	_	Lang=ga
16	acu	ag	ADP	_	_	15	obl:prep	_	Lang=ga
17	scéalta	scéal	NOUN	_	_	19	obj	_	Lang=ga
18	a	a	PART	_	_	19	mark	_	Lang=ga
19	tharraingt	tarraingt	NOUN	_	_	14	xcomp	_	Lang=ga
20	ón	ó	ADP	_	_	21	case	_	Lang=ga
21	spéir	spéir	NOUN	_	_	19	obl	_	Lang=ga|SpaceAfter=No
22	!	!	PUNCT	_	_	12	punct	_	_
23	:)	:)	SYM	_	_	3	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj:cleft	color:blue
1	Ce	cé	PRON	_	_	0	root	_	CorrectForm=Cé|Lang=ga
2	acu	ag	ADP	_	_	1	obl:prep	_	Lang=ga
3	is	is	PART	_	_	4	mark:prt	_	Lang=ga
4	mo	mór	ADJ	_	_	1	amod	_	CorrectForm=mó|Lang=ga
5	a	a	PART	_	_	6	mark:prt	_	Lang=ga
6	dheanann	déan	VERB	_	_	1	csubj:cleft	_	CorrectForm=dhéanann|Lang=ga
7	dochar	dochar	NOUN	_	_	6	obj	_	Lang=ga
8	don	do	ADP	_	_	9	case	_	Lang=ga
9	teanga	teanga	NOUN	_	_	6	obl	_	SpaceAfter=No
10	???	??	PUNCT	_	_	1	punct	_	_
11	#tg4	#tg4	X	_	_	1	parataxis:hashtag	_	Lang=ga
12	#gaeilge	#gaeilge	X	_	_	1	parataxis:hashtag	_	Lang=ga

~~~


