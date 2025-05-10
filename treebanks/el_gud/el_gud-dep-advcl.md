---
layout: base
title:  'Statistics of advcl in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="el_gud-dep-advcl-relcl.html">advcl:relcl</a></tt>.

572 nodes (2%) are attached to their parents as `advcl`.

450 instances of `advcl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.40384615384615.

The following 14 pairs of parts of speech are connected with `advcl`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (464; 81% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (21; 4% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (21; 4% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (18; 3% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (13; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (10; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	κατάλαβα	καταλαβαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	PUNCT	_	6	punct	_	PunctType=Comm
4	όταν	όταν	SCONJ	CjSb	_	6	mark	_	_
5	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
6	είπε	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
7	εκείνο	εκείνος	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	obj	_	_
8	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	_
9	“	“	PUNCT	OPUNCT	_	10	punct	_	PunctType=Quot
10	καλύτερα	καλά	ADV	AdCp	Degree=Cmp	6	advmod	_	_
11	να	να	AUX	PtSj	_	13	aux	_	_
12	μην	μην	PART	PtNg	Polarity=Neg	13	advmod	_	_
13	ξέρεις	ξέρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	_	_
14	”	”	PUNCT	CPUNCT	_	10	punct	_	PunctType=Quot|SpaceAfter=No
15	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	Αυτό	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
2	ήταν	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	cop	_	_
3	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	κίνητρό	κίνητρο	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
5	μας	μου	PRON	PnPo	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	4	nmod	_	_
6	για	για	ADP	AsPpSp	_	8	mark	_	_
7	να	να	SCONJ	CjSb	_	6	fixed	_	_
8	επιστρέφουμε	επιστρέφω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	_	4	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advcl	color:blue
1	Με	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	_	_
2	κοιτάζει	κοιτάζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	αμίλητος	αμίλητος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Sing	2	advcl	_	SpaceAfter=No
4	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


