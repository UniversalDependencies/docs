---
layout: base
title:  'Statistics of csubj in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `csubj`

This relation is universal.

435 nodes (0%) are attached to their parents as `csubj`.

383 instances of `csubj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.35862068965517.

The following 15 pairs of parts of speech are connected with `csubj`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (206; 47% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (107; 25% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (69; 16% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (13; 3% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-DET.html">DET</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 csubj	color:blue
1	Al	al	ADV	BW	_	2	advmod	2:advmod	_
2	eerder	eerder	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	3	advmod	3:advmod	_
3	werd	worden	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	bekend	bekend	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	3	xcomp	3:xcomp	_
5	dat	dat	SCONJ	VG|onder	_	11	mark	11:mark	_
6	directielid	directielid	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	11	nsubj	11:nsubj	_
7	P.	P.	PROPN	SPEC|deeleigen	_	6	appos	6:appos	_
8	Stuyts	Stuyts	PROPN	SPEC|deeleigen	_	7	flat	7:flat	_
9	ziek	ziek	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	11	advmod	11:advmod	_
10	thuis	thuis	ADV	BW	_	11	advmod	11:advmod	_
11	zit	zitten	VERB	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	3	csubj	3:csubj	SpaceAfter=No
12	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj	color:blue
1	"	"	PUNCT	LET	_	4	punct	4:punct	SpaceAfter=No
2	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	4	expl	4:expl	_
3	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
4	schandalig	schandalig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
5	wat	wat	PRON	VNW|vb|pron|stan|vol|3o|ev	Person=3|PronType=Int	8	nsubj	8:nsubj	_
6	hier	hier	ADV	VNW|aanw|adv-pron|obl|vol|3o|getal	_	8	advmod	8:advmod	_
7	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	8	aux	8:aux	_
8	gebeurd	gebeuren	VERB	WW|vd|vrij|zonder	VerbForm=Part	4	csubj	4:csubj	SpaceAfter=No
9	"	"	PUNCT	LET	_	4	punct	4:punct	SpaceAfter=No
10	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	5	expl	5:expl	_
2	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	niet	niet	ADV	BW	_	5	advmod	5:advmod	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def	5	det	5:det	_
5	bedoeling	bedoeling	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	_
6	dat	dat	SCONJ	VG|onder	_	9	mark	9:mark	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	8:det	_
8	boeken	boek	NOUN	N|soort|mv|basis	Number=Plur	9	nsubj:pass	9:nsubj:pass	_
9	uitgeleend	uitlenen	VERB	WW|vd|vrij|zonder	VerbForm=Part	5	csubj	5:csubj	_
10	worden	worden	AUX	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	9	aux:pass	9:aux:pass	SpaceAfter=No
11	.	.	PUNCT	LET	_	5	punct	5:punct	_

~~~


