---
layout: base
title:  'Statistics of advcl in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `advcl`

This relation is universal.

293 nodes (1%) are attached to their parents as `advcl`.

221 instances of `advcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.00341296928328.

The following 19 pairs of parts of speech are connected with `advcl`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (224; 76% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (19; 6% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (11; 4% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 advcl	color:blue
1	Perhaps	perhaps	ADV	RB	_	5	advmod	5:advmod	_
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
3	wo	will	AUX	MD	VerbForm=Fin	5	aux	5:aux	SpaceAfter=No
4	n’t	n’t	ADV	RB	Polarity=Neg	5	advmod	5:advmod	OrigForm=n't
5	matter	matter	VERB	VB	VerbForm=Inf	0	root	0:root	_
6	as	as	SCONJ	IN	_	11	mark	11:mark	_
7	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj:pass	11:nsubj:pass	_
8	wo	will	AUX	MD	VerbForm=Fin	11	aux	11:aux	SpaceAfter=No
9	n’t	n’t	ADV	RB	Polarity=Neg	11	advmod	11:advmod	OrigForm=n't
10	be	be	AUX	VB	VerbForm=Inf	11	aux:pass	11:aux:pass	_
11	troubled	trouble	VERB	VBN	Tense=Past|VerbForm=Part	5	advcl	5:advcl:as	_
12	long	long	ADV	RB	Degree=Pos	11	advmod	11:advmod	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 advcl	color:blue
1	In	in	ADP	IN	_	2	case	2:case	_
2	theory	theory	NOUN	NN	Number=Sing	10	obl	10:obl:in	SpaceAfter=No
3	,	,	PUNCT	,	_	10	punct	10:punct	_
4	if	if	SCONJ	IN	_	5	mark	5:mark	_
5	done	do	VERB	VBN	Tense=Past|VerbForm=Part	10	advcl	10:advcl:if	_
6	right	right	ADJ	JJ	Degree=Pos	5	xcomp	5:xcomp	SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	10:punct	_
8	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj	SpaceAfter=No
9	’s	’s	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
10	un-detectable	un-detectable	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 advcl	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	5:cop	_
3	definitely	definitely	ADV	RB	_	5	advmod	5:advmod	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
5	case	case	NOUN	NN	Number=Sing	0	root	0:root	_
6	for	for	ADP	IN	_	7	case	7:case	_
7	Andy	Andy	PROPN	NNP	Number=Sing	5	obl	5:obl:for	_
8	when	when	ADV	WRB	PronType=Int	10	advmod	10:advmod	_
9	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj	_
10	played	play	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	advcl	5:advcl	_
11	Benoît	Benoît	PROPN	NNP	Number=Sing	10	obj	10:obj	_
12	Paire	Paire	PROPN	NNP	Number=Sing	11	flat	11:flat	_
13	in	in	ADP	IN	_	15	case	15:case	_
14	Monte	Monte	PROPN	NNP	Number=Sing	15	compound	15:compound	_
15	Carlo	Carlo	PROPN	NNP	Number=Sing	10	obl	10:obl:in	_
16	in	in	ADP	IN	_	17	case	17:case	_
17	April	April	PROPN	NNP	Number=Sing	10	obl	10:obl:in	SpaceAfter=No
18	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


