---
layout: base
title:  'Statistics of ccomp in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `ccomp`

This relation is universal.

1100 nodes (1%) are attached to their parents as `ccomp`.

1015 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.50818181818182.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (849; 77% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (69; 6% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (54; 5% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (51; 5% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (41; 4% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Wie	wie	PRON	VNW|vb|pron|stan|vol|3p|getal	Person=3|PronType=Int	2	nsubj	2:nsubj	_
2	zegt	zeggen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	dat	dat	SCONJ	VG|onder	_	6	mark	6:mark	_
4	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	6	nsubj	6:nsubj	_
5	dan	dan	ADV	BW	_	6	advmod	6:advmod	_
6	rustiger	rustig	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	2	ccomp	2:ccomp	_
7	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	6	cop	6:cop	SpaceAfter=No
8	?	?	PUNCT	LET	_	2	punct	2:punct	_
9	''	''	PUNCT	LET	_	2	punct	2:punct	_

~~~


