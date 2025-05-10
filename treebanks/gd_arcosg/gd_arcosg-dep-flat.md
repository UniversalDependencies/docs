---
layout: base
title:  'Statistics of flat in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="gd_arcosg-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="gd_arcosg-dep-flat-name.html">flat:name</a></tt>.

109 nodes (0%) are attached to their parents as `flat`.

109 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28440366972477.

The following 15 pairs of parts of speech are connected with `flat`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (55; 50% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (10; 9% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (9; 8% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-X.html">X</a></tt> (6; 6% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (4; 4% instances), <tt><a href="gd_arcosg-pos-DET.html">DET</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-DET.html">DET</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	turkey	turkey	NOUN	Xfe	_	0	root	_	_
2	burger	burger	NOUN	Xfe	_	1	flat	_	FlatType=Borrow

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat	color:blue
1	is	is	AUX	Wp-i	ExtPos=AUX|Tense=Pres	3	cop	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	fixed	_	_
3	àireamh	àireamh	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	fòn	fòn	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	dìomhair	dìomhair	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
6	a’	an	DET	Tdsmg	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	phoilis	poilis	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
8	an	an	ADP	Sp	_	9	case	_	_
9	Inbhir	Inbhir	PROPN	Nt	NounType=Top	7	nmod	_	_
10	Nis	Nis	PROPN	Nt	NounType=Top	9	flat:name	_	FlatType=Top
11	-	-	PUNCT	Fb	_	3	punct	_	_
12	720	720	NUM	Mn	NumForm=Digit|NumType=Card	3	nsubj	_	_
13	367	367	NUM	Mn	NumForm=Digit|NumType=Card	12	flat	_	FlatType=Num|SpaceAfter=No
14	.	.	PUNCT	Fe	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat	color:blue
1	Tha	bi	VERB	V-p	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	Dé	Dé	PROPN	Nn	NounType=Prs	1	nsubj	_	_
3	a-Nis	a-Nis	PROPN	Nn	NounType=Prs	2	flat:name	_	FlatType=Name|SpaceAfter=No
4	?	?	PROPN	Nn	NounType=Prs	2	flat:name	_	FlatType=Name
5	a’	ag	PART	Sa	_	6	case	_	_
6	frithealadh	fritheal	NOUN	Nv	VerbForm=Vnoun	1	xcomp:pred	_	_
7	dhan	do	ADP	Sp	_	9	case	_	_
8	an	an	DET	Tdsf	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	òigridh	òigridh	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	6	obl	_	_
10	cuideachd	cuideachd	ADV	Rg	AdvType=Man	6	advmod	_	_
11	air	air	ADP	Sp	_	12	case	_	_
12	BBC	BBC	NOUN	Y	Abbr=Yes	6	obl	_	SpaceAfter=No
13	2	2	NUM	Mn	NumForm=Digit|NumType=Card	12	flat	_	FlatType=Name
14	feasgar	feasgar	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	6	obl:unmarked	_	_
15	Diardaoin	diardaoin	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


