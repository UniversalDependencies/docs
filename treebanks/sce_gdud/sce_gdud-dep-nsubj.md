---
layout: base
title:  'Statistics of nsubj in UD_Dongxiang-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Dongxiang-GDUD: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="sce_gdud-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="sce_gdud-dep-nsubj-pass.html">nsubj:pass</a></tt>.

122 nodes (14%) are attached to their parents as `nsubj`.

110 instances of `nsubj` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.71311475409836.

The following 19 pairs of parts of speech are connected with `nsubj`: <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (39; 32% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (22; 18% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (15; 12% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (11; 9% instances), <tt><a href="sce_gdud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (6; 5% instances), <tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="sce_gdud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="sce_gdud-pos-ADV.html">ADV</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="sce_gdud-pos-NUM.html">NUM</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sce_gdud-pos-NUM.html">NUM</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sce_gdud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj	color:blue
1	Ene	ene	PRON	_	Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
2	kun	kun	NOUN	_	Number=Sing	6	obl	_	_
3	nie	nie	NUM	_	NumType=Card	4	nummod	_	_
4	udu	udu	NOUN	_	_	6	obj	_	_
5	jiushijiu-gie	jiushijiu-gie	NUM	_	NumType=Card	4	compound	_	_
6	u-gie	u-gie	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	ene	ene	DET	_	PronType=Dem	2	det	_	_
2	fugierei	fugierei	NOUN	_	Number=Sing	6	nsubj	_	_
3	dolon	dolon	NUM	_	NumType=Card	5	nummod	_	_
4	ula	ula	NOUN	_	_	5	obl	_	SpaceAfter=No
5	fugierei	_	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin	6	acl:relcl	_	Verbalizer=Yes
6	holu-zhiwo	holu-zhiwo	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin	0	root	_	_
7	dolon	dolon	NUM	_	NumType=Card	8	nummod	_	_
8	ghon	ghon	NOUN	_	_	6	obl	_	SpaceAfter=No
9	gie-ne	gie-ne	VERB	_	Mood=Imp|VerbForm=Fin	6	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj	color:blue
1	Buda-ne	buda	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	3	nmod:poss	_	_
2	ger-te	ger-te	NOUN	_	_	5	nmod	_	_
3	orti	orti	NUM	_	NumType=Card	5	nummod	_	_
4	dolon	dolon	NUM	_	NumType=Card	5	nummod	_	_
5	kun	kun	NOUN	_	_	6	nsubj	_	_
6	be	be	AUX	_	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


