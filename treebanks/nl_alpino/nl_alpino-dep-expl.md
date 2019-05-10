---
layout: base
title:  'Statistics of expl in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="nl_alpino-dep-expl-pv.html">expl:pv</a></tt>.

457 nodes (0%) are attached to their parents as `expl`.

374 instances of `expl` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.11597374179431.

The following 8 pairs of parts of speech are connected with `expl`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (300; 66% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (104; 23% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (35; 8% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (10; 2% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="nl_alpino-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (1; 0% instances).


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
9	doorgaat	doorgaan	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	SpaceAfter=No
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
2	blijft	blijven	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	intussen	intussen	ADV	BW	_	5	advmod	5:advmod	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def	5	det	5:det	_
5	vraag	vraag	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	_
6	of	of	SCONJ	VG|onder	_	9	mark	9:mark	_
7	het	het	DET	LID|bep|stan|evon	Definite=Def	8	det	8:det	_
8	middel	middel	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	9	nsubj	9:nsubj	_
9	effectief	effectief	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	5	csubj	5:csubj	_
10	zal	zullen	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	9	aux	9:aux	_
11	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	9	cop	9:cop	SpaceAfter=No
12	:	:	PUNCT	LET	_	5	punct	5:punct	_

~~~


