---
layout: base
title:  'Statistics of xcomp:obl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `xcomp:obl`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="fr_gsd-dep-xcomp-obj.html">xcomp:obj</a></tt>, <tt><a href="fr_gsd-dep-xcomp-pred.html">xcomp:pred</a></tt>.

943 nodes (0%) are attached to their parents as `xcomp:obl`.

942 instances of `xcomp:obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.22481442205726.

The following 14 pairs of parts of speech are connected with `xcomp:obl`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (746; 79% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (105; 11% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (26; 3% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (26; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (21; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp:obl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	wordform=il
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	fini	finir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	par	par	ADP	_	_	6	mark	_	_
5	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	faire	faire	VERB	_	VerbForm=Inf	3	xcomp:obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp:obl	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	médecin	médecin	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	se	se	PRON	_	Person=3|PronType=Prs	4	obj	_	_
4	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	incapable	incapable	ADJ	_	Gender=Masc|Number=Sing	4	xcomp:pred	_	_
6	de	de	ADP	_	_	7	mark	_	_
7	répondre	répondre	VERB	_	VerbForm=Inf	5	xcomp:obl	_	_
8	à	à	ADP	_	_	10	case	_	_
9	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	10	det	_	_
10	question	question	NOUN	_	Gender=Fem|Number=Sing	7	obl:arg	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 xcomp:obl	color:blue
1	D'	de	DET	_	Definite=Ind|PronType=Art	2	det	_	SpaceAfter=No|wordform=d'
2	autres	autre	PRON	_	Number=Plur|Person=3|PronType=Ind	5	nsubj	_	_
3	seront	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	5	cop	_	_
4	mieux	mieux	ADV	_	_	5	advmod	_	_
5	à	à	ADP	_	_	0	root	_	ExtPos=ADJ|PhraseType=Idiom
6	même	même	ADV	_	_	5	fixed	_	_
7	de	de	ADP	_	_	9	mark	_	_
8	faire	faire	AUX	_	VerbForm=Inf	9	aux:caus	_	_
9	passer	passer	VERB	_	VerbForm=Inf	5	xcomp:obl	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	message	message	NOUN	_	Gender=Masc|Number=Sing	9	obj:agent	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


