---
layout: base
title:  'Statistics of csubj:cleft in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `csubj:cleft`

This relation is a language-specific subtype of <tt><a href="ga_twittirish-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_twittirish-dep-csubj-cop.html">csubj:cop</a></tt>.

84 nodes (0%) are attached to their parents as `csubj:cleft`.

84 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.17857142857143.

The following 12 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (43; 51% instances), <tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (12; 14% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (7; 8% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (6; 7% instances), <tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-PART.html">PART</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:cleft	color:blue
1	“	“	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Ar	ar	ADP	_	_	3	case	_	Lang=ga
3	scáth	scáth	NOUN	_	_	0	root	_	Lang=ga
4	a	a	DET	_	_	5	det:poss	_	Lang=ga
5	chéile	céile	NOUN	_	_	3	nmod	_	Lang=ga
6	a	a	PART	_	_	7	mark:prt	_	Lang=ga
7	mhairimíd	mairigh	VERB	_	_	3	csubj:cleft	_	CorrectForm=mairimid|Lang=ga|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No
9	”	”	PUNCT	_	_	3	punct	_	_
10	#Gaeilge	#Gaeilge	X	_	_	3	parataxis:hashtag	_	Lang=ga
11	#IrishStateVisit	#IrishStateVisit	X	_	_	3	parataxis:hashtag	_	Lang=en

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj:cleft	color:blue
1	@user528	@user528	PROPN	_	_	2	vocative:mention	_	_
2	cad	cad	PRON	_	_	0	root	_	Lang=ga
3	déarfá	abair	VERB	_	_	2	csubj:cleft	_	Lang=ga
4	leis	le	ADP	_	_	6	case	_	Lang=ga
5	an	an	DET	_	_	6	det	_	Lang=ga
6	gcarbhat	carbhat	NOUN	_	_	3	obl	_	Lang=ga|SpaceAfter=No
7	?	?	PUNCT	_	_	3	punct	_	_
8	#styleguru	#styleguru	X	_	_	2	parataxis:hashtag	_	Lang=en

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cleft	color:blue
1	Is	is	AUX	_	_	2	cop	_	Lang=ga
2	minic	minic	ADJ	_	_	0	root	_	Lang=ga
3	a	a	PART	_	_	4	mark:prt	_	Lang=ga
4	bhris	bris	VERB	_	_	2	csubj:cleft	_	Lang=ga
5	béal	béal	NOUN	_	_	4	nsubj	_	Lang=ga
6	duine	duine	NOUN	_	_	5	nmod	_	Lang=ga
7	a	a	DET	_	_	8	det:poss	_	Lang=ga
8	shrón	srón	NOUN	_	_	4	obj	_	Lang=ga|SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_
10	#truth	#truth	X	_	_	2	parataxis:hashtag	_	_
11	#Irish	#Irish	X	_	_	2	parataxis:hashtag	_	_
12	#gaelic	#gaelic	X	_	_	2	parataxis:hashtag	_	_
13	#quote	#quote	X	_	_	2	parataxis:hashtag	_	_

~~~


