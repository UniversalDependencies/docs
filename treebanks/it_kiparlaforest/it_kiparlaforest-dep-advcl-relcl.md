---
layout: base
title:  'Statistics of advcl:relcl in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-advcl.html">advcl</a></tt>.

7 nodes (0%) are attached to their parents as `advcl:relcl`.

7 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71428571428571.

The following 6 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 14% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	sono	essere	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	Begin=631.558|KID=264-0
2	due	due	NUM	_	NumType=Card	3	nummod	_	KID=264-1
3	domande	domanda	NOUN	_	Gender=Fem|Number=Plur	0	root	_	KID=264-2
4	che	che	SCONJ	_	PronType=Rel	5	nsubj	_	KID=264-3
5	son	essere	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:relcl	_	KID=264-4
6	più	più	ADV	_	_	5	advmod	_	KID=264-5
7	o	o	CCONJ	_	_	8	cc	_	KID=264-6
8	meno	meno	ADV	_	_	6	conj	_	KID=264-7
9	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	KID=264-8
10	stessa	stesso	ADJ	_	_	11	amod	_	KID=264-9
11	domanda	domanda	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	End=633.769|Intonation=WeaklyRising|KID=264-10

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 advcl:relcl	color:blue
1	e	e	CCONJ	_	_	3	cc	_	Begin=559.124|KID=239-0
2	si	si	PRON	_	Person=3|PronType=Prs	3	expl	_	KID=239-1
3	prova	provare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=239-2|PauseAfter=Yes
4	a	a	ADP	_	_	5	mark	_	KID=239-4
5	ricostruire	ricostruire	VERB	_	VerbForm=Inf	3	xcomp	_	KID=239-5
6	a	a	ADP	_	_	8	case	_	KID=239-6a
7	l'	il	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	KID=239-6b
8	indietro	indietro	ADV	_	_	5	obl	_	KID=239-7
9	partendo	partire	VERB	_	VerbForm=Ger	5	advcl	_	KID=239-8
10	da	da	ADP	_	_	11	case	_	KID=239-9
11	quello	quello	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	9	obl	_	KID=239-10
12	che	che	SCONJ	_	PronType=Rel	13	obj	_	KID=239-11
13	abbiamo	avere	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	KID=239-12
14	adesso	adesso	ADV	_	_	13	advmod	_	KID=239-13
15	e	e	CCONJ	_	_	18	cc	_	KID=239-14
16	da	da	ADP	_	_	18	case	_	KID=239-15a
17	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	18	det	_	KID=239-15b
18	documenti	documento	NOUN	_	Gender=Masc|Number=Plur	13	conj	_	KID=239-16
19	scritti~	scritto	ADJ	_	_	18	amod	_	Interrupted=Yes|KID=239-17
20	che	che	SCONJ	_	_	21	mark	_	KID=239-18
21	abbiamo	avere	VERB	_	_	19	advcl:relcl	_	Interrupted=Yes|KID=239-19
22	vecchi	vecchio	ADJ	_	Gender=Masc|Number=Plur	21	amod	_	End=564.461|Intonation=WeaklyRising|KID=239-20

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 advcl:relcl	color:blue
1	perché	perché	SCONJ	_	_	5	mark	_	Begin=107.468|KID=45-0
2	qual	quale	ADV	_	Gender=Masc|Number=Sing	5	advmod	_	KID=45-1
3	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	KID=45-2
4	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	KID=45-3
5	problema	problema	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Intonation=Falling|KID=45-4
6	che	che	SCONJ	_	_	8	case	_	KID=45-5
7	l'	il	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	KID=45-6|Truncated=Yes
8	alfabeto	alfabeto	NOUN	_	Gender=Masc|Number=Sing	11	nsubj	_	KID=45-7|PauseAfter=Yes
9	arabo	arabo	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	End=110.399|Intonation=WeaklyRising|KID=45-9
10	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	Begin=110.921|KID=46-0
11	perfetto	perfetto	ADJ	_	Gender=Masc|Number=Sing	5	advcl:relcl	_	KID=46-1
12	per	per	ADP	_	_	13	mark	_	KID=46-2
13	scrivere	scrivere	VERB	_	VerbForm=Inf	11	advcl	_	KID=46-3
14	l'	il	DET	_	Definite=Def|Number=Sing|PronType=Art	15	det	_	KID=46-4|Truncated=Yes
15	arabo	arabo	NOUN	_	Gender=Masc|Number=Sing	13	obj	_	KID=46-5
16	standard	standard	ADJ	_	_	15	amod	_	End=112.967|Intonation=WeaklyRising|KID=46-6

~~~


