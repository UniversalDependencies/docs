---
layout: base
title:  'Statistics of nmod in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="el_glcii-dep-nmod-poss.html">nmod:poss</a></tt>.

467 nodes (5%) are attached to their parents as `nmod`.

431 instances of `nmod` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01070663811563.

The following 13 pairs of parts of speech are connected with `nmod`: <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (210; 45% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-PRON.html">PRON</a></tt> (203; 43% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt> (25; 5% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="el_glcii-pos-PRON.html">PRON</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_glcii-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="el_glcii-pos-NUM.html">NUM</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	Αυτο	αυτος	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	cop	_	_
3	το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	λύση	λύση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	σε	σε	ADP	ADP	_	7	case	_	_
6	κάθε	κάθε	DET	DET	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Ind	7	det	_	_
7	πρόβλημα	πρόβλημα	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	Γεια	γεια	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	σας	εγώ	PRON	PRON	Case=Gen|Number=Plur|Person=2|PronType=Prs	1	nmod	_	_
3	Δημήτρης	Δημήτρης	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod	color:blue
1	Θελο	θελο	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	να	να	AUX	AUX	_	3	aux	_	_
3	μιλαω	μιλαω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	1	xcomp	_	_
4	σ	σε	ADP	ADP	_	6	case	_	_
5	τι	ο	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	ταξιδι	ταξιδι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	_
7	μου	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod	_	_
8	τον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Δεκεμβριοσ	Δεκεμβριοσ	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


