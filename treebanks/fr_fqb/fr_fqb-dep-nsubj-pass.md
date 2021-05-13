---
layout: base
title:  'Statistics of nsubj:pass in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_fqb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_fqb-dep-nsubj-caus.html">nsubj:caus</a></tt>.

240 nodes (1%) are attached to their parents as `nsubj:pass`.

159 instances of `nsubj:pass` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.60833333333333.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (148; 62% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (62; 26% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (21; 9% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (7; 3% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj:pass	color:blue
1	Comment	comment	ADV	_	PronType=Int	3	advmod	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	calculée	calculer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	mon	son	DET	_	Number=Sing|Poss=Yes	5	det	_	_
5	aide	aide	NOUN	_	Number=Sing	3	nsubj:pass	_	_
6	à	à	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	logement	logement	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	si	si	SCONJ	_	_	11	mark	_	_
10	je	il	PRON	_	Number=Sing|Person=1	11	nsubj	_	_
11	vis	vivre	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl	_	_
12	en	en	ADP	_	_	13	case	_	_
13	couple	couple	NOUN	_	Number=Sing	11	obl:mod	_	_
14	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Qui	qui	PRON	_	PronType=Int	10	obj	_	_
2	John	John	PROPN	_	Gender=Masc|Number=Sing	7	nsubj:pass	_	_
3	J.	J.	PROPN	_	_	2	flat:name	_	_
4	Famalaro	Famalaro	PROPN	_	_	2	flat:name	_	_
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	SpaceAfter=No
6	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	7	expl:subj	_	_
7	accusé	accuser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
8	d'	de	ADP	_	_	10	mark	_	SpaceAfter=No
9	avoir	avoir	AUX	_	VerbForm=Inf	10	aux:tense	_	_
10	tué	tuer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	xcomp	_	_
11	?	?	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Qui	qui	PRON	_	PronType=Int	4	nsubj:pass	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
3	été	être	AUX	_	Tense=Past|VerbForm=Part	4	aux:pass	_	_
4	élu	élire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	gouverneur	gouverneur	NOUN	_	Gender=Masc|Number=Sing	4	xcomp	_	_
6	de	de	ADP	_	_	8	case	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Californie	Californie	PROPN	_	Gender=Fem|Number=Sing	5	nmod	_	_
9	?	?	PUNCT	_	_	4	punct	_	_

~~~


