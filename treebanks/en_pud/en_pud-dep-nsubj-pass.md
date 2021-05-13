---
layout: base
title:  'Statistics of nsubj:pass in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-nsubj.html">nsubj</a></tt>.

239 nodes (1%) are attached to their parents as `nsubj:pass`.

238 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.85774058577406.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (133; 56% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (60; 25% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (39; 16% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	new	new	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
3	spending	spending	NOUN	NN	Number=Sing	5	nsubj:pass	5:nsubj:pass	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	5:aux:pass	_
5	fueled	fuel	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
6	by	by	ADP	IN	_	11	case	11:case	_
7	Clinton	Clinton	PROPN	NNP	Number=Sing	11	nmod:poss	11:nmod:poss	SpaceAfter=No
8	’s	’s	PART	POS	_	7	case	7:case	_
9	large	large	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
10	bank	bank	NOUN	NN	Number=Sing	11	compound	11:compound	_
11	account	account	NOUN	NN	Number=Sing	5	obl	5:obl:by	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	3:nsubj:pass	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	conducted	conduct	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
4	just	just	ADV	RB	_	8	advmod	8:advmod	_
5	off	off	ADP	IN	_	8	case	8:case	_
6	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	_
7	Mexican	Mexican	ADJ	JJ	Degree=Pos	8	amod	8:amod	Proper=True
8	coast	coast	NOUN	NN	Number=Sing	3	obl	3:obl:off	_
9	from	from	ADP	IN	_	10	case	10:case	_
10	April	April	PROPN	NNP	Number=Sing	3	obl	3:obl:from	_
11	to	to	ADP	IN	_	12	case	12:case	_
12	June	June	PROPN	NNP	Number=Sing	10	nmod	10:nmod:to	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
2	last	last	ADJ	JJ	Degree=Pos	4	amod	4:amod	_
3	Olympic	Olympic	PROPN	NNP	Number=Sing	4	compound	4:compound	_
4	Games	Games	PROPN	NNPS	Number=Plur	6	nsubj:pass	6:nsubj:pass|10:nsubj:xsubj	_
5	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux:pass	6:aux:pass	_
6	believed	believe	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
7	to	to	PART	TO	_	10	mark	10:mark	_
8	have	have	AUX	VB	VerbForm=Inf	10	aux	10:aux	_
9	been	be	AUX	VBN	Tense=Past|VerbForm=Part	10	aux:pass	10:aux:pass	_
10	held	hold	VERB	VBN	Tense=Past|VerbForm=Part	6	xcomp	6:xcomp	_
11	in	in	ADP	IN	_	12	case	12:case	_
12	393	393	NUM	CD	NumType=Card	10	obl	10:obl:in	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


