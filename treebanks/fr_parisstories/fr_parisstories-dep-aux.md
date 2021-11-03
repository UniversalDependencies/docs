---
layout: base
title:  'Statistics of aux in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="fr_parisstories-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_parisstories-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_parisstories-dep-aux-tense.html">aux:tense</a></tt>.

682 nodes (2%) are attached to their parents as `aux`.

682 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27565982404692.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (672; 99% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	discourse	_	_
3	plus	plus	ADV	_	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	_
6	en	en	PRON	_	Person=3|PronType=Prs	8	iobj	_	_
7	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	_
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	advmod	_	ExtPos=ADV|Idiom=Yes
10	fois	fois	NOUN	_	Gender=Fem|Number=Sing	9	fixed	_	InIdiom=Yes
11	ensemble	ensemble	ADV	_	_	8	advmod	_	_
12	?	?	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 aux	color:blue
1	parce	parce	ADV	_	_	11	mark	_	ExtPos=SCONJ|Idiom=Yes
2	qu'	que	SCONJ	_	_	1	fixed	_	InIdiom=Yes|SpaceAfter=No
3	à	à	ADP	_	_	5	case	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	milieu	milieu	NOUN	_	Gender=Masc|Number=Sing	11	obl:mod	_	_
6	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	11	nsubj	_	_
7	aurait	avoir	AUX	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
8	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	cop	_	_
9	vraiment	vraiment	ADV	_	_	10	advmod	_	_
10	trop	trop	ADV	_	_	11	advmod	_	_
11	bas	bas	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	euh	euh	INTJ	_	_	4	discourse	_	_
2	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	ah	ah	INTJ	_	_	10	discourse	_	_
6	oui	oui	INTJ	_	_	10	discourse	_	_
7	aussi	aussi	ADV	_	_	10	advmod	_	_
8	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	_
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	nourri	nourrir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	reparandum	_	_
11	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	12	det	_	_
12	girafes	girafe	NOUN	_	Gender=Fem|Number=Plur	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


