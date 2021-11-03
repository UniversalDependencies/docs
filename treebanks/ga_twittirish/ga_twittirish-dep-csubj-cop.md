---
layout: base
title:  'Statistics of csubj:cop in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="ga_twittirish-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_twittirish-dep-csubj-cleft.html">csubj:cleft</a></tt>.

48 nodes (0%) are attached to their parents as `csubj:cop`.

48 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.10416666666667.

The following 7 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (15; 31% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (15; 31% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (9; 19% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (5; 10% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:cop	color:blue
1	Mar	mar	ADP	_	_	3	mark	_	Lang=ga
2	is	is	AUX	_	_	3	cop	_	Lang=ga
3	ceart	ceart	ADJ	_	_	0	root	_	Lang=ga
4	dó	do	ADP	_	_	3	obl:prep	_	Lang=ga
5	a	a	PART	_	_	6	mark	_	Lang=ga
6	bheith	bheith	NOUN	_	_	3	csubj:cop	_	Lang=ga
7	http://t.co/u1MiDGUY	http://t.co/u1MiDGUY	SYM	_	_	3	parataxis:url	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 csubj:cop	color:blue
1	@HarkinCatherine	@HarkinCatherine	PROPN	_	_	3	vocative:mention	_	Lang=ga
2	ca	cá	ADV	_	_	3	advmod	_	CorrectForm=cá|Lang=ga
3	bhfuil	bí	VERB	_	_	0	root	_	Lang=ga
4	tú	tú	PRON	_	_	3	nsubj	_	SpaceAfter=No
5	?	?	PUNCT	_	_	3	punct	_	_
6	an	is	AUX	_	_	7	cop	_	Lang=ga
7	dtig	tig	NOUN	_	_	3	parataxis:sentence	_	Lang=ga
8	liom	le	ADP	_	_	7	obl:prep	_	Lang=ga
9	mo	mo	DET	_	_	10	nmod:poss	_	CorrectForm=m'|Lang=ga
10	fóin	fón	NOUN	_	_	13	obj	_	CorrectForm=fhóin|Lang=ga
11	cluasa	cluas	NOUN	_	_	10	nmod	_	CorrectForm=chluasa|Lang=ga
12	a	a	PART	_	_	13	mark	_	Lang=ga
13	fháil	fáil	NOUN	_	_	7	csubj:cop	_	SpaceAfter=No
14	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj:cop	color:blue
1	@barraomuiri	@barraomuiri	PROPN	_	_	6	vocative:mention	_	_
2	@TomaiRua	@TomaiRua	PROPN	_	_	6	vocative:mention	_	_
3	@MBhreathnach	@MBhreathnach	PROPN	_	_	6	vocative:mention	_	_
4	@daithi	@daithi	PROPN	_	_	6	vocative:mention	_	_
5	is	is	AUX	_	_	6	cop	_	Lang=ga
6	Maith	maith	ADJ	_	_	0	root	_	Lang=ga
7	liom	le	ADP	_	_	6	obl:prep	_	Lang=ga
8	gur	gur	PART	_	_	9	mark:prt	_	Lang=ga
9	bhain	bain	VERB	_	_	6	csubj:cop	_	Lang=ga
10	tú	tú	PRON	_	_	9	nsubj	_	Lang=ga
11	sult	sult	NOUN	_	_	9	obj	_	Lang=ga
12	as	as	ADP	_	_	9	obl:prep	_	Lang=ga|SpaceAfter=No
13	!	!	PUNCT	_	_	6	punct	_	_

~~~


