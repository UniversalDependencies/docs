---
layout: base
title:  'Statistics of aux in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="kpv_lattice-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="kpv_lattice-dep-aux-tense.html">aux:tense</a></tt>.

208 nodes (3%) are attached to their parents as `aux`.

178 instances of `aux` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55769230769231.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (187; 90% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (12; 6% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (6; 3% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Сідз	сідз	ADV	Adv	_	4	advmod	_	_
2	жӧ	жӧ	ADV	Adv	_	1	advmod	_	OrigLang=ru
3	колӧ	ковны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux	_	_
4	сетны	сетны	VERB	V	VerbForm=Inf	0	root	_	_
5	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	6	amod	_	_
6	тӧдчанлун	тӧдчанлун	NOUN	N	Case=Nom|Number=Sing	4	nmod:obj	_	_
7	вошӧмъяскӧд	вошӧм	NOUN	N	Case=Com|Number=Plur	8	obl	_	_
8	тышкасьӧм	тышкасьны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	4	obl	_	_
9	вылӧ	вылӧ	ADP	Po	AdpType=Post|Case=Ill|Number=Sing	8	case	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	Мӧд	мӧд	PRON	Pron	PronType=Dem	2	nmod	_	_
2	петанін	петанін	NOUN	N	Case=Nom|Nomzr=Loc|Number=Sing	0	root	_	_
3	сэтысь	сэтысь	ADV	Adv	Case=Ela	2	obl	_	_
4	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	2	aux	_	_
5	вӧв	вӧвны	AUX	V	Connegative=Yes	2	cop	_	SpaceAfter=No
6	.	_	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
2	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	aux	_	GTtags=V,IV,Ind,Prt1,Sg3
3	вевттӧм	вевттӧм	ADJ	A	Case=Nom|Number=Sing	0	root	_	GTtags=A,Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	GTtags=CLB
5	ляпкыдик	ляпкыдик	ADJ	A	Case=Nom|Number=Sing	3	conj	_	GTtags=A,Sg,Nom|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	GTtags=CLB
7	ӧшиньяссӧ	ӧшинь	NOUN	N	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	obj	_	GTtags=N,Pl,Acc,PxSg3
8	пӧвйӧн	пӧвйӧн	NOUN	N	Case=Ins|Number=Sing	9	obl	_	GTtags=N,Sg,Ins
9	тупкӧма	тупкыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	conj	_	GTtags=V,TV,Der,Der/ӧм,Der/NomAct,N,Sg,Der,Der/ProprietiveMod,A,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


