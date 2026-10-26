---
layout: base
title:  'Statistics of ccomp in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="it_kiparlaforest-dep-ccomp-reported.html">ccomp:reported</a></tt>.

166 nodes (1%) are attached to their parents as `ccomp`.

163 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.04216867469879.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (112; 67% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (14; 8% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (8; 5% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (7; 4% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt> (7; 4% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	boh	boh	INTJ	_	_	3	discourse	_	Begin=1397.52|Intonation=Falling|KID=354-0
2	non	non	ADV	_	PronType=Neg	3	advmod	_	KID=354-1
3	so	sapere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=354-2
4	quanti	quanto	ADV	_	Gender=Masc|Number=Plur|PronType=Int	7	mark	_	KID=354-3
5	abitanti	abitante	NOUN	_	Gender=Masc|Number=Plur	7	nsubj	_	KID=354-4
6	ci	ci	PRON	_	PronType=Prs	7	expl	_	Clitic=Yes|KID=354-5
7	siano	essere	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	KID=354-6|Prolonged=Yes
8	però	però	CCONJ	_	_	9	cc	_	End=1399.72|Intonation=WeaklyRising|KID=354-7
9	centomila	centomila	NUM	_	NumType=Card	7	conj	_	Begin=1401.315|KID=356-0|OverlappingGroup=68|Prolonged=Yes
10	perlom~	perlom~	ADV	_	_	9	advmod	_	End=1402.57|Interrupted=Yes|KID=356-1|OverlappingGroup=68

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	pensavo	pensare	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	Begin=1288.382|KID=320-0|OverlappingGroup=63
2	fosse	essere	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	reparandum	_	KID=320-1|Prolonged=Yes
3	fosse	essere	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	KID=320-2
4	più	più	ADV	_	_	5	advmod	_	KID=320-3
5	vicina	vicino	ADJ	_	Gender=Fem|Number=Sing	1	ccomp	_	End=1290.37|Intonation=Falling|KID=320-4

~~~


