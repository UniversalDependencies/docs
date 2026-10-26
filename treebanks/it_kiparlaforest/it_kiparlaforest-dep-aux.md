---
layout: base
title:  'Statistics of aux in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_kiparlaforest-dep-aux-pass.html">aux:pass</a></tt>.

556 nodes (3%) are attached to their parents as `aux`.

556 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22661870503597.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt> (512; 92% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt> (17; 3% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt> (11; 2% instances), <tt><a href="it_kiparlaforest-pos-X.html">X</a></tt>-<tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux	color:blue
1	dovresti	dovere	AUX	_	Mood=Cnd|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	aux	_	Begin=0.96|KID=0-0
2	parlar	parlare	VERB	_	VerbForm=Inf	0	root	_	KID=0-1a
3	mi	mi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	iobj	_	Clitic=Yes|KID=0-1b
4	di	di	ADP	_	_	7	case	_	KID=0-2a
5	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	KID=0-2b
6	tua	tuo	ADJ	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	7	amod	_	KID=0-3
7	casa	casa	NOUN	_	Gender=Fem|Number=Sing	2	obl	_	End=2.78|Intonation=Falling|KID=0-4
8	attuale	attuale	ADJ	_	Number=Sing	7	amod	_	Begin=2.81|End=3.4|Intonation=Falling|KID=1-0

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	questa	questo	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	5	nsubj	_	Begin=1422.731|KID=922-0|OverlappingGroup=152
2	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	KID=922-1|OverlappingGroup=152
3	molto	molto	ADV	_	_	4	advmod	_	KID=922-2|OverlappingGroup=152
4	più	più	ADV	_	_	5	advmod	_	KID=922-3
5	colorita	colorito	ADJ	_	Gender=Fem|Number=Sing	0	root	_	End=1424.323|KID=922-4

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 aux	color:blue
1	non	non	ADV	_	PronType=Neg	2	advmod	_	KID=372-3
2	so	sapere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=372-4
3	se	se	SCONJ	_	_	9	mark	_	KID=372-5
4	tipo	tipo	NOUN	_	Gender=Masc|Number=Sing	5	discourse	_	KID=372-6
5	ancona	Ancona	PROPN	_	_	9	nsubj	_	KID=372-7|Prolonged=Yes
6	potrebbe	potere	AUX	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	KID=372-8
7	esse	essere	AUX	_	VerbForm=Inf	9	cop	_	KID=372-9
8	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	KID=372-10
9	cosa	cosa	NOUN	_	Gender=Fem|Number=Sing	2	ccomp	_	KID=372-11
10	simile	simile	ADJ	_	Number=Sing	9	amod	_	End=1448.78|Intonation=Falling|KID=372-12

~~~


