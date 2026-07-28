---
layout: base
title:  'Statistics of advcl in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `advcl`

This relation is universal.

171 nodes (2%) are attached to their parents as `advcl`.

104 instances of `advcl` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.77777777777778.

The following 12 pairs of parts of speech are connected with `advcl`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (114; 67% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (23; 13% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (9; 5% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (8; 5% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="el_glcii-pos-ADV.html">ADV</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 advcl	color:blue
1	Άλλοι	άλλος	PRON	PRON	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Ind	2	nsubj	_	_
2	μαθαίνουν	μαθαίνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ξένες	ξένος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Plur	4	amod	_	_
4	γλώσσες	γλώσσα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	2	obj	_	_
5	για	για	ADP	ADP	_	7	mark	_	_
6	να	να	AUX	AUX	_	7	aux	_	_
7	ταξιδεύουν	ταξιδεύω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 advcl	color:blue
1	θέλεις	θέλω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	NewPar=Yes
2	να	να	AUX	AUX	_	3	aux	_	_
3	παμε	πηγαίνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	1	ccomp	_	_
4	μαζι	μαζι	ADV	ADV	_	3	advmod	_	_
5	σε	σε	ADP	ADP	_	8	case	_	_
6	ενα	ενας	DET	DET	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
7	μικρα	μικρος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	8	amod	_	_
8	νησι	νησι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	_
9	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	11	det	_	_
10	επομενα	έπομαι	VERB	VERB	Aspect=Perf|Case=Acc|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	11	advcl	_	_
11	καλοκαίρι	καλοκαίρι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	SpaceAfter=No
12	;	;	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 advcl	color:blue
1	Κατά	κατά	ADP	ADP	_	3	case	_	_
2	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	γνώμη	γνώμη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
4	μου	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
5	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	κατάσταση	κατάσταση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
7	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	cop	_	_
8	τόσο	τόσο	ADV	ADV	_	9	advmod	_	_
9	σοβάρη	σοβάρη	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
10	που	που	SCONJ	SCONJ	_	12	mark	_	_
11	δεν	δεν	PART	PART	_	12	advmod	_	_
12	μπορούμε	μπορώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
13	να	να	AUX	AUX	_	15	aux	_	_
14	την	εγώ	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	obj	_	_
15	αγνοούμε	αγνοώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	xcomp	_	_
16	πια	πια	ADV	ADV	_	15	advmod	_	SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


