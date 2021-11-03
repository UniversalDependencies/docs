---
layout: base
title:  'Statistics of aux:neg in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="kpv_lattice-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="kpv_lattice-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="kpv_lattice-dep-aux-pot.html">aux:pot</a></tt>, <tt><a href="kpv_lattice-dep-aux-tense.html">aux:tense</a></tt>.

152 nodes (2%) are attached to their parents as `aux:neg`.

137 instances of `aux:neg` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51973684210526.

The following 7 pairs of parts of speech are connected with `aux:neg`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (126; 83% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (9; 6% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (6; 4% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (6; 4% instances), <tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux:neg	color:blue
1	Эз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	aux:neg	_	_
2	позь	позьны	AUX	V	Connegative=Yes	3	aux:pot	_	_
3	бӧрйыны	бӧрйыны	VERB	V	VerbForm=Inf	0	root	_	_
4	ни	ни	CCONJ	CC	Polarity=Neg	5	cc:preconj	_	_
5	Питер	Питер	NOUN	N	Case=Nom|Number=Sing	3	obj	_	OrigLang=ru
6	Смитӧс	Смит	NOUN	N	Case=Acc|Number=Sing	5	flat:name	_	OrigLang=ru|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	ни	ни	CCONJ	CC	Polarity=Neg	9	cc:preconj	_	_
9	Мери	Мери	NOUN	N	Case=Nom|Number=Sing	5	conj	_	OrigLang=ru
10	Браунӧс	Браун	NOUN	N	Case=Acc|Number=Sing	9	flat:name	_	OrigLang=ru|SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux:neg	color:blue
1	Мӧд	мӧд	PRON	Pron	PronType=Dem	2	nmod	_	_
2	петанін	петанін	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
3	сэтысь	сэтысь	ADV	Adv	Case=Ela	2	obl:lmod	_	_
4	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	2	aux:neg	_	_
5	вӧв	вӧвны	AUX	V	Connegative=Yes	2	cop	_	SpaceAfter=No
6	.	_	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux:neg	color:blue
1	—	—	PUNCT	PUNCT	_	4	punct	_	_
2	Сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj:cop	_	GTtags=Pers,Sg3,Nom
3	ӧд	ӧд	ADV	Adv	Case=Nom|Number=Sing	4	advmod:eval	_	GTtags=Sg,Nom
4	ныв	ныв	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	_
6	абу	абу	AUX	_	Mood=Ind|Number=Sing|Polarity=Neg	8	aux:neg	_	GTtags=Neg,Cop,Ind,Sg
7	и	и	ADV	Adv	_	8	advmod:foc	_	_
8	мича	мича	ADJ	A	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom
9	сылы	сійӧ	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs	8	obl	_	GTtags=Pers,Sg3,Dat
10	вӧзйысьнысӧ	вӧзйысьны	VERB	V	Clitic=So|VerbForm=Inf	8	csubj	_	GTtags=Refl,Inf,Clt/сӧ|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


