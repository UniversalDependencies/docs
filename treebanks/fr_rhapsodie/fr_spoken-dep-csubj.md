---
layout: base
title:  'Statistics of csubj in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_spoken-dep-csubj-pass.html">csubj:pass</a></tt>.

21 nodes (0%) are attached to their parents as `csubj`.

17 instances of `csubj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.38095238095238.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (12; 57% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj	color:blue
1	ah	ah	INTJ	_	_	5	discourse	_	_
2	mais	mais	CCONJ	_	_	5	cc	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
6	qu'	que	SCONJ	_	_	9	mark	_	_
7	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	9	nsubj:pass	_	_
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
9	habillé	habiller	VERB	_	_	5	csubj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	n'	ne	ADV	_	Polarity=Neg	2	advmod	_	_
2	importe	importe	VERB	_	_	4	csubj	_	ExtPos=VERB|PhraseType=Idiom
3	qui	qui	PRON	_	_	2	fixed	_	InIdiom=Yes
4	pourrait	pouvoir	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	_
6	être	être	AUX	_	VerbForm=Inf	7	cop	_	_
7	chirurgien	chirurgien	NOUN	_	Gender=Masc|Number=Sing	4	xcomp	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 csubj	color:blue
1	enfin	enfin	ADV	_	_	3	discourse	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	expl:subj	_	_
5	est	être	AUX	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	3	reparandum	_	_
7	que	que	SCONJ	_	_	11	mark	_	_
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	_
9	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	cop	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	côté	côté	NOUN	_	Gender=Masc|Number=Sing	6	csubj	_	_
12	public	public	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	_
13	direct	direct	ADJ	_	Gender=Masc|Number=Sing	12	reparandum	_	_
14	et	et	CCONJ	_	_	15	cc	_	_
15	que	que	SCONJ	_	_	7	conj	_	_
16	et	et	CCONJ	_	_	20	cc	_	_
17	que	que	SCONJ	_	_	20	mark	_	_
18	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	20	dislocated	_	_
19	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	20	nsubj	_	_
20	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	reparandum	_	_
21	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	26	nsubj	_	_
22	est	être	AUX	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	cop	_	_
23	comme	comme	SCONJ	_	_	26	mark	_	_
24	si	si	SCONJ	_	_	26	mark	_	_
25	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	26	nsubj	_	_
26	faisais	faire	VERB	_	Number=Sing|Person=1	20	reparandum	_	_
27	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	28	det	_	_
28	spectacle	spectacle	NOUN	_	Gender=Masc|Number=Sing	26	obj	_	_

~~~


