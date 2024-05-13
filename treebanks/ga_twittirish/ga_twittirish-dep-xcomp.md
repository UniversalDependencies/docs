---
layout: base
title:  'Statistics of xcomp in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="ga_twittirish-dep-xcomp-pred.html">xcomp:pred</a></tt>.

866 nodes (2%) are attached to their parents as `xcomp`.

858 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.53810623556582.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (451; 52% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (266; 31% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (58; 7% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (28; 3% instances), <tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (24; 3% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="ga_twittirish-pos-SYM.html">SYM</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ga_twittirish-pos-DET.html">DET</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_twittirish-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 xcomp	color:blue
1	Tá	bí	VERB	_	_	0	root	_	Lang=ga
2	mé	mé	PRON	_	_	1	nsubj	_	Lang=ga
3	tar	tar	ADP	_	_	8	case	_	Lang=ga
4	éis	éis	NOUN	_	_	3	fixed	_	Lang=ga
5	an	a	DET	_	_	6	det	_	Lang=ga
6	tine	tine	NOUN	_	_	8	obj	_	Lang=ga
7	a	a	PART	_	_	8	mark	_	Lang=ga
8	lasadh	lasadh	NOUN	_	_	1	xcomp	_	Lang=ga
9	don	do	ADP	_	_	11	case	_	Lang=ga
10	chéad	céad	NUM	_	_	11	amod	_	Lang=ga
11	uair	uair	NOUN	_	_	8	obl	_	Lang=ga|SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_
13	#fuar	#fuar	NOUN	_	_	1	parataxis:sentence	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	@user1104	@user1104	PROPN	_	_	2	vocative:mention	_	_
2	Áthas	áthas	NOUN	_	_	0	root	_	Lang=ga
3	orm	ar	ADP	_	_	2	obl:prep	_	Lang=ga
4	thú	tú	PRON	_	_	6	obj	_	Lang=ga
5	a	a	PART	_	_	6	mark	_	Lang=ga
6	fheiceáil	feiceáil	NOUN	_	_	2	xcomp	_	Lang=ga
7	ansin	ansin	ADV	_	_	6	advmod	_	Lang=ga
8	#PapainEirinn	#PapainEirinn	X	_	_	2	parataxis:hashtag	_	Lang=ga

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	@user344	@user344	PROPN	_	_	2	vocative:mention	_	_
2	Harvey	Harvey	PROPN	_	_	0	root	_	_
3	Kinkle	Kinkle	PROPN	_	_	2	flat:name	_	_
4	bocht	bocht	ADJ	_	_	3	amod	_	Lang=ga
5	ag	ag	ADP	_	_	6	case	_	Lang=ga
6	déileáil	déileáil	NOUN	_	_	3	xcomp	_	Lang=ga
7	léi	le	ADP	_	_	6	obl:prep	_	Lang=ga
8	sna	i	ADP	_	_	9	case	_	Lang=ga
9	seanlaethanta	seanlá	NOUN	_	_	6	obl	_	Lang=ga|SpaceAfter=No
10	!	!	PUNCT	_	_	2	punct	_	_

~~~


