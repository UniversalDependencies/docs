---
layout: base
title:  'Statistics of csubj in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `csubj`

This relation is universal.

426 nodes (0%) are attached to their parents as `csubj`.

374 instances of `csubj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.30046948356808.

The following 17 pairs of parts of speech are connected with `csubj`: <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (149; 35% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (143; 34% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (71; 17% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (13; 3% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (10; 2% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="nl-pos-PRON.html">PRON</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="nl-pos-DET.html">DET</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="nl-pos-NUM.html">NUM</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 csubj	color:blue
1	Al	al	ADV	BW	_	2	advmod	_	_
2	eerder	eerder	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	4	advmod	_	_
3	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	4	cop	_	_
4	bekend	bekend	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	_	_
5	dat	dat	SCONJ	VG|onder	_	11	mark	_	_
6	directielid	directielid	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	11	nsubj	_	_
7	P.	P.	PROPN	SPEC|deeleigen	_	6	appos	_	_
8	Stuyts	Stuyts	PROPN	SPEC|deeleigen	_	7	flat:name	_	_
9	ziek	ziek	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	11	advmod	_	_
10	thuis	thuis	ADV	BW	_	11	advmod	_	_
11	zit	zitten	VERB	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	4	csubj	_	SpaceAfter=No
12	.	.	PUNCT	LET	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	Hoe	hoe	ADV	BW	_	2	advmod	_	_
2	bestaat	bestaan	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
3	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	2	expl	_	SpaceAfter=No
4	,	,	PUNCT	LET	_	8	punct	_	_
5	dat	dat	SCONJ	VG|onder	_	8	mark	_	_
6	je	je	PRON	VNW|pers|pron|nomin|red|2v|ev	Case=Nom|Person=2|PronType=Prs	8	nsubj	_	_
7	zo	zo	ADV	BW	_	8	advmod	_	_
8	verliest	verliezen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	2	csubj	_	SpaceAfter=No
9	.	.	PUNCT	LET	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	5	expl	_	_
2	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	niet	niet	ADV	BW	_	5	advmod	_	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def	5	det	_	_
5	bedoeling	bedoeling	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	_	_
6	dat	dat	SCONJ	VG|onder	_	9	mark	_	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	_	_
8	boeken	boek	NOUN	N|soort|mv|basis	Number=Plur	9	nsubj:pass	_	_
9	uitgeleend	uitlenen	VERB	WW|vd|vrij|zonder	VerbForm=Part	5	csubj	_	_
10	worden	worden	AUX	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	9	aux:pass	_	SpaceAfter=No
11	.	.	PUNCT	LET	_	5	punct	_	_

~~~


