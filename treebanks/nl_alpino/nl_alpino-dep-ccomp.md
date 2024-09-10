---
layout: base
title:  'Statistics of ccomp in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `ccomp`

This relation is universal.

1386 nodes (1%) are attached to their parents as `ccomp`.

1271 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.69047619047619.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (1076; 78% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (84; 6% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (66; 5% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (65; 5% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (46; 3% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (15; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-DET.html">DET</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	,,	,,	PUNCT	LET	_	3	punct	3:punct	_
2	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	3	nsubj	3:nsubj	_
3	wist	weten	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	dat	dat	SCONJ	VG|onder	_	11	mark	11:mark	_
5	mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	6:nmod:poss	_
6	helft	helft	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	11	nsubj	11:nsubj	_
7	van	van	ADP	VZ|init	_	9	case	9:case	_
8	het	het	DET	LID|bep|stan|evon	Definite=Def	9	det	9:det	_
9	schema	schema	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	6	nmod	6:nmod:van	_
10	open	open	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	11	xcomp	11:xcomp	_
11	ligt	liggen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	3	ccomp	3:ccomp	SpaceAfter=No
12	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp	color:blue
1	Dit	dit	DET	VNW|aanw|det|stan|prenom|zonder|evon	_	2	det	2:det	_
2	effect	effect	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	5	nsubj	5:nsubj	_
3	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
4	nu	nu	ADV	BW	_	5	advmod	5:advmod	_
5	bezig	bezig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
6	te	te	ADP	VZ|init	_	7	mark	7:mark	_
7	verdwijnen	verdwijnen	VERB	WW|inf|vrij|zonder	VerbForm=Inf	5	ccomp	5:ccomp	SpaceAfter=No
8	.	.	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 ccomp	color:blue
1	Arthur	Arthur	PROPN	SPEC|deeleigen	_	9	nsubj	9:nsubj	_
2	Miller	Miller	PROPN	SPEC|deeleigen	_	1	flat	1:flat	SpaceAfter=No
3	,	,	PUNCT	LET	_	7	punct	7:punct	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
5	net	net	ADV	BW	_	6	advmod	6:advmod	_
6	afgetreden	af_treden	VERB	WW|vd|prenom|zonder	VerbForm=Part	7	acl	7:acl	_
7	president	president	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	appos	1:appos	SpaceAfter=No
8	,	,	PUNCT	LET	_	1	punct	1:punct	_
9	vindt	vinden	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
10	van	van	ADP	VZ|init	_	11	mark	11:mark	_
11	niet	niet	ADV	BW	_	9	ccomp	9:ccomp	SpaceAfter=No
12	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


