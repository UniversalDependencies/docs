---
layout: base
title:  'Statistics of acl:relcl in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-acl.html">acl</a></tt>.

299 nodes (1%) are attached to their parents as `acl:relcl`.

299 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.18060200668896.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (179; 60% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (55; 18% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (19; 6% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (14; 5% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	5	punct	_	_
2	Και	και	CCONJ	CjCo	_	5	cc	_	_
3	τα	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	5	det	_	_
4	δυο	δύο	NUM	NmCd	Case=Nom|Gender=Neut|Number=Plur|NumType=Card	5	nsubj	_	_
5	καράβια	καράβι	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Plur	0	root	_	_
6	του	μου	PRON	PnPo	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod	_	_
7	που	που	PRON	PnRe	Case=Nom|Gender=Neut|Number=Plur|PronType=Rel	8	nsubj	_	_
8	βουλιάξαν	βουλιάζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
9	;	;	PUNCT	PTERM	PunctType=Qest	5	punct	_	_
10	»	»	PUNCT	CPUNCT	PunctType=Quot	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	“	“	PUNCT	OPUNCT	PunctType=Quot	2	punct	_	_
2	Θέλετε	θέλω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	CjSb	_	4	mark	_	_
4	πάθετε	παθαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	2	ccomp	_	_
5	αυτό	αυτός	DET	PnDm	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	_
6	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	obj	_	_
7	έπαθε	παθαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
8	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	εφοπλιστής	εφοπλιστής	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
10	;	;	PUNCT	PTERM	PunctType=Qest	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	Είναι	είμαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	λιγότερο	λίγος	ADJ	AjCp	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing	1	nsubj	_	_
4	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	nsubj	_	_
5	μπορούμε	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
6	να	να	SCONJ	CjSb	_	8	mark	_	_
7	της	εγώ	PRON	PnPe	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	προσφέρουμε	προσφέρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	PunctType=Peri	1	punct	_	_

~~~


