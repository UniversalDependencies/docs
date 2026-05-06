---
layout: base
title:  'Statistics of det:poss in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_kiparlaforest-dep-det-predet.html">det:predet</a></tt>.

41 nodes (0%) are attached to their parents as `det:poss`.

39 instances of `det:poss` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07317073170732.

The following 6 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (35; 85% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:poss	color:blue
1	mia	mio	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	2	det:poss	_	Begin=895.545|KID=604-0
2	nonna	nonno	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	End=896.115|KID=604-1
3	tutti	tutto	DET	_	PronType=Ind	5	det:predet	_	Begin=896.635|KID=605-0
4	gli	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	KID=605-1
5	anni	anno	NOUN	_	Gender=Masc|Number=Plur	7	obl	_	End=897.3|KID=605-2
6	mi	mi	PRON	_	Number=Sing|Person=1|PronType=Prs	7	iobj	_	Begin=897.445|Clitic=Yes|KID=606-0
7	fa	fare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Coconstruct=conj:reform::BOA3017_603::3|KID=606-1
8	almeno	almeno	ADV	_	_	10	advmod	_	KID=606-2
9	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	KID=606-3
10	uovo	uovo	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	KID=606-4
11	grande	grande	ADJ	_	Number=Plur	10	amod	_	KID=606-5
12	più	più	ADV	_	_	13	advmod	_	KID=606-6
13	tutti	tutto	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	10	nmod	_	End=899.715|KID=606-7|OverlappingGroup=101

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
1	per	per	ADP	_	_	2	mark	_	Begin=397.321|KID=179-0
2	dire	dire	VERB	_	VerbForm=Inf	0	root	_	End=397.912|Intonation=WeaklyRising|KID=179-1
3	loro	loro	PRON	_	Poss=Yes|PronType=Prs	4	det:poss	_	Begin=398.571|KID=180-0|PauseAfter=Yes
4	uomini	uomo	NOUN	_	Gender=Masc|Number=Plur	2	obj	_	KID=180-2
5	e	e	CCONJ	_	_	7	cc	_	KID=180-3
6	loro	loro	PRON	_	Poss=Yes|PronType=Prs	7	det:poss	_	KID=180-4|PauseAfter=Yes
7	donne	donna	NOUN	_	Gender=Fem|Number=Plur	4	conj	_	End=400.873|Intonation=WeaklyRising|KID=180-6

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det:poss	color:blue
1	eh	eh	INTJ	_	_	5	discourse	_	Begin=959.06|KID=390-0
2	se	se	SCONJ	_	_	5	mark	_	KID=390-1
3	noi	noi	PRON	_	Number=Plur|Person=1|PronType=Prs	5	nsubj	_	KID=390-2
4	vogliamo	volere	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	KID=390-3
5	risalire	risalire	VERB	_	VerbForm=Inf	0	root	_	KID=390-4
6	a	a	ADP	_	_	9	case	_	KID=390-5a
7	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	KID=390-5b
8	nostro	nostro	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	9	det:poss	_	KID=390-6
9	proto	proto	ADJ	_	Gender=Masc|Number=Sing	10	amod	_	KID=390-7
10	arabo	arabo	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	Intonation=WeaklyRising|KID=390-8

~~~


