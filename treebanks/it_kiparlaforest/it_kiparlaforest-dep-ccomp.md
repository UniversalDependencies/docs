---
layout: base
title:  'Statistics of ccomp in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="it_kiparlaforest-dep-ccomp-reported.html">ccomp:reported</a></tt>.

112 nodes (1%) are attached to their parents as `ccomp`.

110 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.02678571428571.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (70; 63% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (11; 10% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (7; 6% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt> (4; 4% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-SCONJ.html">SCONJ</a></tt> (2; 2% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-X.html">X</a></tt> (2; 2% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	mi	mi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	expl	_	Begin=73.328|Clitic=Yes|KID=54-0
2	sa	sapere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Coconstruct=conj::BOA3017_53-3|KID=54-1
3	che	che	SCONJ	_	_	4	mark	_	KID=54-2
4	costa	costare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	End=74.108|KID=54-3

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	badile	badile	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Begin=767.393|KID=529-0
2	che	che	SCONJ	_	PronType=Rel	5	mark	_	End=768.373|KID=529-1
3	oh	oh	INTJ	_	_	5	discourse	_	Begin=768.658|KID=530-0|Prolonged=Yes|Volume=high
4	non	non	ADV	_	PronType=Neg	5	advmod	_	KID=530-1|Volume=high
5	sai	sapere	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	ccomp:reported	_	KID=530-2|Volume=high
6	cos'	cosa	PRON	_	PronType=Int	9	nsubj	_	KID=530-3|SpaceAfter=No|Volume=high
7	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	KID=530-4
8	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	KID=530-5|Volume=high
9	badile	badile	NOUN	_	Gender=Masc|Number=Sing	5	ccomp	_	End=771.24|KID=530-6|OverlappingGroup=91|Volume=high

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


