---
layout: base
title:  'Statistics of compound in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="ga_twittirish-dep-compound-prt.html">compound:prt</a></tt>.

39 nodes (0%) are attached to their parents as `compound`.

29 instances of `compound` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17948717948718.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (21; 54% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (9; 23% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt> (2; 5% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Clann	clann	PROPN	_	_	0	root	_	Lang=ga
2	Lir	Lír	PROPN	_	_	1	nmod	_	Lang=ga
3	agus	agus	CCONJ	_	_	4	cc	_	Lang=ga
4	míreana	mír	NOUN	_	_	1	conj	_	CorrectForm=míreanna|Lang=ga
5	mearaí	mearaí	NOUN	_	_	4	compound	_	Lang=ga
6	eile	eile	DET	_	_	4	det	_	Lang=ga
7	le	le	ADP	_	_	8	case	_	Lang=ga
8	Gosling	Gosling	PROPN	_	_	4	nmod	_	Lang=ga
9	https://t.co/onPxwm4OVh	https://t.co/onpxwm4ovh	SYM	_	_	1	parataxis:url	_	_
10	http://t.co/Teens0LSxH	http://t.co/teens0lsxh	SYM	_	_	1	parataxis:url	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound	color:blue
1	RT	RT	SYM	_	_	4	parataxis:rt	_	_
2	@coleoinclg	@coleoinclg	PROPN	_	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	_	_	4	punct	_	_
4	Coláiste	coláiste	NOUN	_	_	0	root	_	Lang=ga
5	Eoin	Eoin	PROPN	_	_	4	nmod	_	Lang=ga
6	1	1	NUM	_	_	4	nmod	_	SpaceAfter=No
7	-	-	PUNCT	_	_	6	punct	_	SpaceAfter=No
8	8	8	NUM	_	_	6	flat	_	_
9	Marist	Marist	PROPN	_	_	10	compound	_	_
10	college	college	NOUN	_	_	4	parataxis	_	Lang=en
11	1	1	NUM	_	_	10	nmod	_	SpaceAfter=No
12	-	-	PUNCT	_	_	11	punct	_	SpaceAfter=No
13	7	7	NUM	_	_	11	flat	_	_
14	(	(	PUNCT	_	_	16	punct	_	SpaceAfter=No
15	13	13	NUM	_	_	16	nummod	_	_
16	nóim	nóim	NOUN	_	_	10	parataxis	_	FullForm=nóiméad|SpaceAfter=No
17	)	)	PUNCT	_	_	16	punct	_	_
18	Con	Con	PROPN	_	_	16	parataxis	_	_
19	le	le	ADP	_	_	20	case	_	Lang=ga
20	scór	scór	NOUN	_	_	18	nmod	_	Lang=ga
21	breá	breá	ADJ	_	_	20	amod	_	Lang=ga

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Amhrán	amhrán	NOUN	_	_	0	root	_	Lang=ga
2	iontach	iontach	ADJ	_	_	1	amod	_	Lang=ga
3	eile	eile	DET	_	_	1	det	_	Lang=ga
4	ó	ó	ADP	_	_	5	case	_	Lang=ga
5	Kate	Kate	PROPN	_	_	1	nmod	_	Lang=ga
6	♫	♫	SYM	_	_	1	discourse:emo	_	_
7	Self	Self	PROPN	_	_	8	compound	_	Lang=en
8	Control	Control	PROPN	_	_	1	appos	_	Lang=en
9	–	–	PUNCT	_	_	10	punct	_	_
10	Kate	Kate	PROPN	_	_	8	nmod	_	_
11	Boy	Boy	PROPN	_	_	10	flat:name	_	_
12	http://t.co/zTk9TeimsG	http://t.co/zTk9TeimsG	SYM	_	_	1	parataxis:url	_	_
13	#NowPlaying	#NowPlaying	X	_	_	1	parataxis:hashtag	_	Lang=ga

~~~


