---
layout: base
title:  'Statistics of nsubj:outer in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="nl_alpino-dep-nsubj-pass.html">nsubj:pass</a></tt>.

19 nodes (0%) are attached to their parents as `nsubj:outer`.

12 instances of `nsubj:outer` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.10526315789474.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (10; 53% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (5; 26% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (2; 11% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj:outer	color:blue
1	wat	wat	PRON	VNW|vb|pron|stan|vol|3o|ev	Person=3|PronType=Int	3	obj	3:obj	_
2	je	je	PRON	VNW|pers|pron|nomin|red|2v|ev	Case=Nom|Person=2|PronType=Prs	3	nsubj	3:nsubj	_
3	zegt	zeggen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	ben	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
5	je	je	PRON	VNW|pers|pron|nomin|red|2v|ev	Case=Nom|Person=2|PronType=Prs	3	nsubj:outer	3:nsubj:outer	_
6	zelf	zelf	ADV	BW	_	3	advmod	3:advmod	SpaceAfter=No
7	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 nsubj:outer	color:blue
1	Een	een	DET	LID|onbep|stan|agr	Definite=Ind	2	det	2:det	_
2	paar	paar	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	3	nmod	3:nmod	_
3	weken	week	NOUN	N|soort|mv|basis	Number=Plur	11	nsubj:outer	11:nsubj:outer	_
4	voetbalfeest	voetbal_feest	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	3	nmod	3:nmod	_
5	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	11	cop	11:cop	_
6	net	net	ADV	BW	_	11	advmod	11:advmod	_
7	wat	wat	PRON	VNW|vb|pron|stan|vol|3o|ev	Person=3|PronType=Int	11	obj	11:obj	_
8	het	het	DET	LID|bep|stan|evon	Definite=Def	9	det	9:det	_
9	land	land	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	11	nsubj	11:nsubj	_
10	nodig	nodig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	11	xcomp	11:xcomp	_
11	heeft	hebben	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
12	.	.	PUNCT	LET	_	11	punct	11:punct	_
13	''	''	PUNCT	LET	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:outer	color:blue
1	Dat	dat	PRON	VNW|aanw|pron|stan|vol|3o|ev	Person=3|PronType=Dem	6	nsubj:outer	6:nsubj:outer	_
2	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
3	wie	wie	PRON	VNW|vb|pron|stan|vol|3p|getal	Person=3|PronType=Int	6	nsubj	6:nsubj	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def	6	det	6:det	_
5	gemiddelde	gemiddeld	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	6	amod	6:amod	_
6	man	man	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	_
7	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	6	cop	6:cop	SpaceAfter=No
8	.	.	PUNCT	LET	_	6	punct	6:punct	_
9	"	"	PUNCT	LET	_	6	punct	6:punct	_

~~~


