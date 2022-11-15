---
layout: base
title:  'Statistics of aux:tense in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `aux:tense`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_parisstories-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_parisstories-dep-aux-pass.html">aux:pass</a></tt>.

1012 nodes (2%) are attached to their parents as `aux:tense`.

1012 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26581027667984.

The following 6 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (994; 98% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux:tense	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	discourse	_	_
3	plus	plus	ADV	_	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	_
6	en	en	PRON	_	Person=3|PronType=Prs	8	iobj	_	_
7	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux:tense	_	_
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	advmod	_	ExtPos=ADV|Idiom=Yes
10	fois	fois	NOUN	_	Gender=Fem|Number=Sing	9	fixed	_	InIdiom=Yes
11	ensemble	ensemble	ADV	_	_	8	advmod	_	_
12	?	?	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux:tense	color:blue
1	elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	AlignBegin=24658|AlignEnd=24892
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	AlignBegin=24892|AlignEnd=25125
3	vu	voir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	AlignBegin=25125|AlignEnd=25359
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	AlignBegin=25359|AlignEnd=25593
5	monde	monde	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	AlignBegin=25593|AlignEnd=25826
6	arriver	arriver	VERB	_	VerbForm=Inf	3	xcomp	_	AlignBegin=25826|AlignEnd=26060|SpaceAfter=No|Subject=SubjRaising
7	,	,	PUNCT	_	_	11	punct	_	AlignBegin=26060|AlignEnd=26060
8	elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	AlignBegin=26248|AlignEnd=26490
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:tense	_	AlignBegin=26490|AlignEnd=26732
10	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	cop	_	AlignBegin=26732|AlignEnd=26975
11	incapable	incapable	ADJ	_	_	3	conj	_	AlignBegin=26975|AlignEnd=27217
12	de	de	ADP	_	_	13	mark	_	AlignBegin=27217|AlignEnd=27459
13	produire	produire	VERB	_	VerbForm=Inf	11	advcl	_	AlignBegin=27459|AlignEnd=27701|SpaceAfter=No|Subject=SubjRaising
14	.	.	PUNCT	_	_	3	punct	_	AlignBegin=27701|AlignEnd=27701

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:tense	color:blue
1	euh	euh	INTJ	_	_	4	discourse	_	_
2	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	reparandum	_	_
5	ah	ah	INTJ	_	_	10	discourse	_	_
6	oui	oui	ADV	_	_	10	discourse	_	ExtPos=INTJ
7	aussi	aussi	ADV	_	_	10	advmod	_	_
8	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	_
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
10	nourri	nourrir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	12	det	_	_
12	girafes	girafe	NOUN	_	Gender=Fem|Number=Plur	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


