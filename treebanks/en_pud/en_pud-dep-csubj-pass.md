---
layout: base
title:  'Statistics of csubj:pass in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-csubj.html">csubj</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:pass`.

3 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	_
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	4	aux:pass	4:aux:pass	_
4	emphasised	emphasise	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
5	that	that	SCONJ	IN	_	10	mark	10:mark	_
6	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	10:nsubj	_
7	absolutely	absolutely	ADV	RB	_	10	advmod	10:advmod	_
8	can	can	AUX	MD	VerbForm=Fin	10	aux	10:aux	SpaceAfter=No
9	not	not	PART	RB	Polarity=Neg	10	advmod	10:advmod	_
10	continue	continue	VERB	VB	VerbForm=Inf	4	csubj:pass	4:csubj:pass	_
11	with	with	ADP	IN	_	12	case	12:case	_
12	those	those	PRON	DT	Number=Plur|PronType=Dem	10	obl	10:obl:with|14:nsubj	_
13	who	who	PRON	WP	PronType=Rel	14	nsubj	12:ref	_
14	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	12	acl:relcl	12:acl:relcl	_
15	completely	completely	ADV	RB	_	14	advmod	14:advmod	_
16	against	against	ADP	IN	_	17	case	17:case	_
17	Italy	Italy	PROPN	NNP	Number=Sing	14	obl	14:obl:against	SpaceAfter=No
18	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 csubj:pass	color:blue
1	On	on	ADP	IN	_	3	case	3:case	_
2	one	one	NUM	CD	NumType=Card	3	nummod	3:nummod	_
3	occasion	occasion	NOUN	NN	Number=Sing	7	obl	7:obl:on	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	expl	7:expl	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	implied	imply	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
8	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj	12:nsubj	_
9	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
10	an	a	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	_
11	undercover	undercover	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
12	agent	agent	NOUN	NN	Number=Sing	7	csubj:pass	7:csubj:pass|14:nmod:poss	_
13	whose	whose	PRON	WP$	Poss=Yes|PronType=Int	14	nmod:poss	12:ref	_
14	target	target	NOUN	NN	Number=Sing	16	nsubj	16:nsubj	_
15	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	16:cop	_
16	Homer	Homer	PROPN	NNP	Number=Sing	12	acl:relcl	12:acl:relcl	SpaceAfter=No
17	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


