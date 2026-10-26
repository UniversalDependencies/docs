---
layout: base
title:  'Statistics of acl:relcl in UD_Sindhi-Isra'
udver: '2'
---

## Treebank Statistics: UD_Sindhi-Isra: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sd_isra-dep-acl.html">acl</a></tt>.

28 nodes (0%) are attached to their parents as `acl:relcl`.

22 instances of `acl:relcl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.10714285714286.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sd_isra-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sd_isra-pos-VERB.html">VERB</a></tt> (15; 54% instances), <tt><a href="sd_isra-pos-DET.html">DET</a></tt>-<tt><a href="sd_isra-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="sd_isra-pos-PRON.html">PRON</a></tt>-<tt><a href="sd_isra-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="sd_isra-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sd_isra-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="sd_isra-pos-VERB.html">VERB</a></tt>-<tt><a href="sd_isra-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="sd_isra-pos-ADV.html">ADV</a></tt>-<tt><a href="sd_isra-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="sd_isra-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sd_isra-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="sd_isra-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sd_isra-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl:relcl	color:blue
1	هي	هي	DET	PRD	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
2	هڪ	هڪ	NUM	NUM	_	4	nummod	_	_
3	اهڙي	اهڙو	ADJ	JJ	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	صورتحال	صورتحال	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	آهي	آهي	AUX	VAUX	Number=Sing|Tense=Pres	4	cop	_	_
6	جنهن	جنهن	DET	PRD	Case=Acc|Number=Sing|Person=3|PronType=Dem	9	obl	_	_
7	تي	تي	ADP	PSPL	_	6	case	_	_
8	افسوس	افسوس	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	9	compound	_	_
9	ڪرڻ	ڪر	VERB	VM	Aspect=Imp|VerbForm=Inf	4	acl:relcl	_	_
10	گهرجي	گهرجي	VERB	VM	Aspect=Imp|Number=Sing|Person=3|Voice=Pass	9	compound	_	SpaceAfter=No
11	،	،	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl:relcl	color:blue
1	ماڻهو	ماڻهو	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	اهو	اهو	DET	PRD	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
3	ئي	ئي	PART	PART	_	2	advmod:emph	_	_
4	ٻڌندا	ٻڌ	VERB	VM	Aspect=Imp|Number=Plur|Tense=Pres|Voice=Act	5	acl:relcl	_	_
5	جيڪو	جيڪو	DET	PRD	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	8	nsubj	_	_
6	هُو	هُو	DET	PRD	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	7	nsubj	_	_
7	ٻڌڻ	ٻڌ	VERB	VM	Aspect=Imp|VerbForm=Inf	8	xcomp	_	_
8	چاهين	چاه	VERB	VM	Aspect=Imp|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
9	ٿا	آهي	AUX	VAUX	Gender=Masc|Number=Plur|Person=3|Tense=Pres	8	aux	_	_
10	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 acl:relcl	color:blue
1	هيءُ	هيءُ	DET	PRD	Case=Nom|Number=Sing|PronType=Dem	3	nsubj	_	_
2	ته	ته	PART	PART	_	1	advmod:emph	_	_
3	شينهن	شينهن	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	10	ccomp	_	_
4	آهي	آهي	AUX	VAUX	Number=Sing|Tense=Pres	3	cop	_	_
5	!	!	PUNCT	PUNCT	_	3	punct	_	_
6	پر	پر	SCONJ	CS	_	3	mark	_	_
7	هاڻي	هاڻ	ADV	ADT	_	8	advmod	_	_
8	ڪري	ڪر	VERB	VM	Aspect=Imp|Voice=Act	10	advcl	_	_
9	سو	سو	PRON	PRL	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	_	_
10	ڪري	ڪر	VERB	VM	Aspect=Imp|Voice=Act	11	acl:relcl	_	_
11	ڇا	ڇا	PRON	PRWH	Case=Nom|PronType=Int	0	root	_	_
12	؟	؟	PUNCT	PUNCT	_	11	punct	_	_
13	آخر	آخر	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	14	obl	_	_
14	هلندي	هل	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing	15	xcomp	_	_
15	هلندي	هل	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing	10	advcl	_	_
16	،	،	PUNCT	PUNCT	_	15	punct	_	_

~~~


