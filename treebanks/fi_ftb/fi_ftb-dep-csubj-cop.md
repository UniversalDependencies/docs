---
layout: base
title:  'Statistics of csubj:cop in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-csubj.html">csubj</a></tt>.

231 nodes (0%) are attached to their parents as `csubj:cop`.

198 instances of `csubj:cop` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.23809523809524.

The following 15 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (144; 62% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (58; 25% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj:cop	color:blue
1	Lopulta	lopulta	ADV	Adv	_	2	advmod	_	_
2	olennaista	olennainen	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	_
3	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	enää	enää	PART	Pcle	_	2	advmod	_	_
5	se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	8	expl	_	Alt=8_expl|Missed-Rel=phrm
6	mitä	mikä	PRON	Pron,Rel,Par	Case=Par|PronType=Rel	8	obj	_	_
7	ex-professori	ex-professori	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	8	nsubj	_	_
8	haluaa	haluta	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj:cop	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj:cop	color:blue
1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	8	expl	_	Alt=8_expl|Missed-Rel=phrm
2	oli	olla	AUX	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
3	paska	paska	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	amod	_	_
4	homma	homma	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	_
6	että	että	SCONJ	Pcle,CS	_	8	mark	_	_
7	Jyrki	jyrki	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	8	nsubj	_	_
8	loppu	loppua	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	csubj:cop	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:cop	color:blue
1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	7	expl	_	Alt=7_expl|Missed-Rel=phrm
2	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	oma	oma	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	amod	_	_
4	vika	vika	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	ccomp	_	_
5	jos	jos	SCONJ	Pcle,CS	_	7	mark	_	_
6	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	yksinäinen	yksinäinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	csubj:cop	_	_
8	,	,	PUNCT	Pun	_	7	punct	_	_
9	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	sanoo	sanoa	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_

~~~


