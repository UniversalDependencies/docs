---
layout: base
title:  'Statistics of expl in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="nl_alpino-dep-expl-pv.html">expl:pv</a></tt>.

457 nodes (0%) are attached to their parents as `expl`.

371 instances of `expl` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.08096280087527.

The following 7 pairs of parts of speech are connected with `expl`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (323; 71% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (88; 19% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (28; 6% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (10; 2% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl	color:blue
1	Ze	ze	PRON	VNW|pers|pron|stan|red|3|ev|fem	Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	vindt	vinden	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	2	expl	2:expl	_
4	onterecht	onterecht	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	2	xcomp	2:xcomp	_
5	dat	dat	SCONJ	VG|onder	_	9	mark	9:mark	_
6	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
7	Copa	Copa	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	9	nsubj	9:nsubj	_
8	niet	niet	ADV	BW	_	9	advmod	9:advmod	_
9	doorgaat	door_gaan	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	SpaceAfter=No
10	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 expl	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	5	expl	5:expl	_
2	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	niet	niet	ADV	BW	_	5	advmod	5:advmod	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def	5	det	5:det	_
5	bedoeling	bedoeling	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	_
6	dat	dat	SCONJ	VG|onder	_	9	mark	9:mark	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	8:det	_
8	boeken	boek	NOUN	N|soort|mv|basis	Number=Plur	9	nsubj:pass	9:nsubj:pass	_
9	uitgeleend	uit_lenen	VERB	WW|vd|vrij|zonder	VerbForm=Part	5	csubj	5:csubj	_
10	worden	worden	AUX	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	9	aux:pass	9:aux:pass	SpaceAfter=No
11	.	.	PUNCT	LET	_	5	punct	5:punct	_

~~~


