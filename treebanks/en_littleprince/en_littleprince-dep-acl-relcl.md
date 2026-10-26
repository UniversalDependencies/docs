---
layout: base
title:  'Statistics of acl:relcl in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-acl.html">acl</a></tt>.

56 nodes (1%) are attached to their parents as `acl:relcl`.

56 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33928571428571.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (34; 61% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (6; 11% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (5; 9% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (5; 9% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_littleprince-pos-DET.html">DET</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_littleprince-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	knew	know	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	4	det	_	_
4	planet	planet	NOUN	NN	Number=Sing	2	obj	_	_
5	that	that	PRON	WDT	PronType=Rel	7	nsubj:pass	_	_
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	inhabited	inhabit	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	acl:relcl	_	_
8	by	by	ADP	IN	_	11	case	_	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	_	_
10	lazy	lazy	ADJ	JJ	Degree=Pos	11	amod	_	_
11	man	man	NOUN	NN	Number=Sing	7	obl:agent	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	also	also	ADV	RB	_	3	advmod	_	_
3	had	have	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	one	one	NUM	CD	NumType=Card	5	nummod	_	_
5	volcano	volcano	NOUN	NN	Number=Sing	3	obj	_	_
6	that	that	PRON	WDT	PronType=Rel	8	nsubj	_	_
7	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	_	_
8	extinct	extinct	ADJ	JJ	Degree=Pos	5	acl:relcl	_	_
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	had	have	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux	_	_
3	taken	take	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
4	seriously	seriously	ADV	RB	_	3	advmod	_	_
5	words	word	NOUN	NNS	Number=Plur	3	obj	_	_
6	which	which	PRON	WDT	PronType=Rel	9	nsubj	_	_
7	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	_
8	without	without	ADP	IN	_	9	case	_	_
9	importance	importance	NOUN	NN	Number=Sing	5	acl:relcl	_	_
10	,	,	PUNCT	,	_	13	punct	_	_
11	and	and	CCONJ	CC	_	13	cc	_	_
12	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
13	made	make	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	conj	_	_
14	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
15	very	very	ADV	RB	_	16	advmod	_	_
16	unhappy	unhappy	ADJ	JJ	Degree=Pos	13	xcomp	_	_
17	.	.	PUNCT	.	_	3	punct	_	_

~~~


