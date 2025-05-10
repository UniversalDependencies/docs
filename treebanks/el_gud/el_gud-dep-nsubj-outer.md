---
layout: base
title:  'Statistics of nsubj:outer in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="el_gud-dep-nsubj-pass.html">nsubj:pass</a></tt>.

34 nodes (0%) are attached to their parents as `nsubj:outer`.

33 instances of `nsubj:outer` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.29411764705882.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (15; 44% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (10; 29% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (7; 21% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:outer	color:blue
1	Ήταν	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	cop	_	_
2	ανάγκη	ανάγκη	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:outer	_	_
3	να	να	SCONJ	PtSj	_	4	mark	_	_
4	κάνετε	κάνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
5	τόση	τόσος	DET	PnDm	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	φασαρία	φασαρία	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
7	;	;	PUNCT	PTERM	_	4	punct	_	PunctType=Qest

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:outer	color:blue
1	«	«	PUNCT	OPUNCT	_	6	punct	_	PunctType=Quot
2	Αυτό	αυτός	DET	PnDm	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	dislocated	_	_
3	μόνο	μόνο	ADV	AdBa	_	6	advmod	_	_
4	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Λιμενικό	λιμενικό	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:outer	_	_
6	μπορεί	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	ccomp	_	_
7	να	να	SCONJ	PtSj	_	10	mark	_	_
8	μας	εγώ	PRON	PnPe	Case=Acc|Number=Plur|Person=1|PronType=Prs	10	obl	_	_
9	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
10	ξεδιαλύνει	ξεδιαλύνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	6	csubj	_	_
11	»	»	PUNCT	CPUNCT	_	6	punct	_	PunctType=Quot
12	του	εγώ	PRON	PnPe	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	iobj	_	_
13	λέω	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
14	.	.	PUNCT	PTERMP	_	13	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj:outer	color:blue
1	Εκείνο	εκείνος	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj:outer	_	_
2	που	που	PRON	PnRe	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	4	obj	_	_
3	δεν	δεν	PART	PtNg	Polarity=Neg	4	advmod	_	_
4	ξέρω	ξέρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
5	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	cop	_	_
6	ποιος	ποιος	PRON	PnIr	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	8	nsubj	_	_
7	τον	εγώ	PRON	PnPe	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	σκότωσε	σκοτώνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	_	8	punct	_	PunctType=Peri

~~~


