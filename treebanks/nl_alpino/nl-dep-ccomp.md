---
layout: base
title:  'Statistics of ccomp in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `ccomp`

This relation is universal.

1921 nodes (1%) are attached to their parents as `ccomp`.

1759 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.22488287350338.

The following 20 pairs of parts of speech are connected with `ccomp`: <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (1480; 77% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (131; 7% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (95; 5% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (73; 4% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADV.html">ADV</a></tt> (67; 3% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (14; 1% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Moeder	moeder	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	nsubj	_	_
2	Mien	Mien	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	appos	_	_
3	spoorde	sporen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	haar	haar	PRON	VNW|pers|pron|obl|vol|3|getal|fem	Case=Acc|Person=3|PronType=Prs	3	obj	_	_
5	aan	aan	ADP	VZ|fin	_	3	compound:prt	_	_
6	toch	toch	ADV	BW	_	9	advmod	_	_
7	op	op	ADP	VZ|fin	_	9	compound:prt	_	_
8	te	te	ADP	VZ|init	_	9	mark	_	_
9	stappen	stappen	VERB	WW|inf|vrij|zonder	VerbForm=Inf	3	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	LET	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Ze	ze	PRON	VNW|pers|pron|stan|red|3|ev|fem	Person=3|PronType=Prs	4	nsubj	_	_
2	vindt	vinden	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	4	expl	_	_
4	onterecht	onterecht	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	_	_
5	dat	dat	SCONJ	VG|onder	_	9	mark	_	_
6	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	_	_
7	Copa	Copa	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	9	nsubj	_	_
8	niet	niet	ADV	BW	_	9	advmod	_	_
9	doorgaat	doorgaan	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	4	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	LET	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp	color:blue
1	,,	,,	PUNCT	LET	_	3	punct	_	SpaceAfter=No
2	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	3	nsubj	_	_
3	wist	weten	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	dat	dat	SCONJ	VG|onder	_	10	mark	_	_
5	mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|PronType=Prs	6	nmod:poss	_	_
6	helft	helft	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	10	nsubj	_	_
7	van	van	ADP	VZ|init	_	9	case	_	_
8	het	het	DET	LID|bep|stan|evon	Definite=Def	9	det	_	_
9	schema	schema	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	6	nmod	_	_
10	open	open	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	3	ccomp	_	_
11	ligt	liggen	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	10	cop	_	SpaceAfter=No
12	.	.	PUNCT	LET	_	3	punct	_	_

~~~


