---
layout: base
title:  'Statistics of det in UD_Serbian-SET'
udver: '2'
---

## Treebank Statistics: UD_Serbian-SET: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="sr_set-dep-det-numgov.html">det:numgov</a></tt>.

1749 nodes (2%) are attached to their parents as `det`.

1744 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3093196112064.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (1702; 97% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (10; 1% instances), <tt><a href="sr_set-pos-DET.html">DET</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="sr_set-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="sr_set-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="sr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="sr_set-pos-PART.html">PART</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (1; 0% instances).


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
2	sve	sav	DET	Agpnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	3	det	_	_
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	U	u	ADP	Sl	Case=Loc	2	case	_	_
2	Bulgartabaku	Bulgartabaka	PROPN	Npmsl	Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
3	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	odbili	odbiti	VERB	Vmp-pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	bilo	bilo	DET	Qo	_	6	det	_	_
6	kakav	kakav	DET	Pi-msan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Int,Rel	7	det	_	_
7	komentar	komentar	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


