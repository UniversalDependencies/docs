---
layout: base
title:  'Statistics of cc:preconj in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-cc.html">cc</a></tt>.

77 nodes (0%) are attached to their parents as `cc:preconj`.

77 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19480519480519.

The following 10 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (30; 39% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (14; 18% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (14; 18% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (6; 8% instances), <tt><a href="nl_alpino-pos-X.html">X</a></tt>-<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (6; 8% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (3; 4% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="nl_alpino-pos-DET.html">DET</a></tt>-<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Mie	Mie	PROPN	SPEC|deeleigen	_	3	nsubj	3:nsubj	_
2	Nakao	Nakao	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
3	zingt	zingen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	zowel	zowel	CCONJ	BW	_	5	cc:preconj	5:cc:preconj	_
5	chansons	chanson	NOUN	N|soort|mv|basis	Number=Plur	3	obj	3:obj	_
6	als	als	SCONJ	VG|onder	_	7	cc	7:cc	_
7	schlagers	schlager	NOUN	N|soort|mv|basis	Number=Plur	5	conj	3:obj|5:conj:als	SpaceAfter=No
8	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	vond	vinden	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	hem	hem	PRON	VNW|pers|pron|obl|vol|3|ev|masc	Case=Acc|Person=3|PronType=Prs	2	obj	2:obj	_
4	zowel	zowel	CCONJ	BW	_	5	cc:preconj	5:cc:preconj	_
5	aardig	aardig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	2	xcomp	2:xcomp	_
6	als	als	SCONJ	VG|onder	_	8	cc	8:cc	_
7	een	een	DET	LID|onbep|stan|agr	Definite=Ind	8	det	8:det	_
8	uitslover	uitslover	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	conj	5:conj:als	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	7	nsubj	7:nsubj	_
2	heb	hebben	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
3	zowel	zowel	CCONJ	BW	_	4	cc:preconj	4:cc:preconj	_
4	Arie	Arie	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	7	obj	7:obj	_
5	als	als	SCONJ	VG|onder	_	6	cc	6:cc	_
6	Kees	Kees	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	conj	4:conj:als|7:obj	_
7	gezien	zien	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_

~~~


