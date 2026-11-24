---
layout: base
title:  'Statistics of discourse:tag in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `discourse:tag`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-discourse.html">discourse</a></tt>.
There are also 1 other language-specific subtypes of `discourse`: <tt><a href="it_kiparlaforest-dep-discourse-filler.html">discourse:filler</a></tt>.

97 nodes (0%) are attached to their parents as `discourse:tag`.

97 instances of `discourse:tag` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.60824742268041.

The following 13 pairs of parts of speech are connected with `discourse:tag`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-INTJ.html">INTJ</a></tt> (46; 47% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-INTJ.html">INTJ</a></tt> (21; 22% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-INTJ.html">INTJ</a></tt> (8; 8% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt> (5; 5% instances), <tt><a href="it_kiparlaforest-pos-X.html">X</a></tt>-<tt><a href="it_kiparlaforest-pos-INTJ.html">INTJ</a></tt> (4; 4% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 discourse:tag	color:blue
1	e	e	CCONJ	_	_	2	cc	_	Begin=330.657|KID=148-0
2	vedete	vedere	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	KID=148-1
3	che	che	SCONJ	_	_	5	mark	_	KID=148-2
4	ne	ne	PRON	_	Clitic=Yes|PronType=Prs	5	expl	_	KID=148-3
5	avete	avere	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	2	ccomp	_	End=331.585|Intonation=WeaklyRising|KID=148-4
6	di	di	ADP	_	_	9	case	_	Begin=332.439|KID=149-0
7	tutti	tutto	DET	_	Gender=Masc|Number=Plur|PronType=Tot	9	det:predet	_	KID=149-1
8	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	KID=149-2
9	colori	colore	NOUN	_	Gender=Masc|Number=Plur	5	obl	_	End=333.492|Intonation=WeaklyRising|KID=149-3
10	okay	okay	INTJ	_	_	2	discourse:tag	_	Begin=333.516|End=333.951|Intonation=WeaklyRising|KID=150-0

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse:tag	color:blue
1	questo	questo	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	3	nsubj	_	Begin=1706.555|KID=670-0
2	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	KID=670-1
3	alfabeto	alfabeto	NOUN	_	Gender=Masc|Number=Sing	0	root	_	KID=670-2
4	sudarabico	sudarabico	ADJ	_	_	3	amod	_	End=1707.714|KID=670-3
5	mh	mh	INTJ	_	_	3	discourse:tag	_	Begin=1708.854|End=1709.119|KID=671-0|Prolonged=Yes
6	south	south	ADJ	_	_	7	amod	_	Begin=1709.571|KID=672-0
7	arabian	arabian	ADJ	_	_	8	amod	_	KID=672-1
8	script	script	NOUN	_	Gender=Masc	3	conj:reform	_	End=1710.814|KID=672-2

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 discourse:tag	color:blue
1	il	il	X	_	_	2	reparandum	_	Begin=1848.807|ExtUPOS=DET|Interrupted=Yes|KID=725-1
2	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	KID=725-6
3	bianco	bianco	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Intonation=Falling|KID=725-2
4	in	in	X	_	_	5	reparandum	_	ExtUPOS=ADP|Interrupted=Yes|KID=725-3
5	in	in	ADP	_	_	6	case	_	KID=725-4
6	generale	generale	ADJ	_	Number=Sing	3	obl	_	End=1850.744|Intonation=Falling|KID=725-5
7	okay	okay	INTJ	_	_	3	discourse:tag	_	Begin=1850.856|End=1851.274|Intonation=WeaklyRising|KID=726-0

~~~


