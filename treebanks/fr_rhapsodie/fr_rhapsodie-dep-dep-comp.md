---
layout: base
title:  'Statistics of dep:comp in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-dep.html">dep</a></tt>.

31 nodes (0%) are attached to their parents as `dep:comp`.

16 instances of `dep:comp` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35483870967742.

The following 20 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (3; 10% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (3; 10% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (3; 10% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 10% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 6% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (2; 6% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (2; 6% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	là	là	ADV	_	_	7	advmod	_	SpaceAfter=No|WordAlignmentBegin=38265|WordAlignmentEnd=38350
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=38350|WordAlignmentEnd=38350
3	par	par	ADP	_	_	4	dep:comp	_	WordAlignmentBegin=38350|WordAlignmentEnd=38550
4	contre	contre	ADP	_	_	7	dep	_	SpaceAfter=No|WordAlignmentBegin=38550|WordAlignmentEnd=38710
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=38710|WordAlignmentEnd=38710
6	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=38710|WordAlignmentEnd=38810
7	doit	devoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=38810|WordAlignmentEnd=38910
8	être	être	AUX	_	VerbForm=Inf	10	cop	_	Subject=SubjRaising|WordAlignmentBegin=38910|WordAlignmentEnd=39040
9	plus	plus	ADV	_	_	10	advmod	_	Overlap=Rhap_D0009-27|WordAlignmentBegin=39040|WordAlignmentEnd=39266
10	onéreux	onéreux	ADJ	_	Gender=Masc|Number=Sing	7	xcomp	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyFemWithLiaison|Overlap=Rhap_D0009-27|SpaceAfter=No|WordAlignmentBegin=39266|WordAlignmentEnd=39771
11	.	.	PUNCT	_	_	7	punct	_	Overlap=Rhap_D0009-21bis|WordAlignmentBegin=39771|WordAlignmentEnd=39771

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 30 dep:comp	color:blue
1	donc	donc	ADV	_	_	42	advmod	_	SpaceAfter=No|WordAlignmentBegin=62958|WordAlignmentEnd=63361
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=63361|WordAlignmentEnd=63361
3	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	5	det	_	WordAlignmentBegin=63361|WordAlignmentEnd=63513
4	jeunes	jeune	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=63513|WordAlignmentEnd=63779
5	couples	couple	NOUN	_	Gender=Masc|Number=Plur	42	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|Overlap=Rhap_D0004-26|WordAlignmentBegin=63779|WordAlignmentEnd=64104
6	qui	qui	PRON	_	PronType=Rel	8	nsubj	_	Overlap=Rhap_D0004-26|WordAlignmentBegin=64104|WordAlignmentEnd=64284
7	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	8	obj	_	Exponence[Person]=Inherent|Overlap=Rhap_D0004-26|SpaceAfter=No|WordAlignmentBegin=64284|WordAlignmentEnd=64383
8	installent	installer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	Exponence[Number]=Absent|Overlap=Rhap_D0004-26|SpaceAfter=No|WordAlignmentBegin=64383|WordAlignmentEnd=64867
9	,	,	PUNCT	_	_	5	punct	_	Overlap=Rhap_D0004-18bis|WordAlignmentBegin=66269|WordAlignmentEnd=63779
10	dès	dès	ADP	_	_	14	mark	_	Overlap=Rhap_D0004-26|WordAlignmentBegin=64867|WordAlignmentEnd=65079
11	qu'	que	SCONJ	_	_	14	mark	_	Overlap=Rhap_D0004-26|SpaceAfter=No|WordAlignmentBegin=65079|WordAlignmentEnd=65132
12	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	expl:subj	_	Exponence[Person]=Inherent|Overlap=Rhap_D0004-26|WordAlignmentBegin=65132|WordAlignmentEnd=65156
13	y	y	PRON	_	Person=3|PronType=Prs	14	expl:comp	_	Exponence[Person]=Inherent|Overlap=Rhap_D0004-26|WordAlignmentBegin=65156|WordAlignmentEnd=65178
14	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	advcl	_	Overlap=Rhap_D0004-26|WordAlignmentBegin=65178|WordAlignmentEnd=65234
15	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	16	det	_	LiaisonAfter=Yes|Overlap=Rhap_D0004-26|WordAlignmentBegin=65234|WordAlignmentEnd=65334
16	enfant	enfant	NOUN	_	Gender=Masc|Number=Sing	14	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|Overlap=Rhap_D0004-26|SpaceAfter=No|WordAlignmentBegin=65334|WordAlignmentEnd=65784
17	,	,	PUNCT	_	_	22	punct	_	WordAlignmentBegin=66269|WordAlignmentEnd=66622
18	dès	dès	ADP	_	_	22	mark	_	WordAlignmentBegin=66622|WordAlignmentEnd=66757
19	qu'	que	SCONJ	_	_	22	mark	_	SpaceAfter=No|WordAlignmentBegin=66757|WordAlignmentEnd=66817
20	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	expl:subj	_	Exponence[Person]=Inherent|WordAlignmentBegin=66757|WordAlignmentEnd=66817
21	y	y	PRON	_	Person=3|PronType=Prs	22	expl:comp	_	Exponence[Person]=Inherent|WordAlignmentBegin=66817|WordAlignmentEnd=66897
22	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	conj:reform	_	WordAlignmentBegin=66897|WordAlignmentEnd=67007
23	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	24	det	_	LiaisonAfter=Yes|WordAlignmentBegin=67007|WordAlignmentEnd=67077
24	enfant	enfant	NOUN	_	Gender=Masc|Number=Sing	22	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=67077|WordAlignmentEnd=67498
25	ou	ou	CCONJ	_	_	26	cc	_	WordAlignmentBegin=67498|WordAlignmentEnd=67577
26	deux	deux	NUM	_	ExtPos=PRON|Number=Plur	23	conj	_	Exponence[Number]=Inherent|SpaceAfter=No|WordAlignmentBegin=67577|WordAlignmentEnd=67825
27	,	,	PUNCT	_	_	26	punct	_	WordAlignmentBegin=67825|WordAlignmentEnd=67825
28	à	à	ADP	_	ExtPos=ADV	31	advmod	_	WordAlignmentBegin=67825|WordAlignmentEnd=68007
29	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	moins	moins	ADV	_	_	28	dep:comp	_	WordAlignmentBegin=68007|WordAlignmentEnd=68297
31	deux	deux	NUM	_	ExtPos=PRON|Number=Plur	26	conj:reform	_	Exponence[Number]=Inherent|SpaceAfter=No|WordAlignmentBegin=68297|WordAlignmentEnd=68532
32	,	,	PUNCT	_	_	14	punct	_	WordAlignmentBegin=68532|WordAlignmentEnd=68532
33	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=68532|WordAlignmentEnd=68724
34	d~	d~	X	_	_	39	reparandum	_	Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=68724|WordAlignmentEnd=68807
35	,	,	PUNCT	_	_	34	punct	_	WordAlignmentBegin=68807|WordAlignmentEnd=68807
36	quand	quand	SCONJ	_	_	39	mark	_	WordAlignmentBegin=68807|WordAlignmentEnd=68980
37	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	38	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=68980|WordAlignmentEnd=69077
38	deuxième	deuxième	ADJ	_	Gender=Masc|Number=Sing	39	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=69077|WordAlignmentEnd=69437
39	arrive	arriver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	advcl	_	Exponence[Number]=Absent|Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=69437|WordAlignmentEnd=69644
40	,	,	PUNCT	_	_	39	punct	_	WordAlignmentBegin=69644|WordAlignmentEnd=69644
41	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	42	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=69644|WordAlignmentEnd=69827
42	partent	partir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|WordAlignmentBegin=69827|WordAlignmentEnd=70246
43	.	.	PUNCT	_	_	42	punct	_	WordAlignmentBegin=70246|WordAlignmentEnd=70246

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 dep:comp	color:blue
1	et	et	CCONJ	_	_	8	cc	_	SpaceAfter=No|WordAlignmentBegin=35834|WordAlignmentEnd=36062
2	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=36062|WordAlignmentEnd=36062
3	euh	euh	INTJ	_	_	8	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=36062|WordAlignmentEnd=36340
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=36340|WordAlignmentEnd=36340
5	donc	donc	ADV	_	_	8	discourse	_	SpaceAfter=No|WordAlignmentBegin=36340|WordAlignmentEnd=36640
6	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=36640|WordAlignmentEnd=36640
7	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=36640|WordAlignmentEnd=36800
8	vais	aller	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	WordAlignmentBegin=36800|WordAlignmentEnd=37354
9	jusqu'	jusque	ADP	_	_	11	dep:comp	_	SpaceAfter=No|WordAlignmentBegin=37354|WordAlignmentEnd=37946
10	à	à	ADP	_	_	11	case	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	reparandum	_	Scrap=Yes|WordAlignmentBegin=37946|WordAlignmentEnd=38202
12	,	,	PUNCT	_	_	11	punct	_	WordAlignmentBegin=38202|WordAlignmentEnd=38202
13	jusqu'	jusque	ADP	_	_	16	case	_	SpaceAfter=No|WordAlignmentBegin=38202|WordAlignmentEnd=38422
14	à	à	ADP	_	_	16	case	_	WordAlignmentBegin=38422|WordAlignmentEnd=38502
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=38502|WordAlignmentEnd=38582
16	place	place	NOUN	_	Gender=Fem|Number=Sing	8	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=38582|WordAlignmentEnd=38802
17	Victor	Victor	PROPN	_	_	16	appos	_	WordAlignmentBegin=38802|WordAlignmentEnd=39202
18	Hugo	Hugo	PROPN	_	_	17	flat:name	_	SpaceAfter=No|WordAlignmentBegin=39202|WordAlignmentEnd=39433
19	.	.	PUNCT	_	_	8	punct	_	WordAlignmentBegin=39433|WordAlignmentEnd=39433

~~~


