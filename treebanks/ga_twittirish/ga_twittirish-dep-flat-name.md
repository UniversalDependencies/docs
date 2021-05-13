---
layout: base
title:  'Statistics of flat:name in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ga_twittirish-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ga_twittirish-dep-flat-foreign.html">flat:foreign</a></tt>.

176 nodes (1%) are attached to their parents as `flat:name`.

176 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.39204545454545.

The following 9 pairs of parts of speech are connected with `flat:name`: <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (121; 69% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-PART.html">PART</a></tt> (43; 24% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ga_twittirish-pos-PART.html">PART</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-SYM.html">SYM</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Museu	Museu	PROPN	_	_	0	root	_	Lang=ca
2	Olímpic	Olímpic	PROPN	_	_	1	nmod	_	Lang=ca
3	i	i	CCONJ	_	_	5	cc	_	Lang=ca
4	de	de	ADP	_	_	5	case	_	Lang=ca
5	l'Esport	l'Esport	PROPN	_	_	2	conj	_	Lang=ca
6	Joan	Joan	PROPN	_	_	5	nmod	_	Lang=ca
7	Antoni	Antoni	PROPN	_	_	6	flat:name	_	Lang=ca
8	Samar	Samar	PROPN	_	_	6	flat:name	_	Lang=ca|SpaceAfter=No
9	...	...	PUNCT	_	_	12	punct	_	Lang=ca
10	OH	oh	INTJ	_	_	12	discourse	_	Lang=ca|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	Lang=ca
12	ESPERA	ESPERA	VERB	_	_	1	parataxis	_	Lang=ca|SpaceAfter=No
13	!	!	PUNCT	_	_	12	punct	_	Lang=ca

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Aindrias	Aindrias	PROPN	_	_	0	root	_	Lang=ga
2	Mac	mac	PART	_	_	1	flat:name	_	Lang=ga
3	Cruitín	cruitín	PROPN	_	_	1	flat:name	_	Lang=ga|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	fear	fear	NOUN	_	_	1	appos	_	Lang=ga
6	Lios	lios	PROPN	_	_	5	nmod	_	Lang=ga
7	Ceannúir	Ceannúr	PROPN	_	_	6	nmod	_	Lang=ga|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_
9	http://t.co/q9xWZl5mMs	http://t.co/q9xWZl5mMs	SYM	_	_	1	parataxis:url	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 flat:name	color:blue
1	@CatherineGlov	@CatherineGlov	PROPN	_	_	4	vocative:mention	_	_
2	@JimAllister	@JimAllister	PROPN	_	_	4	vocative:mention	_	_
3	an	an	DET	_	_	4	det	_	Lang=ga
4	tUasal	Uasal	NOUN	_	_	0	root	_	Lang=ga
5	Mhic	mac	PART	_	_	4	flat:name	_	Lang=ga
6	Alastar	Alastar	PROPN	_	_	4	flat:name	_	Lang=ga
7	ina	i	ADP	_	_	8	case	_	Lang=ga
8	bhiogóid	biogóid	NOUN	_	_	4	nmod	_	Lang=ga
9	frith	Gaeilge	NOUN	_	_	8	nmod	_	CorrectForm=frith-GhaeilgeLang=ga
10	Ghaeilge	_	PROPN	_	_	9	goeswith	_	Lang=ga|SpaceAfter=No
11	?	?	PUNCT	_	_	13	punct	_	_
12	Ní	is	AUX	_	_	13	cop	_	Lang=ga
13	doigh	dóigh	NOUN	_	_	4	parataxis:sentence	_	Lang=ga
14	liom	le	ADP	_	_	13	obl:prep	_	Lang=ga
15	é	é	PRON	_	_	13	nsubj	_	Lang=ga|SpaceAfter=No
16	.	.	PUNCT	_	_	13	punct	_	_

~~~


