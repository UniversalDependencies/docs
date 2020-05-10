---
layout: base
title:  'Statistics of obl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="fr_gsd-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_gsd-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_gsd-dep-obl-mod.html">obl:mod</a></tt>.

6991 nodes (2%) are attached to their parents as `obl`.

6894 instances of `obl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.85009297668431.

The following 20 pairs of parts of speech are connected with `obl`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (4398; 63% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1363; 19% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (663; 9% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (226; 3% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (187; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (34; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (25; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (23; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (15; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (14; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (14; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (11; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obl	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	matricule	matricule	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	18	18	NUM	_	_	2	nmod	_	_
4	remporta	remporter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	six	six	NUM	_	_	6	nummod	_	_
6	titres	titre	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	_
7	en	en	ADP	_	_	8	case	_	_
8	séries	série	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	_
9	nationales	national	ADJ	_	Gender=Fem|Number=Plur	8	amod	_	_
10	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	wordform=il
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	22	22	NUM	_	_	3	obl	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 obl	color:blue
1	Cet	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	wordform=cet
2	article	article	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	détaille	détailler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	régions	région	NOUN	_	Gender=Fem|Number=Plur	3	obj	_	_
6	pétrolifères	pétrolifère	ADJ	_	Gender=Fem|Number=Plur	5	amod	_	_
7	en	en	ADP	_	_	8	case	_	_
8	Australasie	Australasie	PROPN	_	_	3	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


