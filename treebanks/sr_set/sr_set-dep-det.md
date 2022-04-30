---
layout: base
title:  'Statistics of det in UD_Serbian-SET'
udver: '2'
---

## Treebank Statistics: UD_Serbian-SET: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="sr_set-dep-det-numgov.html">det:numgov</a></tt>.

1730 nodes (2%) are attached to their parents as `det`.

1726 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30693641618497.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (1691; 98% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (10; 1% instances), <tt><a href="sr_set-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="sr_set-pos-DET.html">DET</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="sr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="sr_set-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="sr_set-pos-PART.html">PART</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Esat	Esat	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
2	Beriša	Beriša	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	1	flat	_	_
3	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	jedan	jedan	NUM	Mlcmsn	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	6	nummod	_	_
5	takav	takav	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	primer	primer	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Ali	ali	CCONJ	Cc	_	7	discourse	_	_
2	sve	sav	DET	Pi-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	3	det	_	_
3	ostalo	ostali	ADJ	Agpnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	7	nsubj	_	_
4	u	u	ADP	Sl	Case=Loc	5	case	_	_
5	romanima	roman	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	7	obl	_	_
6	savršeno	savršeno	ADV	Rgp	Degree=Pos	7	advmod	_	_
7	odgovara	odgovarati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	geopolitičkoj	geopolitički	ADJ	Agpfsdy	Case=Dat|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	poziciji	pozicija	NOUN	Ncfsd	Case=Dat|Gender=Fem|Number=Sing	7	obl	_	_
10	Norveške	Norveška	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
11	/	/	PUNCT	Z	_	12	punct	_	SpaceAfter=No
12	Zapada	zapad	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	10	conj	_	_
13	-	-	PUNCT	Z	_	15	punct	_	_
14	i	i	CCONJ	Cc	_	15	cc	_	_
15	slika	slika	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	3	appos	_	_
16	Rusije	Rusija	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	SpaceAfter=No
17	,	,	PUNCT	Z	_	19	punct	_	_
18	i	i	CCONJ	Cc	_	19	cc	_	_
19	slika	slika	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	15	conj	_	_
20	istočne	istočni	ADJ	Agpfsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	21	amod	_	_
21	Evrope	Evropa	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	19	nmod	_	_
22	i	i	CCONJ	Cc	_	23	cc	_	_
23	zločinci	zločinac	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	15	conj	_	_
24	koji	koji	DET	Pi-mpn	Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	25	nsubj	_	_
25	prete	pretiti	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	23	acl	_	_
26	sistemu	sistem	NOUN	Ncmsd	Case=Dat|Gender=Masc|Number=Sing	25	obl	_	SpaceAfter=No
27	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Osam	osam	NUM	Mlc	NumType=Card	8	nsubj	_	_
2	od	od	ADP	Sg	Case=Gen	4	case	_	_
3	ovih	ovaj	DET	Pd-fpg	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	4	det	_	_
4	četrdeset	četrdeset	NUM	Mlc	NumType=Card	1	nmod	_	_
5	bilo	biti	AUX	Vap-sn	Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	8	cop	_	_
6	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
7	na	na	ADP	Sl	Case=Loc	8	case	_	_
8	univerzitetima	univerzitet	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	0	root	_	_
9	Evrope	Evropa	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	i	i	CCONJ	Cc	_	11	cc	_	_
11	Amerike	Amerika	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	8	punct	_	_

~~~


