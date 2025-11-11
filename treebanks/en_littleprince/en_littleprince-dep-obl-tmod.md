---
layout: base
title:  'Statistics of obl:tmod in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="en_littleprince-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="en_littleprince-dep-obl-npmod.html">obl:npmod</a></tt>, <tt><a href="en_littleprince-dep-obl-unmarked.html">obl:unmarked</a></tt>.

6 nodes (0%) are attached to their parents as `obl:tmod`.

3 instances of `obl:tmod` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.33333333333333.

The following 2 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (5; 83% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 obl:tmod	color:blue
1	"	"	PUNCT	``	_	5	punct	_	_
2	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	fault	fault	NOUN	NN	Number=Sing	0	root	_	_
6	that	that	SCONJ	IN	_	10	mark	_	_
7	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	_
8	have	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	not	not	PART	RB	_	10	advmod	_	_
10	known	know	VERB	VBN	Tense=Past|VerbForm=Part	5	csubj	_	_
11	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
12	all	all	DET	PDT	_	14	det:predet	_	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	_	_
14	while	while	NOUN	NN	Number=Sing	10	obl:tmod	_	_
15	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 obl:tmod	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	7	nsubj	_	_
2	will	will	AUX	MD	VerbForm=Fin	7	aux	_	_
3	be	be	AUX	VB	VerbForm=Inf	7	cop	_	_
4	about	about	ADP	IN	_	7	case	_	_
5	-	-	PUNCT	HYPH	_	7	punct	_	_
6	-	-	PUNCT	,	_	7	punct	_	_
7	about	about	ADV	RB	_	0	root	_	_
8	-	-	PUNCT	,	_	7	punct	_	_
9	-	-	PUNCT	,	_	7	punct	_	_
10	that	that	PRON	DT	Number=Sing|PronType=Dem	14	nsubj	_	_
11	will	will	AUX	MD	VerbForm=Fin	14	aux	_	_
12	be	be	AUX	VB	VerbForm=Inf	14	cop	_	_
13	this	this	DET	DT	Number=Sing|PronType=Dem	14	det	_	_
14	evening	evening	NOUN	NN	Number=Sing	7	obl:tmod	_	_
15	about	about	ADV	RB	_	16	advmod	_	_
16	twenty	twenty	NUM	CD	NumType=Card	17	nummod	_	_
17	minutes	minute	NOUN	NNS	Number=Plur	14	appos	_	_
18	to	to	ADP	IN	_	19	case	_	_
19	eight	eight	NUM	CD	NumType=Card	17	nmod	_	_
20	.	.	PUNCT	.	_	7	punct	_	_

~~~


