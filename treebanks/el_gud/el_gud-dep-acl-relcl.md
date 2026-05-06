---
layout: base
title:  'Statistics of acl:relcl in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-acl.html">acl</a></tt>.

267 nodes (1%) are attached to their parents as `acl:relcl`.

267 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.37078651685393.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (160; 60% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (58; 22% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (17; 6% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (14; 5% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-ADP.html">ADP</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	«	«	PUNCT	_	_	5	punct	_	PunctType=Quot|SpaceAfter=No
2	Και	και	CCONJ	_	_	5	cc	_	_
3	τα	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	5	det	_	_
4	δυο	δύο	NUM	_	Case=Nom|Gender=Neut|Number=Plur|NumType=Card	5	nummod	_	_
5	καράβια	καράβι	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	0	root	_	_
6	του	εγώ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod	_	_
7	που	που	PRON	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Rel	8	nsubj	_	_
8	βουλιάξαν	βουλιάζω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	SpaceAfter=No
9	;	;	PUNCT	_	_	5	punct	_	PunctType=Qest|SpaceAfter=No
10	»	»	PUNCT	_	_	5	punct	_	PunctType=Quot

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	“	“	PUNCT	_	_	2	punct	_	PunctType=Quot|SpaceAfter=No
2	Θέλετε	θέλω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	_	_	4	mark	_	_
4	πάθετε	παθαίνω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	2	ccomp	_	_
5	αυτό	αυτός	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	_
6	που	που	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	obj	_	_
7	έπαθε	παθαίνω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
8	ο	ο	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	εφοπλιστής	εφοπλιστής	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
10	;	;	PUNCT	_	_	2	punct	_	PunctType=Qest

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	«	«	PUNCT	_	_	7	punct	_	PunctType=Quot|SpaceAfter=No
2	Το	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	τελευταίο	τελευταίος	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	7	nsubj	_	_
4	που	που	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	obj	_	_
5	είπε	λέω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
6	δεν	δεν	PART	_	Polarity=Neg	7	advmod	_	_
7	ισχύει	ισχύω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	»	»	PUNCT	_	_	7	punct	_	PunctType=Quot|SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	PunctType=Peri

~~~


