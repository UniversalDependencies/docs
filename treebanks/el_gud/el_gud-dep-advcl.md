---
layout: base
title:  'Statistics of advcl in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `advcl`

This relation is universal.

570 nodes (2%) are attached to their parents as `advcl`.

397 instances of `advcl` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.07894736842105.

The following 14 pairs of parts of speech are connected with `advcl`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (437; 77% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (65; 11% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (22; 4% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (13; 2% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (9; 2% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	κατάλαβα	καταλαβαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	6	punct	_	_
4	όταν	όταν	SCONJ	CjSb	_	6	mark	_	_
5	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
6	είπε	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
7	εκείνο	εκείνος	PRON	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	obj	_	_
8	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	_
9	“	“	PUNCT	OPUNCT	PunctType=Quot	10	punct	_	_
10	καλύτερα	καλά	ADV	AdCp	Degree=Cmp	6	advmod	_	_
11	να	να	AUX	PtSj	_	13	aux	_	_
12	μην	μην	PART	PtNg	Polarity=Neg	13	advmod	_	_
13	ξέρεις	ξέρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	_	_
14	”	”	PUNCT	CPUNCT	PunctType=Quot	10	punct	_	SpaceAfter=No
15	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advcl	color:blue
1	Η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	βόλτα	βόλτα	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
3	σ	σε	ADP	AsPpSp	_	5	case	_	_
4	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	χώρο	χώρος	NOUN	NoCm	Case=Acc|Gender=Masc|Number=Sing	2	nmod	_	_
6	που	που	PRON	PnRe	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	7	obj	_	_
7	εγκαταλείπω	εγκαταλείπω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
8	έχει	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
9	τελειώσει	τελειώνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
10	και	και	CCONJ	CjCo	_	11	cc	_	_
11	σηκώνομαι	σηκώνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	3	punct	_	_
2	Θα	θα	AUX	PtFu	Tense=Fut	3	aux	_	_
3	είμαι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	πιο	πιο	ADV	AdBa	Degree=Cmp	5	advmod	_	_
5	ακριβής	ακριβής	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Sing	3	xcomp	_	_
6	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
7	όταν	όταν	SCONJ	CjSb	_	8	mark	_	_
8	τελειώσω	τελειώνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	3	advcl	_	_
9	τη	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	νεκροψία	νεκροψία	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
11	»	»	PUNCT	CPUNCT	PunctType=Quot	3	punct	_	_
12	.	.	PUNCT	PTERMP	PunctType=Peri	3	punct	_	_

~~~


