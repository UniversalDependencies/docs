---
layout: base
title:  'Statistics of acl:relcl in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-acl.html">acl</a></tt>.

591 nodes (1%) are attached to their parents as `acl:relcl`.

591 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.06429780033841.

The following 21 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (416; 70% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (69; 12% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (20; 3% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (18; 3% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (17; 3% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (16; 3% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-X.html">X</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Шановні	шановний	ADJ	ADJ	Case=Voc|Degree=Pos|Number=Plur	2	amod	_	_
2	колеги	колега	NOUN	NOUN	Animacy=Anim|Case=Voc|Gender=Fem,Masc|Number=Plur	11	vocative	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	нації	нація	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	11	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	_
6	які	який	DET	DET	Case=Nom|Number=Plur|PronType=Rel	8	nsubj	_	_
7	не	не	PART	PART	Polarity=Neg	8	advmod:neg	_	_
8	читають	читати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	8	punct	_	_
10	не	не	PART	PART	Polarity=Neg	11	advmod:neg	_	_
11	мають	мати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	майбутнього	майбутнє	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Це	це	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	факт	факт	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	який	який	DET	DET	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	_
5	підтверджений	підтверджений	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	2	acl:relcl	_	_
6	усіма	увесь	DET	DET	Case=Ins|Number=Plur|PronType=Tot	7	det	_	_
7	нормами	норма	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	5	obl	_	_
8	цього	цей	DET	DET	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	закону	закон	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl:relcl	color:blue
1	За	за	ADP	ADP	Case=Ins	2	case	_	_
2	традицією	традиція	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	4	obl	_	_
3	я	я	PRON	PRON	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	хочу	хотіти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	привітати	привітати	VERB	VERB	Aspect=Perf|VerbForm=Inf	4	xcomp	_	_
6	наших	наш	DET	DET	Animacy=Anim|Case=Acc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	det	_	_
7	колег	колега	NOUN	NOUN	Animacy=Anim|Case=Acc|Gender=Fem,Masc|Number=Plur	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	12	punct	_	_
9	у	у	ADP	ADP	Case=Gen	10	case	_	_
10	яких	який	DET	DET	Case=Loc|Number=Plur|PronType=Rel	12	nmod	_	_
11	сьогодні	сьогодні	ADV	ADV	_	12	advmod	_	_
12	день	день	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	acl:relcl	_	_
13	народження	народження	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


