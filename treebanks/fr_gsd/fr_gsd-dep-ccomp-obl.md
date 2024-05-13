---
layout: base
title:  'Statistics of ccomp:obl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `ccomp:obl`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `ccomp`: <tt><a href="fr_gsd-dep-ccomp-agent.html">ccomp:agent</a></tt>, <tt><a href="fr_gsd-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="fr_gsd-dep-ccomp-pred.html">ccomp:pred</a></tt>.

134 nodes (0%) are attached to their parents as `ccomp:obl`.

134 instances of `ccomp:obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 13 pairs of parts of speech are connected with `ccomp:obl`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (49; 37% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (41; 31% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (20; 15% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp:obl	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No|wordform=l'
2	hygiène	hygiène	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	laisse	laisser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	à	à	ADP	_	_	5	mark	_	_
5	désirer	désirer	VERB	_	VerbForm=Inf	3	ccomp:obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp:obl	color:blue
1	Difficile	difficile	ADJ	_	Gender=Masc|Number=Sing	0	root	_	wordform=difficile
2	de	de	ADP	_	_	3	mark	_	_
3	trouver	trouver	VERB	_	VerbForm=Inf	1	ccomp:obl	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	tel	tel	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	magasin	magasin	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
7	ailleurs	ailleurs	ADV	_	_	3	advmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp:obl	color:blue
1	C'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	vraiment	vraiment	ADV	_	_	5	advmod	_	_
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	incitation	incitation	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
6	à	à	ADP	_	_	7	mark	_	_
7	boire	boire	VERB	_	VerbForm=Inf	5	ccomp:obl	_	_
8	du	du	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	vin	vin	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
10	!	!	PUNCT	_	_	5	punct	_	_

~~~


