---
layout: base
title:  'Statistics of nsubj:outer in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_ewt-dep-nsubj-pass.html">nsubj:pass</a></tt>.

244 nodes (0%) are attached to their parents as `nsubj:outer`.

244 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.85245901639344.

The following 15 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (136; 56% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (42; 17% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (20; 8% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (15; 6% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (10; 4% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:outer	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	coefficient	coefficient	NOUN	NN	Number=Sing	8	nsubj:outer	8:nsubj:outer	_
3	and	and	CCONJ	CC	_	5	cc	5:cc	_
4	standard	standard	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	error	error	NOUN	NN	Number=Sing	2	conj	2:conj:and|8:nsubj:outer	_
6	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
7	as	as	SCONJ	IN	_	8	mark	8:mark	_
8	followed	follow	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
9	:	:	PUNCT	:	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:outer	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj:outer	5:nsubj:outer	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	n't	not	PART	RB	_	5	advmod	5:advmod	_
4	about	about	SCONJ	IN	_	5	mark	5:mark	_
5	finding	find	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
7	meaning	meaning	NOUN	NN	Number=Sing	5	obj	5:obj	_
8	of	of	ADP	IN	_	9	case	9:case	_
9	life	life	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	_
10	at	at	ADP	IN	_	11	case	11:case	_
11	work	work	NOUN	NN	Number=Sing	5	obl	5:obl:at	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 nsubj:outer	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	reason	reason	NOUN	NN	Number=Sing	12	nsubj:outer	4:obl|12:nsubj:outer	_
3	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
4	go	go	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	Cxn=rc-red-obl
5	back	back	ADV	RB	_	4	advmod	4:advmod	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
7	because	because	SCONJ	IN	_	12	mark	12:mark	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	_
9	employees	employee	NOUN	NNS	Number=Plur	12	nsubj	12:nsubj	_
10	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
11	sooooo	so	ADV	RB	Style=Expr	12	advmod	12:advmod	CorrectForm=so
12	nice	nice	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	12:punct	SpaceAfter=No
14	”	"	PUNCT	''	_	12	punct	12:punct	_

~~~


