---
layout: base
title:  'Statistics of nsubj:pass in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="de_lit-dep-nsubj-outer.html">nsubj:outer</a></tt>.

119 nodes (0%) are attached to their parents as `nsubj:pass`.

118 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.35294117647059.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (53; 45% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (50; 42% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (11; 9% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Manches	mancher	DET	PIAT	PronType=Ind	2	det	_	_
2	Gedicht	Gedicht	NOUN	NN	Case=Nom	5	nsubj:pass	_	_
3	wird	werden	AUX	VAFIN	_	5	aux:pass	_	_
4	so	so	ADV	ADV	_	5	advmod	_	_
5	geliebt	lieben	VERB	VVPP	_	0	root	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	5	punct	_	_
7	wie	wie	ADV	PWAV	_	9	cc	_	_
8	der	der	DET	ART	Definite=Def|PronType=Art	9	det	_	_
9	Heiland	Heiland	NOUN	NN	_	5	nmod	_	_
10	von	von	ADP	APPR	_	12	case	_	_
11	den	der	DET	ART	Definite=Def|PronType=Art	12	det	_	_
12	Nonnen	Nonne	NOUN	NN	Case=Dat	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Warum	warum	ADV	PWAV	_	5	advmod	_	_
2	wird	werden	AUX	VAFIN	_	5	aux:pass	_	_
3	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj:pass	_	_
4	noch	noch	ADV	ADV	_	5	advmod	_	_
5	beibehalten	beibehalten	VERB	VVPP	_	0	root	_	SpaceAfter=No
6	?	?	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	7)	7)	X	XY	_	6	dep	_	_
2	Du	du	PRON	PPER	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
3	sollst	sollen	AUX	VMFIN	_	6	aux	_	_
4	keine	kein	DET	PIAT	PronType=Neg	5	det	_	_
5	Ehe	Ehe	NOUN	NN	Case=Acc	6	obj	_	_
6	schließen	schließen	VERB	VVINF	_	0	root	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	9	punct	_	_
8	die	der	DET	ART	Case=Nom|Definite=Def|PronType=Art	9	nsubj:pass	_	_
9	gebrochen	brechen	VERB	VVPP	_	6	acl	_	_
10	werden	werden	AUX	VAINF	_	9	aux:pass	_	_
11	müßte	müssen	AUX	VMFIN	_	9	aux	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	6	punct	_	_

~~~


