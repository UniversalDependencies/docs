---
layout: base
title:  'Statistics of csubj:cleft in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `csubj:cleft`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="gd_arcosg-dep-csubj-cop.html">csubj:cop</a></tt>, <tt><a href="gd_arcosg-dep-csubj-outer.html">csubj:outer</a></tt>.

473 nodes (1%) are attached to their parents as `csubj:cleft`.

473 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06131078224101.

The following 14 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (262; 55% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (90; 19% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (73; 15% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (14; 3% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj:cleft	color:blue
1	àidh	àidh	INTJ	I	_	4	discourse	_	_
2	‘s	is	AUX	Wp-i	ExtPos=AUX|Tense=Pres	4	cop	_	_
3	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	fixed	_	_
4	bug	bug	NOUN	Xfe	CleftType=Nom|Foreign=Yes	0	root	_	_
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	nsubj	_	_
6	tha	bi	VERB	V-p	Mood=Ind|Tense=Pres|VerbForm=Fin	4	csubj:cleft	_	_
7	a’	ag	PART	Sa	_	8	case	_	_
8	dol	rach	NOUN	Nv	VerbForm=Vnoun	6	xcomp:pred	_	_
9	timcheall	timcheall	ADV	Rs	AdvType=Loc	8	advmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cleft	color:blue
1	‘s	is	AUX	Wp-i	Tense=Pres	2	cop	_	_
2	e	e	PRON	Pp3sm	CleftType=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	0	root	_	_
3	a	a	PART	Q-r	PartType=Vb|PronType=Rel	4	nsubj	_	_
4	sgrìobh	sgrìobh	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	2	csubj:cleft	_	_
5	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	leabhar	leabhar	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	4	obj	_	_
7	sin	sin	DET	Dd	PronType=Art	6	det	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:cleft	color:blue
1	an	is	AUX	Wpdqa	ExtPos=AUX|Mood=Int|Polarity=Aff|Tense=Pres	3	cop	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	fixed	_	_
3	[Name]	[Name]	PROPN	Nn	CleftType=Nom|NounType=Prs	0	root	_	Anonymised=Yes
4	[Name]	[Name]	PROPN	Nn	NounType=Prs	3	flat:name	_	Anonymised=Yes|FlatType=Name
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	nsubj	_	_
6	th’	bi	VERB	V-p	Mood=Ind|Tense=Pres|VerbForm=Fin	3	csubj:cleft	_	_
7	aig	aig	ADP	Sp	_	8	case	_	_
8	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	xcomp:pred	_	_
9	?	?	PUNCT	Fg	_	3	punct	_	_

~~~


