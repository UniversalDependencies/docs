---
layout: base
title:  'Statistics of punct in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `punct`

This relation is universal.

4389 nodes (17%) are attached to their parents as `punct`.

2732 instances of `punct` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.09409888357257.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (3390; 77% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (423; 10% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (154; 4% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (143; 3% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (83; 2% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (44; 1% instances), <tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (44; 1% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (31; 1% instances), <tt><a href="el_gud-pos-ADP.html">ADP</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (19; 0% instances), <tt><a href="el_gud-pos-X.html">X</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (19; 0% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="el_gud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="el_gud-pos-PART.html">PART</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 punct	color:blue
1	Ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Ζαχαράκης	Ζαχαράκης	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
4	σκέφτεται	σκέφτομαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	λίγο	λίγο	ADV	AdBa	_	4	advmod	_	SpaceAfter=No
6	.	.	PUNCT	PTERMP	_	4	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 punct	color:blue
1	Τελευταία	τελευταία	ADJ	AdBa	_	2	advmod	_	_
2	αποχωρεί	αποχωρώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	ξερακιανή	ξερακιανός	ADJ	AjBa	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
5	,	,	PUNCT	PUNCT	_	7	punct	_	PunctType=Comm
6	με	με	ADP	AsPpSp	_	7	case	_	_
7	ύφος	ύφος	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	2	obl	_	_
8	αγανακτισμένο	αγανακτισμένος	VERB	VbMnPp	Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 punct	color:blue
1	Είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	cop	_	_
2	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	λιγότερο	λίγος	ADJ	AjCp	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing	0	root	_	_
4	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	dislocated	_	_
5	μπορούμε	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
6	να	να	SCONJ	CjSb	_	8	mark	_	_
7	της	εγώ	PRON	PnPe	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	iobj	_	_
8	προσφέρουμε	προσφέρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


